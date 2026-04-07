-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,
    "teamId" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectNode" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "ProjectNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToProjectNode" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PostToProjectNode_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PostToProjectNode_B_index" ON "_PostToProjectNode"("B");

-- AddForeignKey
ALTER TABLE "ProjectNode" ADD CONSTRAINT "ProjectNode_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectNode" ADD CONSTRAINT "ProjectNode_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ProjectNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToProjectNode" ADD CONSTRAINT "_PostToProjectNode_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToProjectNode" ADD CONSTRAINT "_PostToProjectNode_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjectNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;
