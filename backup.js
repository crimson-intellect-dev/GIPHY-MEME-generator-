const form = document.querySelector("form");
const imgURL = document.getElementById("img-url");
const topText = document.getElementById("text-on-top");
const bottomText = document.getElementById("text-on-bottom");
const memeArea = document.getElementById("meme-area");

form.addEventListener("submit", e => {
  e.preventDefault();
  let nURL = imgURL.value;
  let nTopText = topText.value;
  let nBottomText = bottomText.value;

  let newCol = document.createElement("div");
  newCol.classList.add("col-md-4", "col-12", "mb-4", "position-relative");

  let topPara = document.createElement("p");
  topPara.classList.add("position-absolute", "text", "top-position");
  topPara.innerText = nTopText;

  let bottomPara = document.createElement("p");
  bottomPara.classList.add("position-absolute", "text", "bottom-position");
  bottomPara.innerText = nBottomText;



  let imgTag = document.createElement("img");
  imgTag.classList.add("w-100", "h-100");
  imgTag.src = nURL;

  newCol.appendChild(topPara);
  newCol.appendChild(bottomPara);

  newCol.appendChild(imgTag);

  newCol.addEventListener("mouseenter", function (e) {
    // let img = e.target; // just added
    let overlay = document.createElement("div");
    // overlay.appendChild(img); // just added
    overlay.style.position = "position-absolute";
    overlay.classList.add("overlay");
    overlay.innerText = "X";
    // e.target.style.position = "position-relative";
    newCol.appendChild(overlay);


  });

  memeArea.append(newCol);


  // newImgDiv.innerHTML = `<div class="col-md-4 col-12 mb-4"><img class="w-100" src=${newURL} alt="Card image cap"></div>`;


  // newImgDiv.classList.add("col-4");
  // let newImgTag = document.createElement("img");
  // newImgTag.classList.add("img-fluid");
  // newImgTag.setAttribute("src", newURL);
  // newImgTag.src = newURL;
  // newImgDiv.appendChild(newImgTag);


  // imgURL.value = "";
  // topText.value = "";
  // bottomText.value = "hahaha";
});



//{
/* <div class="col-4 ">
        <img class="img-fluid" src="https://media.giphy.com/media/B4jfJqiIxvU08/giphy.gif" alt="Card image cap">
      </div> */
//}