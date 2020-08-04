$.getJSON("//ender-bot.ml/get.json", function() {
    alert("success");
  })
  .success(function() { alert("second success"); })
  .error(function() { alert("error"); })
  .complete(function() { alert("complete"); });