<template>
    <main>
    <h2>Escoja 3 cartas pensando en sus defectos</h2>
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
        this.$store.dispatch('addDefectCard',card)
        if (this.$store.getters.defectCards.length > 2) {
            this.$router.push('/fourthStep')
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
          this.$store.getters.defectCards.forEach(card => {
                this.$store.dispatch('deleteFromMainCards',card)
            });
        }
    }



  };
  </script>
  