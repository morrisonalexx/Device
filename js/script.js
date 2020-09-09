//* WriteUs *//

var writeus = document.querySelector(".write-us-btn");
var popup = document.querySelector (".modal-write");
var close = popup.querySelector(".close-button");

var modalForm = popup.querySelector(".feedback-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=mail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
 storage = localStorage.getItem("mail");
} catch (err) {
 isStorageSupport = false;
}


writeus.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

modalForm.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});


//* CLOSE BY CLICKING ESC *//
window.addEventListener("keydown",function(evt) {
  if (evt.keyCode ===27) {}
})


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

