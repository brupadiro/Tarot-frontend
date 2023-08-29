<template>
    <main>
        <h2>Su tirada está siendo interpretada...</h2>
        <h4>Usted es:</h4>
        <div class="eva-sexe">
            <input type="radio" name="sexe" @change="setSex('Man')" value="Man" id="Man"><label for="Man">Hombre</label>
            <br>
            <input type="radio" name="sexe" @change="setSex('Woman')" value="Woman" id="Woman"><label for="Woman">Mujer</label>
            <br>
        </div>
    </main>
</template>

<script>
export default {
    methods:{
        setSex(sex){
            this.$store.dispatch('setSex',sex)
            this.$router.push('/result')

        }
    }
}
</script>

<style>

</style>