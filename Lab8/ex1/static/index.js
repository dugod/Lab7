function Validate() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    if (p1 == p2){
        alert("Passwords match!")
    }
    if (p1 != p2){
        alert("Passwords do not match!")
    }
    if (p1.length < 8 || p2.length < 8)
    {
        alert("Password not long enough!")
    }
}