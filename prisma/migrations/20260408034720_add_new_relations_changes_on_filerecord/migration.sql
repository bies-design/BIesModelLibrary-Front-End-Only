-- DropForeignKey
ALTER TABLE "FileRecord" DROP CONSTRAINT "FileRecord_postId_fkey";

-- DropForeignKey
ALTER TABLE "FileRecord" DROP CONSTRAINT "FileRecord_uploaderId_fkey";

-- AddForeignKey
ALTER TABLE "FileRecord" ADD CONSTRAINT "FileRecord_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileRecord" ADD CONSTRAINT "FileRecord_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
