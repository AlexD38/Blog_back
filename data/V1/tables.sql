-- Active: 1690305674274@@localhost@5432@blog

CREATE TABLE
    IF NOT EXISTS "categories" (
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "name" VARCHAR(55) NOT NULL UNIQUE
    );

ALTER TABLE "posts"
ADD
    COLUMN "category_id" INTEGER REFERENCES "categories"("id") ON DELETE CASCADE;