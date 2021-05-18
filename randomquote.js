/**
 * Going for Exceeds Expectations
 */

/**
 * Generate a random quote with supporting details
 * Change background color of page with each quote change
 * Refresh quote every 10 seconds
 */


/**
 * List of quotes
 * @typedef {Object} quote
 * @property {string} quote - the text of the quote
 * @property {string} source - the author
 * @property {string} citation - media quote is from
 * @property {number} year - year quote was written
 * @property {string[]} tags - theme tags for quote
 */
const quotes = [
    {quote: "Even the darkest night will end and the sun will rise.",
     source: "Victor Hugo",
     citation: "Les Miserables",
     year: 1862,
     tags: ["motivation", "inspiration"]
    },
    {quote: "What happened down in the dungeons between you and Professor Quirrell is a complete secret, so, naturally the whole school knows.",
     source: "J. K. Rowling",
     citation: "Harry Potter and the Sorcerer's Stone",
     year: 1997,
     tags: ["humor"]
    },
    {quote: "It can be very dangerous to see things from somebody else's point of view without the proper training.",
     source: "Douglas Adams",
     citation: "Mostly Harmless",
     year: 1992,
     tags: ["wisdom", "empathy"]
    },
    {quote: "You don't forget the face of the person who was your last hope.",
     source: "Suzanne Collins",
     citation: "The Hunger Games",
     year: 2008,
     tags: ["empathy"]
    },
    {quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
     source: "Maya Angelou",
     year: 2003,
     tags: ["empathy", "wisdom"]
    }
  ];
  
/**
 * Pulls a random quote object from quotes
 * @return {Object} Random quote object
 */
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * 5);
    return quotes[randomQuote];
    }

/**
 * Generates a random background color using rgb values and puts as body background color.
 * @return rgb({number},{number},{number})
 */
function changeBackgroundColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    }

/**
 * Prints a randomly chosen quote along with source, citation, year, and tags if available.
 * Changes the background color of the page to a random color with every quote.
 */
function printQuote() {
    let chosenQuote = getRandomQuote();
    let html = `<p class="quote">${chosenQuote.quote}</p>
                <p class="source">${chosenQuote.source}`;
    if (chosenQuote.hasOwnProperty("citation")) {
        html += `<span class="citation">${chosenQuote.citation}</span>`;
    }
    if (chosenQuote.hasOwnProperty("year")) {
        html += `<span class="year">${chosenQuote.year}</span>`;
    }
    if (chosenQuote.hasOwnProperty("tags")) {
        html += `<p class="tags">tags: `
        for (let i = 0; i < chosenQuote.tags.length; i++) {
        html += `<span>${chosenQuote.tags[i]} </span>`;
        }
        html += `</p>`
    }
    html += `</p>`;
    changeBackgroundColor();
    document.getElementById('quote-box').innerHTML = html;
    }

/**
 * Refreshes the quote & background shown every 10 seconds via refreshQuote function.
 */
function refreshQuote() {
    setInterval(printQuote, 10000);
}

//Calling function to refresh page
refreshQuote();

// Following is provided by Team Treehouse to trigger quote change on button click
document.getElementById('load-quote').addEventListener("click", printQuote, false);


