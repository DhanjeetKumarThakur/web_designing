let titleDiv = document.getElementById('title')
console.log(titleDiv.innerText)
//titleDiv.style.textAlign ='center'
titleDiv.innerHTML = '<h1>Click Counter</h1>'

// let redButton = document.getElementById('redBtn')
// let yellowButton = document.getElementById('yellowBtn')
// let greenButton = document.getElementById('greenBtn')

// redButton.onclick = () => console.log('You clicked Red Button')
// yellowButton.onclick = () => console.log('You clicked yellow Button')
// greenButton.onclick = () => console.log('You clicked Green Button')

const squares = document.querySelectorAll('.btn')
squares.forEach(square => console.log(square.value))

//let create a object to store the count
let timesClicked = {'red':0, 'yellow':0, 'green':0}
squares.forEach(square=>{
    square.onclick = () => {
        timesClicked[square.value] +=1; //increment value by 1
        square.innerText = timesClicked[square.value]; //pass the value 
    }
})

function clearAll(){
    squares.forEach(obj => {
        obj.innerText=''
        timesClicked[obj.value] =0
    }
    )
} 
