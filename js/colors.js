const left_Side = document.querySelector('.left_Side');
const right_Side = document.querySelector('.right_Side');
const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    left_Side.classList.toggle('dark');
    right_Side.classList.toggle('dark');
}