function toggleMenu() {
    const menu=document.querySelector('.menu-links');
    const icon=document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

var img=document.getElementById('oneImg').addEventListener('mouseover',()=>{
    document.getElementById('oneImg').src="./assets/project-2.png"
})

var img=document.getElementById('oneImg').addEventListener('mouseleave',()=>{
    document.getElementById('oneImg').src="./assets/project-1.png"
})