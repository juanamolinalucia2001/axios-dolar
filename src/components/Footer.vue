<template>
  <v-footer
    dark
    padless
    class="mt-10"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
    
      <v-card-text class="white--text pt-0">
        Este es un cliente de la API que entrega los principales indicadores económicos para Chile en formato Table o struct. Tanto los indicadores diarios como los históricos pueden ser usados por desarrolladores y/ analistas en aplicaciones, analisis, etc.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Calendar</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
      ],
        }
    }
}
</script>