//从json文件中导入图片
const img1 = document.querySelectorAll('#img1');
const img1Arr = Array.from(img1);

fetch('./data.json').then(response => response.json())
  .then(data => {
    img1Arr.forEach(img => {
      img.src = data.imgs.img1
    });
    document.getElementsByClassName('section1')[0].style.backgroundImage = `url(${data.imgs.img2})`;
    for (let i = 3; i < 6; i++) {
      document.getElementById(`img${i}`).src = data.imgs[`img${i}`];
    }
    document.getElementById(`img6`).src = data.imgs[`img6`];
    document.getElementsByClassName('section5')[0].style.backgroundImage = `url(${data.imgs.img7})`;
    for (let i = 8; i < 11; i++) {
      document.getElementById(`img${i}`).src = data.imgs[`img${i}`];
    }
})

//实现走马灯效果
const container = document.getElementsByClassName('section1-text')[0]
const items = document.getElementsByClassName('section1-text-item');
let itemWidth = 0
for (let i = 0; i < items.length; i++) {
  itemWidth += items[i].offsetWidth;
} 
let position = 0;
function scroll() {
  position -= 1;
  if (position < -(itemWidth/4)) {
    position = 0;
  }
  container.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(scroll);
}
scroll();

//动态生成section3内容
const section3Content = document.getElementsByClassName('section3-content-group')[0];
fetch('./data.json').then(response => response.json())
  .then(data => {
    const section3 = data.section3;
    section3.forEach(item => {
      let html = `
      <div class="section3-content-item">
          <div class="section3-content-item-img"><img src="${item.img}" alt="" style="width: 80px;"></div>
          <div class="section3-content-item-num">${item.num}</div>
          <div class="section3-content-item-name">${item.name}</div>
      </div>
      `
      section3Content.innerHTML += html;
    })
  })


//动态生成section6内容
const section6 = document.getElementsByClassName('section6')[0];
fetch('./data.json').then(response => response.json())
  .then(data => {
    const section6Data = data.section6; 
    section6Data.forEach((item, index) => {
      let html = `
      <div class="section6-item ${ item.reverse && 'column-reverse'}">
          <img src="${item.img}" alt="" style="width: 357px;">
          <div class="section6-item-text">${item.text}</div>
      </div>
      `
      section6.innerHTML += html;
    })
  })

//抽屉开关功能
const drawerCloseBtn = document.getElementsByClassName('drawer-header-btn')[0];
const drawerContent = document.getElementsByClassName('drawer-cover')[0];
const drawer = document.getElementsByClassName('drawer')[0];
drawerCloseBtn.addEventListener('click', () => {
  drawerContent.style.width = '0%';
  drawer.style.width = '0px';
})

drawerContent.addEventListener('click', (e) => {
  if (e.target === drawerContent) {
    drawerContent.style.width = '0%';
    drawer.style.width = '0px';
  }
})

const drawerOpenBtn = document.getElementsByClassName('header-btn2')[0];
drawerOpenBtn.addEventListener('click', () => {
  drawerContent.style.width = '100%';
  drawer.style.width = 400 + 'px';
})

//轮播图
const section7Img = document.querySelectorAll('.section7-content-img img');
fetch('./data.json').then(response => response.json())
  .then(data => {
    const section7Data = data.section7; 
    section7Data.forEach((item, index) => {
      section7Img[index].src = item.img;
    })
  })

let slideIndex = 0;
showSlides(); 
function showSlides() {
  const slides = document.getElementsByClassName("section7-content-item");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 105}%)`;
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;  
  setTimeout(showSlides, 1000); 
}






