<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
         <router-view/>

        <v-dialog
      v-model="loading.estado"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="indigo"
        dark
      >
        <v-card-text>
          {{loading.titulo}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapState }from "vuex"
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',

  data(){
    return{

    }
  },
  computed:{
      ...mapState(['loading'])
  },
  components:{
    Footer,
    Header
  }
};
</script>
