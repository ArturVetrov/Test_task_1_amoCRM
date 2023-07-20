const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalTimer = null;

  return (seconds) => {
    // Чистим setInterval, избегаем дублирования таймеров
    clearInterval(intervalTimer);

    // Вычисляем значения из полученных секунд
    intervalTimer = setInterval(()=>{
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;

    // Приводим значения в формат HH:MM:SS
    const timer = [
          hour.toString().padStart(2, '0'),
          minute.toString().padStart(2, '0'),
          second.toString().padStart(2, '0'),
        ].join(':')
        timerEl.innerHTML = timer;
        seconds--;
        // Очищаем setInterval по истечению секунд
        if (seconds < 0){clearInterval(intervalTimer)}
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении оставались только числа
  // Подставляем рег. выражение
  e.target.value = e.target.value.replace(/\D/, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
