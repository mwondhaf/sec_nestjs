-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN', 'MANAGER', 'SUPERVISOR');

-- CreateEnum
CREATE TYPE "EmployeeType" AS ENUM ('INHOUSE', 'CONTRACTOR', 'OTHER');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('Low', 'Medium', 'High');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "role" "Role" NOT NULL DEFAULT 'BASIC',
    "employeeType" "EmployeeType" NOT NULL DEFAULT 'OTHER',
    "idNumber" TEXT NOT NULL DEFAULT '0',
    "companyId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "entityId" TEXT,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workScope" TEXT,
    "trade_license_number" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "makani" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "referenceNumber" TEXT NOT NULL,
    "severity" "Severity" NOT NULL DEFAULT 'Low',
    "description" TEXT NOT NULL,
    "investigation" TEXT NOT NULL,
    "reporterName" TEXT NOT NULL,
    "incidentTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "incidentCategoryId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("referenceNumber")
);

-- CreateTable
CREATE TABLE "IncidentType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncidentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "incidentTypeId" TEXT NOT NULL,

    CONSTRAINT "IncidentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userEmail_entityId_key" ON "user_profiles"("userEmail", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "company_trade_license_number_key" ON "company"("trade_license_number");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_name_key" ON "Entity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_code_key" ON "Entity"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_makani_key" ON "Entity"("makani");

-- CreateIndex
CREATE UNIQUE INDEX "Incident_referenceNumber_key" ON "Incident"("referenceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "IncidentType_name_key" ON "IncidentType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "IncidentCategory_name_key" ON "IncidentCategory"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_incidentCategoryId_fkey" FOREIGN KEY ("incidentCategoryId") REFERENCES "IncidentCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncidentCategory" ADD CONSTRAINT "IncidentCategory_incidentTypeId_fkey" FOREIGN KEY ("incidentTypeId") REFERENCES "IncidentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
