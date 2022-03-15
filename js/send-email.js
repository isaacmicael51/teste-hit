
$("#send").click(function (e) {
    e.preventDefault();
  var name    = $("#name").val();
  var email   = $("#email").val();
  var message = $("#message").val();

  console.log(name, email, message);

  if (name == "" || (null && email == "") || (null && message == "") || null) {
    alert("prencha os campos");
    return false;
  }else {
    $.get("https://isaacspagnol.com.br/teste-hit/email.php", {
      name: name,
      email: email,
      message: message,
    });
  }

});