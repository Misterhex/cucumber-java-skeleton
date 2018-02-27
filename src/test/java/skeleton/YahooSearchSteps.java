package skeleton;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;

import static org.junit.Assert.assertTrue;

public class YahooSearchSteps {

    private final WebDriver driver = WebDriverFactory.CreateNew();

    public YahooSearchSteps() throws MalformedURLException {
    }

    @Given("^I am on the Yahoo Search page")
    public void I_visit_Yahoo() {
        driver.get("https://www.yahoo.com");
    }

    @When("^I search Yahoo for (.*)$")
    public void search_for(String query) {
        WebElement element = driver.findElement(By.name("p"));
        element.sendKeys(query);
        element.submit();
    }

    @Then("^the Yahoo page title should start with (.*)$")
    public void checkTitle(String title) {

        new WebDriverWait(driver, 15).until((ExpectedCondition<Boolean>) d -> d.getTitle().length() > 0);

        System.out.println("title received is :" + driver.getTitle());
        assertTrue(driver.getTitle().startsWith(title));
    }

    @After
    public void closeBrowser() {
        System.out.println("quitting driver");
        driver.quit();
    }
}
