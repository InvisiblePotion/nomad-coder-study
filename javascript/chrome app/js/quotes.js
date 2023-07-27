const quotes = [
    {
        quote: "대충 명언 1",
        author: "대충 저자 1"
    },
    {
        quote: "대충 명언 2",
        author: "대충 저자 2"
    },
    {
        quote: "대충 명언 3",
        author: "대충 저자 3"
    },
    {
        quote: "대충 명언 4",
        author: "대충 저자 4"
    },
    {
        quote: "대충 명언 5",
        author: "대충 저자 5"
    },
    {
        quote: "대충 명언 6",
        author: "대충 저자 6"
    },
    {
        quote: "대충 명언 7",
        author: "대충 저자 7"
    },
    {
        quote: "대충 명언 8",
        author: "대충 저자 8"
    },
    {
        quote: "대충 명언 9",
        author: "대충 저자 9"
    },
    {
        quote: "대충 명언 10",
        author: "대충 저자 10"
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;