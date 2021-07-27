function copyURL() {
  // 參考 jQuery 邏輯改用 js 來寫
  // var $temp = $("<input>");
  // $("body").append($temp);
  // $temp.val($(element).text()).select();
  // document.execCommand("copy");
  // $temp.remove();

  // Get the text field
  const shortedURL = document.querySelector("#shortedURL")
  const inputElement = document.createElement("input")
  shortedURL.append(inputElement)

  // Select the text field
  inputElement.value = shortedURL.textContent
  inputElement.select()
  inputElement.setSelectionRange(0, 99999) // For mobile devices

  // Copy the text inside the text field
  document.execCommand("copy")
  inputElement.remove()
}