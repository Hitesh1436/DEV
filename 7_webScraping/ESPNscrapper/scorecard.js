let url =
  "https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const cheerio = require("cheerio");
const request = require("request");

request(url, function (error, response, html) {
  if (error) {
    console.error(error);
  } else {
    extractMatchDetails(html);
  }
});

function extractMatchDetails(html) {
  let $ = cheerio.load(html);

  let descString = $(".header-info .description");

  // console.log(descString)

  let descStringArr = descString.text().split(",");

  let venue = descStringArr[1].trim();
  let date = descStringArr[2].trim();

  let result = $(
    ".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span"
  ).text();

  console.log(venue);
  console.log(date);
  console.log(result);

  console.log(
    "----------------------------------------------------------------"
  );

  let innings = $(".card.content-block.match-scorecard-table>.Collapsible");

  let htmlString = "";

  for (let i = 0; i < innings.length; i++) {
      htmlString +=  $(innings[i]).html();
  }

  console.log(htmlString);
}
