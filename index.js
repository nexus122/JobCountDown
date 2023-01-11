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
  let minutes, seconds;

  let repeater = setInterval(function () {
    let currentTime = new Date().getTime();
    let duration = (endTime - currentTime) / 1000;

    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = minutes + ":" + seconds;
    console.log(duration);
    if (duration <= 0) {
      clearInterval(repeater);
      timer.innerHTML = `        
        <p>Vete a casa</p>
      `;
    }
  }, 1000);
}

startTimer();
