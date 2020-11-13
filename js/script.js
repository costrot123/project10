
let firstImage = document.querySelector('#image1');


firstImage.onclick = () => {
  firstImage.setAttribute("src", "images/sunset3.jpg");
  firstImage.setAttribute("alt", "Trees during a sunset")
};


let para = document.querySelector('#p1');
let secondImage = document.querySelector('#image2');

secondImage.style.display = 'none';

para.onmouseover = () => {
  if (secondImage.style.display === 'none') {
    secondImage.style.display = 'block';
  } else {
    secondImage.style.display = 'none';
  }
};
