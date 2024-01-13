//navbar open/close 
const altMenu = document.getElementById("altMenu");
const hide = document.getElementById("hide");
// console.log(hide);

const openMenu = () => {
  // console.log(hide);
  altMenu.style.display = "block";
//   altMenu.style.transition = ".1s";
    //  header.style.display ="none";
  hide.style.display = "none";
};

const closeMenu = () => {
  altMenu.style.display = "none";
//   altMenu.style.transition = "1s";
  hide.style.display = "block";
};


//partnyorlar layout js

function openTabPartnyor(evt, tabName) {
  // Tüm tablara ait elementleri gizle
  let tabcontents = document.querySelectorAll(".tabcontent1");
  //    console.log("burdayamm",tabcontents)
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Tüm tab düğmelerinin active sınıfını kaldır
  let tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Seçili tabı göster ve active sınıfını ekle
  
  evt.currentTarget.classList.add("active");
  document.getElementById(tabName).style.display = "block";
}



// mehsullar layout js
function openTab(evt,tabName) {
  let tabs = document.querySelectorAll(".tab");
  // console.log(tabs);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  
  evt.currentTarget.classList.add("active");
  document.getElementById(tabName).style.display = "block";
  
}



window.onload = function () {
  let activeTab = document.querySelector(".active1").getAttribute("onclick").split("'")[1];
  document.getElementById(activeTab).style.display = "block";
};




function openCard(evt, tabName) {

  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
 
    tablinks[i].className= tablinks[i].className.replace("active1", "");
  }
  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.className += " active1";
 
 }


 
 
 













