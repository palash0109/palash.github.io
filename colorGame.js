var numSquares = 6;
var color = generateRandomColor(numSquares);
var square = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var colorSelected = selectColor();
var message = document.querySelector('#messageDisplay');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

colorDisplay.textContent = colorSelected;

easyBtn.addEventListener('click',function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    h1.style.backgroundColor = "steelblue";
    numSquares = 3;
    color = generateRandomColor(numSquares);
    colorSelected = selectColor();
    colorDisplay.textContent = colorSelected;
    for(var i=0;i<square.length;i++)
    {
        if(color[i])
        {
            square[i].style.backgroundColor = color[i];
        }
        else
        {
            square[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener('click',function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    h1.style.backgroundColor = "steelblue";
    numSquares = 6;
    color = generateRandomColor(numSquares);
    colorSelected = selectColor();
    colorDisplay.textContent = colorSelected;
    for(var i=0;i<square.length;i++)
    {
        square[i].style.backgroundColor = color[i];
        square[i].style.display = "block";
    }
    
})

for(var i=0;i<square.length;i++)
{
    square[i].style.backgroundColor = color[i];

    square[i].addEventListener('click', function(){
        var colorPicked = this.style.backgroundColor;
        if(colorPicked === colorSelected)
        {
            changeColor(colorSelected);
            message.textContent = "Correct!";
            h1.style.backgroundColor = colorPicked;
            resetButton.textContent = "Play Again?";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!"; 
        }
    })
}

function changeColor(color)
{
    for(var j=0;j<square.length;j++)
    {
        square[j].style.backgroundColor = color;
    }
}

function selectColor(){
    var random = Math.floor(Math.random()*color.length);
    return color[random]
}

function generateRandomColor(num)
{
    //declare a array
    var arr = [];
    // loop through
    for(var i=0;i<num;i++)
    {
        //generate random color
        arr.push(randomColor());
    }
    //return the array
    return arr;

}

function randomColor()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
    
}

resetButton.addEventListener('click', function(){
    resetButton.textContent = 'New Colors';
    //generate random colors
    color = generateRandomColor(numSquares);
    //select a random color
    colorSelected = selectColor();
    // change colorDisplay
    colorDisplay.textContent = colorSelected;
    // change color of squares
    for(var i=0;i<square.length;i++)
    {
        square[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = '';

});

