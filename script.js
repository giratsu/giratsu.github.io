document.addEventListener('DOMContentLoaded', function () {
    // Dar funcionalidad a los iconos de red social

    let linkedinLink = document.getElementById("linkedin_link").getAttribute("href");
    let linkedinIcon = document.getElementById("linkedin_icon").onclick = function()
    {
        window.location.href = linkedinLink
        
    }

    let githubLink = document.getElementById("github_link").getAttribute("href");
    let githubIcon = document.getElementById("github_icon").onclick = function()
    {
        window.location.href = githubLink;
    }

    let twitterLink = document.getElementById("twitter_link").getAttribute("href");
    let twitterIcon = document.getElementById("twitter_icon").onclick = function()
    {
        window.location.href = twitterLink;
    }

    // Actualizar la altura de home_div_container a la altura de la pantalla del dispositivo al cargar la página, y cada vez que se redimensiona la ventana.
    
    let homeDivContainer = document.getElementById("home_div_container");
    homeDivContainer.style.height = window.innerHeight + "px";

    window.addEventListener("resize", function(){
        homeDivContainer.style.height = window.innerHeight + "px"
    });

    // click en la flecha
    let flecha = document.getElementById("arrow");
    flecha.onclick = function(){
        window.location.href = "#content_container"
    }
})