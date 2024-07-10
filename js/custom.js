const body = document.querySelector("body");
const headerGnb = document.getElementById("headerGnb");
// 사이드 메뉴
const sideMenu = document.getElementById("sideMenu");
const sideMenuBtn = document.querySelector(".side_menu_btn");
const sideMenuLink = document.querySelector(".side_menu_link");
const sideMenuDepth = document.querySelector(".side_menu_depth");
// 사이드 퀵메뉴
const sideQmWrap = document.querySelector(".side_Qm_wrap");
const showBtn = document.querySelector(".show_btn");
const topBtn = document.querySelector(".top");
// 푸터
const selectMenu = document.querySelector(".select_menu");
const upIco = document.querySelector(".up_ico");
const fmBtn = document.querySelector(".fm_btn");

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

// 푸터 패밀리사이트
function handleClickFmBtn() {
    selectMenu.classList.toggle("active");
    upIco.classList.toggle("rotate");
}

// 사이드 퀵메뉴
// 퀵메뉴 더보기
function handleClickShowBtn() {
    sideQmWrap.classList.toggle("show");
    showBtn.classList.toggle("active");
}
// 상단 이동
function handleClickTopBtn() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", scrollStickyHeader);
fmBtn.addEventListener("click", handleClickFmBtn);
sideMenuBtn.addEventListener("click", handleEnterSideMenu);
sideMenu.addEventListener("pointerenter", pageScrollNone);
sideMenu.addEventListener("pointerleave", pageScrollBlock);
sideMenuDepth.addEventListener("pointerenter", handleEnterSideMenuDepth);
sideMenuDepth.addEventListener("pointerleave", handleLeaveSideMenuDepth);
showBtn.addEventListener("click", handleClickShowBtn);
topBtn.addEventListener("click", handleClickTopBtn);
