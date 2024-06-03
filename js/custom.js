const headerGnb = document.querySelector("#headerGnb");
const sideMenu = document.querySelector("#side_menu");
const sideMenuBtn = document.querySelector(".side_menu_btn");
const sideMenuLink = document.querySelector(".side_menu_link");
const sideMenuDepth = document.querySelector(".side_menu_depth");

// 스티키 헤더
function scrollStickyHeader() {
    const scrollTop = window.scrollY;
    const GnbOffSetTop = headerGnb.offsetTop;
    const gap = 50;

    console.log(scrollTop);

    if (scrollTop > GnbOffSetTop) {
        headerGnb.classList.add("sticky");
    }else{
        headerGnb.classList.remove("sticky");
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

window.addEventListener("scroll", scrollStickyHeader);
sideMenuBtn.addEventListener("click", handleEnterSideMenu);
sideMenuDepth.addEventListener("pointerenter", handleEnterSideMenuDepth);
sideMenuDepth.addEventListener("pointerleave", handleLeaveSideMenuDepth);
