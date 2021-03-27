import java.util.Scanner;

public class Twitter 
{
    static String C;		//Initiate Variable
	static String user;
	static String pass;
	static String Username;
	static String Password;

	public static void welcomeToTwitter() {		//start of a method welcome to twitter
		Scanner input = new Scanner(System.in);
		System.out.println("Welcome to Twitter");
		System.out.print("To create an account please type in Create or to login please type in Login ");
		C = input.next();
		if (C.equalsIgnoreCase("Create")) {
			accountCreate();
		} else if(C.equalsIgnoreCase("Login")) {

			Login();
		}else{
			System.out.println("Wrong choice");
		}
	}

	public static void accountCreate() {
		Scanner input = new Scanner(System.in);
		System.out.print("Please create a new username: ");
		user = input.next();
		System.out.print("Please create a new password: ");
		pass = input.next();

		System.out.println("Welcome to your account login page, please login in again");

		login();
	}

	public static void login() {

		System.out.println(" Please enter Username ");
		Scanner input = new Scanner(System.in);
		Username = input.next();
		System.out.print("Please enter Password");
		Password = input.next();

		if (Username.equals(user) && Password.equals(pass)) {
			System.out.println("you are logged in, Welcome to Twitter");
			tweetChecker();
		} else {
			System.out.println("Incorrect Password/Username combination!");
		}

	}

	public static void Login() {
		System.out.println(" Please enter Username ");
		Scanner input = new Scanner(System.in);
		Username = input.next();
		System.out.print("Please enter Password");
		Password = input.next();
		System.out.println("you are logged in, Welcome to Twitter");
		tweetChecker();

	}

	public static void tweetChecker() {
		String Tweet;
		int d;

		System.out.println("Please type your Tweet");
		Scanner input = new Scanner(System.in);
		Tweet = input.next();
		d = Tweet.length();

		if (d <= 280) {
			System.out.println("Tweet Posted");
			System.out.println();
			System.out.println(Tweet);
			// System.out.println(Tweet.length());
		} else {
			int x = Tweet.length() - 250;
			System.out.println("Out of Character limit by:" + x + "words!");
			// System.out.println(Tweet.length());
		}

	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		welcomeToTwitter();
	}
}

