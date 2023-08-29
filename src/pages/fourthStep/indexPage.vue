<template>
    <main>
    <h2>Escoja 3 cartas pensando en su futuro</h2>
      <CardList
        :query="randomCards"
        :reversible="reversible"
        @card-click="pushCard"
        @open-card-modal="toggleModal"
        :cardList="selectedCards"
        :cards="cardsList"
      />
    </main>
  </template>
  
  
  <script>
  import CardList from "@/components/CardList.vue";
  import CardModal from "@/components/CardModal.vue";
  export default {
    name: "Home",
    components: {
      CardList,
      CardModal,
    },
    data() {
      return {
        showModal: false,
        reversible:true,
      };
    },
    mounted() {
    },
    methods: {
      pushCard(card) {
        this.$store.dispatch('addFutureCard',card)
        if (this.$store.getters.futureCards.length > 2) {
            this.$router.push('/finalStep')
          }
      },
      toggleModal() {
        this.showModal = !this.showModal;
      },
      closeHelp() {
        this.showHelp = false;
      },
    },
    computed:{
      cardsList() {
        return this.$store.getters.cards
      }
    },
    watch: {
        $route(to, from) {
          this.$store.getters.futureCards.forEach(card => {
                this.$store.dispatch('deleteFromMainCards',card)
            });
        }
    }


  };
  </script>
  