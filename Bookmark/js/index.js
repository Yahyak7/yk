// عناصر DOM
var nameInput = document.getElementById("bookmarkName");
var urlInput = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableContent");
var errorBox = document.querySelector(".box-info");
var closeError = document.getElementById("closeBtn");

// دالة التحقق من صحة المدخلات باستخدام Regex
function isValidInput(name, url) {
  var urlPattern = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}.*$/; // التحقق من الرابط
  return name.length >= 3 && urlPattern.test(url);
}

// إظهار رسالة الخطأ
function showError() {
  errorBox.classList.remove("d-none");
}

// إخفاء رسالة الخطأ
closeError.onclick = () => errorBox.classList.add("d-none");

// إضافة Bookmark
function addBookmark(name, url) {
  var index = tableBody.children.length + 1;

  tableBody.innerHTML += `
    <tr>
      <td>${index}</td>
      <td>${name}</td>
      <td><a href="${url}" target="_blank" class="btn btn-success">Visit</a></td>
      <td><button class="btn btn-danger" onclick="deleteRow(this)">Delete</button></td>
    </tr>
  `;
}

// حذف صف من الجدول
function deleteRow(button) {
  button.parentElement.parentElement.remove();
  updateIndexes();
}

// تحديث أرقام الجدول
function updateIndexes() {
  Array.from(tableBody.children).forEach((row, i) => {
    row.children[0].textContent = i + 1;
  });
}

// عند الضغط على زر Submit
submitBtn.onclick = () => {
  var name = nameInput.value.trim();
  var url = urlInput.value.trim();

  if (isValidInput(name, url)) {
    addBookmark(name, url);
    nameInput.value = "";
    urlInput.value = "";
  } else {
    showError();
  }
};
