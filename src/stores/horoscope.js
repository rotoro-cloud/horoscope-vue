import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


export const useHoroscopeStore = defineStore('horoscope', () => {
  const dailyphrase = ref("")
  const numerology = ref("")
  const compatibility = ref("")
  const tarotCards = ref("")
  const sign = ref("")
  const horoscope = ref("")
  const dailyphraseData = computed(() => { return dailyphrase.value })
  const numerologyData = computed(() => { return numerology.value })
  const compatibilityData = computed(() => { return compatibility.value })
  const tarotCardsData = computed(() => { return tarotCards.value })
  const signData = computed(() => { return sign.value })
  const horoscopeData = computed(() => { return horoscope.value })



  /* Today

Yesterday

Tomorrow

Week

Month

Year

aries
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
pisces
*/





  const getTarotCards = async () => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/threetarotcards', {
        headers: {
          'X-RapidAPI-Key': '1337dfcf18msh684cd32d7f3ee2ap1e6cb8jsn15b4dda73e1b',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }

      })
      tarotCards.value = res.data
    } catch (error) {
      console.log(error);
    }

  }


  const getHoroscope = async (sign, day) => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/horoscope', {
        headers: {
          'X-RapidAPI-Key': '1337dfcf18msh684cd32d7f3ee2ap1e6cb8jsn15b4dda73e1b',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
        params: {
          day,
          sunsign: sign
        }
      })
      horoscope.value = res.data
    } catch (error) {
      console.log(error);
    }

  }






  const getSign = async (sign) => {
    try {
      const res = await axios.get('https://horoscope-astrology.p.rapidapi.com/sign', {
        headers: {
          'X-RapidAPI-Key': '1337dfcf18msh684cd32d7f3ee2ap1e6cb8jsn15b4dda73e1b',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
        params: { s: sign }
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
          'X-RapidAPI-Key': '1337dfcf18msh684cd32d7f3ee2ap1e6cb8jsn15b4dda73e1b',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
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
          'X-RapidAPI-Key': '1337dfcf18msh684cd32d7f3ee2ap1e6cb8jsn15b4dda73e1b',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
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
          'X-RapidAPI-Key': '1337dfcf18msh684cd32d7f3ee2ap1e6cb8jsn15b4dda73e1b',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
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


  return { dailyphraseData, numerologyData, compatibilityData, tarotCardsData, signData, getHoroscope, getSign, getDailyphrase, getNumerology, getCompatibility, getTarotCards }
})
