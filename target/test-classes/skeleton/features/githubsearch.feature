@github @search
Feature: GitHub Search

  Scenario Outline: GitHub Search Language
    Given I am on the Github search page
    When I use github search for language <lang>
    Then The first item programming language in the result should be <lang>

  Examples:
    |  lang     |
    |  Go       |
