import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css:["@/assets/styles/tailwind.css"],
    build:{
        postcss:{
            postcssOptions:{
                plugins:{
                    tailwindcss:{},
                }
            }
        }
    },
   app:{
    //    baseURL: '/pages-test'
       baseURL: '/portfolio'
   },
//    ssr: false,
})
