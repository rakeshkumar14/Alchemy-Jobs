@smoke2
Feature: Searching for jobs 

  @tag1
  Scenario Outline: Searching for jobs and applying to them
    Given User is on "https://alchemy.hguy.co/jobs/post-a-job/" page
  	And Fill the Job details as "<Email>" "<JobTitle>" "<Location>" "<Description>" "<Application URL>" "<Company Name>"
  	Then User see post a Job page
  	And Sumit the Job
  	And Open Jobs page
  	Then Search A Job "<JobTitle>"
  	And Confirm job listing is shown on page "<JobTitle>"
  	And Close the browser
  	
 Examples:
 | Email | JobTitle | Location | Description |Application URL|Company Name |
 |rakesh235@.in.ibm.com|Automation Tester|Kolkata|Testing Job for 5 Yrs exp|https://ibm.com|IBM|