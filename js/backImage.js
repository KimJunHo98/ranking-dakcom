// const bgIcoEls = document.querySelectorAll(".bg_ico");
// const sideMenuItems = document.querySelectorAll(".side_menu_item");

// // 이미지 경로
// const iconPaths = [
//     "./images/IMG1681vTX889434740.png", // 신제품
//     "./images/닭가슴살아이콘.png", // 닭가슴살
// ];
// const colorIconPaths = [
//     "./images/IMG1681JRj889432369.png", // 신제품 (색상 변경)
//     "./images/닭가슴살아이콘_색상변경.png", // 닭가슴살 (색상 변경)
// ];

// let previousItemIndex = -1; // 이전에 마우스가 올려진 아이템의 인덱스를 추적

// // .bg_ico 기본 이미지 경로 적용
// bgIcoEls.forEach((el, i) => {
//     el.style.backgroundImage = `url(${iconPaths[i]})`;
//     el.style.backgroundRepeat = "no-repeat";
//     el.style.backgroundSize = "40px";
// });

// // 마우스 오버 이미지 경로
// function handleEnterItem(e) {
//     const currentItemIndex = Array.from(sideMenuItems).indexOf(e.currentTarget);

//     if (previousItemIndex !== -1 && previousItemIndex !== currentItemIndex) {
//         bgIcoEls[previousItemIndex].style.backgroundImage = `url(${iconPaths[previousItemIndex]})`;
//     }
//     bgIcoEls[currentItemIndex].style.backgroundImage = `url(${colorIconPaths[currentItemIndex]})`;
//     previousItemIndex = currentItemIndex;
// }

// // 마우스 리브 이미지 경로
// function handleLeaveItem(e) {
//     const currentItemIndex = Array.from(sideMenuItems).indexOf(e.currentTarget);

//     if (currentItemIndex === previousItemIndex) {
//         bgIcoEls[currentItemIndex].style.backgroundImage = `url(${iconPaths[currentItemIndex]})`;
//         previousItemIndex = -1;
//     }
// }

// sideMenuItems.forEach((item) => {
//     item.addEventListener("pointerenter", handleEnterItem);
//     item.addEventListener("pointerleave", handleLeaveItem);
// });
