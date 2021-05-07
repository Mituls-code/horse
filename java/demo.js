function imggo() {

    document.getElementById("img").style.position = "absolute";
    document.getElementById("img").style.left = "70%";
    document.getElementById("img").style.transition = "5s";
}

function imgback() {

    document.getElementById("img").style.left = "10%";
    document.getElementById("img").style.transform = scaleX(-1);
    document.getElementById("img").style.transition = "5s";

}