$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "name": "Login to an HRM portal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login to portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits HRM portal",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can not log in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "1234"
      ]
    },
    {
      "cells": [
        "user2",
        "234"
      ]
    },
    {
      "cells": [
        "user3",
        "3456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login to portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits HRM portal",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_HRM_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid \"user1\" and \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_log_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login to portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits HRM portal",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_HRM_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid \"user2\" and \"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_log_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login to portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits HRM portal",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_HRM_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid \"user3\" and \"3456\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_log_in_successfully()"
});
formatter.result({
  "status": "passed"
});
});