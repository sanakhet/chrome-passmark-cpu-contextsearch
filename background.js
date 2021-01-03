

function clickHandler() {
  return function(info, tab) {
	var url = "https://www.google.com/search?q=site:cpubenchmark.net+" + info.selectionText + "&oq=" + info.selectionText + "&sourceid=chrome&ie=UTF-8&btnI=I%27m+Feeling+Lucky";
    // Create a new tabto the info page.
	chrome.tabs.create({ url: url, });
  };
};

chrome.contextMenus.create({
  "title" : "Passmark CPU Search",
  "type" : "normal",
  "contexts" : ["selection"],
  "onclick" : clickHandler()
});



/**
 * Returns a handler which will open a new tab when activated.
 */


// function onClickPassmarkSearchDualCPU() {
//   return function(info, tab) {
// 	var url = "https://www.cpubenchmark.net/cpu.php?cpu=" + info.selectionText + "&cpuCount=2";
//     // Create a new tabto the info page.
// 	chrome.tabs.create({ url: url, });
//   };
// };


// function onClickPassmarkSearchSingleCPU() {
//   return function(info, tab) {
// 	var url = "https://www.cpubenchmark.net/cpu.php?cpu=" + info.selectionText;
//     // Create a new tabto the info page.
// 	chrome.tabs.create({ url: url, });
//   };
// };



/**
 * Create a context menu which will only show up for images.
 */

// 

// chrome.contextMenus.create({
//   "title" : "Passmark Dual CPU Search",
//   "type" : "normal",
//   "contexts" : ["selection"],
//   "onclick" : onClickPassmarkSearchDualCPU()
// });
// chrome.contextMenus.create({
//   "title" : "Passmark Single CPU Search",
//   "type" : "normal",
//   "contexts" : ["selection"],
//   "onclick" : onClickPassmarkSearchSingleCPU()
// });