package com.example;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testFetchData() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mocked Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mocked Data", result);
    }
}
