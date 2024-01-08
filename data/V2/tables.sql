-- Active: 1703615984940@@localhost@5432@blog@public
ALTER TABLE "posts"
ADD
    COLUMN "created_at" TIMESTAMP DEFAULT NOW(),
ADD
    COLUMN "updated_at" TIMESTAMP DEFAULT NOW();