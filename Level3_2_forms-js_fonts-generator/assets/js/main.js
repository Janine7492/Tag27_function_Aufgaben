function changeFontsSize() {
    let size = document.getElementById("size").value;
    let fontFamily = document.getElementById("fontFamily").value;
    let example = document.getElementById("text").value;
    let preview = document.getElementById("preview");
    preview.style.fontFamily = fontFamily;
    preview.style.fontSize = size + "px";

    if (example == 0) {
        preview.innerHTML = "Example";
    } else {
        preview.innerHTML = example;
    }
}