export class IconHoverHandler {
    constructor(hoverFlag, element, colorElement) {
        this.hoverFlag = hoverFlag;
        this.element = element;
        this.colorElement = colorElement;
    }

    hovered() {
        if (this.hoverFlag) {
            this.colorElement.style.color = "black";
            this.element.style.cursor = "pointer";
        }
    }
    unHovered() {
        if (!this.hoverFlag) {
                this.colorElement.style.color = "dimgray";
                this.element.style.cursor = "auto";
            }
    }
}