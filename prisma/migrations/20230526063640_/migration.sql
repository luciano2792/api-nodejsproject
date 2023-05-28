/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsTold]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsTold_key" ON "Product"("id", "belongsTold");
