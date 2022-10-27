function changeColor() {
    const color = document.getElementById("color").value;

    const section = document.getElementById("section");

    section.style.backgroundColor = color;
}