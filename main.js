let from = document.querySelector("form")
let searchInput = document.querySelector("#search-input")
let searchBtn = document.querySelector("#search-btn")
let _container = document.querySelector(".container")
let info = document.querySelector("#info")
let capital = document.querySelector("#capital-value")
let continent = document.querySelector("#continent-value")
let language = document.querySelector("#language-value")
let reigon = document.querySelector("#reigon-value")
let populations = document.querySelector("#populations-value")
let currency = document.querySelector("#currency-value")
let fullName = document.querySelector("h1")
let flag = document.querySelector("#flag")


from.addEventListener("submit", function (event) {
    event.preventDefault()
    let inputValue = searchInput.value.trim()
    if (searchInput.value && inputValue) {
        try {
            let url = `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`

            fetch(url).then((response) => response.json())
                .then((data) => {
                    let languages = ""
                    Object.values(data[0].languages).forEach(function (i) {
                        languages += `${i}, `
                    })
                    console.log(data[0].name.common)
                    capital.innerHTML = data[0].capital[0]
                    continent.innerHTML = data[0].continents[0]
                    language.innerHTML = languages
                    reigon.innerHTML = data[0].subregion
                    populations.innerHTML = data[0].population
                    currency.innerHTML = Object.values(data[0].currencies)[0].name
                    fullName.innerHTML = data[0].name.official
                    flag.setAttribute("src", data[0].flags.svg)
                    flag.setAttribute("alt", `${data[0].name.common} flag`)
                })
            info.style.display = "block"
            _container.style.height = "450px"
        } catch (error) {
            alert("Something went wrong")
        }
    }
})