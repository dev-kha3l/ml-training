/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publication_date` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Loan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_book_id_fkey";

-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_book_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_user_id_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "createdAt",
DROP COLUMN "genre",
DROP COLUMN "publication_date",
DROP COLUMN "publisher",
DROP COLUMN "updatedAt",
ADD COLUMN     "borrowedById" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "createdAt",
DROP COLUMN "password",
DROP COLUMN "phone",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "Loan";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Reservation";

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_borrowedById_fkey" FOREIGN KEY ("borrowedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
