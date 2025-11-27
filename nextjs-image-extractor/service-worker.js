const nextImagePath = "/_next/image/";

function changeCurrentImageUrl() {
  window.location = decodeURIComponent(window.location.search.slice(window.location.search.indexOf("=")).slice(1).split("&")[0]);
}

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes(nextImagePath)) {    
    await chrome.scripting.executeScript({
      func: changeCurrentImageUrl,
      target: { tabId: tab.id }
    });
  }
});