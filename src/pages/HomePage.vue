<template>
  <main>
    <CardList :query="randomCards" :reversible="reversible" @card-click="pushCard" @open-card-modal="toggleModal"
      :cardList="selectedCards" :cards="cardsList" />
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
        randomCards: "https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=20",
        showModal: false,
        reversible: true,
        cards: []
      };
    },
    mounted() {
      fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=20')
        .then((response) => response.json())
        .then((data) => (this.cards = data.cards))
        .catch((err) => console.log(err.message));


    },
    methods: {
      pushCard(card) {
        this.$store.dispatch('addCard', card)
        if (this.$store.getters.cards.length > 9) {
          this.$router.push('/secondStep')
        }
      },
      toggleModal() {
        this.showModal = !this.showModal;
      },
      closeHelp() {
        this.showHelp = false;
      },
    },
    computed: {
      cardsList() {
        let cards = this.cards.map((card) => card);

        if (this.numOfCards) {
          const deckLength = cards.length;
          const randomIndex = Math.floor(
            Math.random() * (deckLength - this.numOfCards)
          );
          cards = cards.slice(randomIndex, randomIndex + this.numOfCards);
        }

        if (this.sortable) {
          cards = sorter(
            cards,
            this.sortParams.sortParam,
            this.sortParams.sortDirection
          );
        }

        return cards;
      },


      selectedCards() {
        return this.$store.getters.cards
      }
    },
  };
</script>