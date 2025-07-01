const boxes = document.querySelectorAll('.box');
    let total = 0;
    let isFirstClick = true;

    boxes.forEach((item) => {
      item.addEventListener('click', () => {
        if (isFirstClick) {
          const first = parseInt(boxes[0].innerText);
          const last = parseInt(boxes[boxes.length - 1].innerText);
          total = first + last;
          isFirstClick = false;
        } else {
          const clickedValue = parseInt(item.innerText);
          total += clickedValue;
        }
        item.innerText = total;
      });
    });