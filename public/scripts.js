
let data =  JSON.parse(document.querySelector('#ejsdata').value).reverse()

data.forEach((d,i) => {
  d.sno = i+1
});

console.log(data)
document.querySelector('#ejsdata').remove() 


var app = Vue.createApp({
  data() {
    return {
      navshow: false,
      dashLinks: [{
        link: "zen/index.html",
        label: "Home"
      }, {
        link: "milling/milling.html",
        label: "Milling Register"
      }, {
        link: "test/test.html",
        label: "Bran Register"
      }, {
        link: "milling_2/index.html",
        label: "Milling 2"
      }],
      data:data
    }
  },
  methods: {
    month: function(date){
      let d = new Date(date)
      let month = d.getMonth()+1
      return d.getDate()+"/"+ month  
    }
  },mounted:()=>{
    document.querySelector('#app').classList.remove('d-none')
  },
  created(){}
  
})

app.mount("#app")

