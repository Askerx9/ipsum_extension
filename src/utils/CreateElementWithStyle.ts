export function createEl(el:string, style: string): HTMLSpanElement {
    const span = document.createElement(el)
    span.setAttribute('style', style)
    return span
}