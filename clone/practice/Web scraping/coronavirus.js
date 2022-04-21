const request = require('request')
const cheerio = require('cheerio')

console.log('before')

request('https://www.worldometers.info/coronavirus/',cb)

function cb(error , response , html){
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let selectorTool = cheerio.load(html)
    let contentArr = selectorTool("#maincounter-wrap span")
    // console.log(contentArr)

    let totalCases = selectorTool(contentArr[0]).text()
    let deaths = selectorTool(contentArr[1]).text()
    let recoverdCases = selectorTool(contentArr[2]).text()

    console.log('total cases', totalCases)
    console.log('total deaths' , deaths)
    console.log('total recoverd', recoverdCases)

}

console.log('after')
