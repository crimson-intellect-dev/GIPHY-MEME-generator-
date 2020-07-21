const form = document.querySelector("form");
const imgURL = document.getElementById("img-url");
const topText = document.getElementById("text-on-top");
const bottomText = document.getElementById("text-on-bottom");
const memeArea = document.getElementById("meme-area");

form.addEventListener("submit", e => {
  e.preventDefault();

  // store input values
  let nURL = imgURL.value;
  let nTopText = topText.value;
  let nBottomText = bottomText.value;

  // a div to contain the giph element
  let newCol = document.createElement("div");
  newCol.classList.add("col-md-4", "col-12", "mb-4", "gif-container");

  // create a p element to display top text
  let topPara = document.createElement("p");
  topPara.classList.add("position-absolute", "text", "top-position");
  topPara.innerText = nTopText;

  // create a p element to display the bottom text
  let bottomPara = document.createElement("p");
  bottomPara.classList.add("position-absolute", "text", "bottom-position");
  bottomPara.innerText = nBottomText;

  // image element to store the giph
  let imgTag = document.createElement("img");
  imgTag.classList.add("gif-image");
  imgTag.src = nURL;

  //a div to contain the delete button
  let middle = document.createElement("div");
  middle.classList.add("middle");

  // add event listener to remove the giph
  let removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerText = "Remove GIPH";
  removeBtn.addEventListener("click", (e) => {
    let toDelete = e.target.parentElement.parentElement;
    toDelete.remove();
  });

  middle.appendChild(removeBtn);

  // append the input texts to the top and buttom of the meme/giph container
  newCol.appendChild(topPara);
  newCol.appendChild(bottomPara);

  newCol.appendChild(imgTag);
  newCol.appendChild(middle);

  // append the newly made giph element to the meme area container
  memeArea.append(newCol);

  // clear the input areas
  imgURL.value = "";
  topText.value = "";
  bottomText.value = "";
});