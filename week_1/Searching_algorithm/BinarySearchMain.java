import java.util.Arrays;

public class BinarySearchMain {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "PS5", "Electronics"),
            new Product(2, "Sneakers", "Fashion"),
            new Product(3, "NoteBook", "Education")
        };

        // Sort by product name
        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));

        String target = "PS5";
        Product result = binarySearch(products, target);

        if (result != null)
            System.out.println("Binary Search Result: " + result);
        else
            System.out.println("Product not found.");
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);

            if (cmp == 0) return products[mid];
            else if (cmp < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }
}
