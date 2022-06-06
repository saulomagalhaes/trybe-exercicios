-- Prático do dia 20.3 SQL

-- 1 SELECT * FROM Pecas WHERE name LIKE "GR%";
-- 2 SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor
-- 3 SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE "%N%"
-- 4 SELECT * FROM Fornecedores WHERE name LIKE '%LTDA'
-- 5 SELECT COUNT(name) FROM Fornecedores WHERE name LIKE '%f%'
-- 6 SELECT * FROM Fornecimentos WHERE (preco > 15 AND preco < 40) ORDER BY preco ASC
-- 7 SELECT COUNT(*) FROM Vendas WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30'
