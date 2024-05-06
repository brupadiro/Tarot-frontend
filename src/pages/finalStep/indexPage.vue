<template>
    <main>
        <h2>Su tirada está siendo interpretada...</h2>
        <div class="user-info">
            <h4>Usted es:</h4>
            <div class="toggle-sex">
                <button :class="{'active': sex === 'Hombre'}" @click="setSex('Hombre')">Hombre</button>
                <button :class="{'active': sex === 'Mujer'}" @click="setSex('Mujer')">Mujer</button>
            </div>
            <h4>Seleccione su horóscopo:</h4>
            <select v-model="horoscope" name="horoscope" @change="setHoroscope($event.target.value)"
                class="horoscope-select">
                <option value="N/A">No lo sé</option>
                <option value="aries">Aries</option>
                <option value="tauro">Tauro</option>
                <option value="geminis">Géminis</option>
                <option value="cancer">Cáncer</option>
                <option value="leo">Leo</option>
                <option value="virgo">Virgo</option>
                <option value="libra">Libra</option>
                <option value="escorpio">Escorpio</option>
                <option value="sagitario">Sagitario</option>
                <option value="capricornio">Capricornio</option>
                <option value="acuario">Acuario</option>
                <option value="piscis">Piscis</option>
            </select>
            <h4>Ingrese su fecha de nacimiento:</h4>
            <input type="date" v-model="birthdate" name="birthdate" @change="setBirthdate($event.target.value)"
                class="birthdate-input">
            <div class="custom-reading">
                <h4>¿Desea recibir una tirada personalizada?</h4>
                <label>
                    <input type="radio" value="Si" v-model="customReading" name="customReading"> Sí
                </label>
                <label>
                    <input type="radio" value="No" v-model="customReading" name="customReading"> No
                </label>
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
                sex: null,
                horoscope: '',
                birthdate: '',
                customReading:null,
                canContinue: false
            };
        },
        watch: {
            sex: function (newVal) {
                this.checkCanContinue();
            },
            horoscope: function (newVal) {
                this.checkCanContinue();
            },
            birthdate: function (newVal) {
                this.checkCanContinue();
            },
            customReading: function (newVal) {
                this.checkCanContinue();
            }

        },
        methods: {
            setSex(sex) {
                this.sex = sex;
                this.$store.dispatch('setSex', sex);
                //this.$router.push('/result');
            },
            setHoroscope(horoscope) {
                this.horoscope = horoscope;
                this.$store.dispatch('setHoroscope', horoscope);
            },
            setBirthdate(birthdate) {
                this.birthdate = birthdate;
                this.$store.dispatch('setBirthdate', birthdate);
            },
            checkCanContinue() {
                this.canContinue = this.sex && this.horoscope && this.birthdate && this.customReading;
            },
            continueToResults() {
                if (this.canContinue) {
                    if(this.customReading =='Si'){
                        this.$router.push('/userdata')
                    } else{
                        this.$router.push('/result')
                    }
                    // Implement the logic to continue to results
                }
            }
        }
    }
</script>

<style>
    .user-info h4 {
        margin-bottom: 0.5rem;
    }

    .toggle-sex button {
        padding: 0.5rem 1rem;
        margin-right: 0.5rem;
        border: 1px solid #ccc;
        background-color: #f8f8f8;
        cursor: pointer;
        outline: none;
    }

    .toggle-sex button.active {
        background-color: #007bff;
        color: white;
        border-color: #007bff;
    }

    .horoscope-select {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
    }

    .birthdate-input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
    }
</style>