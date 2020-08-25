package stepDefinitions;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HooksSteps {
	WebDriver driver;
	WebDriverWait wait;
	
	@Before
	public void initializeDriver() {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver,10);
	}
	
	@After
	public void closeApp() {
	//	driver.quit();
	}
}
 