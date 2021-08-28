SELECT 
cn.ContactName AS 'Nome do contato',
s.ShipperName AS 'Empresa que fez o envio',
o.OrderDate AS 'Data do pedido'
FROM
w3schools.customers AS cn
INNER JOIN
w3schools.orders AS o ON o.CustomerID = cn.CustomerID
INNER JOIN
w3schools.shippers AS s ON s.ShipperID = o.ShipperID
WHERE s.ShipperName IN('Speedy Express','United Package')
ORDER BY `Nome do contato` ASC, `Empresa que fez o envio` ASC;
