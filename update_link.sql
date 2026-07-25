-- Upsert: create the link if it doesn't exist, or update its URL if it does
INSERT INTO links (slug, original_url, title, created_at)
VALUES ('1306576f-32d6-45c7-8f09-48eb4d07cfa2', 'https://goflie-me.store', '', strftime('%s','now') * 1000)
ON CONFLICT(slug) DO UPDATE SET
  original_url = excluded.original_url,
  title = excluded.title;
