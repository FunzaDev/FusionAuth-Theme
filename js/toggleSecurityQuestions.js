function toggleSecurityQuestions() {
  var secQ1Select = document.getElementById("user_data_securityQuestion1");
  var secQ2Select = document.getElementById("user_data_securityQuestion2");

  if (secQ1Select && secQ2Select) {
    var removedFromQ2;
    var removedFromQ1;

    function onQ1Change() {
      const secQ1value = secQ1Select.value;
      const foundIn = Array.from(secQ2Select.options).findIndex(function (
        option
      ) {
        return option.value === secQ1value;
      });
      const optionToRemove = secQ2Select.options.item(foundIn);
      secQ2Select.options.remove(foundIn);
      if (removedFromQ2) {
        secQ2Select.options.add(removedFromQ2, foundIn);
      }
      removedFromQ2 = optionToRemove;
    }

    function onQ2Change() {
      const secQ2value = secQ2Select.value;

      const foundIn = Array.from(secQ1Select.options).findIndex(function (
        option
      ) {
        return option.value === secQ2value;
      });
      const optionToRemove = secQ1Select.options.item(foundIn);
      secQ1Select.options.remove(foundIn);
      if (removedFromQ1) {
        secQ1Select.options.add(removedFromQ1, foundIn);
      }
      removedFromQ1 = optionToRemove;
    }

    secQ1Select.onchange = onQ1Change;
    secQ2Select.onchange = onQ2Change;
  }
}
