const reviewer = document.getElementById("navbarDropdown").innerText.trim()
const studentDetails = document.getElementsByClassName("student-block")[0].getElementsByTagName('h6');
const studentNumber = studentDetails[3].textContent.replace("Student number:","").trim()
const studentName = studentDetails[0].textContent.replace("Student: ","").trim()

chrome.storage.local.clear();

const details = {
  source: "content",
  reviewer: reviewer,
  studentNumber: studentNumber,
  studentName: studentName
}

chrome.storage.local.set({
  student: JSON.stringify(details)
})