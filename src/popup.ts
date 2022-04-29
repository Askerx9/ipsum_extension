// Initialize butotn
let getFieds = document.getElementById("getFieds") as HTMLElement;

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
getFieds.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });  
  console.log('yo');
  
  if(tab.id !== undefined) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['script.js'],
    });
  }
});

function showFieldsInPopup(fields: elStructure[]) {

  const fieldsArea = document.getElementById('fields') 
  if(!fieldsArea) {return}
  
  fieldsArea.innerHTML = ''
  
  for (let i = 0; i < fields.length; i++) {
    const element = fields[i] as elStructure;
      fieldsArea.innerHTML += `
      <li class="fields__el">
        <p>${element.label}</p>
        <button>fill in</button>
      </li>
      `
  }
}

chrome.runtime.onMessage.addListener((request) => {
  console.log(request);
  
  showFieldsInPopup(request.fields)
})




