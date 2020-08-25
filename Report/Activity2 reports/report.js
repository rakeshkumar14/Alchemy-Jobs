$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity2.feature");
formatter.feature({
  "line": 2,
  "name": "Searching for jobs",
  "description": "",
  "id": "searching-for-jobs",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Searching for jobs and applying to them",
  "description": "",
  "id": "searching-for-jobs;searching-for-jobs-and-applying-to-them",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \"https://alchemy.hguy.co/jobs/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open Jobs page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Search A Job \"Automation Tester\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Filter job type to show only Full Time jobs",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Open the first Job details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Check the Job Titles",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click Apply for job button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://alchemy.hguy.co/jobs/",
      "offset": 12
    }
  ],
  "location": "LogintestSteps.OpenLoginPage(String)"
});
formatter.result({
  "duration": 67274083300,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.openJobPage()"
});
formatter.result({
  "duration": 2480373400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 14
    }
  ],
  "location": "LogintestSteps.SearchJob(String)"
});
formatter.result({
  "duration": 17042382500,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.selectFullTimeJobs()"
});
formatter.result({
  "duration": 2110243600,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.seeJobDetails()"
});
formatter.result({
  "duration": 2524328100,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.getJobTitle()"
});
formatter.result({
  "duration": 115084800,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.clickApplyForJob()"
});
formatter.result({
  "duration": 294655000,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.closeBrowser()"
});
formatter.result({
  "duration": 5835589200,
  "status": "passed"
});
});