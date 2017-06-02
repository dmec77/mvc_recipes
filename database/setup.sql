psql -f mvc_app_recipes;

DROP TABLE IF EXISTS recipes;

\c mvc_app_recipes;

CREATE TABLE
recipes
  (id SERIAL PRIMARY KEY,
  recipe_name VARCHAR(64) NOT NULL,
  category TEXT,
  main_ingredient VARCHAR(128) NOT NULL,
  keyword TEXT,
  dish_img VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE
users
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
username VARCHAR(255),
email VARCHAR(255));
