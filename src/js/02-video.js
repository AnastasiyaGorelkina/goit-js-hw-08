import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const correntTime = localStorage.getItem("videoplayer-current-time");
const time = JSON.parse(correntTime);

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))  
}, 1000));

player.setCurrentTime(time.seconds || 0);