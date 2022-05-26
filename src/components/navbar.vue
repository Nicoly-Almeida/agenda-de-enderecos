<template>
  <v-toolbar dark class="nav">
    <img src="../assets/img/logo.svg" class="logo" alt="logo"/>

    <v-toolbar-title class="toolbar-title">
      <p class="titulo">Surreal São Paulo</p>
      <p class="subtitulo">VTEX</p>
    </v-toolbar-title>
    

    <v-spacer></v-spacer>

    <div class="margem">
      <v-btn icon>
        <img src="../assets/img/icone-bell.svg" alt="notificacao"/>
      </v-btn>
    </div>


  </v-toolbar>
</template>

<script>
  export default {
    name: 'NavBar',

  }
</script>
