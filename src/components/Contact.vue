<template>
    <div class="contact">
        <div class="banner" style="background: url('static/slider/slider6.jpg') center center no-repeat">
            <div class="six-12">
                <div class="header-container">
                    <h3>
                        <span>Contact</span>
                    </h3>
                </div>
                <h1>If you need us</h1>
            </div>
        </div>

        <section class="contact-form m-0">
            <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                <h1>Classy contact form <i class="fa fa-paper-plane" aria-hidden="true"></i></h1>
                <div class="form-group" :class="{'has-error': errors.has('name') }">
                    <input v-model="name" v-validate.initial="name" data-vv-rules="required|alpha|min:3" class="form-control" type="text" placeholder="Full Name">
                    <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
                </div>
                <div class="form-group" :class="{'has-error': errors.has('email') }">
                    <input v-model="email" v-validate.initial="email" data-vv-rules="required|email" class="form-control" type="email" placeholder="Email">
                    <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                </div>
                <div class="form-group" :class="{'has-error': errors.has('subject') }">
                    <input v-model="subject" v-validate.initial="subject" data-vv-rules="required|subject" class="form-control" type="subject"
                        placeholder="Subject">
                    <p class="text-danger" v-if="errors.has('subject')">{{ errors.first('subject') }}</p>
                </div>
                <div class="form-group" :class="{'has-error': errors.has('message') }">
                    <textarea v-model="message" v-validate.initial="message" data-vv-rules="required|message" class="form-control" placeholder="Message"> 
                </textarea>
                    <p class="text-danger" v-if="errors.has('message')">{{ errors.first('message') }}</p>
                </div>

                <button class="btn btn-primary btn-block" type="submit">Send</button>
            </form>
            <div v-else>
                <h1 class="submitted">Form submitted successfully!</h1>
            </div>
        </section>

        <section class="map m-0">
            <img src="static/slider/map.jpg" alt="google map">
        </section>

    </div>
</template>

<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate'

    Vue.use(VeeValidate);

    VeeValidate.Validator.extend('passphrase', {
        getMessage: field => 'Sorry dude, wrong pass phrase.',
        validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
    });

    export default {
        data() {
            return {
                email: '',
                name: '',
                subject: '',
                message: '',
                formSubmitted: false
            }
        },
        methods: {
            validateBeforeSubmit(e) {
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    this.submitForm()
                }
            },
            submitForm() {
                this.formSubmitted = true
            }
        }
    }
</script>
