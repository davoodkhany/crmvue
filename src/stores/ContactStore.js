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
        liable: [],
        status: false,
        toast: false

    }),

    getters: {
        async responibleGet() {
            const getUser = useRegisterUser();
            axios.post('/get-user-responible', { 'user': getUser.user })
                .then((res) => {

                    this.liable = res.data.users
                })
                .catch((err) => {
                    console.log('EROOR');
                })
        },

    },
    actions: {

        ChangeStatus() {
            this.status = false
        },

        createContact() {
            const formData = {
                name: this.name,
                family: this.family,
                email: this.email,
                mobile: this.mobile,
                responsible: this.responsible,
                token: this.token,



            }
            axios.post('/contact', formData)
                .then((res) => {
                    this.status = true
                    this.toast = true
                    if (this.status == true) {
                        setTimeout(() => {
                            this.name = '',
                                this.family = '',
                                this.email = '',
                                this.mobile = '',
                                this.responsible = '',
                                this.errors = ''
                        }, 1000)
                    }

                })
                .catch((err) => {
                    this.errors = err.response.data.errors
                })


        }
    }
})