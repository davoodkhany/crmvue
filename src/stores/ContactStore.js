import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { router } from '@/router/index';
import { useRegisterUser } from '../stores/RegisterUserStore.js'

export const useContactStore = defineStore({

    id: 'contact',
    state: () => ({
        name: '',
        family: '',
        email: '',
        mobile: '',
        responible: '',
        errors: '',
        responibles: {}
    }),


    getters: {
        responibleGet() {
            const getUser = useRegisterUser();
            axios.post('/get-user-responible', { 'user': getUser.user })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {})
        },
    },

    actions: {



        createContact() {
            const formData = {
                name: this.name,
                family: this.family,
                email: this.email,
                mobile: this.mobile,
                responible: this.responible,
                token: this.token,
            }
        }
    }
})