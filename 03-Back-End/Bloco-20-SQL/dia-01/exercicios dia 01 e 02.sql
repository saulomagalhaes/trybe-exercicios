-- SELECT "This is SQL Exercise, Pratice and Solution"
-- SELECT 5 AS N1, 6 AS N2, 7 AS N3
-- SELECT 10 + 15
-- SELECT 10 * 10
-- SELECT * FROM Scientists.Scientists
-- SELECT Name AS "Nome do Projeto", Hours AS "Tempo de Tabalho" FROM Scientists.Projects
-- SELECT Name FROM Scientists.Scientists ORDER BY Name
-- SELECT Name FROM Scientists.Projects ORDER BY Name DESC
-- SELECT CONCAT("O projeto ", Name, " precisou de ", Hours, " para ser concluído") AS "Texto" FROM Scientists.Projects
-- SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3
-- SELECT DISTINCT Project FROM Scientists.AssignedTo
-- SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1
-- SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1
-- SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5
-- SELECT CONCAT("Existem ",CAST(COUNT(Name)AS char), " cientistas na tabela Scientists") FROM Scientists.Scientists