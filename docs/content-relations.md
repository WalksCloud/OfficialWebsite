# Content Relations

`config/content-relations.yaml` is the source of truth for relationships between cases, services, FAQ entries, and technical articles. Keep relationship data there instead of hardcoding related links inside individual components.

## Data Shape

Each top-level key is an absolute content slug, such as `/cases/example-case` or `/tech/example-topic`.

Each entry can include these relationship groups:

- `services`: service slugs connected to the source content.
- `faq`: FAQ slugs that answer related questions.
- `tech`: technical article slugs that explain related implementation details.

Case entries should use the case slug as the top-level key. Tool-focused or educational technical articles should use their own tech slug directly, rather than being attached to an unrelated case just to make the relationship appear.

## How Relationships Are Used

The relationship list is used by `RelationShipArticleList` and related content surfaces. A relationship can be displayed on the source article, and it can also be used inversely so service or case pages can surface related cases, FAQ entries, and technical articles.

Because the file drives multiple directions of navigation, keep every slug accurate and absolute. A stale slug can break more than one page.

## Maintenance Rules

Whenever a content file under `src/content` adds, removes, or changes a `slug`, check `config/content-relations.yaml` in the same edit round.

Use these rules when editing relationships:

- Add a new top-level entry when a new case, service, FAQ, or tech page needs relationships.
- Replace old slugs immediately when a content slug changes.
- Remove relationships that point to deleted content.
- Keep existing relationships when the request says a page is also related to another page; treat that as additive unless the request explicitly says to replace the old relationship.
- Do not add FAQ paths inside markdown body content. FAQ content is inline supporting content, not a normal related-reading destination.

After changing relationships, search for the affected slugs and verify the related content still links in the expected direction.
