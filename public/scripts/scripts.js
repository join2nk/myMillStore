let checked = false


function clicked(id, inid, val, listOfId) {
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





let listItem = [
  ['usna', "arwa"],
  ["rice", 'broken', 'rejection'],
  ['export', 'self', 'unknown', 'domestic', 'cgss'],
  ['frk', 'nonfrk']
]

let i = 0
listItem.forEach(list => {
  list.forEach(item => {
    document.getElementById("choices").innerHTML += `
    <button id="${item}" class="btn bg-lignt py-0 m-1 px-2 mx-1 border-primary border-1 bg-opacity-25" onclick="addToNaration('${item}','${i}')">${item}</button>
    
    `
  })
  document.getElementById("choices").innerHTML += `<br>
  <div style = "border-bottom:1px solid #CCC">
  `;
  i++
});
document.getElementById('choices').innerHTML+=`
<button onclick="clearTextarea()" class="btn btn-warning d-flex py-0 m-auto my-1" style="align-items:flex-start;bot">clear</button>
`



function addToNaration(item, i) {
  let present = false

  listItem[i].forEach(s_item => {
    if (document.getElementById("naration").value.includes((s_item))) {
      present = true
    } else {}
  })
  if (present) {
    document.getElementById("naration").innerHTML = ` ${item} |`
  } else {
    document.getElementById("naration").innerHTML += ` ${item} |`
  }
}

function clearTextarea() {
  document.getElementById("naration").value = ""

}












document.getElementById("logSubmit").addEventListener('touchstart',ifsubmit)
function ifsubmit() {
  let naration = document.getElementById("naration").value;
  let millState = document.getElementById("in-1").value
  if (millState == "") return;

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