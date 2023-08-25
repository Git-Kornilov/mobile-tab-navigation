'use strict';

const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

const hideAllClass = function () {
  contents.forEach(content => content.classList.remove('show'));
  listItems.forEach(item => item.classList.remove('active'));
};

listItems.forEach((item, indx) => {
  item.addEventListener('click', () => {
    hideAllClass();

    item.classList.add('active');
    contents[indx].classList.add('show');
  });
});
