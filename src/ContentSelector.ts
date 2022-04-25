export class ContentSelector {

    private element
    private sizes

    constructor(element: HTMLElement) {
        this.element = element
        this.sizes = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        }

        document.addEventListener('scroll', this.getSizes)
    }

    init() {
        this.getSizes()
    }

    getSizes() {
        const DOMrect = this.element.getBoundingClientRect()

        this.sizes = {
            x: DOMrect.left,
            y: DOMrect.top,
            w: DOMrect.width,
            h: DOMrect.height
        }

        console.log(this.element, this.sizes);
    }
}