let timerTotal = 172800;

const timer = setInterval(() => {
    if (!timerTotal)
        clearInterval(timer);

    const seconds = Math.floor(timerTotal % 60).toString();
    const minutes = Math.floor(timerTotal % 3600 / 60).toString();
    const hours = Math.floor(timerTotal % (3600 * 24) / 3600).toString();
    const days = Math.floor(timerTotal / (3600 * 24)).toString();

    document.querySelector("#timer-segundos").innerHTML = "<span class='fs-3'>" + ("00".substring(seconds.length) + seconds) + "</span><br>SEGUNDOS";
    document.querySelector("#timer-minutos").innerHTML = "<span class='fs-3'>" + ("00".substring(minutes.length) + minutes) + "</span><br>MINUTOS";
    document.querySelector("#timer-horas").innerHTML = "<span class='fs-3'>" + ("00".substring(hours.length) + hours) + "</span><br>HORAS";
    document.querySelector("#timer-dias").innerHTML = "<span class='fs-3'>" + ("00".substring(days.length) + days) + "</span><br>DIAS";

    timerTotal--;
}, 1000);