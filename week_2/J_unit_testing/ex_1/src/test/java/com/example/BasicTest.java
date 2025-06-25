package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BasicTest {

    @Test
    public void testSum() {
        int a = 2;
        int b = 3;
        int result = a + b;
        assertEquals(5, result);
    }
}
