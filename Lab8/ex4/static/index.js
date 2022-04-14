function setBackground() {
    let bgr = document.getElementById("bgr").value;
    let bgb = document.getElementById("bgb").value;
    let bgg = document.getElementById("bgg").value;
    document.body.style.backgroundColor = 'rgb(' + bgr + ',' + bgb + ',' + bgg + ')';;
}

function setBorder() {
    let br = document.getElementById("br").value;
    let bb = document.getElementById("bb").value;
    let bg = document.getElementById("bg").value;
    let width = document.getElementById("bw").value;
    document.body.style.borderColor = 'rgb(' + br + ',' + bb + ',' + bg + ')';
    document.body.style.borderWidth = width;
}