<template>
  <div>
    <NavBar/>
    <v-row>
      <v-col
      cols="12"
      sm="0"
      md="1"

    >
      <NavLateral style="background-color: #F7F7F7 !important; height: 85vh"/>
      </v-col>
      <v-col
      cols="12"
      sm="12"
      md="11"

    >
      <router-view style="margin-top:41px; margin-left:47px"></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { router } from './routers/index'
import NavBar from './components/navbar.vue'
import NavLateral from './components/navlateral.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NavLateral
  },
  created: function (){
    return router.push("/")
  },
};
</script>
