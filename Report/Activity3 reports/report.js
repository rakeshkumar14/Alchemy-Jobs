$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity4.feature");
formatter.feature({
  "line": 2,
  "name": "Searching for jobs",
  "description": "",
  "id": "searching-for-jobs",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke2"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Searching for jobs and applying to them",
  "description": "",
  "id": "searching-for-jobs;searching-for-jobs-and-applying-to-them",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \"https://alchemy.hguy.co/jobs/post-a-job/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Fill the Job details as \"\u003cEmail\u003e\" \"\u003cJobTitle\u003e\" \"\u003cLocation\u003e\" \"\u003cDescription\u003e\" \"\u003cApplication URL\u003e\" \"\u003cCompany Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User see post a Job page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Sumit the Job",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Open Jobs page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Search A Job \"\u003cJobTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Confirm job listing is shown on page \"\u003cJobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "searching-for-jobs;searching-for-jobs-and-applying-to-them;",
  "rows": [
    {
      "cells": [
        "Email",
        "JobTitle",
        "Location",
        "Description",
        "Application URL",
        "Company Name"
      ],
      "line": 16,
      "id": "searching-for-jobs;searching-for-jobs-and-applying-to-them;;1"
    },
    {
      "cells": [
        "rakesh235@.in.ibm.com",
        "Automation Tester",
        "Kolkata",
        "Testing Job for 5 Yrs exp",
        "https://ibm.com",
        "IBM"
      ],
      "line": 17,
      "id": "searching-for-jobs;searching-for-jobs-and-applying-to-them;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Searching for jobs and applying to them",
  "description": "",
  "id": "searching-for-jobs;searching-for-jobs-and-applying-to-them;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke2"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \"https://alchemy.hguy.co/jobs/post-a-job/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Fill the Job details as \"rakesh235@.in.ibm.com\" \"Automation Tester\" \"Kolkata\" \"Testing Job for 5 Yrs exp\" \"https://ibm.com\" \"IBM\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User see post a Job page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Sumit the Job",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Open Jobs page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Search A Job \"Automation Tester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Confirm job listing is shown on page \"Automation Tester\"",
  "matchedColumns": [
    1
  ],
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
      "val": "https://alchemy.hguy.co/jobs/post-a-job/",
      "offset": 12
    }
  ],
  "location": "LogintestSteps.OpenLoginPage(String)"
});
formatter.result({
  "duration": 136430228600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rakesh235@.in.ibm.com",
      "offset": 25
    },
    {
      "val": "Automation Tester",
      "offset": 49
    },
    {
      "val": "Kolkata",
      "offset": 69
    },
    {
      "val": "Testing Job for 5 Yrs exp",
      "offset": 79
    },
    {
      "val": "https://ibm.com",
      "offset": 107
    },
    {
      "val": "IBM",
      "offset": 125
    }
  ],
  "location": "LogintestSteps.fillJobDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14934351300,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.UseronPostAJobPage()"
});
formatter.result({
  "duration": 80556100,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.submitJob()"
});
formatter.result({
  "duration": 7004774600,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.openJobPage()"
});
formatter.result({
  "duration": 2120958200,
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
  "duration": 15762390600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 38
    }
  ],
  "location": "LogintestSteps.VerifySubmittedJob(String)"
});
formatter.result({
  "duration": 15397586500,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.closeBrowser()"
});
formatter.result({
  "duration": 4451992300,
  "status": "passed"
});
});