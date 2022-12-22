import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timePickerEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondstEl = document.querySelector('[data-seconds]');

btnStartEl.disabled = true;
const todayDate = new Date()
// let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
          Notiflix.Notify.warning('Please choose a date in the future');
    } else {
        btnStartEl.disabled = false;
      btnStartEl.addEventListener('click', () => {
  startTimerClick(selectedDates[0]);
});
     };

   
      }
};

function startTimerClick(data) {
  
  timerId = setInterval(() => {
    const todayDate = new Date();
    const diff = data - todayDate;
    // const { days, hours, minutes, seconds } = convertMs(diff);
   const time = convertMs(diff);
    if (diff >= 0) {
      daysEl.textContent = time.days;
  hoursEl.textContent = time.hours;
  minutesEl.textContent = time.minutes;
  secondstEl.textContent = time.seconds;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

      
// function validData(selectedDates) {
//   const diff = selectedDates - todayDate;
//   console.log('diff:', diff);
//   const time = convertMs(diff);
//   console.log(time);
//   daysEl.textContent = time.days;
//   hoursEl.textContent = time.hours;
//   minutesEl.textContent = time.minutes;
//   secondstEl.textContent = time.seconds;
// };
flatpickr(timePickerEl, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}




function addLeadingZero(value) {
  return (value).toString().padStart(2, '0');

};






