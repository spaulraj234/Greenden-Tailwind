//selecting side navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var MenuIcon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

MenuIcon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})