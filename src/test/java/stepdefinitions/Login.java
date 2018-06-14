package stepdefinitions;

import com.jayway.restassured.response.Response;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.slf4j.Logger;
import services.LoginApi;
import static org.slf4j.LoggerFactory.getLogger;

/**
 * Step definitions for Login Api Service
 */
public class Login {
    private static final Logger LOGGER = getLogger(Login.class);
    Response response;
    LoginApi loginApi= new LoginApi();
    @Given("^Valid user_name  and password$")
    public void valid_user_name_and_password() {
        LOGGER.info("Login service execution started");
    }

    @When("^we run login service with valid inputs$")
    public void we_run_login_service_with_valid_inputs()  {
        response  = loginApi.validLogin("mahesh","welkom01","abcde");
    }

    @Then("^login service should return (\\d+) status code$")
    public void login_service_should_return_status_code(int arg1)  {
        Assert.assertEquals(200,response.getStatusCode());
        Assert.assertTrue(response.getBody().asString().contains("Login success"));
        LOGGER.info("Login service executed successfully");
        LOGGER.info("Login service response body is: "+response.getBody().asString());
    }

    @Given("^InValid user_name  and password$")
    public void invalid_user_name_and_password()  {
        LOGGER.info("Login service execution started");
    }

    @When("^we run login service with Invalid inputs$")
    public void we_run_login_service_with_Invalid_inputs()  {
        response  = loginApi.inValidLogin("abcdef","ghijkl","adfsg");
    }

    @Then("^login service should return (\\d+) status$")
    public void login_service_should_return_status(int arg1)  {
        Assert.assertEquals(401,response.getStatusCode());
        Assert.assertTrue(response.getBody().asString().contains("invalid userid , password and token"));
        LOGGER.info("Login service executed successfully");
        LOGGER.info("Login service  response body is: "+response.getStatusCode());
    }

    @Given("^empty user_name  and password$")
    public void empty_user_name_and_password()  {
        LOGGER.info("Login service execution started");
    }

    @When("^we run login service with empty inputs$")
    public void we_run_login_service_with_empty_inputs()  {
        response  = loginApi.inValidLogin("","","");
    }

}
