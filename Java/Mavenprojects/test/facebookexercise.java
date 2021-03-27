package Mavenprojects.test;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class facebookexercise {
    @Test
    public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "Driver//chromedriver.exe");
		ChromeDriver Sayantan = new ChromeDriver();

		String URL = "https://www.facebook.com/?soft=bookmarks";
	//validating page url
		if(URL.equals("https://www.facebook.com/?soft=bookmarks")) {
			Sayantan.get(URL); //opens the said website
			System.out.println("URL validated");
		}else {
			System.out.println("URL not validated");
		}
		
		//Sayantan.get(URL);
		//fills in the username as user, locator used: id
		Sayantan.findElement(By.id("email")).sendKeys("user"); 
		//fills in the password as pass, locator used: name
		Sayantan.findElement(By.name("pass")).sendKeys("pass");
	
		Sayantan.findElementByXPath("/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button").click();
		
		
		
	    String Error = Sayantan.findElementByClassName("_9ay7").getText() ;
		System.out.println(Error);
		
		//validating the error message
		String expectedError1 = "The email or mobile number you entered isn’t connected to an account. Find your account and log in.";
		String expectedError2 = "The email or phone number you’ve entered doesn’t match any account. Sign up for an account." ;
		
		if(Error.equals(expectedError1) || Error.equals(expectedError2))
		{
			
			System.out.println("This is a pass");
		}else {
			System.out.println("This is a fail");
		}
	
		Sayantan.navigate().back(); //this takes us back to our previous page
		
		Sayantan.findElementByLinkText("Forgot Password?").click() ;
		System.out.println("Forgot password was clicked");
		Sayantan.close();	
	}

}