// 캐러셀
const carousel = document.querySelector(".visual_carousel_wrap");
const slideItem = document.querySelectorAll(".carousel_item");
const showCount = document.querySelector(".count");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
// 퀵메뉴
const quickMenuList = document.querySelector(".quick_menu_list");
const quickMenuItem = document.querySelectorAll(".quick_menu_item");
const qmPrevBtn = document.querySelector(".qm_prev_btn");
const qmNextBtn = document.querySelector(".qm_next_btn");
// 상품
const productsList = document.querySelectorAll(".products_list");
// 타임세일
const timeSale = document.querySelector(".timesale_list");
const tsSlideItem = document.querySelectorAll(".timesale_item");
const tsPrevBtn = document.querySelector(".ts_prev_btn");
const tsNextBtn = document.querySelector(".ts_next_btn");

let currentIndex1 = 0;
let currentIndex2 = 0;
let slideInterval;
let tsSlideInterval;

document.addEventListener("DOMContentLoaded", () => {
    const totalItems = slideItem.length; // 캐러셀 전체 아이템 수
    const totalTsItems = tsSlideItem.length;

    showCount.innerHTML = `1 / <em class="total">${totalItems}</em>`; // 현재 카운트 표시

    /* 캐러셀 함수 */
    // 슬라이드 업데이트 함수
    function updateSlide() {
        const itemWidth = slideItem[0].clientWidth; // 아이템의 너비를 계산
        const offset = -currentIndex1 * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
    // 다음 슬라이드 함수
    function handleClickNextSlide() {
        currentIndex1 = (currentIndex1 + 1) % totalItems;
        showCount.innerHTML = `${currentIndex1 + 1} / <em class="total">${totalItems}</em>`;
        updateSlide();
    }
    // 이전 슬라이드 함수
    function handleClickPrevSlide() {
        currentIndex1 = (currentIndex1 - 1 + totalItems) % totalItems;
        showCount.innerHTML = `${currentIndex1 + 1} / <em class="total">${totalItems}</em>`;
        updateSlide();
    }
    // 자동 슬라이드 시작 함수
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            currentIndex1 = (currentIndex1 + 1) % totalItems;
            showCount.innerHTML = `${currentIndex1 + 1} / <em class="total">${totalItems}</em>`;
            updateSlide();
        }, 4000); // 4초마다 슬라이드 변경
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

    /* 퀵메뉴 슬라이드 함수 */
    // 이전 퀵메뉴 슬라이드
    function handleClickQmPrevSlide() {
        quickMenuList.scrollBy({ left: -300, behavior: "smooth" });
    }
    // 다음 퀵메뉴 슬라이드
    function handleClickQmNextSlide() {
        quickMenuList.scrollBy({ left: 300, behavior: "smooth" });
    }

    /* 상품 슬라이드 함수 */
    productsList.forEach((list) => {
        const packageList = list.querySelector(".package_list");
        const items = list.querySelectorAll(".products_item"); // productsList 내에서 .products_item의 모든 요소
        const prevBtn = list.parentElement.querySelector(".qd_prev_btn"); // productsList 부모요소 내에 .qd_prev_btn 요소
        const nextBtn = list.parentElement.querySelector(".qd_next_btn"); // productsList 부모요소 내에 .qd_next_btn 요소
        const itemWidth = items[0].offsetWidth;
        const gap = 23.3;

        // 버튼 상태 업데이트 함수
        function updateButtonState() {
            const scrollLeft = list.scrollLeft;
            const maxScrollLeft = list.scrollWidth - list.clientWidth;

            // 이전 버튼
            if (scrollLeft <= 0) {
                prevBtn.classList.add("invisible");
            } else {
                prevBtn.classList.remove("invisible");
            }

            // 다음 버튼
            if (scrollLeft >= maxScrollLeft) {
                nextBtn.classList.add("invisible");
            } else {
                nextBtn.classList.remove("invisible");
            }
        }

        // 초기 상태 업데이트
        updateButtonState();

        // 이전 상품 슬라이드
        prevBtn.addEventListener("click", function () {
            list.scrollBy({ left: -(itemWidth + gap), behavior: "smooth" });

            if (packageList) {
                packageList.scrollBy({ left: -(itemWidth + gap), behavior: "smooth" });
            }
        });
        // 다음 상품 슬라이드
        nextBtn.addEventListener("click", function () {
            list.scrollBy({ left: itemWidth + gap, behavior: "smooth" });

            if (packageList) {
                packageList.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
            }
        });
        list.addEventListener("scroll", updateButtonState);
    });

    /* 타임세일 슬라이드 함수 */
    // 슬라이드 업데이트 함수
    function updateTsSlide() {
        const itemWidth = tsSlideItem[0].clientWidth;
        const computedStyle = window.getComputedStyle(tsSlideItem[0]);
        const gap = parseFloat(computedStyle.marginRight);
        const offset = -currentIndex2 * (itemWidth + gap);

        timeSale.style.transform = `translateX(${offset}px)`;
    }
    // 다음 슬라이드 함수
    function handleClickNextTsSlide() {
        if (currentIndex2 < totalTsItems - 2) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }

        updateTsSlide();
    }
    // 이전 슬라이드 함수
    function handleClickPrevTsSlide() {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = totalTsItems - 2;
        }

        updateTsSlide();
    }
    // 자동 슬라이드 시작 함수
    function startTsAutoSlide() {
        tsSlideInterval = setInterval(() => {
            if (currentIndex2 < totalTsItems - 2) {
                currentIndex2++;
            } else {
                currentIndex2 = 0;
            }

            updateTsSlide();
        }, 4000); // 4초마다 슬라이드 변경
    }

    // 리사이즈 함수
    function handleResize() {
        // 슬라이드 위치를 업데이트하여 반응형을 유지
        updateSlide();
        updateTsSlide();
    }

    // 페이지 로드 시 자동 슬라이드 시작
    startAutoSlide();
    startTsAutoSlide();

    window.addEventListener("resize", handleResize);
    prevBtn.addEventListener("click", handleClickPrevSlide);
    nextBtn.addEventListener("click", handleClickNextSlide);
    playBtn.addEventListener("click", handleClickPlaySlide);
    pauseBtn.addEventListener("click", handleClickStopSlide);
    qmPrevBtn.addEventListener("click", handleClickQmPrevSlide);
    qmNextBtn.addEventListener("click", handleClickQmNextSlide);
    tsPrevBtn.addEventListener("click", handleClickPrevTsSlide);
    tsNextBtn.addEventListener("click", handleClickNextTsSlide);
});
