( async function() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });  
  
  if(tab.id !== undefined) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['script.js'],
    });
  }

  chrome.runtime.onMessage.addListener((request) => {
    showFieldsInPopup(request.fields)
  })

}())

function showFieldsInPopup(fields: elStructure[]) {

  const fieldsArea = document.getElementById('fields') 
  if(!fieldsArea) {return}

  fieldsArea.innerHTML = ''
  
  for (let i = 0; i < fields.length; i++) {
    const element = fields[i] as elStructure;
      fieldsArea.innerHTML += `
      <li class="fields__el">
        <p>${element.label}<br><span>${element.type}</span></p>
        <button>fill in</button>
      </li>
      `
  }
}




