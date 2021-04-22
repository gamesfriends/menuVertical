const menuCompItem = document.getElementById('menuComponent');
const menuNodeItem = document.getElementById('menuNodeJs');
const menuCItem = document.getElementById('menuCSharp');

const menuComp = document.getElementById('menuComponent-menu');
const menuNodeJs = document.getElementById('menuNodeJs-menu');
const menuCSharp = document.getElementById('menuCSharp-menu');

menuCompItem.addEventListener('click', () => {
    if (menuComp.classList.contains('menuVisible')) {
        menuComp.classList.remove('menuVisible');
    } else {
        menuComp.classList.add('menuVisible');
    }
});

menuNodeItem.addEventListener('click', () => {
    if (menuNodeJs.classList.contains('menuVisible')) {
        menuNodeJs.classList.remove('menuVisible');
    } else {
        menuNodeJs.classList.add('menuVisible');
    }
});

menuCItem.addEventListener('click', () => {
    if (menuCSharp.classList.contains('menuVisible')) {
        menuCSharp.classList.remove('menuVisible');
    } else {
        menuCSharp.classList.add('menuVisible');
    }
});