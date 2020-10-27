# Redfin Work Sample - Food Truck Info CLI

## Overview
This project creates a command-line interface (CLI) "show-open-food-trucks" 
that display all operating food trucks in San Francisco at the time of execution. 
The CLI only shows 10 food trucks on a paper with potentially less than 10 
food trucks on the last page. 

## Data Source
https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b

## Before Running
- Please have the following installed and upgraded to their respective version or newer
    - Node 15.0.1 
        - checking via `node -v` 
    - NPM 7.0.3
        - checking via `npm -v`
    - Redis Server (.tar included within the project)
- The project is default running on a testing token acquired by the developer. 
In the event of any heavy usage, please obtain a personal token via 
[link](https://dev.socrata.com/docs/app-tokens.html). 
The token setting is located in the constants.js file
- `git clone git@github.com:XingKHuang/redfin.git`
- `cd redfin`
- `tar xvzf redis-stable.tar.gz`
- `cd redis-stable/src`
- run `redis-server`, start up the server
- switch to a new terminal tab
- cd back to the redfin root directory
- `npm install`
- `sudo npm install -g`
- `show-open-food-trucks`
- in-program instruction:
    - use upArrow and downArrow to select navigating option
    - use enter/return key to submit navigating option
    - (->) goes next page 
    - (<-) goes back to the previous page
    - CTRL + C twice to exit the program
    - CTRL + C once to exit Redis server
- `npm uninstall -g redfin` to uninstall 

## Data
The San Francisco government’s website has a public data source of food trucks
(https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b). The data
can be accessed in a number of forms, including JSON, CSV, and XML. How you access the
data is up to you, but you can find some useful information about making an API request to
this data source here (https://dev.socrata.com/foundry/data.sfgov.org/jjew-r69b).

## The Problem
Write a command line program that prints out a list of food trucks that are open at the
current date and current time, when the program is being run. So if I run the program at
noon on a Friday, I should see a list of all the food trucks that are open then.

## Criteria
We will primarily evaluate programs on code quality and output correctness.
For quality, we expect code to be easy to read and maintain, performant, testable and
reliable. You should submit code that you are proud to have written. However do not
include tests in your submission.
Please display results in pages of 10 trucks. That is: if there are more than 10 food trucks open,
the program should display the first 10, then wait for input from the user before displaying the
next 10 (or fewer if there are fewer than 10 remaining), and so on until there are no more food
trucks to display. Display the name and address of the trucks and sort the output alphabetically
by name.
