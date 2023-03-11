const scroller = document.querySelector('.scroller');

window.addEventListener('scroll', () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
// Start of slider's part
const toRight = document.querySelector('.to-right');
const toLeft = document.querySelector('.to-left');
const imgs = document.querySelectorAll('.landing .image > img');
const bullets = document.querySelectorAll('.bullets li');
let transform = 0;
toRight.addEventListener('click', () => {
  if (transform == -200) {
    transform = 0;
    imgs.forEach((img) => {
      img.style.cssText = `transform: translateX(${transform}%);`;
    });
    document.querySelector('.bullets li.active').classList.remove('active');
    bullets[0].classList.add('active');
    bul();
    return;
  }
  transform -= 100;
  imgs.forEach((img) => {
    img.style.cssText = `transform: translateX(${transform}%);`;
  });
  bul();
});
toLeft.addEventListener('click', () => {
  if (transform == +200) {
    transform = 0;
    imgs.forEach((img) => {
      img.style.cssText = `transform: translateX(${transform}%);`;
    });
    document.querySelector('.bullets li.active').classList.remove('active');
    bullets[0].classList.add('active');
    bul();
    return;
  } else if (transform == 0) {
    transform = -200;
    imgs.forEach((img) => {
      img.style.cssText = `transform: translateX(${transform}%);`;
    });
    document.querySelector('.bullets li.active').classList.remove('active');
    bullets[2].classList.add('active');
    bul();
    return;
  }
  transform += 100;
  imgs.forEach((img) => {
    img.style.cssText = `transform: translateX(${transform}%);`;
    bul();
  });
});
bullets.forEach((e, i) => {
  e.addEventListener('click', () => {
    imgs.forEach((img) => {
      transform = -(i * 100);
      img.style.cssText = `transform: translateX(${transform}%);`;
      bul();
    });
  });
});

function bul() {
  clearInterval(changeBg);
  document.querySelector('.bullets li.active').classList.remove('active');
  bullets[transform / -100].classList.add('active');
  changeBg = setInterval(() => {
    toRight.click();
  }, 3000);
}

let changeBg = setInterval(() => {
  toRight.click();
}, 3000);
// end of slider's part
let topUp = `<i class="fa-solid fa-arrow-up"></i>`;
let btnUp = document.createElement('div');
btnUp.classList.add('srol-top');
btnUp.style.cssText = `
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
border-radius: 50%;
color: white;
font-size: 30px;
background-color: var(--main-color);
position: fixed;
right: 30px;
bottom: 30px;
cursor: pointer;
z-index: 999;
transform: scale(0);
transition: .1s`;
btnUp.innerHTML = topUp;
document.body.append(btnUp);
btnUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
document.body.onscroll = () => {
  if (scrollY >= 900) {
    btnUp.style.transform = 'scale(1)';
  } else {
    btnUp.style.transform = 'scale(0)';
  }
};
