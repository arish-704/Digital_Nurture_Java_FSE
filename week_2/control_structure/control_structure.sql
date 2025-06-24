
CREATE TABLE Customer (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);


CREATE TABLE Loan (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);


INSERT INTO Customer VALUES (1, 'Arjun Mehta', 65, 15000, 'FALSE');
INSERT INTO Customer VALUES (2, 'Sneha Rao', 45, 8000, 'FALSE');
INSERT INTO Customer VALUES (3, 'Ravi Shah', 72, 12000, 'FALSE');
INSERT INTO Customer VALUES (4, 'Neha Kapoor', 32, 10500, 'FALSE');
INSERT INTO Customer VALUES (5, 'Vikram Singh', 58, 9800, 'FALSE');
INSERT INTO Customer VALUES (6, 'Aarti Joshi', 66, 4000, 'FALSE');
INSERT INTO Customer VALUES (7, 'Karan Patel', 40, 12500, 'FALSE');
INSERT INTO Customer VALUES (8, 'Pooja Reddy', 70, 16000, 'FALSE');
INSERT INTO Customer VALUES (9, 'Nikhil Bansal', 25, 2500, 'FALSE');
INSERT INTO Customer VALUES (10, 'Ananya Ghosh', 60, 8900, 'FALSE');


INSERT INTO Loan VALUES (101, 1, 9.5, SYSDATE + 10);
INSERT INTO Loan VALUES (102, 2, 10.0, SYSDATE + 40);
INSERT INTO Loan VALUES (103, 3, 11.0, SYSDATE + 25);
INSERT INTO Loan VALUES (104, 4, 8.5, SYSDATE + 5);
INSERT INTO Loan VALUES (105, 5, 10.2, SYSDATE + 90);
INSERT INTO Loan VALUES (106, 6, 9.8, SYSDATE + 15);
INSERT INTO Loan VALUES (107, 7, 11.5, SYSDATE + 20);
INSERT INTO Loan VALUES (108, 8, 7.9, SYSDATE + 29);
INSERT INTO Loan VALUES (109, 9, 12.3, SYSDATE + 70);
INSERT INTO Loan VALUES (110, 10, 9.9, SYSDATE + 2);


COMMIT;
select * from CUSTOMER


-- scenario_1
BEGIN
    UPDATE Loan
    SET InterestRate = InterestRate - 1
    WHERE CustomerID IN (
        SELECT CustomerID FROM Customer WHERE Age > 60
    );

    DBMS_OUTPUT.PUT_LINE(' Discount applied to customers above 60.');
    COMMIT;
END;
select * from Loan

-- scenario_2
BEGIN
    UPDATE Customer
    SET IsVIP = 'TRUE'
    WHERE Balance > 10000;

    DBMS_OUTPUT.PUT_LINE(' VIP status updated for high balance customers.');
    COMMIT;
END;


--scenario_3
BEGIN
    FOR rec IN (
        SELECT CustomerID, DueDate
        FROM Loan
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(' Reminder: Loan for Customer ID ' || rec.CustomerID || ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/




