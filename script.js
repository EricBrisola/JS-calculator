/*----------------changing colors for dark mode-------------*/

const darkMode = document.querySelector('.theme-changer')

darkMode.addEventListener('click', function () 
{
    const darkModeBtn = document.querySelector('.theme-changer')
    darkModeBtn.textContent === 'Dark mode' ? darkModeBtn.textContent = 'Light mode'
     : darkModeBtn.textContent = 'Dark mode'

    darkModeBtn.classList.toggle('theme-changer-dark')
    
    const container = document.querySelector('.container')
    container.classList.toggle('container-dark')

    const calculatorBody = document.querySelector('.all-content')
    calculatorBody.classList.toggle('all-content-dark')

    const title =  document.querySelector('.title')
    title.classList.toggle('title-dark')

    const numberBtns = document.querySelectorAll('.numbers-btn')
    numberBtns.forEach((btn) => btn.classList.toggle('numbers-btn-dark'))

    const functionBtns = document.querySelectorAll('.functions-btn')
    functionBtns.forEach((btn) => btn.classList.toggle('functions-btn-dark'))

})

/*----------------calculator functions----------------*/

const allButtons = document.querySelectorAll('.calc-keys')
const result = document.querySelector('#result')
const equal = document.querySelector('#equals')
const eraseInput = document.querySelector('#C')
const possibleKeys = ['(', ')', '-', '/', '*', '+', '.', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']


allButtons.forEach((btn) => btn.addEventListener('click', function (ev) 
{
   result.value += ev.currentTarget.dataset.value

}))

result.addEventListener('keydown', typeNumbers)
equal.addEventListener('click', calculate)

eraseInput.addEventListener('click', function () 
{
    result.value = ''
})


function calculate () 
{
    try
    {
        if(result.value === '') 
        {
            result.value = '0' 
        }
         else
         {
            result.value =  eval(result.value)

            if(result.value === 'Infinity') 
            {
                result.value = 'Non divisible by 0'
            }   
         } 
    }
     catch (error)
    {
        result.value = 'Error'
    }

}


function typeNumbers (btn) 
{
    btn.preventDefault()

    if(possibleKeys.includes(btn.key)) 
    {
        result.value += btn.key
    }
    
    if(btn.key === 'Enter') 
    {
       calculate()
    }

    if(btn.key === 'Backspace')
    {   
        result.value = result.value.slice(0,-1)
    }
}
