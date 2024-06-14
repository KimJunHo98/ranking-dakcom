// 타이머를 시작하고 updateTimer가 끝나면 초기화
function startTimer(name, duration) {
    const hoursSpan = document.querySelectorAll(".hours");
    const minutesSpan = document.querySelectorAll(".min");
    const secondsSpan = document.querySelectorAll(".sec");

    // 현재 시간을 기준으로 남은 시간을 계산하고, 각 타이머 요소를 업데이트
    function updateTimer() {
        const now = new Date().getTime();
        const distance = duration - now; // 남은 시간 계산
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 남은 시간이 0보다 작으면 타이머를 초기화
        if (distance < 0) {
            clearInterval(timerInterval);
            setInitialTime(name);

            return;
        }

        hoursSpan.forEach((el) => {
            el.textContent = ("0" + hours).slice(-2);
        });
        minutesSpan.forEach((el) => {
            el.textContent = ("0" + minutes).slice(-2);
        });
        secondsSpan.forEach((el) => {
            el.textContent = ("0" + seconds).slice(-2);
        });
    }

    // 타이머를 즉시 업데이트
    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);
}

// 초기 시간을 설정하고 타이머 시작
function setInitialTime(name) {
    const now = new Date();
    const endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    startTimer(name, endTime.getTime());
}

document.addEventListener("DOMContentLoaded", function () {
    setInitialTime("timer");
});
