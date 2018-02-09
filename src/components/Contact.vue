<template>
    <div class="contact">
        <div class="banner" style="background: url('static/slider/slider6.jpg') center center no-repeat"></div>
        <h2>Contact</h2>

        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
            <h1>Form Validation with Vue 2</h1>
            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Name</label>
                <input v-model="name" v-validate.initial="name" data-vv-rules="required|alpha|min:3" class="form-control" type="text" placeholder="Full Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('email') }">
                <label class="control-label" for="email">Email</label>
                <input v-model="email" v-validate.initial="email" data-vv-rules="required|email" class="form-control" type="email" placeholder="Email">
                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('subject') }">
                <label class="control-label" for="subject">Subject</label>
                <input v-model="subject" v-validate.initial="subject" data-vv-rules="required|subject" class="form-control" type="subject" placeholder="Subject">
                <p class="text-danger" v-if="errors.has('subject')">{{ errors.first('subject') }}</p>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('message') }">
                <label class="control-label" for="message">Message</label>
                <textarea v-model="message" v-validate.initial="message" data-vv-rules="required|message" class="form-control" placeholder="Message"> 
                </textarea>
                <p class="text-danger" v-if="errors.has('message')">{{ errors.first('message') }}</p>
            </div>

            <button class="btn btn-primary btn-block" type="submit">Submit</button>
        </form>
        <div v-else>
            <h1 class="submitted">Form submitted successfully!</h1>
        </div>

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
