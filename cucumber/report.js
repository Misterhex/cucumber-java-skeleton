$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/features/yahoosearch.feature");
formatter.feature({
  "name": "YahooSearch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.step({
  "name": "I search Yahoo for \u003cquery\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the Yahoo page title should start with \u003cquery\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "query"
      ]
    },
    {
      "cells": [
        "Yahoooo"
      ]
    },
    {
      "cells": [
        "Cheese"
      ]
    },
    {
      "cells": [
        "IPhone"
      ]
    },
    {
      "cells": [
        "Samsung"
      ]
    },
    {
      "cells": [
        "Android"
      ]
    },
    {
      "cells": [
        "Banana"
      ]
    },
    {
      "cells": [
        "Apple"
      ]
    },
    {
      "cells": [
        "Pokemon"
      ]
    },
    {
      "cells": [
        "Philips"
      ]
    },
    {
      "cells": [
        "DevOps"
      ]
    },
    {
      "cells": [
        "SG"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Yahoooo",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Yahoooo",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Cheese",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Cheese",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for IPhone",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with IPhone",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Samsung",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Samsung",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Android",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Android",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Banana",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"p\"}\n  (Session info: chrome\u003d64.0.3282.119)\n  (Driver info: chromedriver\u003d2.35.528139 (47ead77cb35ad2a9a83248b292151462a66cd881),platform\u003dLinux 4.9.75-linuxkit-aufs x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Yonghengs-MacBook-Pro.local\u0027, ip: \u0027192.168.128.200\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528139 (47ead77cb35ad2a9a83248b292151462a66cd881), userDataDir\u003d/tmp/.org.chromium.Chromium.S3ASMr}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.119, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 334cdbcaf9adc785945294c84a038cf3\n*** Element info: {Using\u003dname, value\u003dp}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat skeleton.YahooSearchSteps.search_for(YahooSearchSteps.java:31)\n\tat ✽.I search Yahoo for Banana(skeleton/features/yahoosearch.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "the Yahoo page title should start with Banana",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Apple",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Apple",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Pokemon",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Pokemon",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for Philips",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with Philips",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for DevOps",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with DevOps",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@yahoo"
    },
    {
      "name": "@search"
    },
    {
      "name": "@searchengine"
    }
  ]
});
formatter.step({
  "name": "I am on the Yahoo Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "YahooSearchSteps.I_visit_Yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search Yahoo for SG",
  "keyword": "When "
});
formatter.match({
  "location": "YahooSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Yahoo page title should start with SG",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooSearchSteps.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});