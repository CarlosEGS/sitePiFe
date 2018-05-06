<template>
<div class="navbar-wrapper">
    <div class="container-fluid">
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">Trabalho PI</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav pull-right">
                        <li><router-link :to="{ name: 'AddCan' }" ><a href="#">Cadastrar Lixeira</a></router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <br><br><br><br>

    <div class="panel panel-default">
        <div class="panel-heading">
        
    <table class="table table-striped table-dark">
  <thead>
    <tr class="table-info">
      <th scope="col">Nome</th>
      <th scope="col">Descricão</th>
      <th scope="col">Localizacão</th>
    </tr>
  </thead>
  <tbody class="table-info" v-for="item in Lixeiras">
    <tr>
      <td>{{item.Nome}}</td>
      <td>{{item.Descricao}}</td>
      <td>{{item.Local}}</td>
    </tr>
  </tbody>
</table>

        </div>
    </div>

</div>


</template>

<style>

.navbar, .dropdown-menu{
background:rgba(255,255,255,0.25);
border: none;

}

.nav>li>a, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover, .dropdown-menu>li>a, .dropdown-menu>li{
  border-bottom: 3px solid transparent;
}
.nav>li>a:focus, .nav>li>a:hover,.nav .open>a, .nav .open>a:focus, .nav .open>a:hover, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{
  border-bottom: 3px solid transparent;
  background: none;
}
.navbar a, .dropdown-menu>li>a, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover, .navbar-toggle{
 color: #000000;
}
.dropdown-menu{
      -webkit-box-shadow: none;
    box-shadow:none;
}

.nav li:hover:nth-child(8n+1), .nav li.active:nth-child(8n+1){
  border-bottom: #C4E17F 3px solid;
}
.nav li:hover:nth-child(8n+2), .nav li.active:nth-child(8n+2){
  border-bottom: #F7FDCA 3px solid;
}
.nav li:hover:nth-child(8n+3), .nav li.active:nth-child(8n+3){
  border-bottom: #FECF71 3px solid;
}
.nav li:hover:nth-child(8n+4), .nav li.active:nth-child(8n+4){
  border-bottom: #F0776C 3px solid;
}
.nav li:hover:nth-child(8n+5), .nav li.active:nth-child(8n+5){
  border-bottom: #DB9DBE 3px solid;
}
.nav li:hover:nth-child(8n+6), .nav li.active:nth-child(8n+6){
  border-bottom: #C49CDE 3px solid;
}
.nav li:hover:nth-child(8n+7), .nav li.active:nth-child(8n+7){
  border-bottom: #669AE1 3px solid;
}
.nav li:hover:nth-child(8n+8), .nav li.active:nth-child(8n+8){
  border-bottom: #62C2E4 3px solid;
}

.navbar-toggle .icon-bar{
    color: #000000;
    background: #000000;
}
</style>

<script>
  export default {
      data(){
        return{
          Lixeiras:[]
        }
    },
    methods: {
      FindAllByIdAccount(){
        this.loading = true
        let uri = 'http://localhost:8000/api/FindAllByIdAccount';
        this.axios.get(uri).then((response) => {
          this.Lixeiras = response.data.lixeiras
        })
    }
  },
 beforeMount(){
    this.FindAllByIdAccount()
 },
}
</script>
