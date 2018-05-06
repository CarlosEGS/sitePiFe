<template>
	<div class="container">
    <div class="row">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <span></span> Cadastrar Lixeira</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" v-on:submit.prevent="AddCan">
                    <div class="form-group">
                        <label  class="col-sm-3 control-label">Nome</label>
                            <input type="text" class="form-control"  placeholder="Nome da lixeira" required  v-model="Trash.nome">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Descrição</label>
                            <input type="text" class="form-control" placeholder="Descrição da lixeira" required v-model="Trash.descricao">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Usuário</label>
                            <input type="text" class="form-control" placeholder="Usuário da lixeira" required v-model="Trash.idAccount">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Localização</label>
                            <input type="text" class="form-control" placeholder="Localização da lixeira" required v-model="Trash.local">
                    </div>
                    <div class="form-group last">
                            <button type="submit" class="btn btn-success btn-sm">
                                Cadastrar</button>
                                 <button type="reset" class="btn btn-default btn-sm">
                                Resetar</button>
                    </div>
                    </form>
                </div>
            </div>

    </div>
</div>

</template>

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
          this.$router.push({name: 'TrashCan'})
        })
    }
  }
}
</script>