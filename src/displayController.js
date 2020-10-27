const chalk = require('chalk')
const prompts = require('prompts')
const yargs = require('yargs')
prompts.override((yargs).argv)

const constants = require('./constants')
const dataArchive = require('./dataArchive')
const tableGenerator = require('./tableGenerator')

let self = module.exports = {
    showExitMessage: function(){
        console.log(chalk.red(constants.EXIT_MESSAGE))
    },
    showNoDataMessage: function(){
        console.log(chalk.red(constants.NO_DATA_MESSAGE))
    },
    showData: function(data){
        console.clear()
        data = data.slice(0,constants.TRUCKS_PER_PAGE_LIMIT) //taking the top 10 items
        //map JSON object values into arrays
        data = data.map((pair) => constants.COLUMNS.sort().map((column) => pair[column]))
        console.log(tableGenerator.getTable(data))
    },
    startDisplay: function(){
        (async () => {
            let inService = true
            let curPageNum = 1
            while(inService) {
                const data = await dataArchive.getData(curPageNum)
                if(data.length === 0){
                    //in case the source does not return any data.
                    //could be due to server outage or no business is operating
                    self.showNoDataMessage()
                    break
                }
                const forwardDisable = data.length !== constants.TRUCKS_PER_REQUEST_LIMIT
                const backwardDisable = curPageNum === 1
                const questions = [
                    {
                        type: 'select',
                        name: 'value',
                        message: chalk.blueBright(`Page ${curPageNum}`) + " " + `(CTRL + C twice to Exit)`,
                        choices: [
                            { title: '->', description: 'Next Page', value: 'Next_Page', disabled: forwardDisable },
                            { title: '<-', description: 'Go Back', value: 'Previous_Page', disabled: backwardDisable }
                        ],
                        initial: 0
                    }
                ]

                self.showData(data)

                const onSubmit = (prompt, answer) => {
                    if(answer === 'Next_Page'){
                        curPageNum++
                    }else{
                        curPageNum--
                    }
                }

                const onCancel = prompt => {
                    self.showExitMessage()
                    inService = false
                }

                await prompts(questions, {onSubmit, onCancel})
            }
        })()
    }
}




