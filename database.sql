CREATE DATABASE perntodo;

CREATE TABLE todo (
  todo_id BIGSERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  done BOOLEAN DEFAULT false
);
