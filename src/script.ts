import { ContentSelector } from './ContentSelector';
import { getFields } from "./utils/GetFields";

// The body of this function will be execuetd as a content script inside the
// current page
(function setPageBackgroundColor() {
  const fields = getFields() as HTMLElement[];

  for (let i = 0; i < fields.length; i++) {
    const element = fields[i] as HTMLElement;
    if (element) {
      // const cs = new ContentSelector(element)

      // cs.init()
    }
  }

  // chrome.storage.sync.get("color", ({ color }) => {

  // });
})();
