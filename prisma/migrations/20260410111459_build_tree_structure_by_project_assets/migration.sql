/*
  Warnings:

  - Added the required column `updatedAt` to the `ProjectAsset` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('FOLDER', 'POST', 'LINK');

-- DropIndex
DROP INDEX "ProjectAsset_projectId_phaseId_postId_key";

-- AlterTable
ALTER TABLE "ProjectAsset" ADD COLUMN     "name" TEXT,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "type" "AssetType" NOT NULL DEFAULT 'POST',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT,
ALTER COLUMN "postId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "ProjectAsset_parentId_idx" ON "ProjectAsset"("parentId");

-- CreateIndex
CREATE INDEX "ProjectAsset_projectId_idx" ON "ProjectAsset"("projectId");

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ProjectAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
