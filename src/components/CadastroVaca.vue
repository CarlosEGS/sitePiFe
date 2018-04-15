<template>
	<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-7">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <span></span> Cadastrar Vaca</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" v-on:submit.prevent="AddVaca">
                    <div class="form-group">
                        <label  class="col-sm-3 control-label">Nome</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control"  placeholder="Nome da vaca" required  v-model="Vaca.nome">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Leite</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" placeholder="Produção de leite dia" required v-model="Vaca.leite">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Ração</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" placeholder="Consumo de ração dia" required v-model="Vaca.racao">
                        </div>
                    </div>
                    <div class="form-group last">
                        <div class="col-sm-offset-3 col-sm-9">
                            <button type="submit" class="btn btn-success btn-sm">
                                Cadastrar</button>
                                 <button type="reset" class="btn btn-default btn-sm">
                                Resetar</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
  export default {
    data(){
        return{
          Vaca:{}
        }
    },
    methods: {
      AddVaca(){
        let uri = 'http://localhost:8000/api/CadastraVaca';
        this.axios.post(uri, this.Vaca).then((response) => {
          this.$router.push({name: 'TelaPrincipal'})
        })
    }
  }
}
</script>