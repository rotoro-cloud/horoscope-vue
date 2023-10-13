import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'

export const useDailyPhraseStore = defineStore("dailyphrase", () => {
    const dailyphrase = ref("")
    const dailyphraseData = computed(() => {
        return dailyphrase.value
    })

    const getDailyphrase = async () => {
        try {
          const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/dailyphrase', {
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
              'X-RapidAPI-Host': import.meta.env.VITE_API_URL
            }
          })
          dailyphrase.value = res.data
        } catch (error) {
          console.log(error);
        }
    
      }

      getDailyphrase()

    return {dailyphraseData}

})