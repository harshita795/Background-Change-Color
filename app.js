const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['#cd5c5c','green','#fffof5','#add8e6','pink','gray','purple','cyan','fuchsia','brown','coral','crimson','indigo','teal','olive','maroon','antiqueWhite','azure','beige','cadetBlue','chocolate','DarkSlateBlue'];


body.style.backgroundColor = "#ffe4e1";

button.addEventListener('click', changeB)

function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex];

}



