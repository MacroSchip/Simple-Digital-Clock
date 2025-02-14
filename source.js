function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");

  const clock = document.getElementById("clock");

  if(hours>12){
  clock.textContent = `${hours - 12}:${min}:${sec}`;
    
  }else{
    clock.textContent = `${hours}:${min}:${sec}`;
  }
}

setInterval(updateClock, 1000);
updateClock();
