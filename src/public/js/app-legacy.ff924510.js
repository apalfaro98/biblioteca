(function(){"use strict";var e={8651:function(e,r,t){t(6992),t(8674),t(9601),t(7727);var n=t(144),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-app",[t("router-view")],1)},s=[],a=(t(6699),t(2023),{name:"App",created:function(){this.checkLogin()},data:function(){return{isLogued:"ok"==sessionStorage.getItem("logueado")}},methods:{checkLogin:function(){this.isLogued?this.$router.push("/home"):this.$route.path.includes("home")&&this.$router.push("/")}},watch:{$route:"checkLogin"}}),i=a,l=t(1001),c=t(3453),u=t.n(c),d=t(7524),m=(0,l.Z)(i,o,s,!1,null,null,null),f=m.exports;u()(m,{VApp:d.Z});var h=t(8345),p=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h1",[e._v("Hokladesde el home")])},b=[],v={},g=(0,l.Z)(v,p,b,!1,null,null,null),x=g.exports,y=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"fondo"},[t("v-row",{staticClass:"mb-0"},[t("v-col",{staticClass:"col-12 col-sm-6 col-md-5 pb-0"},[t("v-form",{staticClass:"grey lighten-5 pa-14 form",on:{submit:function(r){return r.preventDefault(),e.login.apply(null,arguments)}}},[t("h1",{staticClass:"mb-5"},[e._v("Biblioteca MFC")]),e.error?t("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),t("v-text-field",{attrs:{rules:[e.rules.required],label:"  Nombre de Usuario",required:"",outlined:"","prepend-inner-icon":"mdi-account",placeholder:"Tu nombre de usuario"},model:{value:e.user,callback:function(r){e.user=r},expression:"user"}}),t("v-text-field",{attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show?"text":"password","prepend-inner-icon":"mdi-lock",label:"Contraseña",hint:"Al menos 8 caracteres",required:"",counter:"",outlined:""},on:{"click:append":function(r){e.show=!e.show}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),t("v-btn",{staticClass:"mr-4 px-10 py-3",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Entrar ")])],1)],1),t("v-col",{staticClass:"d-flex justify-center align-center pb-0"},[t("div",{staticClass:"d-flex flex-column"},[t("v-btn",{staticClass:"mb-2 d-block",attrs:{color:"success",large:"",elevation:"15"},on:{click:function(r){return e.irRegistro()}}},[e._v(" Registrarse ")]),t("v-btn",{staticClass:"mt-4 d-block white--text",attrs:{color:"teal",large:"",elevation:"15"},on:{click:function(r){return e.irBusqueda()}}},[e._v(" Buscar Libros ")])],1)])],1)],1)},C=[],w=(t(1539),t(8862),"https://reqres.in/"),k=function(e,r){return fetch("".concat(w,"api/login"),{method:"POST",body:JSON.stringify({usuario:e,password:r})})},_={auth:k},Z={name:"LoginView",data:function(){return{user:"",password:"",show:!1,error:!1,errorMessage:"",rules:{required:function(e){return!!e||"Requerido."},min:function(e){return e.length>=8||"Se necesita un minimo de 8 caracteres."}}}},methods:{irRegistro:function(){this.$router.push("/registro")},irBusqueda:function(){this.$router.push("/busqueda")},login:function(){var e=this;0==this.user.length||0==this.password.length?(this.error=!0,this.errorMessage="El usuario y la contraseña son campos obligatorios"):this.password.length<8?(this.error=!0,this.errorMessage="La contraseña debe tener un mínimo de 8 caracteres"):(this.error=!1,_.auth(this.user,this.password).then((function(r){r.ok?(console.log(r),sessionStorage.setItem("logueado","ok"),e.$router.push("/home")):(e.error=!0,e.errorMessage="Usuario o contraseña incorrectos, vuelva a intentarlo")})))}}},q=Z,E=t(1234),V=t(680),$=t(2102),O=t(6232),L=t(2877),M=t(5978),T=(0,l.Z)(q,y,C,!1,null,null,null),S=T.exports;u()(T,{VAlert:E.Z,VBtn:V.Z,VCol:$.Z,VForm:O.Z,VRow:L.Z,VTextField:M.Z});var j=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"fondo d-flex justify-center align-center"},[t("v-form",{ref:"form",staticClass:"grey lighten-5 pa-14 form",on:{submit:function(r){return r.preventDefault(),e.registro()}}},[t("h1",{staticClass:"mb-5 text-center"},[e._v("Registro de estudiantes")]),e.error?t("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),e.success?t("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"success"}},[e._v(" Sus datos han sido guardados en la base de datos. ")]):e._e(),t("v-row",[t("v-col",[t("v-text-field",{attrs:{rules:[e.rules.required],label:"Nombre",required:"",outlined:"",placeholder:"Entre su nombre"},model:{value:e.nombre,callback:function(r){e.nombre=r},expression:"nombre"}})],1),t("v-col",[t("v-text-field",{attrs:{rules:[e.rules.required],label:"Apellidos",required:"",outlined:"",placeholder:"Entre sus apellidos"},model:{value:e.apellidos,callback:function(r){e.apellidos=r},expression:"apellidos"}})],1)],1),t("v-row",[t("v-col",[t("v-text-field",{attrs:{rules:[e.rules.required,e.rules.cant,e.rules.num],counter:11,label:"Carnet de Identidad",required:"",outlined:"",placeholder:"Entre su número de carnet de identidad"},model:{value:e.ci,callback:function(r){e.ci=r},expression:"ci"}})],1),t("v-col",[t("v-text-field",{attrs:{rules:[e.rules.required,e.rules.emailEval],label:"Correo Electrónico",required:"",outlined:"",placeholder:"Entre su correo electrónico"},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1)],1),t("v-row",[t("v-col",[t("v-select",{attrs:{items:e.carreras,rules:[e.rules.required],label:"Carrera",outlined:"",required:""},model:{value:e.carrera,callback:function(r){e.carrera=r},expression:"carrera"}})],1),t("v-col",[t("v-select",{attrs:{items:e.anios,rules:[e.rules.required],label:"Año",outlined:"",required:""},model:{value:e.anio,callback:function(r){e.anio=r},expression:"anio"}})],1)],1),t("div",{staticClass:"text-center mt-2"},[t("v-btn",{staticClass:"px-15 py-6",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Registrarse ")])],1)],1)],1)},A=[],R=(t(4916),t(4723),{name:"LoginView",data:function(){var e=this;return{nombre:"",apellidos:"",ci:"",email:"",carrera:"",anio:"",carreras:["Ciencia de la Computación","Ingeniería Informática","Licenciatura en Matemática","Licenciatura en Física","Ciencias de la Información"],anios:["1er Año","2do Año","3ro Año","4to Año","5to Año"],error:!1,errorMessage:"",success:!1,numeros:/^([0-9])*$/,emailRegex:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,rules:{required:function(e){return!!e||"Requerido."},cant:function(e){return 11===e.length||"Se necesitan 11 dígitos."},num:function(){return e.isNumber||"Solo se pueden introducir caracteres numéricos"},emailEval:function(){return e.isEmail||"Esta no es una direcci'on de correo válida"}}}},methods:{registro:function(){var e=this,r=0==this.nombre.length||0==this.apellidos.length||0==this.ci.length||0==this.email.length||0==this.carrera.length||0==this.anio.length;r?(this.error=!0,this.errorMessage="Debe rellenar todos los campos"):11==this.ci.length&&this.isNumber?this.isEmail?(this.success=!0,this.error=!1,this.$refs.form.reset(),this.nombre="",this.apellidos="",this.ci="",this.email="",this.carrera="",this.anio="",setTimeout((function(){return e.success=!1}),3e3)):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida"):(this.error=!0,this.errorMessage="El Carnet de Identidad debe tener 11 dígitos numéricos")}},computed:{isNumber:function(){return!!this.ci.match(this.numeros)},isEmail:function(){return!!this.email.match(this.emailRegex)}}}),F=R,z=t(9411),I=(0,l.Z)(F,j,A,!1,null,"1cbede86",null),B=I.exports;u()(I,{VAlert:E.Z,VBtn:V.Z,VCol:$.Z,VForm:O.Z,VRow:L.Z,VSelect:z.Z,VTextField:M.Z});var D=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"fondo"},[t("div",{staticClass:"d-flex justify-center"},[t("v-text-field",{staticClass:"input mt-16 flex-grow-0",attrs:{solo:"",rounded:"","append-icon":"mdi-magnify",height:"1.5rem"},on:{"click:append":function(r){return e.buscarLibro()},keypress:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.buscarLibro()}},model:{value:e.search,callback:function(r){e.search=r},expression:"search"}})],1),t("div",{staticClass:"d-flex justify-center mt-7"},[e.mostrarTabla?t("v-data-table",{staticClass:"elevation-1 tabla",attrs:{headers:e.headers,items:e.desserts,"items-per-page":5}}):e._e()],1)])},N=[],P=(t(4765),{data:function(){return{search:"",mostrarTabla:!1,headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}},methods:{buscarLibro:function(){0!=this.search.length&&(console.log("lo busque"),this.mostrarTabla=!0,this.search="")}}}),H=P,J=t(6310),K=(0,l.Z)(H,D,N,!1,null,"4e21568f",null),U=K.exports;u()(K,{VDataTable:J.Z,VTextField:M.Z}),n.Z.use(h.Z);var G=[{path:"/",name:"login",component:S},{path:"/home",name:"home",component:x},{path:"/registro",name:"registro",component:B},{path:"/busqueda",name:"busqueda",component:U}],Y=new h.Z({mode:"history",base:"/",routes:G}),Q=Y,W=t(9132);n.Z.use(W.Z);var X=new W.Z({});n.Z.config.productionTip=!1,new n.Z({router:Q,vuetify:X,render:function(e){return e(f)}}).$mount("#app")}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var s=r[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(r,n,o,s){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(r=c)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,s,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(r){return 0!==e[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var u=l(t)}for(r&&r(n);c<a.length;c++)s=a[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},n=self["webpackChunkbiblioteca"]=self["webpackChunkbiblioteca"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(8651)}));n=t.O(n)})();
//# sourceMappingURL=app-legacy.ff924510.js.map