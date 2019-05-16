<template>
  <div>
    <dl>
      <h2>Förklaringar</h2>
      <dt v-if="getLegendOnes">Ettor</dt>
      <dd v-if="getLegendOnes">max poäng 5</dd>
      <dt v-if="getLegendTwos">Tvåor</dt>
      <dd v-if="getLegendTwos">max poäng 10</dd>
      <dt v-if="getLegendThrees">Treor</dt>
      <dd v-if="getLegendThrees">max poäng 15</dd>
      <dt v-if="getLegendFours">Fyror</dt>
      <dd v-if="getLegendFours">max poäng 20</dd>
      <dt v-if="getLegendFives">Femmor</dt>
      <dd v-if="getLegendFives">max poäng 25</dd>
      <dt v-if="getLegendSixes">Sexor</dt>
      <dd v-if="getLegendSixes">max poäng 30</dd>
      <dt v-if="getLegendBonus">Bonus</dt>
      <dd
        v-if="getLegendBonus"
      >För att få bonus måste spelaren få minst 63 poäng i de sex översta villkoren (detta motsvarar i genomsnitt tre av varje villkor). Bonus ger alltid 50 poäng oavsett poängsumman</dd>
      <dt v-if="getLegendPair">Ett par/Två par</dt>
      <dd
        v-if="getLegendPair"
      >Summan av paret/paren räknas. OBS! Kastet 4-4-4-4-6 räknas inte som två par. Båda paren måste vara olika.</dd>
      <dt v-if="getLegendOfaKind">Tretal/Fyrtal</dt>
      <dd
        v-if="getLegendOfaKind"
      >Endast summan av lika tärningar räknas, t.ex.tre 4:or (=12 poäng) eller fyra 2:or (=8 poäng).</dd>
      <dt v-if="getLegendSmallStraight">Liten stege</dt>
      <dd
        v-if="getLegendSmallStraight"
      >För att få liten stege (stege ibland kallat straight) skall tärningarna visa siffrorna 1, 2, 3, 4 och 5. Detta ger 15 poäng.</dd>
      <dt v-if="getLegendLargeStraight">Stor stege</dt>
      <dd
        v-if="getLegendLargeStraight"
      >För att få stor stege skall tärningarna visa siffrorna 2, 3, 4, 5 och 6. Detta ger 20 poäng.</dd>
      <dt v-if="getLegendFullHouse">Kåk</dt>
      <dd
        v-if="getLegendFullHouse"
      >För att få kåk skall tre av tärningarna visa ett och samma tal, samtidigt som övriga två ska visa ett och samma tal. Exempelvis 6, 6, 6, 4 och 4.</dd>
      <dt v-if="getLegendChance">Chans</dt>
      <dd
        v-if="getLegendChance"
      >Chans innebär att man ska få så högt tal som möjligt när samtliga tärningsprickar räknas samman.</dd>
      <dt v-if="getLegendYahtzee">Yatzy</dt>
      <dd
        v-if="getLegendYahtzee"
      >För att få yatzy skall alla tärningarna visa lika siffror. Yatzy ger alltid 50 poäng oavsett vilken siffra som tärningarna visar.</dd>
    </dl>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GameLegend",
  computed: mapGetters([
    "getLegendOnes",
    "getLegendTwos",
    "getLegendThrees",
    "getLegendFours",
    "getLegendFives",
    "getLegendSixes",
    "getLegendBonus",
    "getLegendPair",
    "getLegendOfaKind",
    "getLegendSmallStraight",
    "getLegendLargeStraight",
    "getLegendFullHouse",
    "getLegendChance",
    "getLegendYahtzee"
  ])
};
</script>

<style>
#yahtzee #gameLegend {
  width: 33%;
  float: left;
}
#yahtzee #gameLegend dl {
  padding: 10px;
}
#yahtzee #gameLegend dl h2 {
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 10px;
  margin: 0 0 10px;
}
#yahtzee #gameLegend dl dt {
  font-weight: bold;
}
#yahtzee #gameLegend dl dd {
  padding-left: 10px;
  margin-bottom: 5px;
}
</style>
