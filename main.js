// Dropdown for navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Looping article
const blogContainer = document.getElementById("blogContainer");
const initialArticle = blogContainer.querySelector(".blog");

for (let i = 2; i <= 3; i++) {
  const clonedArticle = initialArticle.cloneNode(true);
  clonedArticle.querySelector("h2").textContent = `Blog ${i}`;
  blogContainer.appendChild(clonedArticle);
}
