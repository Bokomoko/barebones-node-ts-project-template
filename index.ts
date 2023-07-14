
// index.ts
import cheerio from "cheerio";
import axios from "axios";

const username = "joão eurico de aguiar lima";

// Get the user's profile page
const response = await axios.get(`https://www.quora.com/profile/${username}`);

// Parse the HTML of the user's profile page
const $ = cheerio.load(response.data);

// Get the user's answers
const answers = $(".answer");

// Loop through the user's answers
answers.each(function () {
  // Get the answer's title
  const title = $(this).find(".answer-title").text();

  // Get the answer's body
  const body = $(this).find(".answer-body").text();

  // Print the answer's title and body
  console.log(`Title: ${title}`);
  console.log(`Body: ${body}`);
});
