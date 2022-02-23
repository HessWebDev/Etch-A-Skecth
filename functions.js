const container = document.getElementById("container");

let divs = [];
let color = 'blue';

for(let i = 0; i < 256; i++){
    
    divs[i] = document.createElement("div");
    divs[i].id = `Class${i}`;
    //divs[i].innerHTML = `${i}`;
    
}

for(let j = 0; j < 256; j++){

    container.appendChild(divs[j]);
    divs[j].addEventListener('mouseover', ()=>{

        document.getElementById(`Class${j}`).style.backgroundColor = color;
        
    })
    
}

function unpop(element){
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


    pop(0);




document.getElementById("Erase").addEventListener('click', ()=>{


    color = 'white';

})

document.getElementById("Draw").addEventListener('click', ()=>{


    color = 'blue';

})

document.getElementById("Clear").addEventListener('click', ()=>{


    for(let k = 0; k < 256; k++){

        document.getElementById(`Class${k}`).style.backgroundColor = 'White';
    }

})

