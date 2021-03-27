import java.util.Scanner;

public class switchstatement {
    //	String course;
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
 
	
		Scanner input = new Scanner (System.in);
 System.out.print("Please enter a course?");
		String course = input.next() ;
 switch(course) {
 case "Algebra":
	 System.out.println("enrolled in Algebra");
	 break;
 case "Biology":
	 System.out.println("enrolled in Biology");
	 break;
 case "History":
	 System.out.println("enrolled in History");
	 break;
 case "Theatre":
	 System.out.println("enrolled in Theatre");
	 break;
 default:
	 System.out.println("Course not provided");
 }

	}

}