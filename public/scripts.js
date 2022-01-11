
let data =  JSON.parse(document.querySelector('#ejsdata').value)
console.log(data)
document.querySelector('#ejsdata').remove() 


var app = Vue.createApp({
  data() {
    return {
      navshow: false,
      dashLinks: [{
        link: "zen/index.html",
        label: "zen"
      }, {
        link: "milling/milling.html",
        label: "Milling"
      }, {
        link: "test/test.html",
        label: "Test"
      }, {
        link: "milling_2/index.html",
        label: "Milling 2"
      }],
      data:data
    }
  },
  methods: {

  },mounted:()=>{
    document.querySelector('#app').classList.remove('d-none')
  },
  created(){}
  
})

app.mount("#app")


