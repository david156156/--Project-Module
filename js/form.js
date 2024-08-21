function sending() {
  names = document.getElementById("name").value;
  email = document.getElementById("email").value;
  tel = document.getElementById("tel").value;
  message = document.getElementById("message").value;
  if (names && email && tel && message) {
    alert(`ברוך הבא ${names}`);
  }
}
