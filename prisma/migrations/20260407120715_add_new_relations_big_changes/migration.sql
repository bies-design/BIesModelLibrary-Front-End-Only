/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `ProjectNode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostToProjectNode` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `creatorId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `teamId` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "FileCategory" AS ENUM ('MODEL_3D', 'DRAWING', 'DOCUMENT', 'IMAGE', 'OTHER');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('ACTIVE', 'ON_HOLD', 'COMPLETED', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_teamId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectNode" DROP CONSTRAINT "ProjectNode_parentId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectNode" DROP CONSTRAINT "ProjectNode_projectId_fkey";

-- DropForeignKey
ALTER TABLE "_PostToProjectNode" DROP CONSTRAINT "_PostToProjectNode_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToProjectNode" DROP CONSTRAINT "_PostToProjectNode_B_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "ownerId",
ADD COLUMN     "client" TEXT,
ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT 'ACTIVE',
ALTER COLUMN "teamId" SET NOT NULL;

-- DropTable
DROP TABLE "ProjectNode";

-- DropTable
DROP TABLE "_PostToProjectNode";

-- CreateTable
CREATE TABLE "FileRecord" (
    "id" TEXT NOT NULL,
    "shortId" TEXT,
    "name" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "category" "FileCategory" NOT NULL DEFAULT 'OTHER',
    "extension" TEXT,
    "size" TEXT NOT NULL DEFAULT '',
    "status" "ProcessStatus" NOT NULL DEFAULT 'completed',
    "errorMessage" TEXT,
    "uploaderId" TEXT NOT NULL,
    "postId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FileRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phase" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectAsset" (
    "id" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "projectId" TEXT NOT NULL,
    "phaseId" TEXT,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectAsset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FileRecord_shortId_key" ON "FileRecord"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "FileRecord_fileId_key" ON "FileRecord"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectAsset_projectId_phaseId_postId_key" ON "ProjectAsset"("projectId", "phaseId", "postId");

-- AddForeignKey
ALTER TABLE "FileRecord" ADD CONSTRAINT "FileRecord_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileRecord" ADD CONSTRAINT "FileRecord_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
