console.log('Client side javascript file is loaded!')



const formSelector = document.querySelector('form')
const searchInput = document.querySelector('input')
const outputWeather1 = document.querySelector('#outputWeather1')
const outputWeather2 = document.querySelector('#outputWeather2')
const outputWeather3 = document.querySelector('#outputWeather3')

formSelector.addEventListener('submit', (e)=>{

    e.preventDefault()
    searchValue = searchInput.value

    fetch("/weather?address="+searchValue).then((response)=>{
        response.json().then((data)=>{
            outputWeather1.textContent = data.location
            outputWeather2.textContent = data.temperature
            outputWeather3.textContent = data.rainPossibility
        })
    })

    

})