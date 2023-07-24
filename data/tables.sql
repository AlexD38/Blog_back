BEGIN;

DROP TABLE
    IF EXISTS "users",
    "posts",
    "tags",
    "posts_has_tags" CASCADE;

CREATE TABLE
    IF NOT EXISTS "users" (
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "mail" VARCHAR(55) NOT NULL UNIQUE,
        "password" TEXT NOT NULL UNIQUE,
        "is_admin" BOOLEAN NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "posts" (
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "title" VARCHAR(55) NOT NULL UNIQUE,
        "slug" TEXT NOT NULL,
        "body" TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "tags" (
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "name" VARCHAR(25) NOT NULL UNIQUE
    );

CREATE TABLE
    IF NOT EXISTS "posts_has_tags" (
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "posts_id" INTEGER REFERENCES "posts"("id") ON DELETE CASCADE,
        "tags_id" INTEGER REFERENCES "tags"("id") ON DELETE CASCADE
    );

COMMIT;