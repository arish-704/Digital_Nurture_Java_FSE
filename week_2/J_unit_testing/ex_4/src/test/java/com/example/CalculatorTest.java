package com.example;

import org.junit.*;
import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculator;
    private int testCounter;

    
    @Before
    public void setUp() {
        calculator = new Calculator();
        testCounter++;
        System.out.println("Setting up test #" + testCounter);
    }

    
    @After
    public void tearDown() {
        System.out.println("Cleaning up after test #" + testCounter);
    }

    @Test
    public void testAddition() {
        
        int a = 5;
        int b = 3;
        int expected = 8;

        
        int result = calculator.add(a, b);

        
        assertEquals(expected, result);
    }

    @Test
    public void testDivision() {
        
        int a = 10;
        int b = 2;
        int expected = 5;

        
        int result = calculator.divide(a, b);

        
        assertEquals(expected, result);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivisionByZero() {
        
        int a = 5;
        int b = 0;

        
        calculator.divide(a, b);
    }
}