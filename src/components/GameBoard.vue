<template>
  <div id="gameBoard">
    <div id="yahtzee">
      <aside id="gameLegend">
        <dl>
          <h2>Förklaringar</h2>
          <dt v-if="legendOnes">Ettor</dt>
          <dd v-if="legendOnes">max poäng 5</dd>
          <dt v-if="legendTwos">Tvåor</dt>
          <dd v-if="legendTwos">max poäng 10</dd>
          <dt v-if="legendThrees">Treor</dt>
          <dd v-if="legendThrees">max poäng 15</dd>
          <dt v-if="legendFours">Fyror</dt>
          <dd v-if="legendFours">max poäng 20</dd>
          <dt v-if="legendFives">Femmor</dt>
          <dd v-if="legendFives">max poäng 25</dd>
          <dt v-if="legendSixes">Sexor</dt>
          <dd v-if="legendSixes">max poäng 30</dd>
          <dt v-if="legendBonus">Bonus</dt>
          <dd
            v-if="legendBonus"
          >För att få bonus måste spelaren få minst 63 poäng i de sex översta villkoren (detta motsvarar i genomsnitt tre av varje villkor). Bonus ger alltid 50 poäng oavsett poängsumman</dd>
          <dt v-if="legendPair">Ett par/Två par</dt>
          <dd
            v-if="legendPair"
          >Summan av paret/paren räknas. OBS! Kastet 4-4-4-4-6 räknas inte som två par. Båda paren måste vara olika.</dd>
          <dt v-if="legendOfaKind">Tretal/Fyrtal</dt>
          <dd
            v-if="legendOfaKind"
          >Endast summan av lika tärningar räknas, t.ex.tre 4:or (=12 poäng) eller fyra 2:or (=8 poäng).</dd>
          <dt v-if="legendSmallStraight">Liten stege</dt>
          <dd
            v-if="legendSmallStraight"
          >För att få liten stege (stege ibland kallat straight) skall tärningarna visa siffrorna 1, 2, 3, 4 och 5. Detta ger 15 poäng.</dd>
          <dt v-if="legendLargeStraight">Stor stege</dt>
          <dd
            v-if="legendLargeStraight"
          >För att få stor stege skall tärningarna visa siffrorna 2, 3, 4, 5 och 6. Detta ger 20 poäng.</dd>
          <dt v-if="legendFullHouse">Kåk</dt>
          <dd
            v-if="legendFullHouse"
          >För att få kåk skall tre av tärningarna visa ett och samma tal, samtidigt som övriga två ska visa ett och samma tal. Exempelvis 6, 6, 6, 4 och 4.</dd>
          <dt v-if="legendChance">Chans</dt>
          <dd
            v-if="legendChance"
          >Chans innebär att man ska få så högt tal som möjligt när samtliga tärningsprickar räknas samman.</dd>
          <dt v-if="legendYahtzee">Yatzy</dt>
          <dd
            v-if="legendYahtzee"
          >För att få yatzy skall alla tärningarna visa lika siffror. Yatzy ger alltid 50 poäng oavsett vilken siffra som tärningarna visar.</dd>
        </dl>
      </aside>
      <div id="playerArea">
        <div class="playerBoard">
          <div class="playerHead">
            <h2>
              <div :key="player.id" v-for="player in players">
                <Player :player="player"/>
              </div>
            </h2>
            <div>Runda: {{ round }}</div>
            <div class="score">
              <span>{{ score }}</span> poäng
            </div>
            <div class="clear"></div>
          </div>
          <div class="playerCard">
            <fieldset>
              <legend>Övre Sektion</legend>
              <label
                for="ones"
                @mouseenter="legendOnes = !legendOnes"
                @mouseleave="legendOnes = !legendOnes"
              >Ettor</label>
              <input
                type="number"
                id="ones"
                name="ones"
                readonly="true"
                v-model="valueOnes"
                @mouseenter="legendOnes = !legendOnes"
                @mouseleave="legendOnes = !legendOnes"
                @click="topSection(1)"
              >
              <label
                for="twos"
                @mouseenter="legendTwos = !legendTwos"
                @mouseleave="legendTwos = !legendTwos"
              >Tvåor</label>
              <input
                type="number"
                id="twos"
                name="twos"
                readonly="true"
                v-model="valueTwos"
                @mouseenter="legendTwos = !legendTwos"
                @mouseleave="legendTwos = !legendTwos"
                @click="topSection(2)"
              >
              <label
                for="threes"
                @mouseenter="legendThrees = !legendThrees"
                @mouseleave="legendThrees = !legendThrees"
              >Treor</label>
              <input
                type="number"
                id="threes"
                name="threes"
                readonly="true"
                v-model="valueThrees"
                @mouseenter="legendThrees = !legendThrees"
                @mouseleave="legendThrees = !legendThrees"
                @click="topSection(3)"
              >
              <label
                for="fours"
                @mouseenter="legendFours = !legendFours"
                @mouseleave="legendFours = !legendFours"
              >Fyror</label>
              <input
                type="number"
                id="fours"
                name="fours"
                readonly="true"
                v-model="valueFours"
                @mouseenter="legendFours = !legendFours"
                @mouseleave="legendFours = !legendFours"
                @click="topSection(4)"
              >
              <label
                for="fives"
                @mouseenter="legendFives = !legendFives"
                @mouseleave="legendFives = !legendFives"
              >Femmor</label>
              <input
                type="number"
                id="fives"
                name="fives"
                readonly="true"
                v-model="valueFives"
                @mouseenter="legendFives = !legendFives"
                @mouseleave="legendFives = !legendFives"
                @click="topSection(5)"
              >
              <label
                for="sixes"
                @mouseenter="legendSixes = !legendSixes"
                @mouseleave="legendSixes = !legendSixes"
              >Sexor</label>
              <input
                type="number"
                id="sixes"
                name="sixes"
                readonly="true"
                v-model="valueSixes"
                @mouseenter="legendSixes = !legendSixes"
                @mouseleave="legendSixes = !legendSixes"
                @click="topSection(6)"
              >
              <label
                for="bonus"
                @mouseenter="legendBonus = !legendBonus"
                @mouseleave="legendBonus = !legendBonus"
              >Bonus</label>
              <input
                type="number"
                id="bonus"
                name="bonus"
                readonly="true"
                v-model="valueBonus"
                @mouseenter="legendBonus = !legendBonus"
                @mouseleave="legendBonus = !legendBonus"
              >
            </fieldset>

            <fieldset>
              <legend>Nedre Sektion</legend>
              <label
                for="one-pair"
                @mouseenter="legendPair = !legendPair"
                @mouseleave="legendPair = !legendPair"
              >Ett par</label>
              <input
                type="number"
                id="one-pair"
                name="one-pair"
                readonly="true"
                v-model="valueOnePair"
                @mouseenter="legendPair = !legendPair"
                @mouseleave="legendPair = !legendPair"
                @click="bottomSection(1)"
              >
              <label
                for="two-pair"
                @mouseenter="legendPair = !legendPair"
                @mouseleave="legendPair = !legendPair"
              >Två par</label>
              <input
                type="number"
                id="two-pair"
                name="two-pair"
                readonly="true"
                v-model="valueTwoPair"
                @mouseenter="legendPair = !legendPair"
                @mouseleave="legendPair = !legendPair"
                @click="bottomSection(2)"
              >
              <label
                for="three-of-a-kind"
                @mouseenter="legendOfaKind = !legendOfaKind"
                @mouseleave="legendOfaKind = !legendOfaKind"
              >Tretal</label>
              <input
                type="number"
                id="three-of-a-kind"
                name="three-of-a-kind"
                readonly="true"
                v-model="valueThreeOfaKind"
                @mouseenter="legendOfaKind = !legendOfaKind"
                @mouseleave="legendOfaKind = !legendOfaKind"
                @click="bottomSection(3)"
              >
              <label
                for="four-of-a-kind"
                @mouseenter="legendOfaKind = !legendOfaKind"
                @mouseleave="legendOfaKind = !legendOfaKind"
              >Fyrtal</label>
              <input
                type="number"
                id="four-of-a-kind"
                name="four-of-a-kind"
                readonly="true"
                v-model="valueFourOfaKind"
                @mouseenter="legendOfaKind = !legendOfaKind"
                @mouseleave="legendOfaKind = !legendOfaKind"
                @click="bottomSection(4)"
              >
              <label
                for="smallStraight"
                @mouseenter="legendSmallStraight = !legendSmallStraight"
                @mouseleave="legendSmallStraight = !legendSmallStraight"
              >Liten stege</label>
              <input
                type="number"
                id="smallStraight"
                name="smallStraight"
                readonly="true"
                v-model="valueSmallStraight"
                @mouseenter="legendSmallStraight = !legendSmallStraight"
                @mouseleave="legendSmallStraight = !legendSmallStraight"
                @click="bottomSection(5)"
              >
              <label
                for="largeStraight"
                @mouseenter="legendLargeStraight = !legendLargeStraight"
                @mouseleave="legendLargeStraight = !legendLargeStraight"
              >Stor stege</label>
              <input
                type="number"
                id="largeStraight"
                name="largeStraight"
                readonly="true"
                v-model="valueLargeStraight"
                @mouseenter="legendLargeStraight = !legendLargeStraight"
                @mouseleave="legendLargeStraight = !legendLargeStraight"
                @click="bottomSection(6)"
              >
              <label
                for="fullHouse"
                @mouseenter="legendFullHouse = !legendFullHouse"
                @mouseleave="legendFullHouse = !legendFullHouse"
              >kåk</label>
              <input
                type="number"
                id="fullHouse"
                name="fullHouse"
                readonly="true"
                v-model="valueFullHouse"
                @mouseenter="legendFullHouse = !legendFullHouse"
                @mouseleave="legendFullHouse = !legendFullHouse"
                @click="bottomSection(7)"
              >
              <label
                for="chance"
                @mouseenter="legendChance = !legendChance"
                @mouseleave="legendChance = !legendChance"
              >Chans</label>
              <input
                type="number"
                id="chance"
                name="chance"
                readonly="true"
                v-model="valueChance"
                @mouseenter="legendChance = !legendChance"
                @mouseleave="legendChance = !legendChance"
                @click="bottomSection(8)"
              >
              <label
                for="yahtzee-input"
                @mouseenter="legendYahtzee = !legendYahtzee"
                @mouseleave="legendYahtzee = !legendYahtzee"
              >Yatzy</label>
              <input
                type="number"
                id="yahtzee-input"
                name="yahtzee-input"
                readonly="true"
                v-model="valueYahtzee"
                @mouseenter="legendYahtzee = !legendYahtzee"
                @mouseleave="legendYahtzee = !legendYahtzee"
                @click="bottomSection(9)"
              >
            </fieldset>
          </div>
          <div class="playerDice">
            <div class="die die1" :class="classDice1" @click="selectDice(0)">
              <span class="dot"></span>
            </div>
            <div class="die die2" :class="classDice2" @click="selectDice(1)">
              <span class="dot"></span>
            </div>
            <div class="die die3" :class="classDice3" @click="selectDice(2)">
              <span class="dot"></span>
            </div>
            <div class="die die4" :class="classDice4" @click="selectDice(3)">
              <span class="dot"></span>
            </div>
            <div class="die die5" :class="classDice5" @click="selectDice(4)">
              <span class="dot"></span>
            </div>
            <div>
              Kast kvar: {{ rollsLeft }}
              <button
                class="rollDice"
                @click="throwDice"
                v-if="rollsLeft>0"
              >Kasta</button>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import Player from "./Player.vue";

export default {
  name: "GameBoard",
  components: {
    Player
  },
  props: ["players"],
  data() {
    return {
      legendOnes: false,
      valueOnes: 0,
      legendTwos: false,
      valueTwos: 0,
      legendThrees: false,
      valueThrees: 0,
      legendFours: false,
      valueFours: 0,
      legendFives: false,
      valueFives: 0,
      legendSixes: false,
      valueSixes: 0,
      legendBonus: false,
      valueBonus: 0,
      legendPair: false,
      valueOnePair: 0,
      valueTwoPair: 0,
      legendOfaKind: false,
      valueThreeOfaKind: 0,
      valueFourOfaKind: 0,
      legendSmallStraight: false,
      valueSmallStraight: 0,
      legendLargeStraight: false,
      valueLargeStraight: 0,
      legendFullHouse: false,
      valueFullHouse: 0,
      legendChance: false,
      valueChance: 0,
      legendYahtzee: false,
      valueYahtzee: 0,
      dices: [
        {
          number: 0,
          saved: false
        },
        {
          number: 0,
          saved: false
        },
        {
          number: 0,
          saved: false
        },
        {
          number: 0,
          saved: false
        },
        {
          number: 0,
          saved: false
        }
      ],
      rollsLeft: 3,
      round: 1,
      score: 0,
      valueTopSection: 0,
      valueBottomSection: 0
    };
  },
  computed: {
    classDice1: function() {
      return {
        hold: this.dices[0].saved,
        roll1: this.dices[0].number == 1,
        roll2: this.dices[0].number == 2,
        roll3: this.dices[0].number == 3,
        roll4: this.dices[0].number == 4,
        roll5: this.dices[0].number == 5,
        roll6: this.dices[0].number == 6
      };
    },
    classDice2: function() {
      return {
        hold: this.dices[1].saved,
        roll1: this.dices[1].number == 1,
        roll2: this.dices[1].number == 2,
        roll3: this.dices[1].number == 3,
        roll4: this.dices[1].number == 4,
        roll5: this.dices[1].number == 5,
        roll6: this.dices[1].number == 6
      };
    },
    classDice3: function() {
      return {
        hold: this.dices[2].saved,
        roll1: this.dices[2].number == 1,
        roll2: this.dices[2].number == 2,
        roll3: this.dices[2].number == 3,
        roll4: this.dices[2].number == 4,
        roll5: this.dices[2].number == 5,
        roll6: this.dices[2].number == 6
      };
    },
    classDice4: function() {
      return {
        hold: this.dices[3].saved,
        roll1: this.dices[3].number == 1,
        roll2: this.dices[3].number == 2,
        roll3: this.dices[3].number == 3,
        roll4: this.dices[3].number == 4,
        roll5: this.dices[3].number == 5,
        roll6: this.dices[3].number == 6
      };
    },
    classDice5: function() {
      return {
        hold: this.dices[4].saved,
        roll1: this.dices[4].number == 1,
        roll2: this.dices[4].number == 2,
        roll3: this.dices[4].number == 3,
        roll4: this.dices[4].number == 4,
        roll5: this.dices[4].number == 5,
        roll6: this.dices[4].number == 6
      };
    }
  },
  methods: {
    selectDice: function(dice) {
      if (this.rollsLeft < 3) {
        this.dices[dice].saved = !this.dices[dice].saved;
      }
    },
    resetSelectedDices: function() {
      for (let i = 0; i < this.dices.length; i++) {
        this.dices[i].saved = false;
      }
    },
    throwDice: function() {
      let min = 1;
      let max = 7;
      for (let i = 0; i < this.dices.length; i++) {
        if (this.dices[i].saved === false) {
          this.dices[i].number =
            Math.floor(Math.random() * (+max - +min)) + +min;
        }
      }
      this.rollsLeft--;
    },
    checkDices: function(value) {
      let containsNumber = false;
      for (let i = 0; i < this.dices.length; i++) {
        if (this.dices[i].number === value) {
          containsNumber = true;
        }
      }
      return containsNumber;
    },
    checkTopValues: function(value) {
      let isValueZero = false;
      switch (value) {
        case 1:
          if (this.valueOnes === 0) {
            isValueZero = true;
          }
          break;

        case 2:
          if (this.valueTwos === 0) {
            isValueZero = true;
          }
          break;

        case 3:
          if (this.valueThrees === 0) {
            isValueZero = true;
          }
          break;

        case 4:
          if (this.valueFours === 0) {
            isValueZero = true;
          }
          break;

        case 5:
          if (this.valueFives === 0) {
            isValueZero = true;
          }
          break;

        case 6:
          if (this.valueSixes === 0) {
            isValueZero = true;
          }
          break;

        default:
          console.log("checkTopValues - Switch - Something went wrong!");
          break;
      }
      return isValueZero;
    },
    checkBottomValues: function(box) {
      let isValueZero = false;
      switch (box) {
        case 1: // one pair
          if (this.valueOnePair === 0) {
            isValueZero = true;
          }
          break;

        case 2: // two pair
          if (this.valueTwoPair === 0) {
            isValueZero = true;
          }
          break;

        case 3: // three of a kind
          if (this.valueThreeOfaKind === 0) {
            isValueZero = true;
          }
          break;

        case 4: // four of a kind
          if (this.valueFourOfaKind === 0) {
            isValueZero = true;
          }
          break;

        case 5: // small straight
          if (this.valueSmallStraight === 0) {
            isValueZero = true;
          }
          break;

        case 6: // large straight
          if (this.valueLargeStraight === 0) {
            isValueZero = true;
          }
          break;

        case 7: // fullhouse
          if (this.valueFullHouse === 0) {
            isValueZero = true;
          }
          break;

        case 8: // chance
          if (this.valueChance === 0) {
            isValueZero = true;
          }
          break;

        case 9: // yahtzee
          if (this.valueYahtzee === 0) {
            isValueZero = true;
          }
          break;

        default:
          console.log("bottomSection - switch - Something went wrong!");
          break;
      }
      return isValueZero;
    },
    calculateBonus: function() {
      let onesToSixes =
        this.valueOnes +
        this.valueTwos +
        this.valueThrees +
        this.valueFours +
        this.valueFives +
        this.valueSixes;
      if (onesToSixes >= 63) {
        this.valueBonus = 50;
      }
    },
    calculateTopSection: function() {
      this.valueTopSection =
        this.valueOnes +
        this.valueTwos +
        this.valueThrees +
        this.valueFours +
        this.valueFives +
        this.valueSixes +
        this.valueBonus;
    },
    calculateBottomSection: function() {
      this.valueBottomSection =
        this.valueOnePair +
        this.valueTwoPair +
        this.valueThreeOfaKind +
        this.valueFourOfaKind +
        this.valueSmallStraight +
        this.valueLargeStraight +
        this.valueFullHouse +
        this.valueChance +
        this.valueYahtzee;
    },
    calculateTotalScore: function() {
      this.calculateTopSection();
      this.calculateBottomSection();
      this.score = this.valueTopSection + this.valueBottomSection;
    },
    topSection: function(value) {
      if (
        this.rollsLeft < 3 && // If player have hit throw once
        this.checkTopValues(value) && // If the clicked box value is zero
        this.checkDices(value) // If any dices is the same number as the box clicked
      ) {
        let sum = 0;
        for (let i = 0; i < 5; i++) {
          if (this.dices[i].number === value) {
            sum += this.dices[i].number;
          }
        }
        switch (value) {
          case 1:
            this.rollsLeft = 3;
            this.round++;
            this.valueOnes = sum;
            break;

          case 2:
            this.rollsLeft = 3;
            this.round++;
            this.valueTwos = sum;
            break;

          case 3:
            this.rollsLeft = 3;
            this.round++;
            this.valueThrees = sum;
            break;

          case 4:
            this.rollsLeft = 3;
            this.round++;
            this.valueFours = sum;
            break;

          case 5:
            this.rollsLeft = 3;
            this.round++;
            this.valueFives = sum;
            break;

          case 6:
            this.rollsLeft = 3;
            this.round++;
            this.valueSixes = sum;
            break;

          default:
            console.log("topSection - Switch - Something went wrong!");
            break;
        }
        this.calculateBonus();
        this.resetSelectedDices();
        this.calculateTotalScore();
      }
    },
    bottomSection: function(box) {
      let correctCombo = false,
        containsOne = false,
        containsTwo = false,
        containsThree = false,
        containsFour = false,
        containsFive = false,
        containsSix = false,
        sum = 0,
        correctMatch = 0,
        matchingNumbers = [];
      if (this.rollsLeft < 3 && this.checkBottomValues(box)) {
        // if player have hit throw once and if box value is 0
        switch (box) {
          case 1: // one pair
            for (let i = 1; i <= 6; i++) {
              correctMatch = 0;
              for (let j = 0; j < this.dices.length; j++) {
                if (this.dices[j].number == i) {
                  correctMatch++;
                }
                if (correctMatch > 1 && !matchingNumbers.includes(i)) {
                  matchingNumbers.push(i);
                }
              }
            }
            if (matchingNumbers.length > 0) {
              matchingNumbers.sort(function(a, b) {
                return b - a;
              });
              this.valueOnePair = matchingNumbers[0] * 2;
              correctCombo = true;
            }
            break;

          case 2: // two pair
            for (let i = 1; i <= 6; i++) {
              correctMatch = 0;
              for (let j = 0; j < this.dices.length; j++) {
                if (this.dices[j].number == i) {
                  correctMatch++;
                }
                if (correctMatch > 1 && !matchingNumbers.includes(i)) {
                  matchingNumbers.push(i);
                }
              }
            }
            if (matchingNumbers.length > 1) {
              matchingNumbers.sort(function(a, b) {
                return b - a;
              });
              this.valueTwoPair =
                matchingNumbers[0] +
                matchingNumbers[0] +
                matchingNumbers[1] +
                matchingNumbers[1];
              correctCombo = true;
            }
            break;

          case 3: // three of a kind
            for (let i = 1; i <= 6; i++) {
              correctMatch = 0;
              for (let j = 0; j < this.dices.length; j++) {
                if (this.dices[j].number == i) {
                  correctMatch++;
                }
                if (correctMatch > 2 && !matchingNumbers.includes(i)) {
                  matchingNumbers.push(i);
                }
              }
            }
            if (matchingNumbers.length > 0) {
              matchingNumbers.sort(function(a, b) {
                return b - a;
              });
              this.valueThreeOfaKind = matchingNumbers[0] * 3;
              correctCombo = true;
            }
            break;

          case 4: // four of a kind
            for (let i = 1; i <= 6; i++) {
              correctMatch = 0;
              for (let j = 0; j < this.dices.length; j++) {
                if (this.dices[j].number == i) {
                  correctMatch++;
                }
                if (correctMatch > 3 && !matchingNumbers.includes(i)) {
                  matchingNumbers.push(i);
                }
              }
            }
            if (matchingNumbers.length > 0) {
              matchingNumbers.sort(function(a, b) {
                return b - a;
              });
              this.valueFourOfaKind = matchingNumbers[0] * 4;
              correctCombo = true;
            }
            break;

          case 5: // small straight
            for (let i = 0; i < this.dices.length; i++) {
              if (this.dices[i].number == 1) {
                containsOne = true;
              } else if (this.dices[i].number == 2) {
                containsTwo = true;
              } else if (this.dices[i].number == 3) {
                containsThree = true;
              } else if (this.dices[i].number == 4) {
                containsFour = true;
              } else if (this.dices[i].number == 5) {
                containsFive = true;
              }
            }
            if (
              containsOne &&
              containsTwo &&
              containsThree &&
              containsFour &&
              containsFive
            ) {
              correctCombo = true;
              this.valueSmallStraight = 15;
            }
            break;

          case 6: // large straight
            for (let i = 0; i < this.dices.length; i++) {
              if (this.dices[i].number == 2) {
                containsTwo = true;
              } else if (this.dices[i].number == 3) {
                containsThree = true;
              } else if (this.dices[i].number == 4) {
                containsFour = true;
              } else if (this.dices[i].number == 5) {
                containsFive = true;
              } else if (this.dices[i].number == 6) {
                containsSix = true;
              }
            }
            if (
              containsTwo &&
              containsThree &&
              containsFour &&
              containsFive &&
              containsSix
            ) {
              correctCombo = true;
              this.valueLargeStraight = 20;
            }
            break;

          case 7: // fullhouse
            for (let i = 1; i <= 6; i++) {
              correctMatch = 0;
              for (let j = 0; j < this.dices.length; j++) {
                if (this.dices[j].number == i) {
                  correctMatch++;
                }
                if (
                  j == this.dices.length - 1 &&
                  !matchingNumbers.includes(correctMatch) &&
                  correctMatch != 0
                ) {
                  matchingNumbers.push(correctMatch);
                }
              }
            }
            if (
              matchingNumbers.length > 1 &&
              matchingNumbers[0] + matchingNumbers[1] == 5
            ) {
              for (let i = 0; i < this.dices.length; i++) {
                sum += this.dices[i].number;
              }
              this.valueFullHouse = sum;
              correctCombo = true;
            }
            break;

          case 8: // chance
            for (let i = 0; i < this.dices.length; i++) {
              sum += this.dices[i].number;
            }
            correctCombo = true;
            this.valueChance = sum;
            break;

          case 9: // yahtzee
            for (let i = 1; i < this.dices.length; i++) {
              if (this.dices[0].number == this.dices[i].number) {
                correctMatch++;
              }
            }
            if (correctMatch == 4) {
              correctCombo = true;
              this.valueYahtzee = 50;
            }
            break;

          default:
            console.log("bottomSection - switch - Something went wrong!");
            break;
        }
        if (correctCombo) {
          this.rollsLeft = 3;
          this.round++;
          this.resetSelectedDices();
          this.calculateTotalScore();
        }
      }
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
  font-weight: bold;
  font-size: 1.5em;
}
#yahtzee .playerBoard .playerHead .score {
  display: block;
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
  display: grid;
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
#yahtzee .playerBoard .playerDice .die.hold {
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
