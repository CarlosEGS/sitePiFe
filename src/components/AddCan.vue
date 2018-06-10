<template>
<div class="navbar-wrapper">
    <div class="container-fluid">
        <nav class="navbar navbar-fixed-top">

                <div class="navbar-header">
                      <img width="50" height="50" src="https://pt.seaicons.com/wp-content/uploads/2015/07/System-recycling-bin-full-icon.png"/>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav pull-left">
                      <li><router-link :to="{ name: 'TrashCan' }"><b>PI</b></router-link></li>
                    </ul>
                    <ul class="nav navbar-nav pull-right">
                      <li><router-link :to="{ name: 'AddCan' }" ><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>  Cadastrar Lixeira</router-link></li>
                      <li><router-link :to="{ name: 'TrashCan' }" ><span class="glyphicon glyphicon-leaf" aria-hidden="true"></span>  Onde Reciclar</router-link></li>
                      <li><router-link :to="{ name: 'TrashCan' }" ><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>  Localização</router-link></li>
                      <li><router-link :to="{ name: 'TrashCan' }" ><span class="glyphicon glyphicon-italic" aria-hidden="true"></span>  Sobre a Empresa</router-link></li>
                      <li><router-link :to="{ name: 'TrashCan' }" ><span class="glyphicon glyphicon-user" aria-hidden="true"></span>  Conta</router-link></li>

                    </ul>
            </div>
        </nav>
    </div>
     <br><br><br><br>
    	<div class="container">
    <div class="row">
            <div class="panel panel-default">
                <div class="panel-heading" id="colorpanelss">
                    <span></span> Cadastrar Lixeira</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" v-on:submit.prevent="AddCan">
                    <div class="form-group">
                        <label  class="col-sm-1 control-label">Nome</label>
                            <input type="text" class="form-control"  placeholder="Nome da lixeira" required  v-model="Trash.nome">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">Descrição</label>
                            <input type="text" class="form-control" placeholder="Descrição da lixeira" required v-model="Trash.descricao">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">Usuário</label>
                            <input type="text" class="form-control" placeholder="Usuário da lixeira" required v-model="Trash.idAccount">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">Localização</label>
                            <input type="text" class="form-control" placeholder="Localização da lixeira" required v-model="Trash.local">
                    </div>
                    <div class="form-group last">
                        <button type="submit" class="btn btn-success">Cadastrar</button>
                        <button type="reset" class="btn btn-danger">Resetar</button>
                    </div>
                    </form>
                </div>
            </div>

    </div>
</div>
</div>
</template>

<style>
.navbar, .dropdown-menu{
background:#ce76e9;
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
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+2), .nav li.active:nth-child(8n+2){
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+3), .nav li.active:nth-child(8n+3){
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+4), .nav li.active:nth-child(8n+4){
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+5), .nav li.active:nth-child(8n+5){
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+6), .nav li.active:nth-child(8n+6){
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+7), .nav li.active:nth-child(8n+7){
  border-bottom: #9905ee 3px solid;
}
.nav li:hover:nth-child(8n+8), .nav li.active:nth-child(8n+8){
  border-bottom: #9905ee 3px solid;
}
.navbar-toggle .icon-bar{
    color: #9905ee;
    background: #9905ee;
}
#colorpanelss{
    background: #ce76e9;
}
</style>

<script>
  export default {
    data(){
        return{
          Trash:{}
        }
    },
    methods: {
      AddCan(){
        let uri = 'http://localhost:8000/api/CreateTrash';
        this.axios.post(uri, this.Trash).then((response) => {
        this.$router.push('/TrashCan')
        })
    }
  }
}
</script>