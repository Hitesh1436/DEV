const request = require('request');
const cheerio = require('cheerio');


console.log('Before');

request('https://www.worldometers.info/coronavirus/', cb);


function cb(error, response, html) {
    if (error) {
        console.error(error);
    }
    else {
        handleHtml(html) ; // hum chhte hn yeh function hume useful info dedega html code mn se

    }
}

function handleHtml(html) {
    let selTool = cheerio.load(html)   // iski vjh se hum html ko selTool mn load krwate hn tki kuch bhi data leske 

    //  console.log(selTool)  // just to check ki selTool mn kya data load hua hai

    let contentArr = selTool('.maincounter-number span')
    // console.log(contentArr)  // just to check ki jo humne class select ki h uska data jo contentArr mn aya h vo kya h

//   for(let i=0;i<contentArr.length;i++){
//       let data = selTool(contentArr[i]).text()   // yeh .text() uss data ko text fom mn dega hume
//       console.log(data)
//   }

let totalcases = selTool(contentArr[0]).text()
console.log('Total Cases:' + totalcases)

let totaldeath = selTool(contentArr[1]).text()
console.log('Total Death:' + totaldeath)

let totalrecoveries = selTool(contentArr[2]).text()
console.log('Total Recoveries:' + totalrecoveries)


}


console.log('After')