@yahoo @search @searchengine
Feature: YahooSearch

  Scenario Outline: Yahoo searching randomly
    Given I am on the Yahoo Search page
    When I search Yahoo for <query>
    Then the Yahoo page title should start with <query>

  Examples:
    |  query    |
    |  Yahoooo  |
    |  Cheese   |
    |  IPhone   |
    |  Samsung  |
    |  Android  |
    |  Banana   |
    |  Apple    |
    |  Pokemon  |
    |  Philips  |
    |  DevOps   |
    |  SG       |
