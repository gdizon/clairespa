var today = new Date().toISOString().split('T')[0];
document.getElementsByName("datepicker")[0].setAttribute('min', today);