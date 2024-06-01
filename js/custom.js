const sideMenu = document.querySelector("#side_menu");
const sideMenuBtn = document.querySelector(".side_menu_btn");
const sideMenuLink = document.querySelector(".side_menu_link");
const sideMenuDepth = document.querySelector(".side_menu_depth");

// 슬라이드 사이드메뉴
function handleEnterSideMenu() {
    sideMenu.classList.add("active");
}
function handleLeaveSideMenu() {
    sideMenu.classList.remove("active");
}

// 사이드 메뉴 링크 토글 글씨색상
function handleEnterSideMenuDepth() {
    sideMenuLink.classList.add("depth_hover");
};
function handleLeaveSideMenuDepth() {
    sideMenuLink.classList.remove("depth_hover");
};

sideMenuBtn.addEventListener("pointerenter", handleEnterSideMenu);
sideMenuBtn.addEventListener("pointerleave", handleLeaveSideMenu);
sideMenuDepth.addEventListener("pointerenter", handleEnterSideMenuDepth)
sideMenuDepth.addEventListener("pointerleave", handleLeaveSideMenuDepth)