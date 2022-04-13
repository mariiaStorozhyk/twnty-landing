document.getElementById('consultationForm').addEventListener('submit', (e) => {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('link')[0].value = '';
  document.getElementsByName('message')[0].value = '';
  document.getElementsByName('checkbox')[0].checked = false;
});