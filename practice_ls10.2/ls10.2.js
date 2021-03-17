function tong() {
    let n = parseInt(document.getElementById("input").value);
    let i;
    let total = 0;
    for (i=0; i<=n; i++) {
       total = total + i;
        document.getElementById("result").innerText = +total;
    }
}