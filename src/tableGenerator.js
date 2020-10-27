const chalk = require('chalk')
const { table } = require('table')

let self = module.exports = {
    getTable: function(data){
        data.splice(0,0,[chalk.red.bold("FOOD TRUCK"), chalk.red.bold("LOCATION")]) //insert column titles
        return table(data, self.getTableConfig())
    },
    getTableConfig: function () {
        return {
            columnCount: 2,
            columns: {
                0: {
                    alignment: 'center'
                },
                1: {
                    alignment: 'center',
                }
            }
        };
    }
}