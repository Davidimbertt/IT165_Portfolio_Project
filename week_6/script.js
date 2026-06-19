const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

const imageTitles = [
    "Mountain Landscape",
    "City Skyline",
    "Ocean Beach",
    "Forest Trail",
    "Desert Sunset"
];

let currentIndex = 0;

const slideshowImage = document.getElementById("slideshow-image");
const imageCounter = document.getElementById("image-counter");
const imageTitle = document.getElementById("image-title");
const imageDescription = document.getElementById("image-description");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");

function showImage() {
    slideshowImage.src = images[currentIndex];
    slideshowImage.alt = imageTitles[currentIndex] + " slideshow image";
    imageTitle.textContent = imageTitles[currentIndex];
    imageDescription.textContent = "Image " + (currentIndex + 1) + " of " + images.length;
    imageCounter.textContent = "Image " + (currentIndex + 1) + " of " + images.length;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

showImage();
