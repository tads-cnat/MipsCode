function abrirDiv() {
    document.getElementsByClassName("nav-div")[0].style.display = "flex";
    x = document.getElementsByClassName("button-nav-lateral")[0]
    x.setAttribute("onclick", "fecharDiv()");
    document.getElementById('icon-nav').style.transform = "rotate(181deg)";
}

function fecharDiv() {
    document.getElementsByClassName("nav-div")[0].style.display = "none";
    x = document.getElementsByClassName("button-nav-lateral")[0]
    x.setAttribute("onclick", "abrirDiv()");
    document.getElementById('icon-nav').style.transform = "rotate(0deg)";
}

