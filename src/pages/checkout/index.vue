<template>
    <div class="container">
        <div class="card rounded-lg">
            <div class="toolbar secondary" style="background-color: #311B92; color: white; padding: 16px;">
                <h1 class="title font-weight-black">Estas a punto de descubrir que te deparan los astros!</h1>
            </div>
            <div class="subtitle" style="padding: 16px;">
                Termina el pago de $299 para descubrir tu futuro!
            </div>
            <div class="card-text" style="padding: 16px;">
                <div id="cardPaymentBrick_container"></div>
                <div class="text-center mt-4">
                    <p class="text-subtitle-2 font-weight-bold">Pago seguro con</p>
                    <img src="/mercadopago.png" style="width: 80px;" alt="MercadoPago Logo" />
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
    import {
        loadMercadoPago
    } from "@mercadopago/sdk-js";
    import axios from "axios";
    export default {
        components: {},
        data() {
            return {
                petSelected: null
            }
        },
        destroyed() {
            this.paymentController.unmount()
        },
        mounted() {
            this.generateBricks()
        },

        methods: {
            selectPet(pet) {
                this.petSelected = pet.id
            },
            async generateBricks() {
                await loadMercadoPago();
                const mp = new window.MercadoPago("TEST-6733a4e4-80ce-42b7-afdf-d3b39878b1bb", {
                    locale: "es-ES",
                });

                this.mp = mp
                const bricksBuilder = mp.bricks();
                var vm = this
                const renderCardPaymentBrick = async (bricksBuilder) => {

                    const settings = {
                        initialization: {
                            amount: 299, //value of the payment to be processed
                        },
                        customization: {
                            visual: {
                                style: {
                                    theme: 'dark', // 'default' |'dark' | 'bootstrap' | 'flat'
                                    customVariables: {
                                        textPrimaryColor: 'string',
                                        textSecondaryColor: 'string',
                                    },
                                    texts: {
                                        formSubmit: "VER MI FUTURO AHORA",
                                    }


                                }
                            }
                        },
                        callbacks: {
                            onSubmit: (data) => {
                                vm.submitForm(data)
                            },
                            onReady: () => {
                                // handle form ready
                            },
                            onError: (error) => {
                                // handle error
                            }
                        }
                    }

                    vm.paymentController = await bricksBuilder.create('cardPayment',
                        'cardPaymentBrick_container',
                        settings);
                };

                renderCardPaymentBrick(bricksBuilder);

            },
            submitForm(data) {
                axios.post(`https://tarot.brupadev.tech/index.php/wp-json/mp-to-wc/v1/process-payment`, {
                        ...data,
                    })
                    .then(data => {
                        if(data.success){
                            this.$router.push('/result')
                        } else{
                            window.alert('Hubo un error al procesar el pago, intenta nuevamente')
                        }
                    });

            },
        },
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }

    .card {
        max-width: 600px;
        background-color: black;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .toolbar {
        display: flex;
        align-items: center;
    }

    .title {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .card-text {
        padding: 16px;
    }

    .text-center {
        text-align: center;
    }

    .text-subtitle-2 {
        font-size: 1rem;
    }

    .font-weight-bold {
        font-weight: bold;
    }
</style>