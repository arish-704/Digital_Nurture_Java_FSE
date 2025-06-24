
CREATE TABLE SavingsAccount (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER
);

CREATE TABLE Employee (
    EmpID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

CREATE TABLE BankAccount (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER
);

INSERT INTO SavingsAccount VALUES (1, 101, 10000);
INSERT INTO SavingsAccount VALUES (2, 102, 15000);
INSERT INTO SavingsAccount VALUES (3, 103, 8000);

INSERT INTO Employee VALUES (1, 'Alice', 'HR', 50000);
INSERT INTO Employee VALUES (2, 'Bob', 'Finance', 60000);
INSERT INTO Employee VALUES (3, 'Charlie', 'HR', 55000);

INSERT INTO BankAccount VALUES (10, 201, 20000);
INSERT INTO BankAccount VALUES (20, 201, 5000);
INSERT INTO BankAccount VALUES (30, 202, 8000);


--scenario_!
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE SavingsAccount
    SET Balance = Balance + (Balance * 0.01);

    DBMS_OUTPUT.PUT_LINE('Interest applied to all savings accounts.');
    COMMIT;
END;
BEGIN
    ProcessMonthlyInterest;
END;

--scenario_2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    deptName IN VARCHAR2,
    bonusPercent IN NUMBER
) AS
BEGIN
    UPDATE Employee
    SET Salary = Salary + (Salary * (bonusPercent / 100))
    WHERE Department = deptName;

    DBMS_OUTPUT.PUT_LINE(' Bonus applied to ' || deptName || ' department.');
    COMMIT;
END;
BEGIN
    UpdateEmployeeBonus('HR', 10);  
END;

--scenario_3
CREATE OR REPLACE PROCEDURE TransferFunds(
    fromAcc IN NUMBER,
    toAcc IN NUMBER,
    amount IN NUMBER
) AS
    insufficient_balance EXCEPTION;
    current_balance NUMBER;
BEGIN
    -- Get current balance of source account
    SELECT Balance INTO current_balance FROM BankAccount WHERE AccountID = fromAcc;

    IF current_balance < amount THEN
        RAISE insufficient_balance;
    END IF;

    -- Deduct from source
    UPDATE BankAccount
    SET Balance = Balance - amount
    WHERE AccountID = fromAcc;

    -- Add to destination
    UPDATE BankAccount
    SET Balance = Balance + amount
    WHERE AccountID = toAcc;

    DBMS_OUTPUT.PUT_LINE('Rs' || amount || ' transferred from Account ' || fromAcc || ' to Account ' || toAcc);
    COMMIT;

EXCEPTION
    WHEN insufficient_balance THEN
        DBMS_OUTPUT.PUT_LINE(' Transfer failed: Insufficient balance in source account.');
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE(' One or both accounts do not exist.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE(' Error: ' || SQLERRM);
END;
BEGIN
    TransferFunds(10, 20, 5000);
END;








