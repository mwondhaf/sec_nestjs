/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_peopleInvolvedId_fkey";

-- AlterTable
ALTER TABLE "PeopleInvolved" ADD COLUMN     "remarks" TEXT;

-- DropTable
DROP TABLE "Comment";
