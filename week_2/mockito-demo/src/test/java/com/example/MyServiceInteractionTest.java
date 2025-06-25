package com.example;

import static org.mockito.Mockito.*;

import org.junit.Test;


public class MyServiceInteractionTest {

    @Test
    public void testVerifyInteraction() {
        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Inject into service
        MyService service = new MyService(mockApi);

        // Call the method
        service.fetchData();

        // Verify that getData() was called
        verify(mockApi).getData();
    }
}
