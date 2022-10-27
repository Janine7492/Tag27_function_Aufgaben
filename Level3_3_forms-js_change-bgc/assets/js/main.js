function changeBackground() {
    let red = Number(document.getElementById("red").value);
    let green = Number(document.getElementById("green").value);
    let blue = Number(document.getElementById("blue").value);

    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

    console.log(rgb);

    const body = document.getElementById("body");
    document.body.style.backgroundColor = rgb;

    document.getElementById("valueColor").innerHTML = "Aktueller Farbcode: rgb(" + red + ", " + green + ", " + blue + ")";
}