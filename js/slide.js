document.addEventListener("DOMContentLoaded", () => {
    // 퀵메뉴
    const quickMenuList = document.querySelector(".quick_menu_list");
    const qmPrevBtn = document.querySelector(".qm_prev_btn");
    const qmNextBtn = document.querySelector(".qm_next_btn");
    // 상품
    const productsList = document.querySelectorAll(".products_list");
    // 타임세일
    const timeSale = document.querySelector(".timesale_list");
    const tsSlideItem = document.querySelectorAll(".timesale_item");
    const tsPrevBtn = document.querySelector(".ts_prev_btn");
    const tsNextBtn = document.querySelector(".ts_next_btn");
    const totalTsItems = tsSlideItem.length;

    let tScurrentIndex = 0;

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
        const items = list.querySelectorAll(".products_item");
        const prevBtn = list.closest(".product_list_wrap").querySelector(".qd_prev_btn");
        const nextBtn = list.closest(".product_list_wrap").querySelector(".qd_next_btn");
        const totalPdItems = items.length;
        let visibleItems;
        let maxIndex;
        let currentIndex = 0;

        function updateProductSlide() {
            const itemWidth = items[0].clientWidth;
            const offset = -currentIndex * itemWidth;
            visibleItems = Math.floor(list.clientWidth / itemWidth);
            maxIndex = totalPdItems - visibleItems;

            list.style.transform = `translateX(${offset}px)`;
            list.style.transition = `all .2s ease`;
        }

        updateProductSlide();

        // 다음 슬라이드 함수
        function handleNextSlide() {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateProductSlide();
            }
        }

        // 이전 슬라이드 함수
        function handlePrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateProductSlide();
            }
        }

        // 다음 슬라이드 함수
        function handleNextSlide() {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateProductSlide();
            }
        }

        // 이전 슬라이드 함수
        function handlePrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateProductSlide();
            }
        }

        prevBtn.addEventListener("click", handlePrevSlide);
        nextBtn.addEventListener("click", handleNextSlide);
        window.addEventListener("resize", function () {
            updateProductSlide();
        });
    });

    /* 타임세일 슬라이드 함수 */
    // 슬라이드 업데이트 함수
    function updateTsSlide() {
        const itemWidth = tsSlideItem[0].clientWidth;
        const computedStyle = window.getComputedStyle(tsSlideItem[0]);
        const gap = parseFloat(computedStyle.marginRight);
        const offset = -tScurrentIndex * (itemWidth + gap);

        timeSale.style.transform = `translateX(${offset}px)`;
    }

    updateTsSlide();

    // 다음 슬라이드 함수
    function handleClickNextTsSlide() {
        if (tScurrentIndex < totalTsItems - 2) {
            tScurrentIndex++;
        } else {
            tScurrentIndex = 0;
        }

        updateTsSlide();
    }
    // 이전 슬라이드 함수
    function handleClickPrevTsSlide() {
        if (tScurrentIndex > 0) {
            tScurrentIndex--;
        } else {
            tScurrentIndex = totalTsItems - 2;
        }

        updateTsSlide();
    }
    // 자동 슬라이드 시작 함수
    function startTsAutoSlide() {
        setInterval(() => {
            if (tScurrentIndex < totalTsItems - 2) {
                tScurrentIndex++;
            } else {
                tScurrentIndex = 0;
            }

            updateTsSlide();
        }, 4000); // 4초마다 슬라이드 변경
    }

    // 리사이즈 함수
    function handleResize() {
        updateTsSlide(); // 슬라이드 위치를 업데이트하여 반응형을 유지
    }

    // 페이지 로드 시 자동 슬라이드 시작
    startTsAutoSlide();

    window.addEventListener("resize", handleResize);
    qmPrevBtn.addEventListener("click", handleClickQmPrevSlide);
    qmNextBtn.addEventListener("click", handleClickQmNextSlide);
    tsPrevBtn.addEventListener("click", handleClickPrevTsSlide);
    tsNextBtn.addEventListener("click", handleClickNextTsSlide);
});
