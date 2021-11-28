const handOfSecond = document.querySelector('.second-hand');
const handOfMinute = document.querySelector('.min-hand');
const handOfHour = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    // console.log(now.getTimezoneOffset());

    const seconds = now.getSeconds();
    timeHand(seconds, handOfSecond);

    const minutes = now.getMinutes();
    timeHand(minutes, handOfMinute);

    const hours = now.getHours();
    timeHand(hours, handOfHour);
}

const timeHand = (time, hand) => {
    const timeDegrees = ((time / 60) * 360) + 90;
    hand.style.transform = `rotate(${timeDegrees}deg)`;
};

setInterval(setDate, 1000);