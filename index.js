  // stopwatch
  let stopwatchInterval;
  let stopwatchTime = 0;

  function formatTime(seconds) {
      const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');

      return `${hrs}:${mins}:${secs}`;
  }

  function updateStopwatchDisplay() {
      document.getElementById('stopwatchDisplay').innerHTML = formatTime(stopwatchTime);
  }

  function handlerStartStopwatch() {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;

            updateStopwatchDisplay();
        }, 1000);

        document.getElementById('startStopwatch').disabled = true;
        document.getElementById('stopStopwatch').disabled = false;
        document.getElementById('resetStopwatch').disabled = false;
  }

  document.getElementById('startStopwatch').addEventListener('click', handlerStartStopwatch);

  function handlerStopStopwatch() {
        clearInterval(stopwatchInterval);

        document.getElementById('startStopwatch').disabled = false;
        document.getElementById('stopStopwatch').disabled = true;
  }

  document.getElementById('stopStopwatch').addEventListener('click', handlerStopStopwatch);

  function handlerResetStopwatch() {
        clearInterval(stopwatchInterval);

        stopwatchTime = 0;

        updateStopwatchDisplay();

        document.getElementById('startStopwatch').disabled = false;
        document.getElementById('stopStopwatch').disabled = true;
        document.getElementById('resetStopwatch').disabled = true;
  }

  document.getElementById('resetStopwatch').addEventListener('click', handlerResetStopwatch);

  // timer
  let timerInterval;
  let timerTime = 0;

  function updateTimerDisplay() {
      document.getElementById('timerDisplay').innerHTML = formatTime(timerTime);
  }

  function handlerStartTimer() {
        const inputSeconds = parseInt(document.getElementById('timerInput').value);

        if (isNaN(inputSeconds) || inputSeconds <= 0) {
            alert('Please enter a valid time in seconds!');
            return;
        }

        timerTime = inputSeconds;

        updateTimerDisplay();

        timerInterval = setInterval(() => {
          if (timerTime > 0) {
                timerTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                alert('Time\'s up!');
            }
        }, 1000);

        document.getElementById('startTimer').disabled = true;
        document.getElementById('resetTimer').disabled = false;
  }

  document.getElementById('startTimer').addEventListener('click', handlerStartTimer);

  function handlerResetTimer() {
        clearInterval(timerInterval);

        timerTime = 0;

        updateTimerDisplay();

        document.getElementById('startTimer').disabled = false;
        document.getElementById('resetTimer').disabled = true;
  }

  document.getElementById('resetTimer').addEventListener('click', handlerResetTimer);

  function handlerAdd1Min() {
      timerTime += 60;

      updateTimerDisplay();
  }

  document.getElementById('add1Min').addEventListener('click', handlerAdd1Min);
