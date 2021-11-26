-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_project_comment_user_id_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "project_comment_user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_project_comment_user_id_fkey" FOREIGN KEY ("project_comment_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
