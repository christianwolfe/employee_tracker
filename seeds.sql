use emplyee_db

INSERT INTO department (name)
VALUES ("Accounting", "Legal", "Sales", "Operations");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Shelly", "Samuels", 1, 1),
("Terry", "Smith", 2, null),
("Spike", "Roberts", 3, 2),
("Maria", "Garcia", 4, null),
("Alex", "Brown",5, null)

INSERT INTO roles(title, salary, department_id)
("Founder & CEO", 300000, 4)
("Director of Accounting", 95000, 1),
("Head Counsel", 200000, 2),
("Director of Sales", 175000, 3)
("Executive Assistant", 75000, 4)