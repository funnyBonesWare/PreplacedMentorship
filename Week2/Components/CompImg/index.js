document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".Parent-Container img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      // Reset all images to original size
      images.forEach((otherImg) => {
        otherImg.style.width = "15%";
        otherImg.style.borderRadius = "50%";
      });

      // Expand clicked image
      img.style.width = "25%";
      img.style.borderRadius = "10%";
    });
  });
});
