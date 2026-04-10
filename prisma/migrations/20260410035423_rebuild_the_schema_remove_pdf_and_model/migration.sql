/*
  Warnings:

  - You are about to drop the `Model` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pdf` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ModelToPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PdfToPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_uploaderId_fkey";

-- DropForeignKey
ALTER TABLE "Pdf" DROP CONSTRAINT "Pdf_uploaderId_fkey";

-- DropForeignKey
ALTER TABLE "_ModelToPost" DROP CONSTRAINT "_ModelToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_ModelToPost" DROP CONSTRAINT "_ModelToPost_B_fkey";

-- DropForeignKey
ALTER TABLE "_PdfToPost" DROP CONSTRAINT "_PdfToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_PdfToPost" DROP CONSTRAINT "_PdfToPost_B_fkey";

-- DropTable
DROP TABLE "Model";

-- DropTable
DROP TABLE "Pdf";

-- DropTable
DROP TABLE "_ModelToPost";

-- DropTable
DROP TABLE "_PdfToPost";
