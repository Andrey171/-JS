let carArray = [{
        url:"https://avatars.mds.yandex.net/i?id=854651151b925618e4653f1b5fd0955c-5419333-images-thumbs&n=13",
        title: "Белый Touareg"
      },
    {
        url:"https://avatars.mds.yandex.net/i?id=452e2802e89d2edde11f1ba12ab9cf5778a1ad46-9107657-images-thumbs&n=13",
        title: "Черный Touareg"
      },
    {
        url:"https://avatars.mds.yandex.net/get-autoru-vos/2156435/f9cca49922cf4ce24e918441a50823f1/1200x900",
        title: "Коричневый Touareg"
      },
    {
        url:"https://hdpic.club/uploads/posts/2022-01/1643326858_46-hdpic-club-p-folksvagen-tuareg-nf-79.jpg",
        title: "Серый Touareg"
      }
];

const img = document.querySelector(".images");
const sliderArrows = document.querySelector(".arrows");
const wordPicture = document.querySelector(".picture_word");
const dots = document.querySelector(".dots_slider");

initImages();
initArrows();
initTitles();
link_picture();
dots_slider();

function initImages() {
  carArray.forEach((image, index) => {
    let imageDiv = `<div class="img n${index} ${index === 0 ? "active" : ""}"" style="background-image:url(${carArray [index].url});" data-index="${index}"></div>`;
    img.innerHTML += imageDiv;
  });
}

function initArrows() {
  sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +img.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("slider_left")) {
        nextNumber = curNumber === 0? carArray.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === carArray.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function moveSlider(num){
  img.querySelector(".active").classList.remove("active");
  img.querySelector(".n"+num).classList.add("active");
  // wordPicture.querySelector(".link_picture_after").classList.remove("link_picture_after");
  // wordPicture.querySelector(".n"+num).classList.add("link_picture_after");
  dots.querySelector(".dots_after").classList.remove("dots_after");
  dots.querySelector(".n"+num).classList.add("dots_after");
  changeTitle(num);
}

function initTitles() {
  let titleDiv = `<div class="images-title">${carArray[0].title}</div>`;
  img.innerHTML += titleDiv;
}
function changeTitle(num) {
  let sliderTitle = img.querySelector(".images-title");
  sliderTitle.innerText = carArray[num].title;
}

function link_picture(){
  carArray.forEach((image, index) => {
    let link = `<div class = "link_picture n${index} " data-index="${index}"> ${carArray[index].title}</div>`;
    wordPicture.innerHTML +=link;
  })
  wordPicture.querySelectorAll(".link_picture").forEach(link =>{
    link.addEventListener("click", ()=>{
      moveSlider(link.dataset.index)
    })
  })
}

function dots_slider(){
  carArray.forEach((image, index) => {
    let sliderDots = `<div class = "dots n${index} ${index ===0 ? "dots_after":""}"" data-index="${index}" ></div>`;
    dots.innerHTML +=sliderDots; 
  }) 
  dots.querySelectorAll(".dots").forEach(dots_item =>{
    dots_item.addEventListener("click", ()=>{
      moveSlider(dots_item.dataset.index);
    })
  })
}




  
