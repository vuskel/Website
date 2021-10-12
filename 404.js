let remainingSeconds = 3;
const countDown = document.getElementById("countdown");
if (countDown)
    countDown.innerHTML = remainingSeconds;

const intervalId = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds === 0) {
        window.location.href = "/";
        window.clearInterval(intervalId);	
    } else if (countDown) {            
        countDown.innerHTML = remainingSeconds;
    }
}, 1000);
