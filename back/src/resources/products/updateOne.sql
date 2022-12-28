UPDATE products
SET price = @price,
  title = @title
WHERE uuid = @uuid;