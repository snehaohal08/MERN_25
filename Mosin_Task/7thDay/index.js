const boxes = document.querySelectorAll('.box');
const cnt =document.querySelector('.container2');
boxes.forEach((box=>{

    box.addEventListener('click',()=>{
        cnt.appendChild(box);
    })
}))