public class Financial_Forecaster {
    
    
    public static double calculateFutureValue(
        double presentValue, 
        double growthRate, 
        int years
    ) {
        if (years == 0) {
            return presentValue;  
        }
        return (1 + growthRate) * calculateFutureValue(presentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double pv = 1000.0;    
        double rate = 0.05;    
        int years = 10;        
        
        double fv = calculateFutureValue(pv, rate, years);
        System.out.printf("Future value after %d years: Rs%.2f", years, fv);
    }
}