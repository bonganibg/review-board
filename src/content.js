const reviewer = document.getElementById("navbarDropdown")
const studentDetails = document.getElementsByClassName("student-block")[0].getElementsByTagName('h6');
const studentNumber = studentDetails[3].textContent.replace("Student number:","").trim()
const studentName = studentDetails[0].textContent.replace("Student: ","").trim()

// while ()

// When the popup is activated, setup the listener
function SetMessage()
{
  chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
}
  
setInterval(SetMessage, 1000)