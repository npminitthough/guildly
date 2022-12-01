export function getElementStyle(el: HTMLElement, property: string) {
  return window.getComputedStyle(el).getPropertyValue(property)
}