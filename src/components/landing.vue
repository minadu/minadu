<template lang="html">
  <div class="wrapper">
    <header class="bg-image">
      <div class="container container-1">
        <h1>Mi Nadü!</h1>
        <h2>El huerto perfecto creado por ti.</h2>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#normalModal">Ordena tu kit ahora!</button>
        <!-- <a href="#" class="btn btn-transparent btn-ordena">Ordena tu kit ahora!</a> -->
      </div>
    </header>
    <div id="normalModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Kits! <span class="color-red">Agotado</span></h4>
            <p class="p-suscribete">En este momento no tenemos kits disponibles. Por favor suscribete dejando tu correo y una opinion y nosotros te informaremos en cuanto tengamos kits listos.</p>
            <p class="p-suscribete">Tu comentario es muy valioso para nosotros.</p>
          </div>
          <div class="modal-body">
            <label for="correo">Correo: </label>
            <input v-model="suscripcion.correo" type="text" name="correo" id="correo" class="form-control">
            <hr>
            <label for="comentario">Comentario: </label>
            <textarea v-model="suscripcion.comentario" class="form-control" rows="3"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            <button v-on:click="enviar()" type="button" class="btn btn-success boton-enviar" data-dismiss="modal">Enviar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <section class="">
      <div class="container">
        <div class="col-3 text--center">
          <img src="../assets/Logo.png" alt="" class="details-img--ball"/>
        </div>
        <div class="col-7 details">
          <h3>¿Quiénes somos?</h3>
          <p>Somos un grupo de jóvenes interesados en tener un mejor estilo de vida. Nos enfocamos en tratar de contrarrestar la inseguridad alimentaria impulsando el consumo de alimentos seguros generando a nivel nacional. Nos orientamos en una producción orgánica sostenible y tener un estilo de vida más saludable y fácil. </p>
        </div>
      </div>
    </section>

    <section class="section--primary">
      <div class="container">
        <h2 class="h2Producto">Productos y servicios que ofrecemos:</h2>
        <div class="col-3 features">
          <i class="fa fa-leaf icono" aria-hidden="true"></i>
          <p>
            Tu Propia Huerta
          </p>
        </div>
        <div class="col-3 features">
          <i class="fa fa-archive icono" aria-hidden="true"></i>
          <p>
            Kits
          </p>
        </div>
        <div class="col-3 features">
          <i class="fa fa-users icono" aria-hidden="true"></i>
          <p>
            Atencion Personalizada
          </p>
        </div>
      </div>
    </section>

    <section class="section--primary--alt">
      <div class="container">
        <h2 class="h2Producto-2">!Diseños Modulares!</h2>
      </div>
      <div class="container">
        <a class="col-3" href="#myModal" data-toggle="modal">
          <img src="/assets/diseño3.png" class="img-circle rotar" alt="Diseño 1">
        </a>
        <div id="myModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">YouTube Video</h4>
              </div>
              <div class="modal-body">
                <iframe id="cartoonVideo" width="560" height="315" src="/assets/Modular1.mp4" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <img src="/assets/diseño1.png" class="img-circle" alt="Diseño 1">
        </div>
        <a class="col-3" href="#myModal2" data-toggle="modal">
          <img src="/assets/diseño4.png" class="img-circle " alt="Diseño 1">
        </a>
        <div id="myModal2" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">YouTube Video</h4>
              </div>
              <div class="modal-body">
                <iframe id="cartoonVideo" width="560" height="315" src="/assets/Vertical1.mp4" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section--primary--light">
      <div class="container">
        <blockquote class="testimonial">
          <p>Love product. So nice! So good! Could not live without!</p>
          <cite>
            Satisfied Customer
          </cite>
        </blockquote>
      </div>
    </section>


    <section class="section--primary--alt2 bg-image bg-image-2">
      <div class="container text--center">
        <h2 style="margin-bottom:40px">Nuestro equipo:</h2>
        <div class="row">
          <div class="col-lg-4 imagen-equipo">
            <img src="/assets/buba.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Silvana Benavides</h3>
            <h4 class="h4Puesto">Desarrolladora</h4>
          </div>
          <div class="col-lg-4 imagen-equipo">
            <img src="/assets/wale.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Walther Carrasco</h3>
            <h4 class="h4Puesto">Desarrollador</h4>
          </div>
          <div class="col-lg-4 imagen-equipo">
            <img src="/assets/ronald.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Ronald Zúniga</h3>
            <h4 class="h4Puesto">Mecatrónica</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 imagen-equipo">
            <img src="/assets/polla.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Ximena Guevara</h3>
            <h4 class="h4Puesto">Negocios</h4>
          </div>
          <div class="col-lg-4 imagen-equipo">
            <img src="/assets/bryan.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Bryan Guevara</h3>
            <h4 class="h4Puesto">Diseñador Gráfico</h4>
          </div>
          <div class="col-lg-4 imagen-equipo">
            <img src="/assets/carlos.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Carlos Montaño</h3>
            <h4 class="h4Puesto">Ambientalista</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 imagen-equipo">
            <img src="/assets/lorna.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Sofía Zablah</h3>
            <h4 class="h4Puesto">Negocios</h4>
          </div>
          <div class="col-lg-6 imagen-equipo">
            <img src="/assets/robelo.JPG" alt="" class="img-circle2">
            <h3 class="h3Nombre">Raúl Rovelo</h3>
            <h4 class="h4Puesto">Mecatrónica</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="text--center">
      <div class="container">
        <h3>¿Quiéres ser parte de la experiencia?</h3>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#normalModal">Ordena tu kit ahora!</button>
        <!-- <a href="#" class="btn">Ordena tu kit ahora!</a> -->
      </div>
    </section>

    <footer>
      <div class="container">
        <ul>
          <li><a href="#">UNIZA</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Home</a></li>
        </ul>
        <p>&copy; 2017 UNIZA. Todos los derechos reservadoshuert.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      suscripcion:{
        correo: "",
        comentario: ""
      }
    }
  },mounted(){

  }, methods:{
    enviar: function(){
      this.$http.post("https://dondecomemos-suscribe.herokuapp.com/v1/agregar", this.suscripcion).then((res)=>{
        alert("simon");
        this.suscripcion.correo = "";
        this.suscripcion.comentario = "";
      });
    }
  }
}
</script>

<style lang="css">
@charset "UTF-8";
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
@import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);
* {
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
  font-size: 100%;
  line-height: 1.45;
  color: #141414;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

img {
  max-width: 100%;
}

.btn {
  display: inline-block;
  margin: 1rem 0;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  background: #007ece;
  letter-spacing: .02em;
  border: none;
  border-radius: 5px;
  padding: .8rem 1rem .9rem;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
@media (max-width: 43.75em) {
  .btn {
    padding: .5rem .7rem .6rem;
    font-size: 1rem;
  }
}
.btn:hover {
  background: #008ee8;
  color: #fff;
}
.btn:focus, .btn:active, .btn:focus:active {
  background: #006eb5;
  border-color: #006eb5;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5) inset;
}

.container {
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
}

header {
  color: white;
  background: #007ece;
  padding: 10rem 0;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
@media (max-width: 43.75em) {
  header {
    padding: 2rem 0;
  }
}
header h1 {
  font-size: 3rem;
  margin: 0 0 1rem;
}
@media (max-width: 43.75em) {
  header h1 {
    font-size: 2rem;
  }
}
header h2 {
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0 0 1rem;
}
@media (max-width: 43.75em) {
  header h2 {
    font-size: 1.5rem;
  }
}

section {
  background: #fff;
  color: #1c262b;
  padding: 3.5rem 0;
}
@media (max-width: 43.75em) {
  section {
    padding: 2rem 0;
  }
}
section.section--primary {
  background: #007ece;
  color: #fff;
  height: 50vh;
}
section.section--primary--alt {
  background: #27a4f4;
  color: #fff;
  height: 60vh;
}
section.section--primary--alt2 {
  background: #27a4f4;
  color: #fff;
  height: 100%;
}
section.section--primary--light {
  background: rgba(0, 126, 206, 0.1);
}
section.section--grey {
  background: #1c262b;
  color: #fff;
}
section.section--grey--light {
  background: #29363e;
  color: #fff;
}
section h3 {
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 1rem;
}
@media (max-width: 43.75em) {
  section h3 {
    font-size: 1.5rem;
  }
}
section li {
  font-size: 1.2rem;
  font-weight: 300;
}
section p {
  font-size: 1.2rem;
  font-weight: 300;
}

.col, .col-7, .col-3, .col-5 {
  margin: 0 1.5%;
  display: inline-block;
  vertical-align: top;
}

.col-7 {
  width: 64%;
}
@media (max-width: 43.75em) {
  .col-7 {
    width: 100%;
    margin: 0;
  }
}

.col-3 {
  width: 29%;
}

.col-3-med{
  width: 150px;
}

@media (max-width: 43.75em) {
  .col-3 {
    width: 100%;
    margin: 0;
  }
}

.col-5 {
  width: 30%;
}
@media (max-width: 34.375em) {
  .col-5 {
    width: 60%;
    margin: 0;
  }
}

.details {
  text-align: left;
  margin-top: 15%;
  margin-bottom: 10%;
}
.details h3 {
  font-size: 6em;
  text-align: left;
}
.details p{
  font-size: 2em;
}

.details-img--ball{
  margin-top: 100px;
}

@media (max-width: 43.75em) {
  .details-img--ball {
    height: 200px;
    width: auto;
    margin: 0 auto;
  }
}

.features {
  text-align: center;
  padding: 1rem;
}
.features:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 43.75em) {
  .features {
    width: 100%;
    margin: 0;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .features:last-child {
    border: none;
  }
}
.features i {
  font-size: 12rem;
  margin: 0 0 2rem 0;
}


@media (max-width: 43.75em) {
  .features i {
    font-size: 1.5rem;
    width: 2rem;
    text-align: center;
    margin: 0 0 1rem 0;
    float: left;
  }
}
.features p {
  margin: 0 0 1rem 0;
  font-size: 2.75rem;
  font-weight: 400;
}
@media (max-width: 43.75em) {
  .features p {
    margin-left: 3rem;
  }
}

blockquote {
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
}
blockquote:before {
  display: inline-block;
  color: #007ece;
  font-size: 2rem;
  content: '\201C';
}
blockquote p {
  margin: 0;
  display: inline;
  font-size: 1.5rem;
}
@media (max-width: 43.75em) {
  blockquote p {
    font-size: 1.2rem;
  }
}
blockquote cite {
  font-size: 1rem;
  display: block;
  margin: .5rem 0 0 1.2rem;
  text-style: italic;
}
@media (max-width: 43.75em) {
  blockquote cite {
    font-size: .8rem;
  }
}
blockquote cite:before {
  content: '–';
}

footer {
  background: #2d2b2a;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  font-size: .8rem;
  color: rgba(255, 255, 255, 0.4);
}
footer ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
footer ul li {
  display: inline-block;
}
footer ul li a {
  display: block;
  padding: .4rem .7rem;
  font-size: .9rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}
footer ul li a:hover {
  color: white;
}

.text--center {
  text-align: center;
}

.text--left {
  text-align: left;
}

.bg-image {
  background: #007ece;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
}
.bg-image:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #333 url("/assets/plantWallpaper.jpg") no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  opacity: .8;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.bg-image.bg-image-2:before {
  opacity: .6;
  background-image: url("/assets/grupal.JPG");
  background-position: center center;
}

.container-1{
  margin: 15% auto;
}

.container-1 h1{
  font-size: 10em;
}

.container-1 h2{
  font-size: 5em;
}

.btn-ordena{
  width: 30%;
}

.h2Producto{
  margin: 7% 20%;
  width: 600px;
}

.h2Producto-2{
  margin: 5% 32%;
}

.img-circle{
  height: 250px;
  width: 110%;
}

.img-circle2{
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.rotar{
  transform: rotate(-10deg);
}

.bs-example{
  margin: 20px;
}
.modal-content iframe{
  margin: 0 auto;
  display: block;
}

.imagen-equipo{
  margin: 10px auto;
  margin-bottom: 20%;
  margin-top: 10px;
}

.h3Nombre{
  font-size: 3em;
  font-weight: 400;
  margin-top: 15px;
}

.h4Puesto{
  font-size: 2.5em;
  margin-bottom: -30%;
}

.color-red{
  color: red;
}

.p-suscribete{
  font-size: 17px;
  margin-top: 7px;
}

.boton-enviar{
  margin-top: 0;
  background-color: green;
}
</style>
