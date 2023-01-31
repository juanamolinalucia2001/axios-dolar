<template>
<div>
    <v-layout :wrap="true">
     <v-flex xs12>
      <v-card>
        <v-date-picker
         v-model="fecha"
         full-width
         locale="es-ar"
         :min="limiteFechaMin"
         :max="limiteFechaMax"
         @change="getDolar(fecha)"
         >

        </v-date-picker>
      </v-card>
        <v-card color="purple" dark>
          <v-card-text class="display-1 text-md-center" >
                 {{valor}}
          </v-card-text>
        </v-card>
       </v-flex>
    </v-layout>
</div>
 
</template>

<script>
  import axios from 'axios';
  import { mapMutations} from "vuex";

  export default {
     data(){
      return{
        fecha:new Date().toISOString().substr(0, 10),
        limiteFechaMin: '1984',
        limiteFechaMax: new Date().toISOString().substr(0, 10),
        valor:null
      }
    },
    methods:{
      ...mapMutations(['mostrarLoading', 'ocultarLoading']),
      async getDolar(dia){
        let arrayFecha = dia.split(['-'])
        let ddmmyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0];

        try {
          this.mostrarLoading({titulo:'Acediendo a info'})

          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
          if(datos.data.serie.length > 0){
            this.valor= await datos.data.serie[0].valor
          }else{
            this.valor= 'sin resultado'
          }
          
        }catch (error){
          //console.log(error);
          this.ocultarLoading()
        }
        finally{
          this.ocultarLoading()

        }
      }
    },
      created(){
        this.getDolar(this.fecha)
      }
    
  }
</script>
