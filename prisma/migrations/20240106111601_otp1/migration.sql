/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `otp` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "otp_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "otp_token_key" ON "otp"("token");
