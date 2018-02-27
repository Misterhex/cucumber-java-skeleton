$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/features/googlesearch.feature");
formatter.feature({
  "name": "GoogleSearch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@google"
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
  "name": "google searching randomly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Google Search page",
  "keyword": "Given "
});
formatter.step({
  "name": "I search for \u003cquery\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the page title should start with \u003cquery\u003e",
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
    }
  ]
});
formatter.scenario({
  "name": "google searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
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
  "name": "I am on the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.I_visit_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for Cheese",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should start with Cheese",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.checkTitle(String)"
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
  "name": "google searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
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
  "name": "I am on the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.I_visit_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for IPhone",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should start with IPhone",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.checkTitle(String)"
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
  "name": "google searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
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
  "name": "I am on the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.I_visit_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for Samsung",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should start with Samsung",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.checkTitle(String)"
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
  "name": "google searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
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
  "name": "I am on the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.I_visit_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for Android",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should start with Android",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.checkTitle(String)"
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
  "name": "google searching randomly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
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
  "name": "I am on the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.I_visit_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for Banana",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should start with Banana",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.checkTitle(String)"
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