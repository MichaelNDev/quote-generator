let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("btn")

const url = "https://api.quotable.io/random"
// const url = "https://animechan.vercel.app/api/random"

let getQuote = () => {
    fetch(url)

        // .then(response => response.json())
        // .then(item => {
        //     console.log(item.character)
        //     console.log(item.quote)
        //     console.log(item)
        //     quote.innerText = item.quote
        //     author.innerText = item.character
            
        // })



        .then(data => data.json())
        .then(item => {
            quote.innerText = item.content
            author.innerText = item.author
        })
}

window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)