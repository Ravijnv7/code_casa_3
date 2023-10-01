let celciusInput = document.querySelector('#celcius>input')
let fahrenheitInput = document.querySelector('#fahrenheit>input')
let kevinInput = document.querySelector('#Kelvin>input')


let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

// celcius to fahrenheit  amd kelwin
celciusInput.addEventListener('input',function() {
    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    fahrenheitInput.value=roundNumber(fTemp)
    kevinInput.value=roundNumber(kTemp)
    
})

// faheenheit to celcius and kelvin
fahrenheitInput.addEventListener('input',function() {
    let fTemp=parseFloat(fahrenheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)*(5/9)+273.15

    celciusInput.value=roundNumber(cTemp)
    kevinInput.value=roundNumber(kTemp)
    
})

// kelvin to celciusInput;cius and fahrenheit
kevinInput.addEventListener('input',function() {
    let kTemp=parseFloat(kevinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(kTemp-273.15)*(9/5)+32

    celciusInput.value=roundNumber(cTemp)
    fahrenheitInput.value=roundNumber(fTemp)
    
})

btn.addEventListener('click',()=>{
    celciusInput.value=""
    fahrenheitInput.value=""
    kevinInput.value=""

}
)