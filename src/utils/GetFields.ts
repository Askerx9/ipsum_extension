/**
 * Get all fields in CkEditor element
 * @returns {[?HTMLParagraphElement]}
 */
function getCkFields(): [] | HTMLParagraphElement[] {
  const iframes = document.querySelectorAll<HTMLIFrameElement>(".cke_contents iframe");
  const fields: HTMLParagraphElement[] = [];

  for (let i = 0; i < iframes.length; i++) {
    const el = iframes[i];
    const field = el.contentWindow?.document.querySelector<HTMLParagraphElement>("p");

    if (field) {
      fields.push(field);
    }
  }

  return fields;
}

/**
 * Get all fields in the current tab
 * Compatible: [CkEditor, HTMLInputElement]
 * @returns {[HTMLElement]} return array of HTMLElement
 */
export function getFields(): HTMLElement[] | [] {
  const ck_fieldls = getCkFields()
  const html_fields = document.querySelectorAll<HTMLInputElement>('input[type=text], input[type=email], input[type=url]')

  return [...ck_fieldls, ...html_fields];
}
