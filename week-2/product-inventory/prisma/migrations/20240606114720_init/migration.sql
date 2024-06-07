-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_category" TEXT NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
