<template>
    <v-navigation-drawer mini-variant mini-variant-width="96" permanent >
      <v-list-item>
          <img src="../assets/img/icone-busca.svg" class="icon_lateral" alt="notificacao"/>
      </v-list-item>
      <v-list-item>
          <img src="../assets/img/icone-folder2.svg" class="icon_lateral" alt="pasta"/>
      </v-list-item>
      <v-list-item style="bottom:0px; position:fixed; padding-left:10px">
        <img src="../assets/img/icone-ajuste.svg" class="ajuste"  alt="ajuste"/>
      </v-list-item>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavLateral',
    data () {
      return {
        drawer: true,
        mini: true,
      }
    },

  }
  
</script>