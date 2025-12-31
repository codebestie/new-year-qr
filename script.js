// const now = new Date();
// if (now.getFullYear() < 2026) {
//   document.body.innerHTML = "<h1>⏳ Come back at midnight.</h1>";
// }

const unlockTime = new Date("January 1, 2026 00:00:00").getTime();

const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = unlockTime - now;

  if (distance <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "✅ System unlocked";
    return;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").textContent =
    `⏳ Unlocks in ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


function unlock() {
  const input = document.getElementById("answer").value.trim();
  const error = document.getElementById("error");

  if (input === "2026") {
    launchCelebration();
  } else {
    error.textContent = "❌ Bug still present. Try again.";
  }
}

function unlock() {
  const now = new Date().getTime();
  if (now < unlockTime) {
    document.getElementById("error").textContent =
      "⏳ Still locked. Wait for midnight.";
    return;
  }

  const input = document.getElementById("answer").value.trim();
  if (input === "2026🎉") {
    launchCelebration();
  } else {
    document.getElementById("error").textContent =
      "❌ Bug still present. Try again.";
  }
}


// function launchCelebration() {
//   document.body.innerHTML = `
//     <h1>🎆 HAPPY NEW YEAR 2026 🎆</h1>
//     <p>May your code compile on the first run.</p>
//     <canvas id="fireworks"></canvas>
//   `;

//   startFireworks();
// }
const params = new URLSearchParams(window.location.search);
const recipient = params.get("name") || "Developer";

function launchCelebration() {
  document.body.innerHTML = `
    <h1>🎆 Happy New Year, ${recipient}! 🎆</h1>
    <p>May ${recipient}'s code be clean and commits be meaningful.</p>
    <canvas id="fireworks"></canvas>
    <audio id="sound" autoplay>
      <source src="celebration.mp3" type="audio/mpeg">
    </audio>
  `;

  startFireworks();
}


	function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function firework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const radius = Math.random() * 3 + 2;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
    ctx.fill();
  }

  setInterval(firework, 50);
}
