function loadImage(event) {
    var image = document.getElementById('uploadedImage');
    var button = document.querySelector('.zag');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
    button.style.display = 'none';
}
