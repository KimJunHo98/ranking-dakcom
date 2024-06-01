const category = document.querySelector(".category");
const sideMenu = document.querySelector("#side_menu");

// 슬라이드 사이드메뉴
const handleClickSideMenu = () => {
    sideMenu.classList.toggle("active");
}

category.addEventListener("click", handleClickSideMenu);
