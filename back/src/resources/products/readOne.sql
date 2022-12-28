SELECT price,
  title,
  uuid
FROM products
WHERE uuid = @uuid;