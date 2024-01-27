let scene = document.querySelector(".scene");
let box = document.querySelector(".box");
let right_header = document.querySelector(".right_header");
let main_slogan = document.querySelector(".text2");
let global_filter = document.querySelector(".global_filter");
let global_img = document.querySelector(".global_img");

let deg = 0;
let w = document.querySelector("body").clientWidth;
let h = document.querySelector("body").clientHeight;
let elementW = 340;
let elementH = 188;

const settings = {
  logoScale: 0.45,
};

// Turning on click function
scene.addEventListener("click", () => {
  // Turning
  deg -= 360;
  box.style.transform = `
  
  translateY(-${h / 2 - elementH / (2 / logoSize()) - 15}px) 
  translateX(-${w / 2 - elementW / (2 / logoSize()) - 15}px)
  rotateY( ${deg}deg)
  scale(${logoSize() * 100}%)
  
  `;

  // Moming
});

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".box__face--front").style.backgroundImage =
      "url(./card2.png)";
    box.style.boxShadow = "none";
  }, 500);
  global_filter.style.backgroundColor = "rgba(0,0,0,0)";

  // Turning
  deg -= 360;

  right_header.style.transform = `
  
  translateY(-${h / 2 - elementH / (2 / logoSize()) - 15}px) 
  translateX(${w / 2 - elementW / (2 / logoSize()) - 15}px)
  scale(${logoSize() * 100}%)
  `;

  setTimeout(() => {
    right_header.style.transition = "1s";
    right_header.style.opacity = "80%";
  }, 2000);
  setTimeout(() => {
    global_img.style.transition = "1s";
    global_img.style.opacity = "100%";
  }, 2500);
  setTimeout(() => {
    // main_slogan.style.transition = "1s";
    // main_slogan.style.opacity = "80%";
    sloganEffect();
  }, 3000);

  box.style.transform = `
  
  translateY(-${h / 2 - elementH / (2 / logoSize()) - 15}px) 
  translateX(-${w / 2 - elementW / (2 / logoSize()) - 15}px)
  rotateY(${deg}deg)
  scale(${logoSize() * 100}%)
  `;

  if (deg % 180 == 0 && deg % 360 != 0)
    box.style.boxShadow = "-5px 5px 15px -4px rgba(0,0,0,0.5)";
  if (deg % 360 == 0) box.style.boxShadow = "5px 5px 15px -4px rgba(0,0,0,0.5)";
};

function logoSize() {
  return (w * settings.logoScale) / elementW;
}

logoSize();

function sloganEffect() {
  let main = document.querySelector(".slogan");
  main.style.opacity = "100%";

  let slogans = [...main.innerHTML];
  main.innerHTML = "";

  let word = document.createElement("div");
  word.classList.add("word");
  slogans.forEach((item, index) => {
    if (index == 0) {
      let voi = document.createElement("div");
      voi.style.display = "none";
      main.appendChild(voi);
    }
    if (item == " ") {
      let spread = document.createElement("div");
      spread.classList.add("letter");
      spread.innerHTML = "&nbsp";
      main.appendChild(word);
      main.appendChild(spread);
      word = document.createElement("div");
      word.classList.add("word");
    } else if (item != "") {
      let letter = document.createElement("div");
      letter.classList.add("letter");
      letter.innerHTML = item;
      setTimeout(() => {
        letter.style.opacity = "100%";
      }, index * 80);
      word.appendChild(letter);
    }
    if (index + 1 == slogans.length) {
      main.appendChild(word);
    }
  });
}
