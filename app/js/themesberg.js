var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var registerAccountButton = document.getElementById('registerAccountButton');
var registerAccountModal = new bootstrap.Modal(document.getElementById('registerAccountModal'), {
    keyboard: false
})
registerAccountButton.addEventListener('click', function () {
    registerAccountModal.toggle();
})