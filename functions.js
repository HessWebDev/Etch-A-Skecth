const container = document.querySelector(".container");

let divs = [];
let color = 'blue';

let gridValue = document.getElementById('myRange');
console.log(gridValue.vaue);
gridValue.addEventListener('input', () =>{
    clearGrid();
    //document.getElementsByName('div').style = `height: (500/${gridValue.value}) width: (500/${gridValue.value})`;
})
console.log(gridValue.value);
//document.getElementsByTagName('div').style = `height: 500/${gridValue}, width: 500/${gridValue}`;

function clearGrid(){
    const divs = document.querySelectorAll('.box');

    divs.forEach(box => box.remove());


    drawGrid();
    
}
function drawGrid(){
for(let i = 0; i < gridValue.value*gridValue.value; i++){
    
    const div = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${gridValue.value}, 1fr)`;
    container.appendChild(div).classList.add('box');
    
}
appendDiv();
}

function appendDiv(){
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = color;
    }));
        

    
}


drawGrid();


/*function unpop(element){
    let l = element; 
    if(l<256){
        console.log('Im here');
        document.getElementById(`Class${element}`).style = "background-color: white";
    }
}
function pop(element){
    let l = element;
    if(l < 256){
    document.getElementById(`Class${element}`).style = " transform: scale(1.2); border-color: #ffc600; box-shadow: 0 0 1rem #ffc600; background-color: white";
    l++
    console.log(l);
    if(l > 1){
        document.getElementById(`Class${element-1}`).style = "background-color: white";
    }
    setTimeout( ()=>{
        console.log(l);
        unpop(l);
    }, 30);
    setTimeout( ()=>{
        console.log(l);
        pop(l);
    }, 30);
    }else{
        document.getElementById('Class255').style = "background-color: white; border: 0px";
    }
}


    pop(0);*/




document.getElementById("Erase").addEventListener('click', ()=>{


    color = 'white';

})

document.getElementById("Draw").addEventListener('click', ()=>{


    color = 'blue';

})

document.getElementById("Clear").addEventListener('click', ()=>{

    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor = 'white');
   

})

