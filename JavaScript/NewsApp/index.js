console.log("index.js file")
//46206dc6222848bdb527c913412d2919

let apikey = "46206dc6222848bdb527c913412d2919"
let source = 'bbc-news'
var url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`
fetchData(url)
let newsCard = document.getElementById("news_grid")

document.querySelector("#search > input").addEventListener("keypress", (event) => {
    searchInput = event.key
    var searchUrl = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apikey}`
    if(event.code == "Enter")
        fetchData(searchUrl)
})

document.querySelector("#search > button").addEventListener("click", (event) => {
    searchInput = document.querySelector("#search > input").value
    var searchUrl = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apikey}`
    fetchData(searchUrl)
})

function fetchData(urlArg) {
    // Ajax get request
    const xhr = new XMLHttpRequest()
    xhr.open("GET", urlArg, true)
    // xhr.getResponseHeader('Content-type', 'application/json')
    xhr.onload = function () {
        if (this.status === 200) {
            let jsonData = JSON.parse(this.responseText)
            var allNews = ""
            console.log(jsonData.totalResults)
            console.log(jsonData.articles)
            var totalNews = jsonData.totalResults > 100 ? 50 : jsonData.totalResults;
            for(var i=0; i<totalNews; i++ ) {
                // console.log(jsonData.articles[i])
                let article = jsonData.articles[i]
                allNews += ` <div class="card" style="width: 18rem;" id="news_card">
                            <img src="${article.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${article.author}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" class="btn btn-primary">Read More</a>
                            </div>
                            
                        </div>`
            }
            newsCard.innerHTML = ""
            newsCard.innerHTML = allNews
        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()
}

