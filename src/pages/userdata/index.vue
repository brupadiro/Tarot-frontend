<template>
    <main>
        <h2>Su tirada está siendo interpretada...</h2>
        <div class="user-info">
            <h4>Nombre:</h4>
            <input type="text" v-model="name" name="name" @change="setName($event.target.value)"
                class="user-input">
            <h4>Email:</h4>
            <input type="email" v-model="email" name="email" @change="setEmail($event.target.value)"
                class="user-input">
            <h4>País:</h4>
            <input type="text" v-model="country" name="country" @change="setCountry($event.target.value)"
                class="user-input">
            <div>
                <input type="checkbox" id="terms" v-model="acceptedTerms">
                <label for="terms">Acepto los términos y condiciones</label>
            </div>
            <div style="margin-top:20px;">
                <button class="buttonNext" :disabled="!canContinue" @click="continueToResults">Continuar</button>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                country: '',
                acceptedTerms: false,
                canContinue: false
            };
        },
        watch: {
            name: function (newVal) {
                this.checkCanContinue();
            },
            email: function (newVal) {
                this.checkCanContinue();
            },
            country: function (newVal) {
                this.checkCanContinue();
            },
            acceptedTerms: function (newVal) {
                this.checkCanContinue();
            }
        },
        methods: {
            setName(name) {
                this.name = name;
            },
            setEmail(email) {
                this.email = email;
            },
            setCountry(country) {
                this.country = country;
            },
            checkCanContinue() {
                this.canContinue = this.name && this.email && this.country && this.acceptedTerms;
            },
            continueToResults() {
                if (this.canContinue) {
                   this.$router.push('/result')
                }
            }
        }
    }
</script>

<style>
    .user-info h4 {
        margin-bottom: 0.5rem;
    }

    .user-input {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
    }
</style>
