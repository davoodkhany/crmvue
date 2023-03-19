import { defineStore } from 'pinia'
import axios from '@/plugins/axios';
import { router } from '@/router/index';

export const useRegisterUser = defineStore({
    id: 'register',
    state: () => ({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        password: '',
        mobile: '',
        status: '',
        errors: '',
        step: '',
        results: '',
    }),
    actions: {

        nextSignup() {
            this.step = true
            router.push({ name: 'step-1' })

        },

        //Register User  
        submitForm() {
            const formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                mobile: this.mobile,
                company: this.company,
            }
            axios
                .post("/signup", formData)
                .then((res) => {
                    localStorage.setItem('token', res.data.token);
                    router.push({ name: 'Dashboard' })
                    this.status = res.status;
                    this.id = res.data.id;
                })
                .catch((err) => {
                    this.errors = err.response.data.errors

                })
        },
        // Verify Mobile Button Click
        // PhoneVerify() {
        //     const formData = {
        //         id: this.id,
        //         mobile: this.mobile
        //     }
        //     axios
        //         .post("/verified", formData)
        //         .then((res) => {
        //             router.push({ name: 'step-2' })
        //             this.statusMobile = res.status;
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //             this.errors = err.response.data.errors;
        //         });
        // },
        // VerifyCode() {
        //     const formData = {
        //         id: this.id,
        //         code: this.code
        //     }
        //     axios.post('/verifiedcode', formData)
        //         .then((res) => {
        //             localStorage.setItem('token', res.data.token);
        //             router.push({ name: 'Dashboard' })

        //         })
        //         .catch((err) => {
        //             this.errors = err.response.data.errors;
        //         })
        // }

    }
})