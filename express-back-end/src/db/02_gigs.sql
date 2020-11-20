DROP TABLE IF EXISTS gigs CASCADE;
CREATE TABLE gigs (
  id SERIAL PRIMARY KEY NOT NULL,
  contractor_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,

  title TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  description TEXT NOT NULL,
  photo_one TEXT NOT NULL,
  photo_two TEXT NOT NULL,
  photo_three TEXT NOT NULL
);