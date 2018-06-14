$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login service",
  "description": "",
  "id": "login-service",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#case1"
    }
  ],
  "line": 4,
  "name": "Test Login service with Valid inputs",
  "description": "",
  "id": "login-service;test-login-service-with-valid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Valid user_name  and password",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "we run login service with valid inputs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login service should return 200 status code",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.valid_user_name_and_password()"
});
formatter.result({
  "duration": 168629381,
  "status": "passed"
});
formatter.match({
  "location": "Login.we_run_login_service_with_valid_inputs()"
});
formatter.result({
  "duration": 1280057193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "Login.login_service_should_return_status_code(int)"
});
formatter.result({
  "duration": 12525691,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#case2"
    }
  ],
  "line": 10,
  "name": "Test Login service with Invalid inputs",
  "description": "",
  "id": "login-service;test-login-service-with-invalid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "InValid user_name  and password",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "we run login service with Invalid inputs",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "login service should return 401 status",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.invalid_user_name_and_password()"
});
formatter.result({
  "duration": 81518,
  "status": "passed"
});
formatter.match({
  "location": "Login.we_run_login_service_with_Invalid_inputs()"
});
formatter.result({
  "duration": 17110448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 28
    }
  ],
  "location": "Login.login_service_should_return_status(int)"
});
formatter.result({
  "duration": 542138,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#case3"
    }
  ],
  "line": 16,
  "name": "Test Login service with missing inputs",
  "description": "",
  "id": "login-service;test-login-service-with-missing-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "empty user_name  and password",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "we run login service with empty inputs",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "login service should return 401 status",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.empty_user_name_and_password()"
});
formatter.result({
  "duration": 150199,
  "status": "passed"
});
formatter.match({
  "location": "Login.we_run_login_service_with_empty_inputs()"
});
formatter.result({
  "duration": 27365514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 28
    }
  ],
  "location": "Login.login_service_should_return_status(int)"
});
formatter.result({
  "duration": 470995,
  "status": "passed"
});
});