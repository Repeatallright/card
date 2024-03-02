let scene = document.querySelector(".scene");
let box = document.querySelector(".box");
let right_header = document.querySelector(".right_header");
let main_slogan = document.querySelector(".text2");
let global_filter = document.querySelector(".global_filter");
let global_img = document.querySelector(".global_img");
let contentBclock = document.querySelector(".content");

let deg = 0;
let w = document.querySelector("body").clientWidth;
let h = document.querySelector("body").clientHeight;
let elementW = 340;
let elementH = 188;

const settings = {
  logoScale: 0.45,
};

function setInitialLogoSize() {
  box.style.transform = `
  translateY(0)
  translateX(0)
  rotate(0)
  scale(${(w / elementW) * 100}%)`;
}

// Turning on click function
let sceneEventFunction = () => {
  // Turning
  box.style.transform = `
  scale(${logoSize() * 100}%)
  `;

  // Moming
};

let windowOnloadFunction = () => {
  setTimeout(() => {
    document.querySelector(".box__face--front").style.backgroundImage =
      "url(./card2.png)";
    box.style.boxShadow = "none";
  }, 500);
  global_filter.style.backgroundColor = "rgba(0,0,0,0)";

  // Turning
  deg -= 360;

  box.style.transform = `
  translateY(-${h / 2 - elementH / (2 / logoSize()) - 15}px)
  translateX(-${w / 2 - elementW / (2 / logoSize()) - 15}px)
  rotateY(${deg}deg)
  scale(${logoSize() * 100}%)
  `;

  right_header.style.transform = `
  translateY(-${h / 2 - elementH / (2 / logoSize()) - 15}px)
  translateX(${w / 2 - elementW / (2 / logoSize()) - 15}px)
  scale(${logoSize() * 100}%)
  `;
  ////////////////
  setTimeout(() => {
    right_header.style.transition = "1s";
    right_header.style.opacity = "80%";
  }, 2000);

  setTimeout(() => {
    global_img.style.transition = "1s";
    global_img.style.opacity = "100%";
  }, 2500);

  setTimeout(() => {
    sloganEffect(contentBclock, "slogan", "Welcome to the party");
    let sloganBlock = document.querySelector(".slogan");
    sloganBlock.style.top = elementH * logoSize() * 1.4 + "px";
  }, 3000);

  if (deg % 180 == 0 && deg % 360 != 0)
    box.style.boxShadow = "-5px 5px 15px -4px rgba(0,0,0,0.5)";
  if (deg % 360 == 0) box.style.boxShadow = "5px 5px 15px -4px rgba(0,0,0,0.5)";
};

function logoSize() {
  return (w * settings.logoScale) / elementW;
}

function sloganEffect(parent, element, text, func = 0) {
  let main = document.createElement("div");
  main.classList.add(element);
  parent.appendChild(main);

  let slogans = [...text];

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
      }, index * 40);
      word.appendChild(letter);
    }
    if (index + 1 == slogans.length) {
      main.appendChild(word);
    }
  });
}

function checkSize() {
  if (document.querySelector("body").clientWidth < 800) {
    contentBclock.style.display = "flex";
    setInitialLogoSize();
    setTimeout(() => {
      box.style.transition = "2s";
      scene.addEventListener("click", sceneEventFunction);
      windowOnloadFunction();
    }, 100);
  } else {
    setTimeout(() => {
      contentBclock.innerHTML = "";
      contentBclock.style.display = "flex";
      let errorBlock = document.createElement("div");
      errorBlock.classList.add("error_window_size");
      contentBclock.appendChild(errorBlock);
      sloganEffect(
        contentBclock,
        "error_window_size",
        "Error: Your page is too wide ;)"
      );
    }, 100);
  }
}

//////////////////////////// ONLOAD ////////////////////////////

window.onload = checkSize;
