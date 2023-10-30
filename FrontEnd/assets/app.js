getWorks()
async function getWorks() {
    const response = await fetch('http://localhost:5678/api/works');
    const works = await response.json();
    const galleryContainer = document.querySelector('.gallery');

    for (const work of works) {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        img.src = work.imageUrl;
        img.alt = work.title;
        figcaption.textContent = work.title;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        galleryContainer.appendChild(figure);
    }
}