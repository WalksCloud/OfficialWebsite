import { useI18n } from 'vue-i18n'

export const useFallbackNotice = () => {
  const { t } = useI18n()

  const translateRelationMessage = (key, params = {}) => {
    const translationKey = `relationship.messages.${key}`
    const result = t(translationKey, params)
    return typeof result === 'string' ? result : ''
  }

  const translateLocaleLabel = (localeCode) => {
    if (!localeCode) return ''
    const translationKey = `locales.${localeCode}`
    const translated = t(translationKey)
    return typeof translated === 'string' && translated !== translationKey ? translated : localeCode
  }

  const formatLocalesList = (list = []) =>
    list
      .map((code) => translateLocaleLabel(code))
      .filter(Boolean)
      .join(', ')

  const buildFallbackNotice = (requestedLocale, fallbackLocaleCode, availableLocalesList = []) => {
    if (!fallbackLocaleCode) return ''
    const parts = []
    const noRelation = translateRelationMessage('noRelation')
    if (noRelation) parts.push(noRelation)
    const localesList = formatLocalesList(availableLocalesList)
    if (localesList) {
      const availableNotice = translateRelationMessage('availableLocalesNotice', { locales: localesList })
      if (availableNotice) parts.push(availableNotice)
    }
    const fallbackLocaleName = translateLocaleLabel(fallbackLocaleCode)
    const fallbackNotice = translateRelationMessage('fallbackNotice', { locale: fallbackLocaleName })
    if (fallbackNotice) parts.push(fallbackNotice)
    return parts.join(' ')
  }

  return {
    buildFallbackNotice,
    translateRelationMessage,
    translateLocaleLabel,
  }
}
