import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { loadContentPages } from './contentPages.js'

const root = process.cwd()

const normalizeSlug = (value = '') => {
  const raw = typeof value === 'string' ? value : String(value || '')
  const cleaned = raw.replace(/^\/+/, '').replace(/\/+$/, '')
  return cleaned ? `/${cleaned}` : '/'
}

const gitStatusCache = new Map()
const gitTimestampCache = new Map()
const fsTimestampCache = new Map()

const resolveAbsolutePath = (filePath = '') => {
  if (!filePath) return null
  const absolute = path.isAbsolute(filePath) ? filePath : path.resolve(root, filePath)
  return absolute
}

const isFileDirty = (filePath) => {
  const absolute = resolveAbsolutePath(filePath)
  if (!absolute) return false
  if (gitStatusCache.has(absolute)) return gitStatusCache.get(absolute)
  try {
    const result = execSync(`git status --short -- "${absolute}"`, { cwd: root }).toString().trim()
    const dirty = Boolean(result)
    gitStatusCache.set(absolute, dirty)
    return dirty
  } catch (err) {
    gitStatusCache.set(absolute, false)
    return false
  }
}

const getGitTimestamp = (filePath) => {
  const absolute = resolveAbsolutePath(filePath)
  if (!absolute) return null
  if (gitTimestampCache.has(absolute)) return gitTimestampCache.get(absolute)
  try {
    const output = execSync(`git log -1 --format=%cI -- "${absolute}"`, { cwd: root }).toString().trim()
    const date = output ? new Date(output) : null
    const valid = date && !Number.isNaN(date.valueOf()) ? date : null
    gitTimestampCache.set(absolute, valid)
    return valid
  } catch (err) {
    gitTimestampCache.set(absolute, null)
    return null
  }
}

const getFileSystemTimestamp = (filePath) => {
  const absolute = resolveAbsolutePath(filePath)
  if (!absolute) return null
  if (fsTimestampCache.has(absolute)) return fsTimestampCache.get(absolute)
  try {
    const date = new Date(fs.statSync(absolute).mtime)
    const valid = !Number.isNaN(date.valueOf()) ? date : null
    fsTimestampCache.set(absolute, valid)
    return valid
  } catch (err) {
    fsTimestampCache.set(absolute, null)
    return null
  }
}

const resolveTimestamp = (filePath) => {
  if (!filePath) return null
  if (isFileDirty(filePath)) {
    return getFileSystemTimestamp(filePath)
  }
  return getGitTimestamp(filePath) || getFileSystemTimestamp(filePath)
}

export const collectContentLastmod = ({ contentPages } = {}) => {
  const pages = Array.isArray(contentPages) && contentPages.length ? contentPages : loadContentPages()
  const slugFilesMap = new Map()
  pages.forEach((page) => {
    Object.entries(page.slugs || {}).forEach(([locale, slug]) => {
      if (!slug) return
      const normalizedSlug = normalizeSlug(slug)
      const filePath = page.contentFiles?.[locale]
      if (!filePath) return
      if (!slugFilesMap.has(normalizedSlug)) slugFilesMap.set(normalizedSlug, new Set())
      slugFilesMap.get(normalizedSlug).add(filePath)
    })
  })

  const result = {}
  slugFilesMap.forEach((filePaths, slug) => {
    let latest = null
    filePaths.forEach((filePath) => {
      const ts = resolveTimestamp(filePath)
      if (ts && (!latest || ts > latest)) {
        latest = ts
      }
    })
    if (latest) result[slug] = latest.toISOString()
  })

  return result
}

export const normalizeSlugPath = normalizeSlug
