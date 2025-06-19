public class Logger {

    
    private static final Logger instance = new Logger(); // eager initialization for better thread safety

    
    private Logger() { // private constructor preventing any new logger 
        System.out.println("Logger initialized.");
    }

    
    public static Logger getInstance() { // returning the instaance whenever required
        return instance;
    }

    
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
