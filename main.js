function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// JavaScript to clone and insert articles
const blogContainer = document.getElementById("blogContainer");
const initialArticle = blogContainer.querySelector(".blog");

for (let i = 2; i <= 3; i++) {
  const clonedArticle = initialArticle.cloneNode(true); // Clone the initial article
  clonedArticle.querySelector("h2").textContent = `Blog ${i}`; // Modify the heading text
  blogContainer.appendChild(clonedArticle); // Append the cloned article to the container
}
