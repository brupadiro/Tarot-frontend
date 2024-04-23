<template>
    <main class="tarot-reading">
        <section class="intro">
            <h2>Lectura de Tarot para ti</h2>
        </section>

        <div class="cards-container">
            <div class="v-card">
                <div class="v-card-title">Cartas del pasado</div>
                <hr>
                <div class="v-card-content">
                    <CardList :cards="qualityCards" :reversible="reversible" @open-card-modal="toggleModal" />
                </div>
            </div>

            <div class="v-card">
                <div class="v-card-title">Cartas de presente</div>
                <hr>
                <div class="v-card-content">
                    <CardList :cards="defectCards" :reversible="reversible" @open-card-modal="toggleModal" />
                </div>
            </div>

            <div class="v-card">
                <div class="v-card-title">Cartas de futuro</div>
                <hr>
                <div class="v-card-content">
                    <CardList :cards="futureCards" :reversible="reversible" @open-card-modal="toggleModal" />
                </div>
            </div>
        </div>

        <section class="interpretation">
            <h3>Interpretación</h3>
            <p v-if="result">{{ result }}.Recuerda que los pensamientos positivos favorecen la atracción de cosas positivas. Y si quieres una consulta personalizada !llama a mi Linea de Mancias, disponible 24 horas todos los días, incluso los festivos!</p>
            <div v-else-if="!result" class="loader"></div>
        </section>
    </main>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';

    import CardList from "@/components/CardList.vue";
    import CardModal from "@/components/CardModal.vue";
    export default {
        components: {
            CardList,
            CardModal,
        },
        name: 'TarotReading',
        data() {
            return {
                result: 'Tu mensaje del tarot aparecerá aquí',
                reversible: false,
                result: '',
            };
        },
        computed: {
            cardsList() {
                return this.$store.getters.cards;
            },
        },
        mounted() {
            this.sendData();
        },
        methods: {
            sendData() {
                const data = {
                    qualityCards: this.$store.state.qualityCards.map(card => card.name),
                    defectCards: this.$store.state.defectCards.map(card => card.name),
                    futureCards: this.$store.state.futureCards.map(card => card.name),
                    sex: this.$store.state.sex,
                };

                const queryParams = qs.stringify(data);

                axios.get(`https://tarot.easygym.workers.dev/?${queryParams}`)
                    .then(response => {
                        this.result = response.data
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
        computed: {
            qualityCards() {
                return this.$store.state.qualityCards;
            },
            defectCards() {
                return this.$store.state.defectCards;
            },
            futureCards() {
                return this.$store.state.futureCards;
            },
            cardsList() {
                return [
                    ...this.$store.state.qualityCards,
                    ...this.$store.state.defectCards,
                    ...this.$store.state.futureCards
                ];
            },
        }

    };
</script>

<style>
    .tarot-reading {
        padding: 20px;
        border: 1px solid #ccc;
    }

    .tarot-reading h2 {
        margin-top: 0;
    }

    .tarot-reading p {
        margin-bottom: 10px;
    }

    .tarot-reading .cards-container {
        display: flex;
        flex-wrap: wrap;
    }

    .loader {
        border: 4px solid #f3f3f3;
        /* Light grey */
        border-top: 4px solid #3498db;
        /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 20px auto;
        /* Center the loader */
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: getLogger(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .tarot-reading .card {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: center;
    }

    .tarot-reading .card img {
        width: 100px;
        height: 150px;
    }

    .tarot-reading .card h3 {
        font-weight: bold;
    }

    .v-card {
        background-color: #1c1c1c91;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        /* Subtle shadow effect */
        padding: 20px;
        width:100%;
        border-radius:20px;
        margin: 15px;
    }

    .v-card-title {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .v-card-content {
        /* Style the content within the v-card */
    }

    .v-card-actions {
        margin-top: 15px;
        display: flex;
        justify-content: flex-end;
        /* Buttons can align to the right */
    }
</style>