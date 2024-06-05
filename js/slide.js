const carousel = document.querySelector(".visual_carousel_wrap");
const slideItem = document.querySelectorAll(".carousel_item");
const showCount = document.querySelector(".count");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

let currentIndex = 0;
let slideInterval;
let count;

document.addEventListener("DOMContentLoaded", () => {
    const totalItems = slideItem.length; // 전체 아이템 수

    showCount.innerHTML = `1 / <em class="total">${totalItems}</em>`; // 현재 카운트 표시

    // 슬라이드 업데이트 함수
    function updateSlide() {
        const itemWidth = slideItem[0].clientWidth; // 아이템의 너비를 계산
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // 다음 슬라이드 표시 함수
    function handleClickNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        count = currentIndex;
        showCount.innerHTML = `${currentIndex + 1} / <em class="total">${totalItems}</em>`;

        updateSlide();
    }

    // 이전 슬라이드 표시 함수
    function handleClickPrevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        count = currentIndex;
        showCount.innerHTML = `${currentIndex - 1} / <em class="total">${totalItems}</em>`;

        updateSlide();
    }

    // 자동 슬라이드 시작 함수
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            count = currentIndex;
            showCount.innerHTML = `${currentIndex + 1} / <em class="total">${totalItems}</em>`;

            updateSlide();
        }, 4000); // 3초마다 슬라이드 변경
    }

    // 슬라이드 시작 함수
    function handleClickPlaySlide() {
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        startAutoSlide();
    }

    // 슬라이드 정지 함수
    function handleClickStopSlide() {
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
        clearInterval(slideInterval);
    }

    // 리사이즈 함수
    function handleResize() {
        updateSlide(); // 슬라이드 위치를 업데이트하여 반응형을 유지
    }

    // 페이지 로드 시 자동 슬라이드 시작
    startAutoSlide();

    window.addEventListener("resize", handleResize);
    prevBtn.addEventListener("click", handleClickPrevSlide);
    nextBtn.addEventListener("click", handleClickNextSlide);
    playBtn.addEventListener("click", handleClickPlaySlide);
    pauseBtn.addEventListener("click", handleClickStopSlide);
});

