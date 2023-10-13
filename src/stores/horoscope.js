import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


export const useHoroscopeStore = defineStore('horoscope', () => {
  const dailyphrase = ref("")
  const numerology = ref("")
  const compatibility = ref("")
  const sign = ref("")
  const horoscope = ref("")
  const dailyphraseData = computed(() => { return dailyphrase.value })
  const numerologyData = computed(() => { return numerology.value })
  const compatibilityData = computed(() => { return compatibility.value })
  const signData = computed(() => { return sign.value })
  const horoscopeData = computed(() => { return horoscope.value })


  const getHoroscope = async (sign, day) => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/horoscope', {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_API_URL
        },
        params: {
          day:day,
          sunsign: sign
        }
      })
      horoscope.value = res.data
      console.log(sign);
      console.log(day);
    } catch (error) {
      console.log(error);
    }

  }



  const getSign = async (signRequest) => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/sign', {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_API_URL
        },
        params: { s: signRequest }
      })
      sign.value = res.data

    } catch (error) {
      console.log(error);
    }

  }


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

  /* Del 1 al 9 */
  const getNumerology = async (numero = 1) => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/numerology', {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_API_URL
        },
        params: { n: numero }
      })
      numerology.value = res.data
    } catch (error) {
      console.log(error);
    }

  }

  /* aries
taurus
gemini
cancer
leo
virgo
libra
scorpio
sagittarius
capricorn
aquarius
pisces */

  const getCompatibility = async (sign1, sign2) => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/affinity', {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_API_URL
        },
        params: { sign1, sign2 }
      })
      compatibility.value = res.data
    } catch (error) {
      console.log(error);
    }

  }



  /* Cargar la frase diaria */
  getDailyphrase()


  return { dailyphraseData, numerologyData, compatibilityData, signData, horoscopeData, getHoroscope, getSign, getDailyphrase, getNumerology, getCompatibility }
})
