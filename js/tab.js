const tabLinks = document.querySelectorAll(".tab_nav_link");
const tabMenuItems = document.querySelectorAll(".tabmenu_item");

tabLinks.forEach(tabLink => {
    tabLink.addEventListener("click", function (e) {
        const tabId = tabLink.getAttribute("href").replace("#", "");
        
        e.preventDefault();

        // 클릭된 탭 링크에만 active 클래스 추가
        tabLinks.forEach(link => {
            link.classList.remove("active");
        });
        tabLink.classList.add("active");

        // 해당 탭 링크의 href 속성 값과 일치하는 탭 메뉴 아이템을 찾아 active 클래스 추가 및 제거
        tabMenuItems.forEach(item => {
            if (item.id === tabId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
});
