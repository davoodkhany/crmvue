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
        responsible: '',
        errors: '',
        responsibles: '',
    }),

    getters: {
        async responsibleGet() {
            const getUser = useRegisterUser();
            axios.post('/get-user-responible', { 'user': getUser.user })
                .then((res) => {
                    this.responsibles = res.data.users
                })
                .catch((err) => {
                    console.log('error');
                })
        },
    },

    actions: {

        createContact() {
            const getUser = useRegisterUser();
            const formData = {
                name: this.name,
                family: this.family,
                email: this.email,
                mobile: this.mobile,
                responible: this.responible,
                token: this.token,
                user: getUser.user
            }

            axios.post('/contact', formData)
                .then((res) => {

                    console.log(res);
                })
                .catch((err) = {})
        }
    }
})