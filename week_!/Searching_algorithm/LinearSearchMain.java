public class LinearSearchMain {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "PS5", "Electronics"),
            new Product(2, "Sneakers", "Fashion"),
            new Product(3, "NoteBook", "Education")
        };

        String target = "Shoes";
        Product result = null;

        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(target)) {
                result = product;
                break;
            }
        }

        if (result != null)
            System.out.println("Linear Search Result: " + result);
        else
            System.out.println("Product not found.");
    }
}
