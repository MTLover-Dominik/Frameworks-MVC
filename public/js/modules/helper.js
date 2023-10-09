export function IconHovered (hoverFlag, element) {
    if (hoverFlag) {
        element.style.color = "black";
        element.style.cursor = "pointer";
    } else {
        element.style.color = "dimgray";
        element.style.cursor = "auto";
    }
}