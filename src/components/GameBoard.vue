<template>
  <div id="gameBoard">
    <div id="yahtzee">
      <div id="gameLegend">
        <dl>
          <h2>Förklaringar</h2>
          <dt>Ettor</dt>
          <dd>max poäng 5</dd>
          <dt>Tvåor</dt>
          <dd>max poäng 10</dd>
          <dt>Treor</dt>
          <dd>max poäng 15</dd>
          <dt>Fyror</dt>
          <dd>max poäng 20</dd>
          <dt>Femmor</dt>
          <dd>max poäng 25</dd>
          <dt>Sexor</dt>
          <dd>max poäng 30</dd>
          <dt v-if="legendBonus">Bonus</dt>
          <dd
            v-if="legendBonus"
          >För att få bonus måste spelaren få minst 63 poäng i de sex översta villkoren (detta motsvarar i genomsnitt tre av varje villkor). Bonus ger alltid 50 poäng oavsett poängsumman</dd>
          <dt>Ett par/Två par</dt>
          <dd>Summan av paret/paren räknas. OBS! Kastet 4-4-4-4-6 räknas inte som två par. Båda paren måste vara olika.</dd>
          <dt>Tretal/Fyrtal</dt>
          <dd>Endast summan av lika tärningar räknas, t.ex.tre 4:or (=12 poäng) eller fyra 2:or (=8 poäng).</dd>
          <dt>Liten stege</dt>
          <dd>För att få liten stege (stege ibland kallat straight) skall tärningarna visa siffrorna 1, 2, 3, 4 och 5. Detta ger 15 poäng.</dd>
          <dt>Stor stege</dt>
          <dd>För att få stor stege skall tärningarna visa siffrorna 2, 3, 4, 5 och 6. Detta ger 20 poäng.</dd>
          <dt>Kåk</dt>
          <dd>För att få kåk skall tre av tärningarna visa ett och samma tal, samtidigt som övriga två ska visa ett och samma tal. Exempelvis 6, 6, 6, 4 och 4.</dd>
          <dt>Chans</dt>
          <dd>Chans innebär att man ska få så högt tal som möjligt när samtliga tärningsprickar räknas samman.</dd>
          <dt>Yatzy</dt>
          <dd>För att få yatzy skall alla tärningarna visa lika siffror. Yatzy ger alltid 50 poäng oavsett vilken siffra som tärningarna visar.</dd>
        </dl>
      </div>
      <div id="playerArea">
        <div class="playerBoard player1">
          <div class="playerHead">
            <h2>
              <div :key="player.id" v-for="player in players">
                <Player :player="player"/>
              </div>
            </h2>
            <div class="score">
              <span>0</span> poäng
            </div>
            <div class="clear"></div>
          </div>
          <div class="playerCard">
            <fieldset>
              <legend>Övre Sektion</legend>
              <label for="ones">Ettor</label>
              <input type="number" id="ones" name="ones">
              <label for="twos">Tvåor</label>
              <input type="number" id="twos" name="twos">
              <label for="threes">Treor</label>
              <input type="number" id="threes" name="threes">
              <label for="fours">Fyror</label>
              <input type="number" id="fours" name="fours">
              <label for="fives">Femmor</label>
              <input type="number" id="fives" name="fives">
              <label for="sixes">Sexor</label>
              <input type="number" id="sixes" name="sixes">
              <!-- Show when mouse is over & hide when it is'nt -->
              <label for="bonus" @mouseenter="showBonus" @mouseleave="hideBonus">Bonus</label>
              <input
                type="number"
                id="bonus"
                name="bonus"
                @mouseenter="showBonus"
                @mouseleave="hideBonus"
              >
            </fieldset>

            <fieldset>
              <legend>Nedre Sektion</legend>
              <label for="one-pair">Ett par</label>
              <input type="number" id="one-pair" name="one-pair">
              <label for="two-pair">Två par</label>
              <input type="number" id="two-pair" name="two-pair">
              <label for="three-of-a-kind">Tretal</label>
              <input type="number" id="three-of-a-kind" name="three-of-a-kind">
              <label for="four-of-a-kind">Fyrtal</label>
              <input type="number" id="four-of-a-kind" name="four-of-a-kind">
              <label for="smallStraight">Liten stege</label>
              <input type="number" id="smallStraight" name="smallStraight">
              <label for="largeStraight">Stor stege</label>
              <input type="number" id="largeStraight" name="largeStraight">
              <label for="fullHouse">kåk</label>
              <input type="number" id="fullHouse" name="fullHouse">
              <label for="chance">Chans</label>
              <input type="number" id="chance" name="chance">
              <label for="yahtzee-input">Yatzy</label>
              <input type="number" id="yahtzee-input" name="yahtzee-input">
            </fieldset>
          </div>

          <div class="playerDice rollsLeft3">
            <div class="die die1">
              <span class="dot"></span>
            </div>
            <div class="die die2">
              <span class="dot"></span>
            </div>
            <div class="die die3">
              <span class="dot"></span>
            </div>
            <div class="die die4">
              <span class="dot"></span>
            </div>
            <div class="die die5">
              <span class="dot"></span>
            </div>
            <button class="rollDice">Kasta</button>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
// import Name from "place/name.vue";
import Player from "./Player.vue";

export default {
  name: "GameBoard",
  components: {
    Player
  },
  props: ["players"],
  data: {
    rollsLeft: 3
  },
  data() {
    return {
      legendBonus: false
    };
  },
  methods: {
    showBonus: function() {
      this.legendBonus = true;
    },
    hideBonus: function() {
      this.legendBonus = false;
    }
  }
};
</script>

<style>
.clear {
  clear: both;
}

#yahtzee {
  border: 1px solid darken(#ccc, 10%);
  margin: 10px;
}

#yahtzee #playerArea {
  width: 67%;
  float: left;
}

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

#yahtzee .playerBoard {
  border: 1px solid #c3c3c3;
  float: left;
  padding: 10px;
}

#yahtzee .playerBoard .playerHead {
  padding: 10px;
  border-bottom: 1px solid #c3c3c3;
}
#yahtzee .playerBoard .playerHead h2 {
  display: block;
  float: left;
  font-weight: bold;
  font-size: 1.5em;
}
#yahtzee .playerBoard .playerHead .score {
  display: block;
  float: right;
}
#yahtzee .playerBoard .playerHead .score span {
  font-weight: bold;
  font-size: 1.5em;
}

#yahtzee .playerBoard .playerCard {
  padding: 5px;
}
#yahtzee .playerBoard .playerCard fieldset {
  width: 120px;
  border: 1px solid #c3c3c3;
  padding: 5px;
  margin-right: 10px;
  float: left;
}
#yahtzee .playerBoard .playerCard fieldset label {
  width: 70px;
  display: inline-block;
}
#yahtzee .playerBoard .playerCard fieldset input[type="number"] {
  width: 40px;
}

#yahtzee .playerBoard .playerDice .die {
  float: left;
  border: 1px solid #c3c3c3;
}
#yahtzee .playerBoard .playerDice .die.roll1 .dot {
  box-shadow: 0 0.2em 0 #fff;
}
#yahtzee .playerBoard .playerDice .die.roll2 .dot {
  background: transparent;
  box-shadow: -2.3em -2.3em 0 #345, 2.3em 2.3em 0 #345, -2.3em -2.3em 0 #fff,
    2.3em 2.4em 0 #fff;
}
#yahtzee .playerBoard .playerDice .die.roll3 .dot {
  box-shadow: -2.3em -2.3em 0 #345, 2.3em 2.3em 0 #345, -2.3em -2.3em 0 #fff,
    2.3em 2.4em 0 #fff, 0 0.2em 0 #fff;
}
#yahtzee .playerBoard .playerDice .die.roll4 .dot {
  background: transparent;
  box-shadow: -2.3em -2.3em 0 #345, 2.3em 2.3em 0 #345, -2.3em 2.3em 0 #345,
    2.3em -2.3em 0 #345, -2.3em -2.3em 0 #fff, 2.3em 2.4em 0 #fff,
    -2.3em 2.4em 0 #fff, 2.3em -2.3em 0 #fff;
}
#yahtzee .playerBoard .playerDice .die.roll5 .dot {
  box-shadow: -2.3em -2.3em 0 #345, 2.3em 2.3em 0 #345, -2.3em 2.3em 0 #345,
    2.3em -2.3em 0 #345, -2.3em -2.2em 0 #fff, 2.3em -2.2em 0 #fff,
    2.3em 2.4em 0 #fff, -2.3em 2.4em 0 #fff, 0 0.2em 0 #fff;
}
#yahtzee .playerBoard .playerDice .die.roll6 .dot {
  background: transparent;
  box-shadow: -2.3em -2.3em 0 #345, -2.3em 0 0 #345, -2.3em 2.3em 0 #345,
    2.3em -2.3em 0 #345, 2.3em 0 0 #345, 2.3em 2.3em 0 #345,
    -2.3em -2.1em 0 #fff, -2.3em 0.2em 0 #fff, -2.3em 2.4em 0 #fff,
    2.3em 2.4em 0 #fff, 2.3em 0.2em 0 #fff, 2.3em -2.1em 0 #fff;
}
#yahtzee .playerBoard .playerDice .die {
  border-top: 1px solid #f1f1f1;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  margin: 10px;
  font-size: 6px;
  display: inline-block;
  box-shadow: 0px 5px 0 #ccc, 0 6px 3px #444, 0 10px 5px #999;
  background-image: linear-gradient(top, #fefefe, #f1f1f1 80%);
}
#yahtzee .playerBoard .playerDice .die .hold {
  box-shadow: 0px 5px 0 #ccc, 0 6px 3px #444, 0 10px 5px #999;
  background-image: linear-gradient(top, #fefefe, #ccc 80%);
  width: 46px;
  height: 46px;
  margin: 12px;
}
#yahtzee .playerBoard .playerDice .dot {
  width: 20%;
  height: 20%;
  left: 50%;
  top: 50%;
  margin: -10%;
  background: #345;
  border-radius: 50%;
  display: block;
  position: absolute;
}
</style>
