// Código adaptado de EDTeam en https://codepen.io/AlvaroFelipe/pen/EvJrOW

// Cronómetro (crono)
function getRemainingTimer(deadline) {
  let now = new Date(),
    remainTime = (now - new Date(deadline) + 1000) / 1000,
    timerTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  };
}

const timer = (deadline, elem) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTimer(deadline);
    el.innerHTML = `${t.remainDays}d ${t.remainHours}h ${t.remainMinutes}m ${t.remainSeconds}s`;
  }, 1000);
};

timer("Jul 28 2021 10:00:00 GMT-0300", "crono");

// Temporizador (timer)
function getRemainingTime(deadline) {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  };
}

const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d ${t.remainHours}h ${t.remainMinutes}m ${t.remainSeconds}s`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

countdown(
  "Aug 1 2021 14:00:00 GMT-0300",
  "timer",
  "¡El 100 horas ha concluído!"
);
