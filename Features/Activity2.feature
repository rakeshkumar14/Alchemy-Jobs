@smoke
Feature: Searching for jobs 

  @tag1
  Scenario: Searching for jobs and applying to them
    Given User is on "https://alchemy.hguy.co/jobs/" page
  	And Open Jobs page
  	Then Search A Job "Automation Tester"
  	And Filter job type to show only Full Time jobs
  	And Open the first Job details
  	Then Check the Job Titles
  	And Click Apply for job button
  	And Close the browser