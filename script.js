// Select both buttons
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// Add event listeners for btn2 hover
btn2.addEventListener('mouseenter', () => {
    btn1.style.color = 'black';
    btn1.style.backgroundColor = '#ffde8a';
    btn1.style.outline = '1px solid white';
});

btn2.addEventListener('mouseenter', () => {
    btn2.style.color = 'white';
    btn2.style.backgroundColor = 'black';
    btn2.style.outline = '1px solid #ffde8a';
});
btn2.addEventListener('mouseleave', () => {
    btn2.style.color = 'black';
    btn2.style.backgroundColor = '#ffde8a';
    btn2.style.outline = '1px solid white';
});

btn2.addEventListener('mouseleave', () => {
    btn1.style.color = 'white';
    btn1.style.backgroundColor = 'black';
    btn1.style.outline = '1px solid #ffde8a';
});

// Add event listeners for btn1 hover to override changes
btn1.addEventListener('mouseenter', () => {
    btn1.style.color = 'black';
    btn1.style.backgroundColor = '#ffde8a';
    btn1.style.outline = '1px solid white';
});

btn1.addEventListener('mouseenter', () => {
    btn2.style.color = 'white';
    btn2.style.backgroundColor = 'black';
    btn2.style.outline = '1px solid white';
});

btn1.addEventListener('mouseleave', () => {
    btn2.style.color = 'black'; // Keep the default style here
    btn2.style.backgroundColor = '#ffde8a';
    btn2.style.outline = '1px solid white';
});

btn1.addEventListener('mouseleave', () => {
    btn1.style.color = 'white'; // Keep the default style here
    btn1.style.backgroundColor = 'black';
    btn1.style.outline = '1px solid #ffde8a';
});


//skills
let skillimg = document.getElementById('skillimg');


let front = document.getElementById('frontend');
let displayer1 = document.getElementById('displayer1');

front.addEventListener('click', ()=> {
    displayer1.classList.add('activedisplayer');
    front.classList.add('active');
    displayer2.classList.remove('activedisplayer');
    back.classList.remove('active');
    displayer3.classList.remove('activedisplayer');
    programming.classList.remove('active');
    displayer4.classList.remove('activedisplayer');
    softskill.classList.remove('active');
    displayer1.style.visibility = 'visible';
    displayer2.style.visibility = 'hidden';
    displayer3.style.visibility = 'hidden';
    displayer4.style.visibility = 'hidden';

    skillimg.style.display = 'none';
})

let back = document.getElementById('backend');
let displayer2 = document.getElementById('displayer2');

back.addEventListener('click', ()=> {
    displayer2.classList.add('activedisplayer');
    back.classList.add('active');
    displayer1.classList.remove('activedisplayer');
    front.classList.remove('active');
    displayer3.classList.remove('activedisplayer');
    programming.classList.remove('active');
    displayer4.classList.remove('activedisplayer');
    softskill.classList.remove('active');
    displayer1.style.visibility = 'hidden';
    displayer3.style.visibility = 'hidden';
    displayer4.style.visibility = 'hidden';
    displayer2.style.visibility = 'visible';

    skillimg.style.display = 'none';
})

let programming = document.getElementById('programming');
let displayer3 = document.getElementById('displayer3');

programming.addEventListener('click', ()=> {
    displayer3.classList.add('activedisplayer');
    programming.classList.add('active');
    displayer1.classList.remove('activedisplayer');
    front.classList.remove('active');
    displayer2.classList.remove('activedisplayer');
    back.classList.remove('active');
    displayer4.classList.remove('activedisplayer');
    softskill.classList.remove('active');
    displayer1.style.visibility = 'hidden';
    displayer2.style.visibility = 'hidden';
    displayer4.style.visibility = 'hidden';
    displayer3.style.visibility = 'visible';

    skillimg.style.display = 'none';
})

let softskill = document.getElementById('softskill');
let displayer4 = document.getElementById('displayer4');

softskill.addEventListener('click', ()=> {
    displayer4.classList.add('activedisplayer');
    softskill.classList.add('active');
    displayer1.classList.remove('activedisplayer');
    front.classList.remove('active');
    displayer2.classList.remove('activedisplayer');
    back.classList.remove('active');
    displayer3.classList.remove('activedisplayer');
    programming.classList.remove('active');
    displayer1.style.visibility = 'hidden';
    displayer2.style.visibility = 'hidden';
    displayer3.style.visibility = 'hidden';
    displayer4.style.visibility = 'visible';

    skillimg.style.display = 'none';
})

//part 3

let projectdefault = document.getElementById('projectdefault');

let pr1 = document.getElementById('pr1');
let prdisplay1 = document.getElementById('prdisplay1');

pr1.addEventListener('click', ()=> {
    prdisplay1.classList.add('activedisplayer2');
    pr1.style.animationPlayState = 'paused';

    prdisplay2.classList.remove('activedisplayer2');
    pr2.style.animationPlayState = 'running';
    prdisplay3.classList.remove('activedisplayer2');
    pr3.style.animationPlayState = 'running';
    prdisplay4.classList.remove('activedisplayer2');
    pr4.style.animationPlayState = 'running';

    projectdefault.style.display = 'none';
})


let pr2 = document.getElementById('pr2');
let prdisplay2 = document.getElementById('prdisplay2');

pr2.addEventListener('click', ()=> {
    prdisplay2.classList.add('activedisplayer2');
    pr2.style.animationPlayState = 'paused';

    prdisplay1.classList.remove('activedisplayer2');
    pr1.style.animationPlayState = 'running';
    prdisplay3.classList.remove('activedisplayer2');
    pr3.style.animationPlayState = 'running';
    prdisplay4.classList.remove('activedisplayer2');
    pr4.style.animationPlayState = 'running';

    projectdefault.style.display = 'none';
})


let pr3 = document.getElementById('pr3');
let prdisplay3 = document.getElementById('prdisplay3');

pr3.addEventListener('click', ()=> {
    prdisplay3.classList.add('activedisplayer2');
    pr3.style.animationPlayState = 'paused';

    prdisplay2.classList.remove('activedisplayer2');
    pr2.style.animationPlayState = 'running';
    prdisplay1.classList.remove('activedisplayer2');
    pr1.style.animationPlayState = 'running';
    prdisplay4.classList.remove('activedisplayer2');
    pr4.style.animationPlayState = 'running';

    projectdefault.style.display = 'none';
})


let pr4 = document.getElementById('pr4');
let prdisplay4 = document.getElementById('prdisplay4');

pr4.addEventListener('click', ()=> {
    prdisplay4.classList.add('activedisplayer2');
    pr4.style.animationPlayState = 'paused';

    prdisplay2.classList.remove('activedisplayer2');
    pr2.style.animationPlayState = 'running';
    prdisplay3.classList.remove('activedisplayer2');
    pr3.style.animationPlayState = 'running';
    prdisplay1.classList.remove('activedisplayer2');
    pr1.style.animationPlayState = 'running';

    projectdefault.style.display = 'none';
})

