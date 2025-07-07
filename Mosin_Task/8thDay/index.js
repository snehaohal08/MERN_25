const boxes = document.getElementsByClassName('box')
var cnt=1
// convert HTMLCollection to Array and iterate through each box thats why we use Array.from(boxes)
// or we can also use spred operator [...boxes]
Array.from(boxes).forEach(item => {
    item.addEventListener('click', () => {
        if (cnt == 1) {
            item.style.backgroundColor = "orange";
            cnt=cnt+1;
        } else if (cnt == 2) {
            item.style.backgroundColor = "white";
            cnt=cnt+1;
        } else if (cnt == 3) {
            item.style.backgroundColor = "green";
            cnt=cnt+1;
        } else {
            cnt = 1; 
        }
    });
});