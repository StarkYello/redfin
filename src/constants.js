let self = module.exports = {
    EXIT_MESSAGE: "\nThank You For Using Redfin\n",
    TIME_ZONE_SF : "America/Los_Angeles",
    QUERY_TEMPLATE : "https://data.sfgov.org/resource/jjew-r69b.json?" +
        "$select=COLUMNS" +
        "&$where=dayorder='DAYOFWEEK' and start24<='STARTHOUR' and end24>'ENDHOUR'" +
        "&$order=PRIMARYORDER" +
        "&$limit=LIMIT" +
        "&$offset=OFFSET",
    APP_TOKEN : "cNVIYBlUGdsaazQfiZwvGpKD9",
    COLUMNS : ["applicant","location"],
    PRIMARY_ORDER : "applicant",
    TRUCKS_PER_PAGE_LIMIT : 10,
    ///the CLI will only display 10 trucks, the additional truck is to check for whether we should show next page
    TRUCKS_PER_REQUEST_LIMIT : 11
}

