export class IconHoverHandler {
    constructor() {

    }

    hovered(hoverFlag, element, colorElement) {
        if (hoverFlag) {
            colorElement.style.color = "black";
            element.style.cursor = "pointer";
        }
    }
    unHovered(hoverFlag, element, colorElement) {
        if (!hoverFlag) {
            colorElement.style.color = "dimgray";
            element.style.cursor = "auto";
        }
    }
}