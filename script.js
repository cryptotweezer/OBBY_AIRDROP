// Fecha del lanzamiento: 14 de diciembre, 11:00 PM UTC (equivale a 15 de diciembre, 10:00 AM AEDT)
const launchDate = new Date("December 14, 2024 18:00:00 EST").getTime();

// Actualizar el temporizador cada segundo
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft > 0) {
    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Actualizar los valores en el HTML
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  } else {
    // Detener el temporizador y mostrar un mensaje
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<p>🚀 Launching Now!</p>";
  }
}, 1000);
