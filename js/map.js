
//* API GOOGLE MAP*//

function initMap() {
  var uluru = { lat: 55.687137, lng: 37.529661 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 15, center: uluru });
  var marker = new google.maps.Marker({ position: uluru, map: map });
};

//* POPUP MAP *//
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".close-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
