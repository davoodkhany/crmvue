import { defineStore } from 'pinia'

import axios from '@/plugins/axios'

import { router } from '@/router/index';

import { useRegisterUser } from '../stores/RegisterUserStore.js'

export const useContactStore = defineStore({
    id: 'ContactStore',
    state: () => {
        return {
            name: '',
            family: '',
            email: '',
            mobile: '',
            responsible: '',
            errors: '',
            liable: [],
            status: false,
            toast: false,
            contacts: '',
            userLogin: ''
        }
    },
    getters: {
        async responibleGet() {
            const getUser = useRegisterUser();
            this.userLogin = getUser.user.first_name + ' ' + getUser.user.last_name
            await axios.post('/get-user-responible', { 'user': getUser.user })
                .then((res) => {
                    this.liable = res.data.users
                })
                .catch((err) => {
                    console.log('EROOR');
                })
        },
        async getContact() {
            await axios.get('/contact')
                .then((res) => {
                    this.contacts = res.data.contacts
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    actions: {
        async createContact() {
            const formData = {
                name: this.name,
                family: this.family,
                email: this.email,
                mobile: this.mobile,
                responsible: this.responsible,
                token: this.token,
            }
            await axios.post('/contact', formData)
                .then((res) => {
                    this.status = true
                    this.toast = true
                    this.contacts = res.data.contacts_all
                    console.log(this.contacts);
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
    },

})