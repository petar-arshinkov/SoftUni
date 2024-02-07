function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distance / speedMetersInSec;
    let rest = Math.floor(distance / 500);
    time += rest * 60;

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(min / 60);
    min -= hours * 60;
    let hoursPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minPrint = min < 10 ? `0${min}` : `${min}`;
    let secPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hoursPrint}:${minPrint}:${secPrint}`);
}

timeToWalk(4000, 0.60, 5);