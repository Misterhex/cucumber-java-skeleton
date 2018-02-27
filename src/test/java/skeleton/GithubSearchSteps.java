package skeleton;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;

import static org.junit.Assert.assertTrue;

public class GithubSearchSteps {

    private final WebDriver driver = WebDriverFactory.CreateNew();

    public GithubSearchSteps() throws MalformedURLException {
    }

    @Given("^I am on the Github search page$")
    public void I_visit_github() {
        driver.get("https://www.github.com/search");
    }

    @When("^I use github search for language (.*)$")
    public void search_for(String query) {
        String cssSelector = "div#code_search form input[type=text]";
        WebElement element = driver.findElement(By.cssSelector(cssSelector));
        element.sendKeys("language:" + query);
        element.submit();
    }

    @Then("^The first item programming language in the result should be (.*)$")
    public void checkLanguage(String lang) {

        String cssSelector = "#js-pjax-container > div.container > div > div.column.three-fourths.codesearch-results.pr-6 > ul > div:nth-child(1) > div.d-table-cell.col-2.text-gray.pt-2";

        new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.cssSelector(cssSelector)));

        String text = driver.findElement(By.cssSelector(cssSelector)).getText().trim();

        System.out.println("language is : " + text);
        assertTrue(text.equals(lang));
    }

    @After()
    public void closeBrowser(){
        System.out.println("quitting driver");
        driver.quit();
    }
}
