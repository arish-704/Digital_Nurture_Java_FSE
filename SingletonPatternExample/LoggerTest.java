public class LoggerTest{


public static void main(String[] args) {

        // Getting instances from getInstance()
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Using the log method
        logger1.log("Starting the system...");
        logger2.log("Another component has loaded.");

        // Checking if both instances are the same
        if (logger1 == logger2) {
            System.out.println(" Singleton pattern is working .");
        } 
        else {
            System.out.println("Singleton pattern not working");
        }
    } 
}
    

