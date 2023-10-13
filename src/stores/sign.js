import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useSignStore = defineStore("sign", () => {

    const sign = ref("")
    const signData = computed(() => {
        return sign.value
    })

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


    return { signData, getSign }

})