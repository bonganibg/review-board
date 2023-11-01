chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(message, sender)
 
{    
    // Handle the message from the content script.
    if (message.type === "message_from_content_script") {
      // Save the data from the content script.
      var dataFromContentScript = message.data;

      console.log(dataFromContentScript);
      // Send the data to the popup.js page.
      chrome.runtime.sendMessage({
        type: "message_from_background_to_popup",
        data: dataFromContentScript
      });
    }
  });
});



// // Listen for messages from the background page.
// chrome.runtime.onMessage.addListener(function(message, sender) {
//     testing.innerText = "chrome runtime working"
//     // Handle the message from the background page.
//     if (message.type === "message_from_background_to_popup") {
//       // Get the data from the background page.
//       var dataFromBackground = message.data;
  
//       // Do something with the data from the background page.
//       // For example, you could display the data in the popup.
//       btnThread.textContent = dataFromBackground.exampleData;
//     }
//   });
