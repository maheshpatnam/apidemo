package services;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import org.json.simple.JSONObject;
import testutilities.ConfigRead;

/**
 *
 *  Test Scenarios for Login Api Service
 *
 */
public class LoginApi {
    Response response;
    /**
     * Login api with valid credentials
     * @param userName
     * @param passWord
     * @param token
     * @return response
     */
    public Response validLogin(String userName, String passWord,String token)
    {
        RestAssured.baseURI = ConfigRead.getProperty("baseurl");
        JSONObject requestParams = new JSONObject();
        requestParams.put("user", userName);
        requestParams.put("password", passWord);
        requestParams.put("token", token);
        response = RestAssured.given().header("Content-Type","application/json").body(requestParams.toString()).when().post("/login").then().statusCode(200).extract().response();
        return response;
    }

    /**
     * Login api with Invalid credentials
     * @param userName
     * @param passWord
     * @param token
     * @return response
     */
    public Response inValidLogin(String userName, String passWord, String token)
    {
        RestAssured.baseURI = ConfigRead.getProperty("baseurl");
        JSONObject requestParams = new JSONObject();
        requestParams.put("user", userName);
        requestParams.put("password", passWord);
        requestParams.put("token", token);
        response = RestAssured.given().header("Content-Type","application/json").body(requestParams.toString()).when().post("/login").then().statusCode(401).extract().response();
        return response;
    }

}