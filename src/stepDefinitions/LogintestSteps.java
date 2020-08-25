package stepDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogintestSteps {
	
	
	WebDriver driver;
	WebDriverWait wait;
	@Given("^User is on \"([^\"]*)\" page$")
	//@Given("^User is on  \"(.*)\" page$")
	public void OpenLoginPage(String appURL) {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver,10);
		driver.get(appURL);
	//	driver.get("https://alchemy.hguy.co//jobs//wp-admin");
		
	}

	@When("^User enters \"(.*)\" and \"(.*)\"$")
	public void loginToApp(String username, String password) {
		driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='user_pass']")).sendKeys(password);
		driver.findElement(By.xpath("//input[@id='wp-submit']")).click();
	}
	
	@Then("^User view the Dashboard page$")
	public void viewtheDashboard() {
		String strtitle = driver.getTitle();
		Assert.assertTrue(strtitle.contains("Dashboard"));
		System.out.println(strtitle);
	}
	
	 @And("^Select the Users Menu$")	
	    public void selectUsermenu() throws Throwable {	
	        driver.findElement(By.xpath("//div[@class='wp-menu-image dashicons-before dashicons-admin-users']")).click();;	
	    }
	 @And("^Click Add New link$")	
	    public void addNewUser() throws Throwable {	
	        driver.findElement(By.xpath("//a[@class='page-title-action']")).click();	
	    }
	 
	 @And("^Input the New user details as \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
//	 @And("^Input the New user details as  \"(.*)\"  \"(.*)\"  \"(.*)\"  \"(.*)\"  \"(.*)\"$")
	    public void enterUserDetails(String Userid, String Email, String FirstName, String LastName, String SiteName) throws Throwable {	
	        driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(Userid);
	        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(Email);
	        driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(FirstName);
	        driver.findElement(By.xpath("//input[@id='last_name']")).sendKeys(LastName);
	        driver.findElement(By.xpath("//input[@id='url']")).sendKeys(SiteName);
	 //       driver.findElement(By.xpath("//input[@class='button wp-generate-pw hide-if-no-js']")).click();
	    }
	 
	 @And("^Click the Add New User button$")
	 public void submituserdetails(){
		 driver.findElement(By.xpath("//input[@id='createusersub']")).click();
	 }
	 
	 @Then("^Check user is created as \"(.*)\"$")
		public void VerifyUseriscreated(String newuser) {
		 driver.findElement(By.xpath("//input[@id='user-search-input']")).sendKeys(newuser);
		 driver.findElement(By.xpath("//input[@id='search-submit']")).click();
		 String actUsername = driver.findElement(By.xpath("//tbody//tr//td//strong//a")).getText();
			Assert.assertEquals(newuser, actUsername);
			
		}

	@Then("^Read the page title and confirmation message$")
	public void getSearchResult() {
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//div[@id='action-confirmation']")));
		String PageTitle = driver.getTitle();
		String loginMessage=driver.findElement(By.xpath("//div[@id='action-confirmation']")).getText();
		System.out.println("Page Title is "+PageTitle+ " And Login message is "+loginMessage);
		
	}
    @And("^Open Jobs page$")
     public void openJobPage() {
    	driver.findElement(By.linkText("Jobs")).click();
    }
    
    @Then("^Search A Job \"([^\"]*)\"$")
	public void SearchJob(String JobName) {
		driver.findElement(By.xpath("//input[@id='search_keywords']")).sendKeys(JobName);
	//	wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//input[@type='submit']")));
		driver.findElement(By.xpath("//input[@value='Search Jobs']")).click();
    }
    @And("^Filter job type to show only Full Time jobs$")
    public void selectFullTimeJobs() {
    	List<WebElement> jobsType = driver.findElements(By.xpath("//input[@type='checkbox']"));
    	int NumOfObj = jobsType.size();
    	for (int i=0; i<NumOfObj;i++){
    		String checkboxName = jobsType.get(i).getAttribute("value");
    		System.out.println(checkboxName);
    		if  (!"full-time".equals(checkboxName)) {
    			jobsType.get(i).click();
    		}
    			   	
    	}
    }
    
    @And("^Open the first Job details$")
    public void seeJobDetails() {
    	wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//ul[@class='job_listings']/li[1]/a/div/h3")));
    	driver.findElement(By.xpath("//ul[@class='job_listings']/li[1]/a/div/h3")).click();
    }
    @Then("^Check the Job Titles$")
    public void getJobTitle() {
    	String jobtitle =driver.findElement(By.xpath("//h1[@class='entry-title']")).getText();
    	System.out.println(jobtitle);
    }
    
    @And("^Click Apply for job button$")
    public void clickApplyForJob() {
    	driver.findElement(By.xpath("//input[@class='application_button button']")).click();
    }
    
    @And("^Fill the Job details as \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void fillJobDetails(String Email , String jobTitle,String Location,String description,String appURL,String CompName) {
    	driver.findElement(By.xpath("//input[@id='create_account_email']")).sendKeys(Email);
    	driver.findElement(By.xpath("//input[@id='job_title']")).sendKeys(jobTitle);
    	driver.findElement(By.xpath("//input[@id='job_location']")).sendKeys(Location);
   // 	driver.switchTo().frame("job_description_ifr");
    	driver.findElement(By.xpath("//iframe[@id='job_description_ifr']")).sendKeys(description);
  //  	driver.switchTo().defaultContent();
    	driver.findElement(By.xpath("//input[@id='application']")).sendKeys(appURL);
    	driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys(CompName);
    	driver.findElement(By.xpath("//input[@name='submit_job']")).click();
    }
    
    @Then("^User see post a Job page$")
    public void UseronPostAJobPage() {
    	String pTitle = driver.findElement(By.xpath("//h1[@class='entry-title']")).getText();
    	Assert.assertEquals(pTitle,"Post a Job");
    }
    
    @And("^Sumit the Job$")	
    public void submitJob() throws Throwable {
    	wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//input[@id='job_preview_submit_button']")));
       driver.findElement(By.xpath("//input[@id='job_preview_submit_button']")).click();	
    }
    
    @And("^Confirm job listing is shown on page \"([^\"]*)\"$")	
    public void VerifySubmittedJob(String expJobName) throws Throwable {
    	Boolean Jobflag =false;
     List<WebElement> listofJob =   driver.findElements(By.xpath("//ul[@class='job_listings']/li/a/div/h3"));
     int NumOfJob = listofJob.size();
 	for (int i=0; i<NumOfJob;i++){
 		String JobName = listofJob.get(i).getText();
 		if  (expJobName.equals(JobName)) {
 			Jobflag = true;
 			break;
 		} 			   	
 	}
 	Assert.assertTrue(Jobflag.TRUE);
     
    }
    
    
   /* @Then("^Verify Job submit confirmation message$")
    public void JobSubmitConfirmationMsg() {
    	String confirmationmsg = driver.findElement(By.xpath("//div[@class='entry-content clear']")).getText();
    	
    	Assert.assertEquals(confirmationmsg.contains("Job submitted successfully. Your listing will be visible once approved."));
    }*/
    @And("^Close the browser$")	
     public void closeBrowser() throws Throwable {	
        driver.quit();	
     }
}
