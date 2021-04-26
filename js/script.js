'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
    

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: green; width: 400px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('туту был я');

 div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);оно же только старая версия

// wrapper.prepend(div);вставка в начале

// hearts[0].before(div);вставка перед

// hearts[0].after(div);вставка перед

// wrapper.insertBefore(div, hearts[0]); вставка перед конкретным элементом *старая версия

// circles[0].remove();удаление элемента
// wrapper.removeChild(hearts[1]);удаление конкретного элемента *старая версия

// hearts[0].replaceWith(circles[0]); замена элемента на другой(второй пропадает)
// wrapper.replaceChild(circles[0], hearts[0]); замена одного элта на другой *старая версия

div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "hello";

div.insertAdjacentHTML("afterend", '<h2>hello</h2>');




