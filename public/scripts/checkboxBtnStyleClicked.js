function checkboxBtnStyleClicked(id, inputId, val, listOfId) {
  listOfId.forEach(localid => {
    elmt = document.getElementById(localid);
    elmt.classList.remove("bg-primary");
    elmt.classList.add("bg-light");
    document.getElementById(inputId).value = "";
  });
  checked = checked ? false : false;
  if (checked) {
    let element = document.getElementById(id);
    element.classList.remove("bg-primary");
    element.classList.add("bg-light");
    checked = false;
    document.getElementById(inputId).value = "";
  } else {
    let element = document.getElementById(id);
    element.classList.remove("bg-light");
    element.classList.add("bg-primary");
    checked = true;
    document.getElementById(inputId).value = val;
  }
}
