const request = require('request')
const cheerio = require('cheerio')

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

request(url,cb)

function cb(error , response , html){
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let $ = cheerio.load(html)
    let contentArr = $(".col-14.col-md-15.col-lg-14 .match-comment-long-text") //returns 41 matches
    // console.log(contentArr)
    
    for(let i =0 ; i<contentArr.length; i++){
    let LastBallComm = $(contentArr[i]).text()
    console.log(`${i+1} .    ${LastBallComm}`) //$ <-- this is different from the above $
    //also called sting literal
    }

}
