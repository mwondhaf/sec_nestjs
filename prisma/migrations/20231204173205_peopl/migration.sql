/*
  Warnings:

  - Added the required column `incidentReferenceNumber` to the `PeopleInvolved` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PeopleInvolved" ADD COLUMN     "incidentReferenceNumber" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PeopleInvolved" ADD CONSTRAINT "PeopleInvolved_incidentReferenceNumber_fkey" FOREIGN KEY ("incidentReferenceNumber") REFERENCES "Incident"("referenceNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
