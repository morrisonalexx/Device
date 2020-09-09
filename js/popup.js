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
     name.focus();
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

 window.addEventListener("keydown",function(evt) {
   if (evt.keyCode ===27) {}
 })
