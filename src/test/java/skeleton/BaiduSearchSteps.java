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

public class BaiduSearchSteps {

    private final WebDriver driver = WebDriverFactory.CreateNew();

    public BaiduSearchSteps() throws MalformedURLException {
    }

    @Given("^I am on the Baidu Search page")
    public void I_visit_Baidu() {
        driver.get("https://www.baidu.com");
    }

    @When("^I search Baidu for (.*)$")
    public void search_for(String query) {
        WebElement element = driver.findElement(By.name("wd"));
        element.sendKeys(query);
        element.submit();
    }

    @Then("^the Baidu page title should start with (.*)$")
    public void checkTitle(String title) {

        new WebDriverWait(driver, 15).until((ExpectedCondition<Boolean>) d -> d.getTitle().length() > 0);

        assertTrue(driver.getTitle().toLowerCase().startsWith(title.toLowerCase()));
    }

    @After()
    public void closeBrowser(){
        System.out.println("quitting driver");
        driver.quit();
    }
}
