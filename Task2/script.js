let sec = 0;
let min = 0;
let hr = 0;
let timer;

function showTime() {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hr++;
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    document.getElementById("time").innerText = h + ":" + m + ":" + s;
}

function start() {
    if (!timer) {
        timer = setInterval(showTime, 1000);
    }
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;

    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById("time").innerText = "00:00:00";
}