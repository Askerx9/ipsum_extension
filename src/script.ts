function getCkFields() {
  const iframes = document.querySelectorAll(".cke_contents iframe") ;
  const fields = [];

  for (let i = 0; i < iframes.length; i++) {
    const el = iframes[i] as HTMLIFrameElement;
    const field = el.contentWindow?.document.querySelector("p");

    if (field !== undefined) {
      fields.push(el.contentWindow?.document.querySelector("p"));
    }
  }

  return fields;
}

// The body of this function will be execuetd as a content script inside the
// current page
(function setPageBackgroundColor() {
  const ck_fields = getCkFields();
  const input_fields = document.querySelectorAll("input[type=text]");
  const fields = [...ck_fields, ...input_fields];
  chrome.storage.sync.get("color", ({ color }) => {
    for (let i = 0; i < fields.length; i++) {
      const element = fields[i] as HTMLElement;
      if(element !== undefined && element !== null) {
        element.style.backgroundColor = 'red';
      }
    }
  });
})()
