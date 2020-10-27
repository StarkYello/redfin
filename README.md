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
