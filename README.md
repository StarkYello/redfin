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

## Installation 
- options on acquiring the project 
    * `git clone git@github.com:XingKHuang/redfin.git` if you wish to clone the project from terminal 
    * download the zip file from https://github.com/XingKHuang/redfin, then run `tar xvzf redfin-master.zip > redfin` to decompress the project root directory   
- run `cd redfin` to go to the project root directory 
- `tar xvzf redis-stable.tar.gz` to decompress the redis server  
- `cd redis-stable`
- run `make` to build the redis-server executable 
- run `./src/redis-server` to start up the server
- switch to a new terminal tab
- cd back to the project root directory
- run `npm install` to install npm module dependencies
- run `sudo npm install -g` to install the CLI 

## Running
- keep the server running on the first tab. 
- on a new tab, cd into the project root directory 
- `show-open-food-trucks`
- in-program instruction:
    - use upArrow and downArrow to select navigating option
    - use enter/return key to submit navigating option
    - (->) goes next page 
    - (<-) goes back to the previous page
    - CTRL + C twice to exit the program
    - CTRL + C once to exit Redis server
## After Running (optional)
- run `npm uninstall -g redfin` to uninstall the CLI
- `cd ..`
- run `sudo rm -r redfin` to delete the project
