<template>
		<form class="form-signin" v-on:submit.prevent="addItem">
		<img width="100" height="100"  vspace="2px" hspace="70px" src="https://pt.seaicons.com/wp-content/uploads/2015/07/System-recycling-bin-full-icon.png"/>
		<input type="text" class="form-control" placeholder="Email address" required="" autofocus="" v-model="Usuario.email">
        <br>
		<input type="password" class="form-control" placeholder="Password" required="" required v-model="Usuario.senha">
        <input type="password" class="form-control" placeholder="Confirm Password" required="" required v-model="Usuario.senhaConfirmacao">
		<button class="btn btn-lg btn-primary btn-block" type="submit">
			Criar Conta
		</button>
        <button class="btn btn-lg btn-primary btn-block" type="reset">
        Limpar Campos
		</button>
	</form>

</template>




<script>
  export default {
    data(){
        return{
          Usuario:{}
        }
    },
    methods: {
      addItem(){
        let uri = 'http://localhost:8000/api/CreateAccount';
        this.axios.post(uri, this.Usuario).then((response) => {
          this.$router.push({name: 'Login'})
        })
    }
  }
}
</script>


