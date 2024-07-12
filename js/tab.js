const tabLinks = document.querySelectorAll(".tab_nav_link");
const tabMenuItems = document.querySelectorAll(".tabmenu_item");
const cgTabLinks = document.querySelectorAll(".category_tab_link");
const cgTabMenuItems = document.querySelectorAll(".category_tabmenu_item");

// 테마별 상품
tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
        const tabId = tabLink.getAttribute("href").replace("#", "");

        e.preventDefault();

        // 클릭된 탭 링크에만 active 클래스 추가
        tabLinks.forEach((link) => {
            link.classList.remove("active");
        });
        tabLink.classList.add("active");

        // 해당 탭 링크의 href 속성 값과 일치하는 탭 메뉴 아이템을 찾아 active 클래스 추가 및 제거
        tabMenuItems.forEach((item) => {
            if (item.id === tabId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
});

// 인기 카테고리 상품
cgTabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
        const tabId = tabLink.getAttribute("href").replace("#", "");

        e.preventDefault();

        cgTabLinks.forEach((link) => {
            link.classList.remove("active");
        });
        tabLink.classList.add("active");

        cgTabMenuItems.forEach((item) => {
            if (item.id === tabId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
});
