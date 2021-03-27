import java.util.Scanner;
import java.lang.Math ;
public class calculator {
	
	static double  a ;
	static double b ;
	static double r ;

public static void welcome(){
	System.out.println("Please enter what would you like to do today?" + "\n" );
	System.out.println("1 for addition" + "\n" +
			"2 for Substraction" + "\n" +
			"3 for Division" + "\n" +
			"4 for Multiplication" + "\n" +
			"5 for Percentage" + "\n");
	/*System.out.println("2 for Substraction" + "\n");
	System.out.println("3 for division" + "\n");
	System.out.println("4 for multiplicationtion" + "\n");
	System.out.println("5 for Percentage" + "\n"); */
	Scanner keyboard = new Scanner(System.in);
	int input = keyboard.nextInt();
	switch(input){
		case 1 :
		add();
		break ;
	case 2 :
		substract();
		break ;
	case 3 :
		divide();
		break;
	case 4 :
		multiply();
		break;
	case 5 :
		percentage();
		break ;
		
	default : 
		System.out.println("Operation not found");
		}
	}
public static void add() {
	System.out.println("Please enter number 1 & 2: ");
	Scanner keyboard = new Scanner(System.in) ;
	a = keyboard.nextInt() ;
	b = keyboard.nextInt();
	
	r = a+b ;
	
	System.out.println("the result is:" + r);
	
	
}

public static void substract() {
	System.out.println("Please enter number 1 & 2: ");
	Scanner keyboard = new Scanner(System.in) ;
	a = keyboard.nextInt() ;
	b = keyboard.nextInt();
	
	r = a-b ;
	
	System.out.println("the result is:" + r);
	
}

public static void divide() {
	System.out.println("Please enter number 1 & 2: ");
	Scanner keyboard = new Scanner(System.in) ;
	a = keyboard.nextInt() ;
	b = keyboard.nextInt();
	
	r = a/b ;
	
	System.out.println("the result is:" + r);
	
}

public static void multiply() {
	System.out.println("Please enter number 1 & 2: ");
	Scanner keyboard = new Scanner(System.in) ;
	a = keyboard.nextInt() ;
	b = keyboard.nextInt();
	
	r = a*b ;
	
	System.out.println("the result is:" + r);
	
}

public static void percentage() {
	System.out.println("Please enter number 1 & 2: ");
	Scanner keyboard = new Scanner(System.in) ;
	a = keyboard.nextInt() ;
	b = keyboard.nextInt();
	
	r = (a/b)*100 ;
	
	System.out.println("the result is:" + r);
	
}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		welcome();

	}

}
