import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ApiService from '@/services/axios'

export const useSportStore = defineStore('sport', () => {

  const  getSport = async () =>  {
    return await new Promise((resolve, reject) => {
      ApiService.getThirdParty('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard')
      .then(( data ) => {
        console.log(data)
        resolve(data)
      }).catch((response) => {
        console.log(response)
        resolve('Error al obtener informacion');
      });
      
    })
    .catch((response) => {
      console.log(response)
      return 'Error al actualizar datos';
    });
  
  }

  return { getSport }
})