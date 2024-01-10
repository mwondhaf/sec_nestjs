/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `compilerEmail` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `editorEmail` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Incident" DROP CONSTRAINT "Incident_userEmail_fkey";

-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "userEmail",
ADD COLUMN     "compilerEmail" TEXT NOT NULL,
ADD COLUMN     "editorEmail" TEXT NOT NULL,
ADD COLUMN     "incidentClosedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_compilerEmail_fkey" FOREIGN KEY ("compilerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_editorEmail_fkey" FOREIGN KEY ("editorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
