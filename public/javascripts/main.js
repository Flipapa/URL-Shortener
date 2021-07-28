const forms = document.getElementsByClassName('needs-validation')

// HTMLCollection (ex: querySelectorAll, getElementByClassName) 的回傳值是 NodeList
// 以 call() 將 filter() 套用到非 Array 的物件上
const validation = Array.prototype.filter.call(forms, (form) => {
  form.addEventListener('submit', function onFormSubmitted(event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  })
})