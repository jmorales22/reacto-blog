CREATE TABLE blog (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR,
  title VARCHAR,
  content VARCHAR
);

INSERT INTO blog (full_name, title, content)
VALUES ('Jennifer Morales', 'Corona Sucks', 'So far, it sucks being home all the time. I just watch tv all day.'),
('Carlos Morales', 'Daily Corona Blog', 'Today I was very active. I worked out, read a book, learned how to make bread, and watched a movie.'),
('Jennifer Morales', 'Yet Another Day', 'Just another day of the quarantine. Trying to be productive and study code. I think I will create a new app that tracks the coronavirus.');

