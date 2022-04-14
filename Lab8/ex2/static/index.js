var index = 0;
var images = ["./static/ochai.jpg", "./static/dave.jpg", "./static/cb.jpg", "./static/jalen.jpg", "./static/remy.jpg"]
function previous() {
    if(index==0){
        index = 4;
    }
    else{
        index--;
    }
    document.getElementById("pic").src= images[index];
}

function next() {
    if(index==4){
        index = 0;
    }
    else{
        index++;
    }
    document.getElementById("pic").src= images[index];
}