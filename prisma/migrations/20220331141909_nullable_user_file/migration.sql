-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_user_id_fkey";

-- AlterTable
ALTER TABLE "File" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
