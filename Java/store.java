public class store {
     // instance fields
  String productType;
  int inventoryCount;
  double inventoryPrice;
  
  // constructor method
  public store(String product, int count, double price) {
    productType = product;
    inventoryCount = count;
    inventoryPrice = price;
  }
  
  // main method
  public static void main(String[] args) 
  {
    store lemonadeStand = new store("lemonade", 42, .99);
    store cookieShop = new store("cookies", 12, 3.75);
    
    System.out.println("Our first shop sells " + lemonadeStand.productType + " at " + lemonadeStand.inventoryPrice + " per unit.");
    
    System.out.println("Our second shop has " + cookieShop.inventoryCount + " units remaining.");
  }
}
