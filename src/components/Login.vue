<template>

<div class="container">

	<form class="form-signin"  v-on:submit.prevent="Login">
		<img width="100" height="100"  vspace="2px" hspace="70px" src="https://pt.seaicons.com/wp-content/uploads/2015/07/System-recycling-bin-full-icon.png"/>
		<input type="text" class="form-control" placeholder="Email address" required="" autofocus="" required v-model="Usuario.email">
    <br>
		<input type="password" class="form-control" placeholder="Password" required="" required v-model="Usuario.senha">
		<button class="btn btn-lg btn-primary btn-block" type="submit">
			Login
		</button>
    <br>
    <router-link :to="{ name: 'CreateAccount' }">
        <button class="btn btn-lg btn-primary btn-block" type="submit">
			Criar Conta
		</button>
    </router-link>
	</form>

</div>

</template>

<style>
  body { 
  background: url(https://i.pinimg.com/originals/22/33/8d/22338d6c69473881323c02d53de1f37c.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
  .fullscreen_bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('http://31.media.tumblr.com/ad65726441493f47e0c8f0473206f4e5/tumblr_mvwl4fCEb21rdpk23o1_1280.jpg');
  }
  .form-signin {
    max-width: 280px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading, .form-signin {
    margin-bottom: 10px;
  }
  .form-signin .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: none;
    border-left-style: solid;
    border-color: #000;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-style: none;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-color: #000;
  }
  .form-signin-heading {
    color: #fff;
    text-align: center;
    text-shadow: 0 2px 2px rgba(0,0,0,0.5);
  }
</style>

<script>
  export default {
    data(){
        return{
          Usuario:{}
        }
    },
    methods: {
      Login(){
        let uri = 'http://localhost:8000/api/Login';
        this.axios.post(uri, this.Usuario).then((response) => {
          this.$router.push({name: 'TelaPrincipal'})
        })
    }
  }
}
</script>