function setup(){
    
    function newText(){
        chrome.tabs.getCurrent(gotTab);
        
        function gotTab(){
            let msg = {
                txt: "Hello"
            }
            chrome.tabs.sendMessage(tab.id, msg)
        }        
    }
}

