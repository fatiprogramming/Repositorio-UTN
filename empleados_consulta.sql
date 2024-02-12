SELECT nombre, apellido, trabajo FROM empleados;
SELECT nombre, edad FROM empleados;
SELECT nombre, edad FROM empleados WHERE trabajo = 'Programador';
SELECT nombre, edad FROM empleados WHERE edad > 30;
SELECT apellido, mail FROM empleados WHERE nombre = 'Juan';
SELECT nombre FROM empleados WHERE trabajo = 'Programador'  OR trabajo ='Desarrollador Web';
SELECT id_emp, nombre, apellido, trabajo FROM empleados WHERE id_emp BETWEEN 15 AND 20;
SELECT salario FROM empleados WHERE trabajo = 'Programador' AND salario < 80000;
SELECT nombre, apellido FROM empleados WHERE trabajo = 'Programador' AND salario BETWEEN 75000 AND 90000;
SELECT apellido FROM empleados WHERE RIGHT(apellido, 1) = 'S';
SELECT nombre FROM empleados WHERE LEFT(nombre, 1) = 'l';
INSERT INTO empleados (id_emp, nombre, apellido, trabajo, edad, salario, mail) 
VALUES (22, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com');
DELETE FROM empleados WHERE nombre = 'Hernan' AND apellido = 'Rosso';
UPDATE empleados SET salario = 90000 WHERE nombre = 'Daniel' AND apellido = 'Gutierrez';