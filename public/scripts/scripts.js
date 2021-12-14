let checked = false


function checkboxBtnStyleClicked(id, inid, val, listOfId) {
  listOfId.forEach(localid => {
    elmt = document.getElementById(localid)
    elmt.classList.remove("bg-primary")
    elmt.classList.add("bg-light")
    document.getElementById(inid).value = ""
  });
  checked = checked ? false : false;
  if (checked) {
    let element = document.getElementById(id)
    element.classList.remove("bg-primary")
    element.classList.add("bg-light")
    checked = false
    document.getElementById(inid).value = ""
  } else {
    let element = document.getElementById(id)
    element.classList.remove("bg-light")
    element.classList.add("bg-primary")
    checked = true
    document.getElementById(inid).value = val
  }
}


document.getElementById("submit").addEventListener('click',ifsubmit)


function ifsubmit() {
  let naration = document.getElementById("naration").value.trim();
  let millState = document.getElementById("state").value.trim()

  fetch("https://arwamill.herokuapp.com/arwa", {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plane,*/*',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        millState: millState,
        user: '-',
        naration: naration
      })
    })
    .then(res => {
      if (res.redirected) {
        window.location.href = res.url;
      } else {
        res.json()
      }
    })
}