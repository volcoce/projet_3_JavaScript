getCategories();
getWorks();

async function getCategories() {
  const response = await fetch("http://localhost:5678/api/categories");
  const categories = await response.json();
  const galleryContainer = document.querySelector(".gallery");
  const div = document.createElement("div");
  galleryContainer.appendChild(div);

  const allButton = document.createElement("button");
  allButton.innerText = "Tous";
  allButton.addEventListener("click", () => {
    const figures = document.querySelectorAll(".gallery figure");
    figures.forEach((figure) => {
      galleryContainer.removeChild(figure);
    });    
    getWorks();
  });
  div.appendChild(allButton);

  for (const category of categories) {
    const button = document.createElement("button");

    button.innerText = category.name;

    button.addEventListener("click", () => {
      filterWorksByCategory(category.name);
    });

    div.appendChild(button);
  }
}

async function getWorks() {
  const response = await fetch("http://localhost:5678/api/works");
  const works = await response.json();
  const galleryContainer = document.querySelector(".gallery");

  for (const work of works) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = work.imageUrl;
    img.alt = work.title;
    figcaption.textContent = work.title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    galleryContainer.appendChild(figure);
  }
}

async function filterWorksByCategory(selectedCategory) {
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();
    const galleryContainer = document.querySelector(".gallery");
  
    const figures = document.querySelectorAll(".gallery figure");
    figures.forEach((figure) => {
      galleryContainer.removeChild(figure);
    });
  
    for (const work of works) {
      if (work.category.name === selectedCategory) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
  
        img.src = work.imageUrl;
        img.alt = work.title;
        figcaption.textContent = work.title;
  
        figure.appendChild(img);
        figure.appendChild(figcaption);
        galleryContainer.appendChild(figure);
      }
    }
  }
