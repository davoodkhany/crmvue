import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { router } from '@/router/index';

export const useContactStore = defineStore({
    id: 'contact',
    state: () => ({
        name: '',
        family: '',
        email: '',
        mobile: '',
        responible: '',
        errors: '',
    }),

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