package SeleniumScripts;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class firstseleniumscript {
    static WebDriver driver ;
	//create method

	public static void startup() {
	 System.setProperty("webdriver.chrome.driver", "Driver\\chromedriver.exe");
	 driver = new ChromeDriver();
	 String url = "https://www.seleniumeasy.com/test/basic-radiobutton-demo.html";
	 //driver.get(url);
	 String expectedURL = "https://www.seleniumeasy.com/test/basic-radiobutton-demo.html";
	 if(url.equals(expectedURL)) {
		 System.out.println("URL validated");
		 driver.get(url);
	 }else {
		 System.out.println("URL not validated");
	 }
	}

	public static void test() {
		WebElement button1 = driver.findElement(By.name("optradio"));
		button1.click();
		WebElement submit1 = driver.findElement(By.id("buttoncheck"));
		submit1.click();
		WebElement button2 = driver.findElement(By.cssSelector("div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(5) div.panel-body div:nth-child(2) label.radio-inline:nth-child(2) > input:nth-child(1)"));
		button2.click();
		WebElement button3 = driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[2]/div[2]/div[2]/label[3]/input"));
		button3.click();
		WebElement submit2 = driver.findElement(By.cssSelector("#easycont > div > div.col-md-6.text-left > div:nth-child(5) > div.panel-body > button"));
		submit2.click();
	}
	
	public static void getMessage() {
		String X = driver.findElement(By.xpath("//body/div[@id='easycont']/div[1]/div[2]/div[2]/div[2]/p[2]")).getText();
		System.out.println(X);
		
		String Y = driver.findElement(By.xpath("//p[contains(text(),\"Radio button 'Male' is checked\")]")).getText();
		System.out.println(Y);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        startup();
        test();
        getMessage();
		
	}
}
