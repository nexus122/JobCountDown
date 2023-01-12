let endTime = new Date();
endTime.setHours(17);
endTime.setMinutes(30);
endTime.setSeconds(0);
endTime = endTime.getTime();

// que dia de la semana es hoy
let day = new Date().getDay();
if (day === 5) {
  endTime.setHours(15);
  endTime.setMinutes(00);
  endTime.setSeconds(0);
  endTime = endTime.getTime();
}

function startTimer() {
  let timer = document.getElementById("timer");
  let hours, minutes, seconds;
  let repeater = setInterval(function () {
    let currentTime = new Date().getTime();
    let duration = (endTime - currentTime) / 1000;
    hours = parseInt(duration / 3600);
    minutes = parseInt((duration % 3600) / 60);
    seconds = parseInt(duration % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
    document.title = hours + ":" + minutes + ":" + seconds;

    if (duration <= 0) {
      timer.innerHTML = 'Vete a casa'
      document.title = 'Vete a casa'
      clearInterval(repeater);
    }
  }, 1000);
}


startTimer();
