export function IconHovered (hoverFlag, element, colorElement) {
    if (hoverFlag) {
        colorElement.style.color = "black";
        element.style.cursor = "pointer";
    } else {
        colorElement.style.color = "dimgray";
        element.style.cursor = "auto";
    }
}