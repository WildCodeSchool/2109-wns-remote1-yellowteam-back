-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_project_id_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "project_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
