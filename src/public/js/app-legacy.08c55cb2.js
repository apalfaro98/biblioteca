(function(){"use strict";var t={3108:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var a=r(144),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("router-view")],1)},i=[],o={name:"App"},n=o,l=r(1001),c=r(3453),u=r.n(c),d=r(7524),f=(0,l.Z)(n,s,i,!1,null,null,null),m=f.exports;u()(f,{VApp:d.Z});var p=r(8345),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"bar",attrs:{elevation:"1",color:"white"}},[r("div",{staticClass:"bar-content d-flex justify-end"},[r("span",{staticClass:"boton d-flex align-center pl-4 rounded-xl",on:{click:function(e){return t.salir()}}},[r("v-avatar",{attrs:{color:"accent",size:"40"}},[r("v-icon",{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),r("p",{staticClass:"ml-3 pr-5 mt-3 text-h6 font-weigth-bold"},[t._v(" Salir "),r("v-icon",[t._v("mdi-exit-to-app")])],1)],1)])]),r("v-card",{staticClass:"menu",attrs:{width:"300",tile:"",elevation:"1"}},[r("h2",{staticClass:"pt-5 pb-10 text-center"},[t._v("Biblioteca")]),r("v-navigation-drawer",{attrs:{permanent:"",width:"300"}},[r("v-list",{attrs:{nav:""}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,a){return r("v-list-item",{key:a},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1),r("div",{staticClass:"contenido"},[0==t.selectedItem?r("principal-tab"):1==t.selectedItem?r("libros-tab"):2==t.selectedItem?r("estudiantes-tab"):3==t.selectedItem?r("agregar-libros"):r("prestamos-retornos-tab")],1)],1)},b=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[!1===t.back?r("div",{staticClass:"d-flex justify-space-around pt-16"},t._l(t.cards,(function(e,a){return r("v-card",{key:a,staticClass:"text-center pt-4 rounded-xl card",attrs:{width:"260",height:"150",elevation:"4"},on:{click:function(e){return t.accion(a)}}},[r("v-icon",{attrs:{size:"60",color:"blue accent-3"}},[t._v(t._s(e.icon))]),r("v-card-text",{staticClass:"text-h5 font-weight-bold azul"},[t._v(t._s(e.text))])],1)})),1):t._e(),r("div",{staticClass:"pt-6"},[r("div",{staticClass:"pl-10"},[1==t.back?r("v-btn",{attrs:{color:"grey lighten-5",elevation:"3",fab:"",small:""},on:{click:function(e){return t.atras()}}},[r("v-icon",{staticClass:"boton",attrs:{color:"blue accent-3"}},[t._v("mdi-arrow-left-thick")])],1):t._e()],1),0==t.mostrar?r("buscar-tabla",{staticClass:"subir",attrs:{texto:!0,tab:"libro"}}):1==t.mostrar?r("buscar-tabla",{staticClass:"subir",attrs:{texto:!0,tab:"estudiante"}}):2==t.mostrar?r("buscar-tabla",{staticClass:"subir",attrs:{texto:!0,tab:"prestamo"}}):t._e()],1)])},g=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex justify-center"},[r("div",{staticClass:"mt-15"},[t.texto?r("p",{staticClass:"font-weight-bold pl-2"},[t._v(" Introduzca "),"libro"==t.tab?r("span",[t._v("el título del libro")]):"estudiante"==t.tab?r("span",[t._v("el nombre del estudiante")]):"prestamo"==t.tab?r("span",[t._v("el correo del estudiante para verificar los libros que posee el mismo")]):t._e(),t._v(" : ")]):t._e(),r("v-text-field",{staticClass:"input flex-grow-0",attrs:{solo:"",rounded:"","append-icon":t.fueBuscado?"mdi-window-close":"mdi-magnify",height:"1.5rem"},on:{"click:append":function(e){return t.elegir()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.elegir()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),t.texto?r("div",{staticClass:"d-flex justify-center mt-3"},[t.mostrarTabla?r("v-data-table",{staticClass:"elevation-1 tabla",attrs:{headers:"libro"==t.tab?t.headersLA:t.headersE,items:"libro"==t.tab?t.books:t.estudiantes,"items-per-page":5,"footer-props":{"items-per-page-options":[5]}}}):t._e()],1):r("div",{staticClass:"d-flex justify-center mt-8"},[t.mostrarTabla?r("v-data-table",{staticClass:"elevation-1 tabla",attrs:{headers:t.headersLE,items:t.books,"items-per-page":6,"footer-props":{"items-per-page-options":[6]}}}):t._e()],1)])},C=[],E=(r(4916),r(4765),r(7327),r(1539),r(6699),r(2023),r(4747),r(8862),"http://localhost:8000/"),_=function(t,e){return fetch("".concat(E,"api/admin/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:t,password:e})})},w=function(t,e,r,a,s,i){return fetch("".concat(E,"api/student/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:t,apellido:e,carnet:r,email:a,carrera:s,anio:i})})},y=function(t,e,r,a){return fetch("".concat(E,"api/admin/add-book"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({titulo:t,autor:e,categoria:r,cantidad:a})})},k=function(){return fetch("".concat(E,"api/admin/show-books"))},Z=function(){return fetch("".concat(E,"api/admin/show-student"))},q={auth:_,registro:w,addBook:y,showBooks:k,showStudents:Z},V={name:"BuscarTabla",props:{texto:{type:Boolean,default:!1},tab:{type:String}},created:function(){this.pedirLibros(),this.pedirEstudiantes()},data:function(){return{search:"",fueBuscado:!1,mostrarTabla:!1,books:[],estudiantes:[],headersLA:[{text:"Título",align:"start",value:"titulo"},{text:"Autor",align:"start",value:"autor"},{text:"Categoría",align:"start",value:"categoria"},{text:"Disponible",align:"start",value:"disponible"},{text:"Total",align:"start",value:"cantidad"}],headersLE:[{text:"Título",align:"start",value:"titulo"},{text:"Autor",align:"start",value:"autor"},{text:"Categoría",align:"start",value:"categoria"},{text:"Disponible",align:"center",value:"disponible"}],headersE:[{text:"Nombre",align:"start",value:"nombre"},{text:"Apellidos",align:"start",value:"apellido"},{text:"CI",align:"start",sortable:!1,value:"carnet"},{text:"Correo",align:"start",sortable:!1,value:"email"},{text:"Carrera",align:"start",value:"carrera"},{text:"Año",align:"start",value:"anio"}]}},methods:{elegir:function(){this.fueBuscado?(this.search="",this.fueBuscado=!1,this.mostrarTabla=!1,this.pedirLibros(),this.pedirEstudiantes()):(this.busqueda(),this.fueBuscado=!0)},busqueda:function(){"libro"==this.tab?this.buscarLibro():"estudiante"==this.tab&&this.buscarEstudiante()},buscarLibro:function(){var t=this;0!=this.search.length&&(this.books=this.books.filter((function(e){return e.titulo.toLowerCase().includes(t.search.toLowerCase())})),this.texto||this.books.forEach((function(t){0==t.disponible?t.disponible="No Disponible.":t.disponible="Disponible."})),this.mostrarTabla=!0)},buscarEstudiante:function(){var t=this;0!=this.search.length&&(this.estudiantes=this.estudiantes.filter((function(e){return e.nombre.toLowerCase().includes(t.search.toLowerCase())})),this.mostrarTabla=!0)},pedirLibros:function(){var t=this;q.showBooks().then((function(t){return t.json()})).then((function(e){t.books=e.books}))},pedirEstudiantes:function(){var t=this;q.showStudents().then((function(t){return t.json()})).then((function(e){t.estudiantes=e.estudiantes}))}}},T=V,A=r(4998),L=r(5978),R=(0,l.Z)(T,x,C,!1,null,"0a3a738e",null),M=R.exports;u()(R,{VDataTable:A.Z,VTextField:L.Z});var P={name:"PrincipalTab",components:{BuscarTabla:M},data:function(){return{mostrar:null,back:!1,cards:[{text:"Buscar Libros",icon:"mdi-book-search"},{text:"Buscar Estudiantes",icon:" mdi-account-search"},{text:"Revizar Préstamos",icon:"mdi-book-sync"}]}},methods:{accion:function(t){this.mostrar=t,this.back=!0},atras:function(){this.back=!1,this.mostrar=null}}},I=P,S=r(680),j=r(3237),$=r(7118),B=r(6428),z=(0,l.Z)(I,v,g,!1,null,"cffc39d4",null),O=z.exports;u()(z,{VBtn:S.Z,VCard:j.Z,VCardText:$.ZB,VIcon:B.Z});var D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex align-center justify-start"},[r("v-select",{staticClass:"select mt-7 ml-7",attrs:{items:t.categorias,label:"Categorías","append-icon":"mdi-filter-menu",solo:"",dense:""},on:{change:t.filtrar},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),r("div",{staticClass:"d-flex justify-center mt-5"},[r("v-data-table",{staticClass:"elevation-3 tabla",attrs:{headers:t.headers,items:t.books,"items-per-page":6,"footer-props":{"items-per-page-options":[6]}}})],1)])},F=[],N={name:"LibrosTab",created:function(){this.pedirLibros()},data:function(){return{books:[],categoria:"",filtro:!1,categorias:["Matematica","Fisica","Ciencias Sociales","Historia","Ingenieria","Ver todo"],headers:[{text:"Título",align:"start",value:"titulo"},{text:"Autor",align:"start",value:"autor"},{text:"Categoría",align:"start",value:"categoria"},{text:"Disponible",align:"start",value:"disponible"},{text:"Total",align:"start",value:"cantidad"}]}},methods:{filtrar:function(){this.filtro=!0,this.pedirLibros()},pedirLibros:function(){var t=this;q.showBooks().then((function(t){return t.json()})).then((function(e){if(t.books=e.books,1==t.filtro){if("Ver todo"==t.categoria)return;t.books=t.books.filter((function(e){return e.categoria==t.categoria}))}}))}}},H=N,J=r(7360),U=(0,l.Z)(H,D,F,!1,null,"3961d171",null),G=U.exports;u()(U,{VDataTable:A.Z,VSelect:J.Z});var Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex align-center"},[r("v-select",{staticClass:"select mt-7 ml-7",attrs:{items:t.carreras,label:"Carreras","append-icon":"mdi-filter-menu",solo:"",dense:""},on:{change:function(e){return t.filtrarCarrera()}},model:{value:t.carrera,callback:function(e){t.carrera=e},expression:"carrera"}}),r("v-select",{staticClass:"select mt-7 ml-7",attrs:{items:t.anios,label:"Años","append-icon":"mdi-filter-menu",solo:"",dense:""},on:{change:function(e){return t.filtrarAnio()}},model:{value:t.anio,callback:function(e){t.anio=e},expression:"anio"}})],1),r("div",{staticClass:"d-flex justify-center mt-5"},[r("v-data-table",{staticClass:"elevation-3 tabla",attrs:{headers:t.headers,items:t.estudiantes,"items-per-page":6,"footer-props":{"items-per-page-options":[6]}}})],1)])},K=[],Q={name:"LibrosTab",created:function(){this.pedirEstudiantes()},data:function(){return{estudiantes:[],carrera:"",anio:"",filtroC:!1,filtroA:!1,carreras:["Ciencia de la Computación","Ingeniería Informática","Licenciatura en Matemática","Licenciatura en Física","Ciencias de la Información","Ver todas"],anios:["1er Año","2do Año","3ro Año","4to Año","5to Año","Ver todos"],headers:[{text:"Nombre",align:"start",value:"nombre"},{text:"Apellidos",align:"start",value:"apellido"},{text:"CI",align:"start",sortable:!1,value:"carnet"},{text:"Correo",align:"start",sortable:!1,value:"email"},{text:"Carrera",align:"start",value:"carrera"},{text:"Año",align:"start",value:"anio"}]}},methods:{filtrarCarrera:function(){this.filtroC=!0,this.pedirEstudiantes()},filtrarAnio:function(){this.filtroA=!0,this.pedirEstudiantes()},pedirEstudiantes:function(){var t=this;q.showStudents().then((function(t){return t.json()})).then((function(e){t.estudiantes=e.estudiantes,1==t.filtroC&&(t.carrera.includes("Ver todas")||(t.estudiantes=t.estudiantes.filter((function(e){return e.carrera==t.carrera})))),1==t.filtroA&&(t.anio.includes("Ver todos")||(t.estudiantes=t.estudiantes.filter((function(e){return e.anio==t.anio}))))}))}}},W=Q,X=(0,l.Z)(W,Y,K,!1,null,"2dbe17ca",null),tt=X.exports;u()(X,{VDataTable:A.Z,VSelect:J.Z});var et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-center align-center padre"},[r("div",{staticClass:"contenido pt-6 pl-5"},[r("h1",[t._v("Agregar Libro")]),r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:t.error,border:"right",prominent:"",type:"error",dismissible:"",width:"300px"}},[t._v(t._s(t.errorMessage))]),r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:t.success,border:"right",prominent:"",type:"success",dismissible:"",width:"350px"}},[t._v(" Los libros fueron guardados exitosamente en la base de datos.")]),r("div",[r("v-form",{ref:"form",staticClass:"contenedor",on:{submit:function(e){return e.preventDefault(),t.agregar()}}},[r("v-row",[r("v-col",[r("label",{staticClass:"font-weight-bold"},[t._v("Título:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el título del libro",placeholder:"Escriba el título del libro",outlined:"",rules:[t.rules.required]},on:{focus:function(e){return t.quitarError()}},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}})],1),r("v-spacer"),r("v-col",[r("label",{staticClass:"font-weight-bold"},[t._v("Autor:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el autor del libro",placeholder:"Escriba el autor del libro",outlined:"",rules:[t.rules.required]},on:{focus:function(e){return t.quitarError()}},model:{value:t.autor,callback:function(e){t.autor=e},expression:"autor"}})],1)],1),r("v-row",[r("v-col",[r("label",{staticClass:"font-weight-bold"},[t._v("Categorías:")]),r("v-select",{staticClass:"mt-2 campo",attrs:{items:t.categorias,label:"Seleccione una categoría",outlined:"",rules:[t.rules.required]},on:{focus:function(e){return t.quitarError()}},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),r("v-spacer"),r("v-col",[r("label",{staticClass:"font-weight-bold"},[t._v("Cantidad:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Entre la cantidad a adicionar",placeholder:"Entre la cantidad a adicionar",outlined:"",type:"number",min:1,rules:[t.rules.required]},on:{focus:function(e){return t.quitarError()}},model:{value:t.cantidad,callback:function(e){t.cantidad=e},expression:"cantidad"}})],1)],1),r("div",{staticClass:"text-center mt-4"},[r("v-btn",{staticClass:"px-14 py-7 font-weight-bold text-subtitle-1",attrs:{color:"primary",large:"",type:"submit"}},[t._v(" Agregar ")])],1)],1)],1)],1)])},rt=[],at=(r(9653),{name:"AgregarLibrosTab",data:function(){return{titulo:"",autor:"",categoria:"",cantidad:"",error:!1,errorMessage:"",success:!1,categorias:["Matematica","Fisica","Ciencias Sociales","Historia","Ingenieria"],rules:{required:function(t){return!!t||"Requerido."}}}},methods:{agregar:function(){var t=this;this.titulo&&this.autor&&this.categoria&&this.cantidad?Number(this.cantidad)<1?(this.error=!0,this.errorMessage="La cantidad de libros debe ser mayor que 0."):q.addBook(this.titulo,this.autor,this.categoria,this.cantidad).then((function(t){return t.json()})).then((function(e){e.ok&&(t.success=!0,t.error=!1,t.$refs.form.reset(),t.titulo="",t.autor="",t.categoria="",t.cantidad="")})).catch((function(){t.error=!0,t.errorMessage="No se ha podido realizar la conexión con el servidor."})):(this.error=!0,this.errorMessage="Debe rellenar todos los campos.")},quitarError:function(){this.error=!1,this.success=!1}}}),st=at,it=r(1234),ot=r(2102),nt=r(6232),lt=r(2877),ct=r(3631),ut=(0,l.Z)(st,et,rt,!1,null,"294a4aaf",null),dt=ut.exports;u()(ut,{VAlert:it.Z,VBtn:S.Z,VCol:ot.Z,VForm:nt.Z,VRow:lt.Z,VSelect:J.Z,VSpacer:ct.Z,VTextField:L.Z});var ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-center align-center padre"},[r("div",[r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:t.error,border:"right",prominent:"",type:"error",dismissible:"",width:"300px"}},[t._v(t._s(t.errorMessage))]),r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:t.success,border:"right",prominent:"",type:"success",dismissible:"",width:"350px"}},[t._v(" "+t._s(t.successMessage))]),r("v-row",[r("v-col",{staticClass:"contenido pt-6 pl-5"},[r("h2",{staticClass:"text-center"},[t._v("Préstamo")]),r("v-form",{ref:"form1",staticClass:"contenedor",on:{submit:function(e){return e.preventDefault(),t.prestar()}}},[r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[t._v("Título del libro:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el título del libro",placeholder:"Escriba el título del libro",outlined:"",rules:[t.rules.required]},on:{focus:function(e){return t.quitarError()}},model:{value:t.tituloP,callback:function(e){t.tituloP=e},expression:"tituloP"}})],1),r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[t._v("Correo del estudiante:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el correo del estudiante",placeholder:"Escriba el correo del estudiante",outlined:"",rules:[t.rules.required,t.rules.emailEvalP]},on:{focus:function(e){return t.quitarError()}},model:{value:t.correoP,callback:function(e){t.correoP=e},expression:"correoP"}})],1),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"px-14 py-7 font-weight-bold text-subtitle-1",attrs:{color:"primary",large:"",type:"submit"}},[t._v(" Prestar ")])],1)],1)],1),r("v-spacer"),r("v-col",{staticClass:"contenido pt-6 pl-5"},[r("h2",{staticClass:"text-center"},[t._v("Retorno")]),r("v-form",{ref:"form2",staticClass:"contenedor",on:{submit:function(e){return e.preventDefault(),t.retornar()}}},[r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[t._v("Título del libro:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el título del libro",placeholder:"Escriba el título del libro",outlined:"",rules:[t.rules.required]},on:{focus:function(e){return t.quitarError()}},model:{value:t.tituloR,callback:function(e){t.tituloR=e},expression:"tituloR"}})],1),r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[t._v("Correo del estudiante:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el correo del estudiante",placeholder:"Escriba el correo del estudiante",outlined:"",rules:[t.rules.required,t.rules.emailEvalR]},on:{focus:function(e){return t.quitarError()}},model:{value:t.correoR,callback:function(e){t.correoR=e},expression:"correoR"}})],1),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"px-14 py-7 font-weight-bold text-subtitle-1",attrs:{color:"primary",large:"",type:"submit"}},[t._v(" Retornar ")])],1)],1)],1)],1)],1)])},mt=[],pt=(r(4723),{name:"AgregarLibrosTab",data:function(){var t=this;return{tituloP:"",correoP:"",tituloR:"",correoR:"",error:!1,errorMessage:"",success:!1,successMessage:"",categorias:["Matemática","Física","Ciencias Sociales","Historia","Ingeniería"],emailRegex:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,rules:{required:function(t){return!!t||"Requerido."},emailEvalP:function(){return t.isEmailP||"Esta no es una dirección de correo válida"},emailEvalR:function(){return t.isEmailR||"Esta no es una dirección de correo válida"}}}},methods:{prestar:function(){this.tituloP&&this.correoP?this.isEmailP?(this.success=!0,this.successMessage="El préstamo fue realizado con éxito.",this.error=!1,this.$refs.form1.reset(),this.tituloP="",this.correoP=""):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida."):(this.error=!0,this.errorMessage="Debe rellenar todos los campos del préstamo.")},retornar:function(){this.tituloR&&this.correoR?this.isEmailR?(this.success=!0,this.successMessage="La devolución fue realizada con éxito.",this.error=!1,this.$refs.form2.reset(),this.tituloR="",this.correoR=""):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida."):(this.error=!0,this.errorMessage="Debe rellenar todos los campos del retorno.")},quitarError:function(){this.error=!1,this.success=!1}},computed:{isEmailP:function(){return!!this.correoP.match(this.emailRegex)},isEmailR:function(){return!!this.correoR.match(this.emailRegex)}}}),ht=pt,bt=(0,l.Z)(ht,ft,mt,!1,null,"f6144048",null),vt=bt.exports;u()(bt,{VAlert:it.Z,VBtn:S.Z,VCol:ot.Z,VForm:nt.Z,VRow:lt.Z,VSpacer:ct.Z,VTextField:L.Z});var gt={name:"HomeView",components:{PrincipalTab:O,LibrosTab:G,EstudiantesTab:tt,AgregarLibros:dt,PrestamosRetornosTab:vt},data:function(){return{selectedItem:0,items:[{text:"Principal",icon:"mdi-star"},{text:"Libros",icon:"mdi-book-multiple"},{text:"Estudiantes",icon:"mdi-account-group"},{text:"Agregar Libros",icon:"mdi-book-plus-multiple"},{text:"Préstamos y Retornos",icon:"mdi-book-account"}]}},methods:{salir:function(){sessionStorage.removeItem("logueado"),this.$router.push("/login")}}},xt=gt,Ct=r(426),Et=r(6370),_t=r(6816),wt=r(7620),yt=r(7044),kt=r(3249),Zt=r(459),qt=r(9194),Vt=(0,l.Z)(xt,h,b,!1,null,"b3dec056",null),Tt=Vt.exports;u()(Vt,{VApp:d.Z,VAppBar:Ct.Z,VAvatar:Et.Z,VCard:j.Z,VIcon:B.Z,VList:_t.Z,VListItem:wt.Z,VListItemContent:yt.km,VListItemGroup:kt.Z,VListItemIcon:Zt.Z,VListItemTitle:yt.V9,VNavigationDrawer:qt.Z});var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fondo"},[a("v-row",{staticClass:"mb-0"},[a("v-col",{staticClass:"col-12 col-sm-6 col-md-5 pb-0"},[a("v-form",{ref:"form",staticClass:"grey lighten-5 pa-14 form",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[a("div",{staticClass:"d-flex align-center mb-5"},[a("img",{attrs:{src:r(3096),alt:"libro",width:"60px"}}),a("h1",{staticClass:"ml-3"},[t._v("Biblioteca MFC")])]),t.error?a("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"error"}},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e(),a("v-text-field",{attrs:{rules:[t.rules.required],label:"  Nombre de Usuario",required:"",outlined:"","prepend-inner-icon":"mdi-account",placeholder:"Tu nombre de usuario"},on:{focus:function(e){return t.quitarError()}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),a("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required],type:t.show?"text":"password","prepend-inner-icon":"mdi-lock",label:"Contraseña",required:"",counter:"",outlined:""},on:{"click:append":function(e){t.show=!t.show},focus:function(e){return t.quitarError()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{staticClass:"mr-4 px-10 py-3 font-weight-bold",attrs:{color:"primary",large:"",type:"submit"}},[t._v(" Entrar ")])],1)],1),a("v-col",{staticClass:"d-flex justify-center align-center pb-0"},[a("div",{staticClass:"d-flex flex-column"},[a("v-btn",{staticClass:"mb-2 d-block font-weight-bold",attrs:{color:"success",large:"",elevation:"15"},on:{click:function(e){return t.irRegistro()}}},[t._v(" Registrarse ")]),a("v-btn",{staticClass:"mt-4 d-block white--text font-weight-bold",attrs:{color:"teal",large:"",elevation:"15"},on:{click:function(e){return t.irBusqueda()}}},[t._v(" Buscar Libros ")])],1)])],1)],1)},Lt=[],Rt={name:"LoginView",data:function(){return{user:"",password:"",show:!1,error:!1,errorMessage:"",rules:{required:function(t){return!!t||"Requerido."}}}},methods:{irRegistro:function(){this.$router.push("/registro")},irBusqueda:function(){this.$router.push("/busqueda")},login:function(){var t=this;0==this.user.length||0==this.password.length?(this.error=!0,this.errorMessage="El usuario y la contraseña son campos obligatorios"):q.auth(this.user,this.password).then((function(t){return t.json()})).then((function(e){e.ok?(t.error=!1,t.$refs.form.reset(),t.user="",t.password="",sessionStorage.setItem("logueado","ok"),t.$router.push("/")):(t.error=!0,t.errorMessage="Usuario o contraseña incorrecto, vuelva a intentarlo.")})).catch((function(){t.error=!0,t.errorMessage="No se ha podido establecer la conexión con el servidor."}))},quitarError:function(){this.error=!1}}},Mt=Rt,Pt=(0,l.Z)(Mt,At,Lt,!1,null,null,null),It=Pt.exports;u()(Pt,{VAlert:it.Z,VBtn:S.Z,VCol:ot.Z,VForm:nt.Z,VRow:lt.Z,VTextField:L.Z});var St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fondo d-flex justify-center align-center"},[r("v-form",{ref:"form",staticClass:"grey lighten-5 pa-14 form",on:{submit:function(e){return e.preventDefault(),t.registro()}}},[r("h1",{staticClass:"mb-5 text-center"},[t._v("Registro de estudiantes")]),t.error?r("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"error"}},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e(),t.success?r("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"success"}},[t._v(" Sus datos han sido guardados en la base de datos. ")]):t._e(),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:[t.rules.required],label:"Nombre",required:"",outlined:"",placeholder:"Entre su nombre"},on:{focus:t.quitarError},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}})],1),r("v-col",[r("v-text-field",{attrs:{rules:[t.rules.required],label:"Apellidos",required:"",outlined:"",placeholder:"Entre sus apellidos"},on:{focus:t.quitarError},model:{value:t.apellidos,callback:function(e){t.apellidos=e},expression:"apellidos"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:[t.rules.required,t.rules.cant,t.rules.num],counter:11,label:"Carnet de Identidad",required:"",outlined:"",placeholder:"Entre su número de carnet de identidad"},on:{focus:t.quitarError},model:{value:t.ci,callback:function(e){t.ci=e},expression:"ci"}})],1),r("v-col",[r("v-text-field",{attrs:{rules:[t.rules.required,t.rules.emailEval],label:"Correo Electrónico",required:"",outlined:"",placeholder:"Entre su correo electrónico"},on:{focus:t.quitarError},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),r("v-row",[r("v-col",[r("v-select",{attrs:{items:t.carreras,rules:[t.rules.required],label:"Carrera",outlined:"",required:""},on:{focus:t.quitarError},model:{value:t.carrera,callback:function(e){t.carrera=e},expression:"carrera"}})],1),r("v-col",[r("v-select",{attrs:{items:t.anios,rules:[t.rules.required],label:"Año",outlined:"",required:""},on:{focus:t.quitarError},model:{value:t.anio,callback:function(e){t.anio=e},expression:"anio"}})],1)],1),r("div",{staticClass:"text-center mt-2"},[r("v-btn",{staticClass:"px-15 py-6 font-weight-bold",attrs:{color:"primary",large:"",type:"submit"}},[t._v(" Registrarse ")])],1)],1)],1)},jt=[],$t={name:"LoginView",data:function(){var t=this;return{nombre:"",apellidos:"",ci:"",email:"",carrera:"",anio:"",carreras:["Ciencia de la Computación","Ingeniería Informática","Licenciatura en Matemática","Licenciatura en Física","Ciencias de la Información"],anios:["1er Año","2do Año","3ro Año","4to Año","5to Año"],error:!1,errorMessage:"",success:!1,numeros:/^([0-9])*$/,emailRegex:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,rules:{required:function(t){return!!t||"Requerido."},cant:function(t){return 11===t.length||"Se necesitan 11 dígitos."},num:function(){return t.isNumber||"Solo se pueden introducir caracteres numéricos"},emailEval:function(){return t.isEmail||"Esta no es una dirección de correo válida"}}}},methods:{registro:function(){var t=this,e=0==this.nombre.length||0==this.apellidos.length||0==this.ci.length||0==this.email.length||0==this.carrera.length||0==this.anio.length;e?(this.error=!0,this.errorMessage="Debe rellenar todos los campos"):11==this.ci.length&&this.isNumber?this.isEmail?q.registro(this.nombre,this.apellidos,this.ci,this.email,this.carrera,this.anio).then((function(t){return t.json()})).then((function(e){e.ok?(t.success=!0,t.error=!1,t.$refs.form.reset(),t.nombre="",t.apellidos="",t.ci="",t.email="",t.carrera="",t.anio=""):(t.error=!0,t.errorMessage="Ya existe un estudiante con ese correo o carnet")})).catch((function(){t.error=!0,t.errorMessage="No se ha podido realizar la conexión con el servidor."})):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida"):(this.error=!0,this.errorMessage="El Carnet de Identidad debe tener 11 dígitos numéricos")},quitarError:function(){this.error=!1,this.success=!1}},computed:{isNumber:function(){return!!this.ci.match(this.numeros)},isEmail:function(){return!!this.email.match(this.emailRegex)}}},Bt=$t,zt=(0,l.Z)(Bt,St,jt,!1,null,"bf1021ec",null),Ot=zt.exports;u()(zt,{VAlert:it.Z,VBtn:S.Z,VCol:ot.Z,VForm:nt.Z,VRow:lt.Z,VSelect:J.Z,VTextField:L.Z});var Dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fondo"},[r("buscar-tabla",{attrs:{tab:"libro"}})],1)},Ft=[],Nt={name:"SearchView",components:{BuscarTabla:M}},Ht=Nt,Jt=(0,l.Z)(Ht,Dt,Ft,!1,null,null,null),Ut=Jt.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center align-center text-center"},[a("div",[a("img",{attrs:{src:r(3991),alt:"error",width:"300px",height:"300px"}}),a("h1",[t._v("Página no encontrada.")]),a("p",{staticClass:"font-weight-bold text--secondary"},[t._v(" Por favor retorne a la página principal. ")]),a("v-btn",{staticClass:"font-weight-black py-6 px-10 mt-5",attrs:{color:"primary"},on:{click:function(e){return t.regresar()}}},[t._v("Regresar")])],1)])},Yt=[],Kt={name:"ErrorView",methods:{regresar:function(){this.$router.push("/login")}}},Qt=Kt,Wt=(0,l.Z)(Qt,Gt,Yt,!1,null,null,null),Xt=Wt.exports;u()(Wt,{VBtn:S.Z}),a.Z.use(p.Z);var te=[{path:"/login",name:"login",component:It},{path:"/",name:"home",component:Tt,meta:{requiresAuth:!0}},{path:"/registro",name:"registro",component:Ot},{path:"/busqueda",name:"busqueda",component:Ut},{path:"/:pathMatch(.*)*",name:"error",component:Xt}],ee=new p.Z({mode:"history",base:"/",routes:te}),re=function(){return sessionStorage.getItem("logueado")};ee.beforeEach((function(t,e,r){return t.meta.requiresAuth&&!re()?r("/login"):e.meta.requiresAuth&&re()?r("/"):r()})),ee.afterEach((function(t){!t.meta.requiresAuth&&re()&&sessionStorage.removeItem("logueado")}));var ae=ee,se=r(9132);a.Z.use(se.Z);var ie=new se.Z({icons:{iconfont:"mdi"}});a.Z.config.productionTip=!1,new a.Z({router:ae,vuetify:ie,render:function(t){return t(m)}}).$mount("#app")},3096:function(t,e,r){t.exports=r.p+"img/book.7835a8cd.svg"},3991:function(t,e,r){t.exports=r.p+"img/error_image.54dab785.svg"}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,s,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],i=t[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,s,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,i,o=a[0],n=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(l)var u=l(r)}for(e&&e(a);c<o.length;c++)i=o[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},a=self["webpackChunkbiblioteca"]=self["webpackChunkbiblioteca"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(3108)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.08c55cb2.js.map