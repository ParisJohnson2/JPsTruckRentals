/*   js for navbar, changes color when mouseover reverts back when mouseout   */
var logo = document.getElementById("nbLogo");
var offerNv = document.getElementById("nv-offer");
var invNv = document.getElementById("nv-inv");
var tchNv = document.getElementById("nv-tch");

logo.addEventListener("mouseover", function() {
    logo.setAttribute("style", "color: red; font-family: cursive;")
})

logo.addEventListener("mouseout", function() {
    logo.setAttribute("style", "color: silver; font-family: cursive;")
})

offerNv.addEventListener("mouseover", function() {
    offerNv.setAttribute("style", "color: silver; font-family: cursive")
})

offerNv.addEventListener("mouseout", function() {
    offerNv.setAttribute("style", "color: red; font-family: cursive;" )
})

invNv.addEventListener("mouseover", function() {
    invNv.setAttribute("style", "color: silver; font-family: cursive")
})

invNv.addEventListener("mouseout", function() {
    invNv.setAttribute("style", "color: red; font-family: cursive;" )
})

tchNv.addEventListener("mouseover", function() {
    tchNv.setAttribute("style", "color: silver; font-family: cursive")
})

tchNv.addEventListener("mouseout", function() {
    tchNv.setAttribute("style", "color: red; font-family: cursive;" )
})