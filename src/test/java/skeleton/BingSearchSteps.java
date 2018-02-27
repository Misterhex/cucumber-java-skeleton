package skeleton;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;

import static org.junit.Assert.assertTrue;

public class BingSearchSteps {

    private final WebDriver driver = WebDriverFactory.CreateNew();

    public BingSearchSteps() throws MalformedURLException {
    }

    @Given("^I am on the Bing Search page")
    public void I_visit_Bing() {
        driver.get("https://www.bing.com");
    }

    @When("^I search Bing for (.*)$")
    public void search_for(String query) {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(query);
        element.submit();
    }

    @Then("^the Bing page title should start with (.*)$")
    public void checkTitle(String title) {

        new WebDriverWait(driver, 15).until((ExpectedCondition<Boolean>) d -> d.getTitle().length() > 0);

        System.out.println("title received is :" + driver.getTitle());
        assertTrue(driver.getTitle().startsWith(title));
    }

    @After
    public void closeBrowser(){
        System.out.println("quitting driver");
        driver.quit();
    }
}
