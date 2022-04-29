function getCkFields(originEl: HTMLElement, label=''): elStructure | boolean {
  const nextEl = originEl.nextSibling as HTMLElement

  if(nextEl?.nodeType === 1 && nextEl.classList.contains('cke')) {
    const iframe = nextEl.querySelector("iframe") as HTMLIFrameElement ;
    const field = iframe.contentWindow?.document.querySelector("p") as HTMLElement;

    if (field !== undefined) {
      return setElStructure(field, label, originEl, 'CK Editor')
    }
  }

  return false
}

function getDomFields(elementsToGet: string): elStructure[] {
  const elements = document.querySelectorAll(elementsToGet)
  const fields = [];  

  for (let i = 0; i < elements.length; i++) {
    const field = elements[i] as HTMLElement;
    
    if (field !== undefined) {
      const label = getLabel(field, i)
      const ck_field = getCkFields(field, label)
      if(typeof ck_field !== 'boolean') {
        fields.push(ck_field)
      } else {
        fields.push(setElStructure(field, label));
      }
    }
  }

  return fields
}

function getLabel(el:  HTMLElement, index: number): string {
  const id = el.getAttribute('id')
  return document.querySelector(`label[for=${id}]`)?.innerHTML || `Field ${index}`
}

function setElStructure(el: HTMLElement, label: string = '', origin: HTMLElement|boolean = false, type = 'DOM'): elStructure {
  return {
    label,
    type,
    element: el,
    originEl: origin
  }
}

// The body of this function will be execuetd as a content script inside the
// current page
(function setPageBackgroundColor() {
  const fields = getDomFields("input[type=text], textarea"); 

  chrome.runtime.sendMessage({fields});
})()
