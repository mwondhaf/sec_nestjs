/*
  Warnings:

  - You are about to drop the column `commentId` on the `PeopleInvolved` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PeopleInvolved" DROP CONSTRAINT "PeopleInvolved_commentId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "peopleInvolvedId" TEXT;

-- AlterTable
ALTER TABLE "PeopleInvolved" DROP COLUMN "commentId";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_peopleInvolvedId_fkey" FOREIGN KEY ("peopleInvolvedId") REFERENCES "PeopleInvolved"("id") ON DELETE SET NULL ON UPDATE CASCADE;
