-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeopleInvolved" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "identity_number" TEXT,
    "nationality" TEXT,
    "departmentId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "PeopleInvolved_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PeopleInvolved" ADD CONSTRAINT "PeopleInvolved_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeopleInvolved" ADD CONSTRAINT "PeopleInvolved_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
