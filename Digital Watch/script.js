const currentTime = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: true });
    document.getElementById("clock").textContent = timeStr;
};

currentTime();
setInterval(currentTime, 1000);
