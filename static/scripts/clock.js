function presentDay() {
    const date = new Date();
    const month = date.getMonth() + 1;
    let day = date.getDate();
    document.getElementById("presentDay").textContent = `${month}/${day}/${date.getFullYear()}`;
}
function presentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("presentTime").textContent = timeString;
}
function testfill1() {
    document.getElementById("testfill").textContent = "PENIS";
}
document.addEventListener("DOMContentLoaded", presentDay);
document.addEventListener("DOMContentLoaded", presentTime);
document.addEventListener("DOMContentLoaded", testfill1);
setInterval(presentTime, 1000);
