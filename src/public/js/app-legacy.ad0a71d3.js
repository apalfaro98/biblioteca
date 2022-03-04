(function(){"use strict";var e={5663:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var a=r(144),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},i=[],o={name:"App"},n=o,l=r(1001),c=r(3453),u=r.n(c),d=r(7524),f=(0,l.Z)(n,s,i,!1,null,null,null),m=f.exports;u()(f,{VApp:d.Z});var b=r(8345),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticClass:"bar",attrs:{elevation:"1",color:"white"}},[r("div",{staticClass:"bar-content d-flex justify-end"},[r("span",{staticClass:"boton d-flex align-center pl-4 rounded-xl",on:{click:function(t){return e.salir()}}},[r("v-avatar",{attrs:{color:"accent",size:"40"}},[r("v-icon",{attrs:{dark:""}},[e._v(" mdi-account-circle ")])],1),r("p",{staticClass:"ml-3 pr-5 mt-3 text-h6 font-weigth-bold"},[e._v(" Salir "),r("v-icon",[e._v("mdi-exit-to-app")])],1)],1)])]),r("v-card",{staticClass:"menu",attrs:{width:"300",tile:"",elevation:"1"}},[r("h2",{staticClass:"pt-4 pb-10 text-center"},[e._v("Biblioteca")]),r("v-navigation-drawer",{attrs:{permanent:"",width:"300"}},[r("v-list",{attrs:{nav:""}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.items,(function(t,a){return r("v-list-item",{key:a},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1)],1),r("div",{staticClass:"contenido"},[0==e.selectedItem?r("principal-tab"):1==e.selectedItem?r("libros-tab"):2==e.selectedItem?r("estudiantes-tab"):3==e.selectedItem?r("agregar-libros"):r("prestamos-retornos-tab")],1)],1)},h=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[!1===e.back?r("div",{staticClass:"d-flex justify-space-around pt-16"},e._l(e.cards,(function(t,a){return r("v-card",{key:a,staticClass:"text-center pt-4 rounded-xl card",attrs:{width:"260",height:"150",elevation:"4"},on:{click:function(t){return e.accion(a)}}},[r("v-icon",{attrs:{size:"60",color:"blue accent-3"}},[e._v(e._s(t.icon))]),r("v-card-text",{staticClass:"text-h5 font-weight-bold azul"},[e._v(e._s(t.text))])],1)})),1):e._e(),r("div",{staticClass:"pt-6"},[r("div",{staticClass:"pl-10"},[1==e.back?r("v-btn",{attrs:{color:"grey lighten-5",elevation:"3",fab:"",small:""},on:{click:function(t){return e.atras()}}},[r("v-icon",{staticClass:"boton",attrs:{color:"blue accent-3"}},[e._v("mdi-arrow-left-thick")])],1):e._e()],1),0==e.mostrar?r("buscar-tabla",{staticClass:"subir",attrs:{texto:!0,tab:"libro"}}):1==e.mostrar?r("buscar-tabla",{staticClass:"subir",attrs:{texto:!0,tab:"estudiante"}}):2==e.mostrar?r("buscar-tabla",{staticClass:"subir",attrs:{texto:!0,tab:"prestamo"}}):e._e()],1)])},g=[],x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex justify-center"},[r("div",{staticClass:"mt-15"},[e.texto?r("p",{staticClass:"font-weight-bold pl-2"},[e._v(" Introduzca "),"libro"==e.tab?r("span",[e._v("el título del libro")]):"estudiante"==e.tab?r("span",[e._v("el nombre del estudiante")]):"prestamo"==e.tab?r("span",[e._v("el correo del estudiante para verificar los libros que posee el mismo")]):e._e(),e._v(" : ")]):e._e(),r("v-text-field",{staticClass:"input flex-grow-0",attrs:{solo:"",rounded:"","append-icon":e.fueBuscado?"mdi-window-close":"mdi-magnify",height:"1.5rem"},on:{"click:append":function(t){return e.elegir()},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.elegir()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),e.texto?r("div",{staticClass:"d-flex justify-center mt-3"},[e.mostrarTabla?r("v-data-table",{staticClass:"elevation-1 tabla",attrs:{headers:"libro"==e.tab?e.headersLA:e.headersE,items:"libro"==e.tab?e.books:e.estudiantes,"items-per-page":5,"footer-props":{"items-per-page-options":[5]}}}):e._e()],1):r("div",{staticClass:"d-flex justify-center mt-8"},[e.mostrarTabla?r("v-data-table",{staticClass:"elevation-1 tabla",attrs:{headers:e.headersLE,items:e.books,"items-per-page":6,"footer-props":{"items-per-page-options":[6]}}}):e._e()],1)])},C=[],E=(r(4916),r(4765),r(7327),r(1539),r(6699),r(2023),r(4747),r(8862),"http://localhost:8000/"),_=function(e,t){return fetch("".concat(E,"api/admin/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:e,password:t})})},w=function(e,t,r,a,s,i){return fetch("".concat(E,"api/student/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:e,apellido:t,carnet:r,email:a,carrera:s,anio:i})})},y=function(e,t,r,a){return fetch("".concat(E,"api/admin/add-book"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({titulo:e,autor:t,categoria:r,cantidad:a})})},k=function(){return fetch("".concat(E,"api/admin/show-books"))},Z=function(){return fetch("".concat(E,"api/admin/show-student"))},q={auth:_,registro:w,addBook:y,showBooks:k,showStudents:Z},V={name:"BuscarTabla",props:{texto:{type:Boolean,default:!1},tab:{type:String}},created:function(){this.pedirLibros(),this.pedirEstudiantes()},data:function(){return{search:"",fueBuscado:!1,mostrarTabla:!1,books:[],estudiantes:[],headersLA:[{text:"Título",align:"start",value:"titulo"},{text:"Autor",align:"start",value:"autor"},{text:"Categoría",align:"start",value:"categoria"},{text:"Disponible",align:"start",value:"disponible"},{text:"Total",align:"start",value:"cantidad"}],headersLE:[{text:"Título",align:"start",value:"titulo"},{text:"Autor",align:"start",value:"autor"},{text:"Categoría",align:"start",value:"categoria"},{text:"Disponible",align:"center",value:"disponible"}],headersE:[{text:"Nombre",align:"start",value:"nombre"},{text:"Apellidos",align:"start",value:"apellido"},{text:"CI",align:"start",sortable:!1,value:"carnet"},{text:"Correo",align:"start",sortable:!1,value:"email"},{text:"Carrera",align:"start",value:"carrera"},{text:"Año",align:"start",value:"anio"}]}},methods:{elegir:function(){this.fueBuscado?(this.search="",this.fueBuscado=!1,this.mostrarTabla=!1,this.pedirLibros(),this.pedirEstudiantes()):(this.busqueda(),this.fueBuscado=!0)},busqueda:function(){"libro"==this.tab?this.buscarLibro():"estudiante"==this.tab&&this.buscarEstudiante()},buscarLibro:function(){var e=this;0!=this.search.length&&(this.books=this.books.filter((function(t){return t.titulo.toLowerCase().includes(e.search.toLowerCase())})),this.texto||this.books.forEach((function(e){0==e.disponible?e.disponible="No Disponible.":e.disponible="Disponible."})),this.mostrarTabla=!0)},buscarEstudiante:function(){var e=this;0!=this.search.length&&(this.estudiantes=this.estudiantes.filter((function(t){return t.nombre.toLowerCase().includes(e.search.toLowerCase())})),this.mostrarTabla=!0)},pedirLibros:function(){var e=this;q.showBooks().then((function(e){return e.json()})).then((function(t){e.books=t.books}))},pedirEstudiantes:function(){var e=this;q.showStudents().then((function(e){return e.json()})).then((function(t){e.estudiantes=t.estudiantes}))}}},T=V,A=r(4998),L=r(5978),R=(0,l.Z)(T,x,C,!1,null,"0a3a738e",null),M=R.exports;u()(R,{VDataTable:A.Z,VTextField:L.Z});var P={name:"PrincipalTab",components:{BuscarTabla:M},data:function(){return{mostrar:null,back:!1,cards:[{text:"Buscar Libros",icon:"mdi-book-search"},{text:"Buscar Estudiantes",icon:" mdi-account-search"},{text:"Revizar Préstamos",icon:"mdi-book-sync"}]}},methods:{accion:function(e){this.mostrar=e,this.back=!0},atras:function(){this.back=!1,this.mostrar=null}}},I=P,S=r(680),j=r(3237),B=r(7118),$=r(6428),z=(0,l.Z)(I,v,g,!1,null,"cffc39d4",null),O=z.exports;u()(z,{VBtn:S.Z,VCard:j.Z,VCardText:B.ZB,VIcon:$.Z});var D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex align-center justify-start"},[r("v-select",{staticClass:"select mt-7 ml-7",attrs:{items:e.categorias,label:"Categorías","append-icon":"mdi-filter-menu",solo:"",dense:""},on:{change:e.filtrar},model:{value:e.categoria,callback:function(t){e.categoria=t},expression:"categoria"}})],1),r("div",{staticClass:"d-flex justify-center mt-5"},[r("v-data-table",{staticClass:"elevation-3 tabla",attrs:{headers:e.headers,items:e.books,"items-per-page":6,"footer-props":{"items-per-page-options":[6]}}})],1)])},F=[],N={name:"LibrosTab",created:function(){this.pedirLibros()},data:function(){return{books:[],categoria:"",filtro:!1,categorias:["Matematica","Fisica","Ciencias Sociales","Historia","Ingenieria","Ver todo"],headers:[{text:"Título",align:"start",value:"titulo"},{text:"Autor",align:"start",value:"autor"},{text:"Categoría",align:"start",value:"categoria"},{text:"Disponible",align:"start",value:"disponible"},{text:"Total",align:"start",value:"cantidad"}]}},methods:{filtrar:function(){this.filtro=!0,this.pedirLibros()},pedirLibros:function(){var e=this;q.showBooks().then((function(e){return e.json()})).then((function(t){if(e.books=t.books,1==e.filtro){if("Ver todo"==e.categoria)return;e.books=e.books.filter((function(t){return t.categoria==e.categoria}))}}))}}},H=N,J=r(7360),U=(0,l.Z)(H,D,F,!1,null,"3961d171",null),G=U.exports;u()(U,{VDataTable:A.Z,VSelect:J.Z});var Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex align-center"},[r("v-select",{staticClass:"select mt-7 ml-7",attrs:{items:e.carreras,label:"Carreras","append-icon":"mdi-filter-menu",solo:"",dense:""},on:{change:function(t){return e.filtrarCarrera()}},model:{value:e.carrera,callback:function(t){e.carrera=t},expression:"carrera"}}),r("v-select",{staticClass:"select mt-7 ml-7",attrs:{items:e.anios,label:"Años","append-icon":"mdi-filter-menu",solo:"",dense:""},on:{change:function(t){return e.filtrarAnio()}},model:{value:e.anio,callback:function(t){e.anio=t},expression:"anio"}})],1),r("div",{staticClass:"d-flex justify-center mt-5"},[r("v-data-table",{staticClass:"elevation-3 tabla",attrs:{headers:e.headers,items:e.estudiantes,"items-per-page":6,"footer-props":{"items-per-page-options":[6]}}})],1)])},K=[],Q={name:"LibrosTab",created:function(){this.pedirEstudiantes()},data:function(){return{estudiantes:[],carrera:"",anio:"",filtroC:!1,filtroA:!1,carreras:["Ciencia de la Computación","Ingeniería Informática","Licenciatura en Matemática","Licenciatura en Física","Ciencias de la Información","Ver todas"],anios:["1er Año","2do Año","3ro Año","4to Año","5to Año","Ver todos"],headers:[{text:"Nombre",align:"start",value:"nombre"},{text:"Apellidos",align:"start",value:"apellido"},{text:"CI",align:"start",sortable:!1,value:"carnet"},{text:"Correo",align:"start",sortable:!1,value:"email"},{text:"Carrera",align:"start",value:"carrera"},{text:"Año",align:"start",value:"anio"}]}},methods:{filtrarCarrera:function(){this.filtroC=!0,this.pedirEstudiantes()},filtrarAnio:function(){this.filtroA=!0,this.pedirEstudiantes()},pedirEstudiantes:function(){var e=this;q.showStudents().then((function(e){return e.json()})).then((function(t){e.estudiantes=t.estudiantes,1==e.filtroC&&(e.carrera.includes("Ver todas")||(e.estudiantes=e.estudiantes.filter((function(t){return t.carrera==e.carrera})))),1==e.filtroA&&(e.anio.includes("Ver todos")||(e.estudiantes=e.estudiantes.filter((function(t){return t.anio==e.anio}))))}))}}},W=Q,X=(0,l.Z)(W,Y,K,!1,null,"2dbe17ca",null),ee=X.exports;u()(X,{VDataTable:A.Z,VSelect:J.Z});var te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-center align-center padre"},[r("div",{staticClass:"contenido pt-6 pl-5"},[r("h1",[e._v("Agregar Libro")]),r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:e.error,border:"right",prominent:"",type:"error",dismissible:"",width:"300px"}},[e._v(e._s(e.errorMessage))]),r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:e.success,border:"right",prominent:"",type:"success",dismissible:"",width:"350px"}},[e._v(" Los libros fueron guardados exitosamente en la base de datos.")]),r("div",[r("v-form",{ref:"form",staticClass:"contenedor",on:{submit:function(t){return t.preventDefault(),e.agregar()}}},[r("v-row",[r("v-col",[r("label",{staticClass:"font-weight-bold"},[e._v("Título:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el título del libro",placeholder:"Escriba el título del libro",outlined:"",rules:[e.rules.required]},on:{focus:function(t){return e.quitarError()}},model:{value:e.titulo,callback:function(t){e.titulo=t},expression:"titulo"}})],1),r("v-spacer"),r("v-col",[r("label",{staticClass:"font-weight-bold"},[e._v("Autor:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el autor del libro",placeholder:"Escriba el autor del libro",outlined:"",rules:[e.rules.required]},on:{focus:function(t){return e.quitarError()}},model:{value:e.autor,callback:function(t){e.autor=t},expression:"autor"}})],1)],1),r("v-row",[r("v-col",[r("label",{staticClass:"font-weight-bold"},[e._v("Categorías:")]),r("v-select",{staticClass:"mt-2 campo",attrs:{items:e.categorias,label:"Seleccione una categoría",outlined:"",rules:[e.rules.required]},on:{focus:function(t){return e.quitarError()}},model:{value:e.categoria,callback:function(t){e.categoria=t},expression:"categoria"}})],1),r("v-spacer"),r("v-col",[r("label",{staticClass:"font-weight-bold"},[e._v("Cantidad:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Entre la cantidad a adicionar",placeholder:"Entre la cantidad a adicionar",outlined:"",type:"number",min:1,rules:[e.rules.required]},on:{focus:function(t){return e.quitarError()}},model:{value:e.cantidad,callback:function(t){e.cantidad=t},expression:"cantidad"}})],1)],1),r("div",{staticClass:"text-center mt-4"},[r("v-btn",{staticClass:"px-14 py-7 font-weight-bold text-subtitle-1",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Agregar ")])],1)],1)],1)],1)])},re=[],ae=(r(9653),{name:"AgregarLibrosTab",data:function(){return{titulo:"",autor:"",categoria:"",cantidad:"",error:!1,errorMessage:"",success:!1,categorias:["Matematica","Fisica","Ciencias Sociales","Historia","Ingenieria"],rules:{required:function(e){return!!e||"Requerido."}}}},methods:{agregar:function(){var e=this;this.titulo&&this.autor&&this.categoria&&this.cantidad?Number(this.cantidad)<1?(this.error=!0,this.errorMessage="La cantidad de libros debe ser mayor que 0."):q.addBook(this.titulo,this.autor,this.categoria,this.cantidad).then((function(e){return e.json()})).then((function(t){t.ok&&(e.success=!0,e.error=!1,e.$refs.form.reset(),e.titulo="",e.autor="",e.categoria="",e.cantidad="")})).catch((function(){e.error=!0,e.errorMessage="No se ha podido realizar la conexión con el servidor."})):(this.error=!0,this.errorMessage="Debe rellenar todos los campos.")},quitarError:function(){this.error=!1,this.success=!1}}}),se=ae,ie=r(1234),oe=r(2102),ne=r(6232),le=r(2877),ce=r(3631),ue=(0,l.Z)(se,te,re,!1,null,"294a4aaf",null),de=ue.exports;u()(ue,{VAlert:ie.Z,VBtn:S.Z,VCol:oe.Z,VForm:ne.Z,VRow:le.Z,VSelect:J.Z,VSpacer:ce.Z,VTextField:L.Z});var fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-center align-center padre"},[r("div",[r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:e.error,border:"right",prominent:"",type:"error",dismissible:"",width:"300px"}},[e._v(e._s(e.errorMessage))]),r("v-alert",{staticClass:"py-8 font-weight-bold alerta",attrs:{transition:"slide-x-reverse-transition",value:e.success,border:"right",prominent:"",type:"success",dismissible:"",width:"350px"}},[e._v(" "+e._s(e.successMessage))]),r("v-row",[r("v-col",{staticClass:"contenido pt-6 pl-5"},[r("h2",{staticClass:"text-center"},[e._v("Préstamo")]),r("v-form",{ref:"form1",staticClass:"contenedor",on:{submit:function(t){return t.preventDefault(),e.prestar()}}},[r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[e._v("Título del libro:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el título del libro",placeholder:"Escriba el título del libro",outlined:"",rules:[e.rules.required]},on:{focus:function(t){return e.quitarError()}},model:{value:e.tituloP,callback:function(t){e.tituloP=t},expression:"tituloP"}})],1),r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[e._v("Correo del estudiante:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el correo del estudiante",placeholder:"Escriba el correo del estudiante",outlined:"",rules:[e.rules.required,e.rules.emailEvalP]},on:{focus:function(t){return e.quitarError()}},model:{value:e.correoP,callback:function(t){e.correoP=t},expression:"correoP"}})],1),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"px-14 py-7 font-weight-bold text-subtitle-1",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Prestar ")])],1)],1)],1),r("v-spacer"),r("v-col",{staticClass:"contenido pt-6 pl-5"},[r("h2",{staticClass:"text-center"},[e._v("Retorno")]),r("v-form",{ref:"form2",staticClass:"contenedor",on:{submit:function(t){return t.preventDefault(),e.retornar()}}},[r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[e._v("Título del libro:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el título del libro",placeholder:"Escriba el título del libro",outlined:"",rules:[e.rules.required]},on:{focus:function(t){return e.quitarError()}},model:{value:e.tituloR,callback:function(t){e.tituloR=t},expression:"tituloR"}})],1),r("v-col",{staticClass:"pt-0"},[r("label",{staticClass:"font-weight-bold"},[e._v("Correo del estudiante:")]),r("v-text-field",{staticClass:"mt-2 campo",attrs:{label:"Escriba el correo del estudiante",placeholder:"Escriba el correo del estudiante",outlined:"",rules:[e.rules.required,e.rules.emailEvalR]},on:{focus:function(t){return e.quitarError()}},model:{value:e.correoR,callback:function(t){e.correoR=t},expression:"correoR"}})],1),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"px-14 py-7 font-weight-bold text-subtitle-1",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Retornar ")])],1)],1)],1)],1)],1)])},me=[],be=(r(4723),{name:"AgregarLibrosTab",data:function(){var e=this;return{tituloP:"",correoP:"",tituloR:"",correoR:"",error:!1,errorMessage:"",success:!1,successMessage:"",categorias:["Matemática","Física","Ciencias Sociales","Historia","Ingeniería"],emailRegex:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,rules:{required:function(e){return!!e||"Requerido."},emailEvalP:function(){return e.isEmailP||"Esta no es una dirección de correo válida"},emailEvalR:function(){return e.isEmailR||"Esta no es una dirección de correo válida"}}}},methods:{prestar:function(){this.tituloP&&this.correoP?this.isEmailP?(this.success=!0,this.successMessage="El préstamo fue realizado con éxito.",this.error=!1,this.$refs.form1.reset(),this.tituloP="",this.correoP=""):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida."):(this.error=!0,this.errorMessage="Debe rellenar todos los campos del préstamo.")},retornar:function(){this.tituloR&&this.correoR?this.isEmailR?(this.success=!0,this.successMessage="La devolución fue realizada con éxito.",this.error=!1,this.$refs.form2.reset(),this.tituloR="",this.correoR=""):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida."):(this.error=!0,this.errorMessage="Debe rellenar todos los campos del retorno.")},quitarError:function(){this.error=!1,this.success=!1}},computed:{isEmailP:function(){return!!this.correoP.match(this.emailRegex)},isEmailR:function(){return!!this.correoR.match(this.emailRegex)}}}),pe=be,he=(0,l.Z)(pe,fe,me,!1,null,"f6144048",null),ve=he.exports;u()(he,{VAlert:ie.Z,VBtn:S.Z,VCol:oe.Z,VForm:ne.Z,VRow:le.Z,VSpacer:ce.Z,VTextField:L.Z});var ge={name:"HomeView",components:{PrincipalTab:O,LibrosTab:G,EstudiantesTab:ee,AgregarLibros:de,PrestamosRetornosTab:ve},data:function(){return{selectedItem:0,items:[{text:"Principal",icon:"mdi-star"},{text:"Libros",icon:"mdi-book-multiple"},{text:"Estudiantes",icon:"mdi-account-group"},{text:"Agregar Libros",icon:"mdi-book-plus-multiple"},{text:"Préstamos y Retornos",icon:"mdi-book-account"}]}},methods:{salir:function(){sessionStorage.removeItem("logueado"),this.$router.push("/")}}},xe=ge,Ce=r(426),Ee=r(6370),_e=r(6816),we=r(7620),ye=r(7044),ke=r(3249),Ze=r(459),qe=r(9194),Ve=(0,l.Z)(xe,p,h,!1,null,"89adb1ba",null),Te=Ve.exports;u()(Ve,{VApp:d.Z,VAppBar:Ce.Z,VAvatar:Ee.Z,VCard:j.Z,VIcon:$.Z,VList:_e.Z,VListItem:we.Z,VListItemContent:ye.km,VListItemGroup:ke.Z,VListItemIcon:Ze.Z,VListItemTitle:ye.V9,VNavigationDrawer:qe.Z});var Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fondo"},[r("v-row",{staticClass:"mb-0"},[r("v-col",{staticClass:"col-12 col-sm-6 col-md-5 pb-0"},[r("v-form",{ref:"form",staticClass:"grey lighten-5 pa-14 form",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("h1",{staticClass:"mb-5"},[e._v("Biblioteca MFC")]),e.error?r("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),r("v-text-field",{attrs:{rules:[e.rules.required],label:"  Nombre de Usuario",required:"",outlined:"","prepend-inner-icon":"mdi-account",placeholder:"Tu nombre de usuario"},on:{focus:function(t){return e.quitarError()}},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),r("v-text-field",{attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",rules:[e.rules.required],type:e.show?"text":"password","prepend-inner-icon":"mdi-lock",label:"Contraseña",required:"",counter:"",outlined:""},on:{"click:append":function(t){e.show=!e.show},focus:function(t){return e.quitarError()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{staticClass:"mr-4 px-10 py-3 font-weight-bold",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Entrar ")])],1)],1),r("v-col",{staticClass:"d-flex justify-center align-center pb-0"},[r("div",{staticClass:"d-flex flex-column"},[r("v-btn",{staticClass:"mb-2 d-block font-weight-bold",attrs:{color:"success",large:"",elevation:"15"},on:{click:function(t){return e.irRegistro()}}},[e._v(" Registrarse ")]),r("v-btn",{staticClass:"mt-4 d-block white--text font-weight-bold",attrs:{color:"teal",large:"",elevation:"15"},on:{click:function(t){return e.irBusqueda()}}},[e._v(" Buscar Libros ")])],1)])],1)],1)},Le=[],Re={name:"LoginView",data:function(){return{user:"",password:"",show:!1,error:!1,errorMessage:"",rules:{required:function(e){return!!e||"Requerido."}}}},methods:{irRegistro:function(){this.$router.push("/registro")},irBusqueda:function(){this.$router.push("/busqueda")},login:function(){var e=this;0==this.user.length||0==this.password.length?(this.error=!0,this.errorMessage="El usuario y la contraseña son campos obligatorios"):q.auth(this.user,this.password).then((function(e){return e.json()})).then((function(t){t.ok?(e.error=!1,e.$refs.form.reset(),e.user="",e.password="",sessionStorage.setItem("logueado","ok"),e.$router.push("/home")):(e.error=!0,e.errorMessage="Usuario o contraseña incorrecto, vuelva a intentarlo.")})).catch((function(){e.error=!0,e.errorMessage="No se ha podido establecer la conexión con el servidor."}))},quitarError:function(){this.error=!1}}},Me=Re,Pe=(0,l.Z)(Me,Ae,Le,!1,null,null,null),Ie=Pe.exports;u()(Pe,{VAlert:ie.Z,VBtn:S.Z,VCol:oe.Z,VForm:ne.Z,VRow:le.Z,VTextField:L.Z});var Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fondo d-flex justify-center align-center"},[r("v-form",{ref:"form",staticClass:"grey lighten-5 pa-14 form",on:{submit:function(t){return t.preventDefault(),e.registro()}}},[r("h1",{staticClass:"mb-5 text-center"},[e._v("Registro de estudiantes")]),e.error?r("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),e.success?r("v-alert",{staticClass:"mb-6",attrs:{dense:"",outlined:"",type:"success"}},[e._v(" Sus datos han sido guardados en la base de datos. ")]):e._e(),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:[e.rules.required],label:"Nombre",required:"",outlined:"",placeholder:"Entre su nombre"},on:{focus:e.quitarError},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}})],1),r("v-col",[r("v-text-field",{attrs:{rules:[e.rules.required],label:"Apellidos",required:"",outlined:"",placeholder:"Entre sus apellidos"},on:{focus:e.quitarError},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.cant,e.rules.num],counter:11,label:"Carnet de Identidad",required:"",outlined:"",placeholder:"Entre su número de carnet de identidad"},on:{focus:e.quitarError},model:{value:e.ci,callback:function(t){e.ci=t},expression:"ci"}})],1),r("v-col",[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.emailEval],label:"Correo Electrónico",required:"",outlined:"",placeholder:"Entre su correo electrónico"},on:{focus:e.quitarError},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),r("v-row",[r("v-col",[r("v-select",{attrs:{items:e.carreras,rules:[e.rules.required],label:"Carrera",outlined:"",required:""},on:{focus:e.quitarError},model:{value:e.carrera,callback:function(t){e.carrera=t},expression:"carrera"}})],1),r("v-col",[r("v-select",{attrs:{items:e.anios,rules:[e.rules.required],label:"Año",outlined:"",required:""},on:{focus:e.quitarError},model:{value:e.anio,callback:function(t){e.anio=t},expression:"anio"}})],1)],1),r("div",{staticClass:"text-center mt-2"},[r("v-btn",{staticClass:"px-15 py-6 font-weight-bold",attrs:{color:"primary",large:"",type:"submit"}},[e._v(" Registrarse ")])],1)],1)],1)},je=[],Be={name:"LoginView",data:function(){var e=this;return{nombre:"",apellidos:"",ci:"",email:"",carrera:"",anio:"",carreras:["Ciencia de la Computación","Ingeniería Informática","Licenciatura en Matemática","Licenciatura en Física","Ciencias de la Información"],anios:["1er Año","2do Año","3ro Año","4to Año","5to Año"],error:!1,errorMessage:"",success:!1,numeros:/^([0-9])*$/,emailRegex:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,rules:{required:function(e){return!!e||"Requerido."},cant:function(e){return 11===e.length||"Se necesitan 11 dígitos."},num:function(){return e.isNumber||"Solo se pueden introducir caracteres numéricos"},emailEval:function(){return e.isEmail||"Esta no es una dirección de correo válida"}}}},methods:{registro:function(){var e=this,t=0==this.nombre.length||0==this.apellidos.length||0==this.ci.length||0==this.email.length||0==this.carrera.length||0==this.anio.length;t?(this.error=!0,this.errorMessage="Debe rellenar todos los campos"):11==this.ci.length&&this.isNumber?this.isEmail?q.registro(this.nombre,this.apellidos,this.ci,this.email,this.carrera,this.anio).then((function(e){return e.json()})).then((function(t){t.ok?(e.success=!0,e.error=!1,e.$refs.form.reset(),e.nombre="",e.apellidos="",e.ci="",e.email="",e.carrera="",e.anio=""):(e.error=!0,e.errorMessage="Ya existe un estudiante con ese correo o carnet")})).catch((function(){e.error=!0,e.errorMessage="No se ha podido realizar la conexión con el servidor."})):(this.error=!0,this.errorMessage="Esta no es una dirección de correo válida"):(this.error=!0,this.errorMessage="El Carnet de Identidad debe tener 11 dígitos numéricos")},quitarError:function(){this.error=!1,this.success=!1}},computed:{isNumber:function(){return!!this.ci.match(this.numeros)},isEmail:function(){return!!this.email.match(this.emailRegex)}}},$e=Be,ze=(0,l.Z)($e,Se,je,!1,null,"bf1021ec",null),Oe=ze.exports;u()(ze,{VAlert:ie.Z,VBtn:S.Z,VCol:oe.Z,VForm:ne.Z,VRow:le.Z,VSelect:J.Z,VTextField:L.Z});var De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fondo"},[r("buscar-tabla",{attrs:{tab:"libro"}})],1)},Fe=[],Ne={name:"SearchView",components:{BuscarTabla:M}},He=Ne,Je=(0,l.Z)(He,De,Fe,!1,null,null,null),Ue=Je.exports;a.Z.use(b.Z);var Ge=[{path:"/",name:"login",component:Ie},{path:"/home",name:"home",component:Te,meta:{requiresAuth:!0}},{path:"/registro",name:"registro",component:Oe},{path:"/busqueda",name:"busqueda",component:Ue}],Ye=new b.Z({mode:"history",base:"/",routes:Ge}),Ke=Ye,Qe=r(9132);a.Z.use(Qe.Z);var We=new Qe.Z({icons:{iconfont:"mdi"}});a.Z.config.productionTip=!1,new a.Z({router:Ke,vuetify:We,render:function(e){return e(m)}}).$mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,i){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],i=e[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(n=!1,i<o&&(o=i));if(n){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,s,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,o=a[0],n=a[1],l=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(l)var u=l(r)}for(t&&t(a);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},a=self["webpackChunkbiblioteca"]=self["webpackChunkbiblioteca"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5663)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.ad0a71d3.js.map