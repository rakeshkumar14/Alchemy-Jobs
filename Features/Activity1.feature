@smoke1
Feature: Create a new user
  

  @tag1
  Scenario Outline: Visit the site’s backend and create a new user
    Given User is on "<AppURL>" page
  	When User enters "root" and "pa$$w0rd"
  	Then User view the Dashboard page
  	And Select the Users Menu
  	And Click Add New link
  	And Input the New user details as "<Userid>" "<Email>" "<FirstName>" "<LastName>" "<SiteName>"
  	And Click the Add New User button
  	Then Check user is created as "<Userid>"
  	And Close the browser
  
  
  	
Examples:
|AppURL|Userid | Email | FirstName | LastName |SiteName|
|https://alchemy.hguy.co//jobs//wp-admin|rak1 | rak121@in.ibm.com | rak | kum |https://alchemy.hguy.co|