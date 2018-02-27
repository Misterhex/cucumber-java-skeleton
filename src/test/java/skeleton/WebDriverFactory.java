package skeleton;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public final class WebDriverFactory {

    public static WebDriver CreateNew() throws MalformedURLException {

        URL hubURL = new URL("http://localhost:4444/wd/hub");

        System.out.println("HubUrl is : " + hubURL);

        RemoteWebDriver driver =  new RemoteWebDriver(hubURL, DesiredCapabilities.chrome());

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().setScriptTimeout(30, TimeUnit.SECONDS);

        return driver;
    }
}
