let dataJsonFromEjsServer = JSON.parse(document.querySelector('#ejsdata').value).reverse()
dataJsonFromEjsServer.forEach((d, i) => {
  d.sno = i + 1
});
document.querySelector('#ejsdata').remove()
console.log(dataJsonFromEjsServer)

const vueApp = {
  data() {
    return {
      showForm: false,
      editForm: false,
      inform:false,
      outform:false,
      data: dataJsonFromEjsServer,
      editbyid:"",
      test:"asdf"
    }
  },
  methods: {
    mean: function (branReport,plantBranReport){
      if (branReport>plantBranReport){
        let mean= branReport-plantBranReport 
        if (mean>=0.50)return true
      }
    }
    ,
    shortDateFormat: function (date) {
      let d = new Date(date)
      let month = d.getMonth() + 1
      return d.getDate() + "/" + month
    },
    redirect: (path) => {
      window.location.href = path;
    },
    dateForInputFormat:(d)=>{
      let date = new Date(d)
      let year=(date.getYear()+1900)
      let month=((date.getMonth()+1>=10)?date?.getMonth()+1:'0'+(date?.getMonth()+1))
      let day=(date?.getDate()>10?date?.getDate():'0'+date?.getDate())
      let date2=`${year}-${month}-${day}`
      return date2
    }
  },
  mounted: () => {
    document.querySelector('#app').classList.remove('d-none')
  },
  created(){}
}
//components
const navbar = {
  data() {
    return {
      navshow: false,
      navLinks: [{
        link: "/",
        label: "Home"
      }, {
        link: "/milling",
        label: "Milling Report"
      }, {
        link: "/gateman",
        label: "Gate App "
      }, {
        link: "/branreport",
        label: "Bran Report"
      }, {
        link: "/login/logout",
        label: "logout"
      }],
    }
  },
  template: `
  <div class="navbar navbar-dark bg-dark text-light">
  <div class="container">
    <a class="navbar-brand shadow" style="font-family: 'Smooch', cursive; font-size:x-large;">
      <slot></slot></a>
    <div>
      <i class="bi bi-caret-down"></i>
    </div>
    <div class="float-end position-relative">
      <div class="btn text-light " :class="[navshow? 'btn-outline-secondary':'' ]" @click="navshow =!navshow">
        <svg v-show="!navshow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg><svg v-show="navshow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
        </svg>
      </div>
      <div class="container">
        <div class=" d-flex flex-column float-end  justify-content-around  small card nav-dropdown " v-if="navshow">

          <div v-for="(link,i) in navLinks" class=" ">
            <a class="text-decoration-none " :href="link.link">
              <div class="py-2 link-dark px-4 bg-light">
                {{link.label}}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
}
const vcrud = {
  template:'<slot></slot>'
}


const app = Vue.createApp(vueApp)

app.component('nav-bar', navbar)
app.component('v-crud', vcrud )


app.mount("#app")