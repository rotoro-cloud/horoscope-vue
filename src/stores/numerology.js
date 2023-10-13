import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useNumerologyStore = defineStore("numerology", () => {
    const numerology = ref("")
    const numerologyData = computed(() => {
        return numerology.value
    })

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

    return { numerologyData, getNumerology }
})