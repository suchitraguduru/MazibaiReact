// nav-bar
// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");


// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function() {
//  navLinks.classList.toggle("show1");
// }
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show2");
// }
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function() {
//  navLinks.classList.toggle("show3");
// }
//navbar code ends Here


//MAIDS PROFILE



///clolr


// Js code to make color box enable or disable
let colorIcons = document.querySelector(".color-icon"),
icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click" , ()=>{
  colorIcons.classList.toggle("open");
})

// getting all .btn elements
let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
  button.addEventListener("click", (e)=>{ //adding click event to each button
    let target = e.target;

    let open = document.querySelector(".open");
    if(open) open.classList.remove("open");

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    // js code to switch colors (also day night mode)
    let root = document.querySelector(":root");
    let dataColor = target.getAttribute("data-color"); //getting data-color values of clicked button
    let color = dataColor.split(" "); //splitting each color from space and make them array

    //passing particular value to a particular root variable
    root.style.setProperty("--pink1", color[0]);
    root.style.setProperty("--pink3", color[1]);
    // root.style.setProperty("--nav-main", color[2]);
    // root.style.setProperty("--switchers-main", color[3]);
    // root.style.setProperty("--light-bg", color[4]);

    let iconName = target.className.split(" ")[2]; //getting the class name of icon

    let coloText = document.querySelector(".home-content span");

    if(target.classList.contains("fa-moon")){ //if icon name is moon
      target.classList.replace(iconName, "fa-sun") //replace it with the sun
      colorIcons.style.display = "none";
      coloText.classList.add("darkMode");
    }else if (target.classList.contains("fa-sun")) { //if icon name is sun
      target.classList.replace("fa-sun", "fa-moon"); //replace it with the sun
      colorIcons.style.display = "block";
      coloText.classList.remove("darkMode");
      document.querySelector(".btn.blue").click();
    }
  });
}




