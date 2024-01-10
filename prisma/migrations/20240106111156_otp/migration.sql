/*
  Warnings:

  - You are about to drop the column `otp` on the `otp` table. All the data in the column will be lost.
  - Added the required column `token` to the `otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "otp" DROP COLUMN "otp",
ADD COLUMN     "token" TEXT NOT NULL;
