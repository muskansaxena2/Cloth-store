var MenuItems = document.getElementById("MenuItems");
if (MenuItems) {
  MenuItems.style.maxHeight = "0px";
}
function menutoggle() {
  if (MenuItems && MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else if (MenuItems) {
    MenuItems.style.maxHeight = "0px";
  }
}
menutoggle();



// --------------------------
