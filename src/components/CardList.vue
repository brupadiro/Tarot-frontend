<template>
  <div class="card-list">
    <p v-if="!cards.length" class="placeholder">loading cards</p>

    <CardItem
      v-else
      v-for="card in cards"
      :cardIsReversible="reversible"
      :key="card.name_short"
      :cardId="card.name_short"
      @card-click="selectCard(card)"
      :cardList="cardList"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardListItem.vue";
import sorter from "@/assets/sorter.js";
import { isProxy, toRaw } from 'vue';

export default {
  name: "CardList",
  components: {
    CardItem,
  },
  props: {
    cardList:Array,
    numOfCards: Number,
    query: String,
    reversible: Boolean,
    sortable: Boolean,
    sortParams: Object,
    cards:Array
  },
  data() {
  },
  methods: {
    selectCard(card) {
      this.$emit("card-click", toRaw(card));
      this.$emit("open-card-modal");
    },
  },
};
</script>


<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 1em auto;
  width: 100%;
  justify-content: space-evenly;
  align-content: space-around;
}
</style>