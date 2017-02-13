//document.getElementById("numberOfGuests").addEventListener("blur", updateNumberOfGuests);



$(document).ready(function(){
  $("#wrapper").toggleClass("toggled");
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
});


function hideSideBar(){
  document.getElementById("wrapper").classList.add('toggled');
  document.getElementById("wrapper").style.paddingLeft= "0px";
  document.getElementById("sidebar-wrapper").style.width= "0px";
  document.getElementById("sidebar-wrapper").style.marginLeft= "-250px";
  document.getElementById("view2").style.display = "none";
  document.getElementById("sidebar-wrapper").style.display = "none";
}

function showSideBar(){
  document.getElementById("wrapper").classList.add('toggled');
  document.getElementById("wrapper").style.paddingLeft= "250px";
  document.getElementById("sidebar-wrapper").style.width= "250px";
  document.getElementById("view2").style.display = "block";
  document.getElementById("sidebar-wrapper").style.display = "block";
}


////////////////////////////////////////////////////////////////////////////////////////////////////
// The functions



function confirmDinner() {

}

/*function searchDishes() {
  confirmDinner();
}*/

function backToSelectDish() {
  document.getElementById("view1").style.display = "none";
  //document.getElementById("view2").style.display = "block";
  document.getElementById("view3").style.display = "block";
  document.getElementById("view4").style.display = "none";
  document.getElementById("view5").style.display = "none";
  document.getElementById("view6").style.display = "none";
  showSideBar();
}

function confirmDish() {
  document.getElementById("view1").style.display = "none";
  //document.getElementById("view2").style.display = "block";
  document.getElementById("view3").style.display = "block";
  document.getElementById("view4").style.display = "none";
  document.getElementById("view5").style.display = "none";
  document.getElementById("view6").style.display = "none";
  showSideBar();
}

function goBackAndEditDinner() {
  document.getElementById("view1").style.display = "none";
  //document.getElementById("view2").style.display = "block";
  document.getElementById("view3").style.display = "block";
  document.getElementById("view4").style.display = "none";
  document.getElementById("view5").style.display = "none";
  document.getElementById("view6").style.display = "none";
  showSideBar();
}

function printFullRecipe() {
  document.getElementById("view1").style.display = "none";
  //document.getElementById("view2").style.display = "none";
  document.getElementById("view3").style.display = "none";
  document.getElementById("view4").style.display = "none";
  document.getElementById("view5").style.display = "none";
  document.getElementById("view6").style.display = "block";
  hideSideBar();
}

function goBack() {
  document.getElementById("view1").style.display = "none";
  //document.getElementById("view2").style.display = "none";
  document.getElementById("view3").style.display = "none";
  document.getElementById("view4").style.display = "none";
  document.getElementById("view5").style.display = "block";
  document.getElementById("view6").style.display = "none";
  hideSideBar();
}

function selectThisDish() {
  document.getElementById("view1").style.display = "none";
  //document.getElementById("view2").style.display = "block";
  document.getElementById("view3").style.display = "none";
  document.getElementById("view4").style.display = "block";
  document.getElementById("view5").style.display = "none";
  document.getElementById("view6").style.display = "none";
  showSideBar();
}


