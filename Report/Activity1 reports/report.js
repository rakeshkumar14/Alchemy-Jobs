$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1.feature");
formatter.feature({
  "line": 2,
  "name": "Create a new user",
  "description": "",
  "id": "create-a-new-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Visit the site�s backend and create a new user",
  "description": "",
  "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on \"\u003cAppURL\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"root\" and \"pa$$w0rd\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User view the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select the Users Menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click Add New link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Input the New user details as \"\u003cUserid\u003e\" \"\u003cEmail\u003e\" \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cSiteName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click the Add New User button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check user is created as \"\u003cUserid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;",
  "rows": [
    {
      "cells": [
        "AppURL",
        "Userid",
        "Email",
        "FirstName",
        "LastName",
        "SiteName"
      ],
      "line": 20,
      "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;;1"
    },
    {
      "cells": [
        "https://alchemy.hguy.co//jobs//wp-admin",
        "rak1",
        "rak121@in.ibm.com",
        "rak",
        "kum",
        "https://alchemy.hguy.co"
      ],
      "line": 21,
      "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Visit the site�s backend and create a new user",
  "description": "",
  "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke1"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on \"https://alchemy.hguy.co//jobs//wp-admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"root\" and \"pa$$w0rd\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User view the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select the Users Menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click Add New link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Input the New user details as \"rak1\" \"rak121@in.ibm.com\" \"rak\" \"kum\" \"https://alchemy.hguy.co\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click the Add New User button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check user is created as \"rak1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://alchemy.hguy.co//jobs//wp-admin",
      "offset": 12
    }
  ],
  "location": "LogintestSteps.OpenLoginPage(String)"
});
formatter.result({
  "duration": 30986901100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 13
    },
    {
      "val": "pa$$w0rd",
      "offset": 24
    }
  ],
  "location": "LogintestSteps.loginToApp(String,String)"
});
formatter.result({
  "duration": 4034376400,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.viewtheDashboard()"
});
formatter.result({
  "duration": 55983400,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.selectUsermenu()"
});
formatter.result({
  "duration": 3414757500,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.addNewUser()"
});
formatter.result({
  "duration": 1718215800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rak1",
      "offset": 31
    },
    {
      "val": "rak121@in.ibm.com",
      "offset": 38
    },
    {
      "val": "rak",
      "offset": 58
    },
    {
      "val": "kum",
      "offset": 64
    },
    {
      "val": "https://alchemy.hguy.co",
      "offset": 70
    }
  ],
  "location": "LogintestSteps.enterUserDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 467038200,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.submituserdetails()"
});
formatter.result({
  "duration": 54770027600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rak1",
      "offset": 26
    }
  ],
  "location": "LogintestSteps.VerifyUseriscreated(String)"
});
formatter.result({
  "duration": 13678942100,
  "status": "passed"
});
formatter.match({
  "location": "LogintestSteps.closeBrowser()"
});
formatter.result({
  "duration": 6826412000,
  "status": "passed"
});
});