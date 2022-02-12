import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import page.Login;

import java.util.concurrent.TimeUnit;

public class stepDefination {
    public WebDriver driver;
    WebDriverWait wait;
    Login login;
    @Given("^User visits HRM portal$")
    public void user_visits_HRM_portal() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        System.setProperty("webdriver.gecko.driver", "./src/test/resources/geckodriver.exe");
        FirefoxOptions ops=new FirefoxOptions();
        ops.addArguments("--headed"); //uncomment if you want to run in headless mode
        driver = new FirefoxDriver(ops);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    @When("^User enters invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_invalid_username_and_password(String username ,String password) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        login=new Login(driver);
        login.doLogin(username,password);

    }

    @Then("^User can not log in successfully$")
    public void user_can_not_log_in_successfully() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        login=new Login(driver);
        String text =login.GetErrorMessage();
        Assert.assertEquals(text,"Invalid credentials");
        driver.quit();


    }


}
