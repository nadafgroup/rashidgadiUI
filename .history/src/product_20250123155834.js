// Get the modal element
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementById("closeModal");

// Get all gallery images
var galleryImages = document.querySelectorAll(".gallery img");

// Loop through the images and add click event to open in modal
galleryImages.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the clicked image as the modal image
    };
});

// Close the modal when user clicks on the close button
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};