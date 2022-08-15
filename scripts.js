const time = document.querySelector(".time");
const timeSmall = document.querySelector(".time-small");
const arr = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const arrDay = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Cреда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const declOfNum = function (value, arr) {
  value = Math.abs(value) % 100;
  if (value >= 5 || value <= 20) {
    return arr[1];
  } else if (value === 1 || value === 21) {
    return arr[0];
  } else if ((value >= 2 && value <= 4) || value === 22 || value === 23) {
    return arr[2];
  }
};

const addZero = function (num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
};

const startTime = function () {
  const data = new Date();

  time.innerHTML = `<b>Сегодня ${arrDay[data.getDay()]}, ${data.getDate()} ${
    arr[data.getMonth() - 1]
  } ${data.getFullYear()} года, ${data.getHours()} ${declOfNum(
    data.getHours(),
    ["час", "часов", "часа"]
  )} ${data.getMinutes()} ${declOfNum(data.getMinutes(), [
    "минута",
    "минут",
    "минуты",
  ])} ${data.getSeconds()} ${declOfNum(data.getSeconds(), [
    "секунда",
    "секунд",
    "секунды",
  ])}</b>`;

  timeSmall.innerHTML = `<p>${addZero(data.getDate())}-${addZero(
    data.getMonth() + 1
  )}-${addZero(data.getFullYear())} - ${addZero(data.getHours())}:${addZero(
    data.getMinutes()
  )}:${addZero(data.getSeconds())}</p>`;
};

setInterval(startTime, 1000);
