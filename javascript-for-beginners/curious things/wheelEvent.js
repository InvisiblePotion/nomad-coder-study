/**
 * 사용자의 마우스 휠 상태 동작을 감지하여 배경과 글자 색을 바꾼다
 * @param {WheelEvent} wheelEvent WheelEvent 객체
 */
function handleWindowWheel(wheelEvent) {
    let currentBackgroundColor = getComputedStyle(
        document.querySelector("body")
    )
        .backgroundColor.slice(4, -1)
        .replaceAll(" ", "")
        .split(",");
    let currentTextColor = getComputedStyle(document.querySelector("body"))
        .color.slice(4, -1)
        .replaceAll(" ", "")
        .split(",");

    const dimValue = 32;

    // 마우스 휠을 내리는 경우 deltaY가 양수
    if (wheelEvent.deltaY > 0) {
        currentBackgroundColor.forEach((v, i) => {
            v < dimValue
                ? (currentBackgroundColor[i] = 0)
                : (currentBackgroundColor[i] = Number(v) - dimValue);
        });

        currentTextColor.forEach((v, i) =>
            v > 255 - (dimValue - 1)
                ? (currentTextColor[i] = 255)
                : (currentTextColor[i] = Number(v) + dimValue)
        );
        console.log("BG", currentBackgroundColor);
        console.log("TX", currentTextColor);
        adjustBackgroundColor(...currentBackgroundColor);
        adjustTextColor(...currentTextColor);
    } else {
        currentBackgroundColor.forEach((v, i) =>
            v > 255 - (dimValue - 1)
                ? (currentBackgroundColor[i] = 255)
                : (currentBackgroundColor[i] = Number(v) + dimValue)
        );
        currentTextColor.forEach((v, i) =>
            v < dimValue
                ? (currentTextColor[i] = 0)
                : (currentTextColor[i] = Number(v) - dimValue)
        );
        console.log("BG", currentBackgroundColor);
        console.log("TX", currentTextColor);
        adjustBackgroundColor(...currentBackgroundColor);
        adjustTextColor(...currentTextColor);
    }
}

/**
 * body 태그의 배경 색을 rgb값을 사용해 바꾼다
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 */
function adjustBackgroundColor(r, g, b) {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

/**
 * body 태그의 텍스트 색을 rgb값을 사용해 바꾼다
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 */
function adjustTextColor(r, g, b) {
    document.body.style.color = `rgb(${r}, ${g}, ${b})`;
}

let currentScrollLevel = 0;

window.addEventListener("wheel", (e) => handleWindowWheel(e));
