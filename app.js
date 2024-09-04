const SendGallery = document.getElementById("send-gallery");
const RemoveGallery = document.getElementById("remove-gallery");
const GalleryDiv = document.getElementById("container-gallery");
const FotoInput = document.getElementsByClassName("fotonameinput");
const DateInput = document.getElementsByClassName("dateInput");





SendGallery.addEventListener("click", function () {
  GalleryDiv.innerHTML += `  <div class="card mx-2 " style="width: 18rem;">
                            <div class="card-body mb-2">
                            <h5 class="card-title text-center">Foto Name</h5>
                            <p class="card-text text-center">Foto Date</p>
                            <img src="./assets/foto1.jpg" class="card-img-top" alt="...">   
                            <button class="btn btn-danger">Remove</button>
                            </div>
                            </div> `;
});


RemoveGallery.addEventListener("click", function () {
  GalleryDiv.lastElementChild.remove();
});

console.log();