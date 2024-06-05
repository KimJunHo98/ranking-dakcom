const body = document.querySelector("body");
const headerGnb = document.getElementById("headerGnb");
const sideMenu = document.getElementById("sideMenu");
const sideMenuBtn = document.querySelector(".side_menu_btn");
const sideMenuLink = document.querySelector(".side_menu_link");
const sideMenuDepth = document.querySelector(".side_menu_depth");

// 스티키 헤더
function scrollStickyHeader() {
    const scrollTop = window.scrollY;
    const offSetTop = headerGnb.offsetTop;
    const gap = 50;

    if (scrollTop > offSetTop + gap) {
        headerGnb.classList.add("sticky");
        sideMenu.classList.add("fixed");
    } else {
        headerGnb.classList.remove("sticky");
        sideMenu.classList.remove("fixed");
    }
}

// 슬라이드 사이드메뉴
function handleEnterSideMenu() {
    sideMenu.classList.toggle("active");
    sideMenuBtn.classList.toggle("active");
}

// 사이드 메뉴 링크 토글 글씨색상
function handleEnterSideMenuDepth() {
    sideMenuLink.classList.add("depth_hover");
}
function handleLeaveSideMenuDepth() {
    sideMenuLink.classList.remove("depth_hover");
}

// 페이지 스크롤 막기
function pageScrollNone() {
    body.style.overflow = "hidden";
}
function pageScrollBlock() {
    body.style.overflow = "auto";
}

window.addEventListener("scroll", scrollStickyHeader);
sideMenu.addEventListener("pointerenter", pageScrollNone);
sideMenu.addEventListener("pointerleave", pageScrollBlock);
sideMenuBtn.addEventListener("click", handleEnterSideMenu);
sideMenuDepth.addEventListener("pointerenter", handleEnterSideMenuDepth);
sideMenuDepth.addEventListener("pointerleave", handleLeaveSideMenuDepth);
