-- Prático 21.2

-- 1 SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id;
-- 2 SELECT m.title, b.international_sales FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id AND b.international_sales > b.domestic_sales;-- 2 SELECT m.title, b.international_sales FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id AND b.international_sales > b.domestic_sales;
-- 3 SELECT m.title, b.rating FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id ORDER BY b.rating DESC
-- 4 SELECT m.id, m.title, t.name, t.location FROM Pixar.Movies AS m LEFT JOIN Pixar.Theater AS t ON m.id = t.id ORDER BY t.name
-- 6 SELECT m.title, b.rating FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id AND(m.theater_id IS NOT NULL AND b.rating > 8)