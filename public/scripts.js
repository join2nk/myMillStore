let dataMain = JSON.parse(document.querySelector('#ejsdata').value)
dataMain.forEach((d, i) => {
  d.sno = i + 1
});
console.log(dataMain)
document.querySelector('#ejsdata').remove()


var app = Vue.createApp({
  data() {
    return {
      navshow: false,
      showForm: false,
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
      data: dataMain
    }
  },
  methods: {
    month: function (date) {
      let d = new Date(date)
      let month = d.getMonth() + 1
      return d.getDate() + "/" + month
    },
    redirect: (path) => {
      window.location.href = path;
    }
  },
  mounted: () => {
    document.querySelector('#app').classList.remove('d-none')
  },
  created() {}

})

app.mount("#app")