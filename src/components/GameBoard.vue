<template>
  <div id="gameBoard">
    <div id="yahtzee">
      <aside id="gameLegend">
        <GameLegend/>
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
              <label for="ones" @mouseenter="changeLegendOnes" @mouseleave="changeLegendOnes">Ettor</label>
              <input
                type="number"
                id="ones"
                name="ones"
                readonly="true"
                v-model="valueOnes"
                @mouseenter="changeLegendOnes"
                @mouseleave="changeLegendOnes"
                @click="topSection(1)"
              >
              <label for="twos" @mouseenter="changeLegendTwos" @mouseleave="changeLegendTwos">Tvåor</label>
              <input
                type="number"
                id="twos"
                name="twos"
                readonly="true"
                v-model="valueTwos"
                @mouseenter="changeLegendTwos"
                @mouseleave="changeLegendTwos"
                @click="topSection(2)"
              >
              <label
                for="threes"
                @mouseenter="changeLegendThrees"
                @mouseleave="changeLegendThrees"
              >Treor</label>
              <input
                type="number"
                id="threes"
                name="threes"
                readonly="true"
                v-model="valueThrees"
                @mouseenter="changeLegendThrees"
                @mouseleave="changeLegendThrees"
                @click="topSection(3)"
              >
              <label
                for="fours"
                @mouseenter="changeLegendFours"
                @mouseleave="changeLegendFours"
              >Fyror</label>
              <input
                type="number"
                id="fours"
                name="fours"
                readonly="true"
                v-model="valueFours"
                @mouseenter="changeLegendFours"
                @mouseleave="changeLegendFours"
                @click="topSection(4)"
              >
              <label
                for="fives"
                @mouseenter="changeLegendFives"
                @mouseleave="changeLegendFives"
              >Femmor</label>
              <input
                type="number"
                id="fives"
                name="fives"
                readonly="true"
                v-model="valueFives"
                @mouseenter="changeLegendFives"
                @mouseleave="changeLegendFives"
                @click="topSection(5)"
              >
              <label
                for="sixes"
                @mouseenter="changeLegendSixes"
                @mouseleave="changeLegendSixes"
              >Sexor</label>
              <input
                type="number"
                id="sixes"
                name="sixes"
                readonly="true"
                v-model="valueSixes"
                @mouseenter="changeLegendSixes"
                @mouseleave="changeLegendSixes"
                @click="topSection(6)"
              >
              <label
                for="bonus"
                @mouseenter="changeLegendBonus"
                @mouseleave="changeLegendBonus"
              >Bonus</label>
              <input
                type="number"
                id="bonus"
                name="bonus"
                readonly="true"
                v-model="valueBonus"
                @mouseenter="changeLegendBonus"
                @mouseleave="changeLegendBonus"
              >
            </fieldset>

            <fieldset>
              <legend>Nedre Sektion</legend>
              <label
                for="one-pair"
                @mouseenter="changeLegendPair"
                @mouseleave="changeLegendPair"
              >Ett par</label>
              <input
                type="number"
                id="one-pair"
                name="one-pair"
                readonly="true"
                v-model="valueOnePair"
                @mouseenter="changeLegendPair"
                @mouseleave="changeLegendPair"
                @click="bottomSection(1)"
              >
              <label
                for="two-pair"
                @mouseenter="changeLegendPair"
                @mouseleave="changeLegendPair"
              >Två par</label>
              <input
                type="number"
                id="two-pair"
                name="two-pair"
                readonly="true"
                v-model="valueTwoPair"
                @mouseenter="changeLegendPair"
                @mouseleave="changeLegendPair"
                @click="bottomSection(2)"
              >
              <label
                for="three-of-a-kind"
                @mouseenter="changeLegendOfaKind"
                @mouseleave="changeLegendOfaKind"
              >Tretal</label>
              <input
                type="number"
                id="three-of-a-kind"
                name="three-of-a-kind"
                readonly="true"
                v-model="valueThreeOfaKind"
                @mouseenter="changeLegendOfaKind"
                @mouseleave="changeLegendOfaKind"
                @click="bottomSection(3)"
              >
              <label
                for="four-of-a-kind"
                @mouseenter="changeLegendOfaKind"
                @mouseleave="changeLegendOfaKind"
              >Fyrtal</label>
              <input
                type="number"
                id="four-of-a-kind"
                name="four-of-a-kind"
                readonly="true"
                v-model="valueFourOfaKind"
                @mouseenter="changeLegendOfaKind"
                @mouseleave="changeLegendOfaKind"
                @click="bottomSection(4)"
              >
              <label
                for="smallStraight"
                @mouseenter="changeLegendSmallStraight"
                @mouseleave="changeLegendSmallStraight"
              >Liten stege</label>
              <input
                type="number"
                id="smallStraight"
                name="smallStraight"
                readonly="true"
                v-model="valueSmallStraight"
                @mouseenter="changeLegendSmallStraight"
                @mouseleave="changeLegendSmallStraight"
                @click="bottomSection(5)"
              >
              <label
                for="largeStraight"
                @mouseenter="changeLegendLargeStraight"
                @mouseleave="changeLegendLargeStraight"
              >Stor stege</label>
              <input
                type="number"
                id="largeStraight"
                name="largeStraight"
                readonly="true"
                v-model="valueLargeStraight"
                @mouseenter="changeLegendLargeStraight"
                @mouseleave="changeLegendLargeStraight"
                @click="bottomSection(6)"
              >
              <label
                for="fullHouse"
                @mouseenter="changeLegendFullHouse"
                @mouseleave="changeLegendFullHouse"
              >Kåk</label>
              <input
                type="number"
                id="fullHouse"
                name="fullHouse"
                readonly="true"
                v-model="valueFullHouse"
                @mouseenter="changeLegendFullHouse"
                @mouseleave="changeLegendFullHouse"
                @click="bottomSection(7)"
              >
              <label
                for="chance"
                @mouseenter="changeLegendChance"
                @mouseleave="changeLegendChance"
              >Chans</label>
              <input
                type="number"
                id="chance"
                name="chance"
                readonly="true"
                v-model="valueChance"
                @mouseenter="changeLegendChance"
                @mouseleave="changeLegendChance"
                @click="bottomSection(8)"
              >
              <label
                for="yahtzee-input"
                @mouseenter="changeLegendYahtzee"
                @mouseleave="changeLegendYahtzee"
              >Yatzy</label>
              <input
                type="number"
                id="yahtzee-input"
                name="yahtzee-input"
                readonly="true"
                v-model="valueYahtzee"
                @mouseenter="changeLegendYahtzee"
                @mouseleave="changeLegendYahtzee"
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
            <div v-if="rollsLeft == 0">
              Stryka
              <label class="switch">
                <input type="checkbox" @click="noScore = !noScore">
                <span class="slider"></span>
              </label>
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
import GameLegend from "./GameLegend.vue";
import { mapActions } from "vuex";

export default {
  name: "GameBoard",
  components: {
    Player,
    GameLegend
  },
  props: ["players", "round"],
  data() {
    return {
      valueOnes: "",
      valueTwos: "",
      valueThrees: "",
      valueFours: "",
      valueFives: "",
      valueSixes: "",
      valueBonus: 0,
      valueOnePair: "",
      valueTwoPair: "",
      valueThreeOfaKind: "",
      valueFourOfaKind: "",
      valueSmallStraight: "",
      valueLargeStraight: "",
      valueFullHouse: "",
      valueChance: "",
      valueYahtzee: "",
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
      score: 0,
      valueTopSection: 0,
      valueBottomSection: 0,
      noScore: false
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
    ...mapActions([
      "changeLegendOnes",
      "changeLegendTwos",
      "changeLegendThrees",
      "changeLegendFours",
      "changeLegendFives",
      "changeLegendSixes",
      "changeLegendBonus",
      "changeLegendPair",
      "changeLegendOfaKind",
      "changeLegendSmallStraight",
      "changeLegendLargeStraight",
      "changeLegendFullHouse",
      "changeLegendChance",
      "changeLegendYahtzee"
    ]),
    nextRound: function() {
      this.$emit("next-round");
    },
    sendScore: function(score) {
      this.$emit("transfer-score", score);
    },
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
          if (this.valueOnes === "") {
            isValueZero = true;
          }
          break;

        case 2:
          if (this.valueTwos === "") {
            isValueZero = true;
          }
          break;

        case 3:
          if (this.valueThrees === "") {
            isValueZero = true;
          }
          break;

        case 4:
          if (this.valueFours === "") {
            isValueZero = true;
          }
          break;

        case 5:
          if (this.valueFives === "") {
            isValueZero = true;
          }
          break;

        case 6:
          if (this.valueSixes === "") {
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
          if (this.valueOnePair === "") {
            isValueZero = true;
          }
          break;

        case 2: // two pair
          if (this.valueTwoPair === "") {
            isValueZero = true;
          }
          break;

        case 3: // three of a kind
          if (this.valueThreeOfaKind === "") {
            isValueZero = true;
          }
          break;

        case 4: // four of a kind
          if (this.valueFourOfaKind === "") {
            isValueZero = true;
          }
          break;

        case 5: // small straight
          if (this.valueSmallStraight === "") {
            isValueZero = true;
          }
          break;

        case 6: // large straight
          if (this.valueLargeStraight === "") {
            isValueZero = true;
          }
          break;

        case 7: // fullhouse
          if (this.valueFullHouse === "") {
            isValueZero = true;
          }
          break;

        case 8: // chance
          if (this.valueChance === "") {
            isValueZero = true;
          }
          break;

        case 9: // yahtzee
          if (this.valueYahtzee === "") {
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
      let valuesForBonus = [
        this.valueOnes,
        this.valueTwos,
        this.valueThrees,
        this.valueFours,
        this.valueFives,
        this.valueSixes
      ];
      let onesToSixes = 0;
      for (let i = 0; i < valuesForBonus.length; i++) {
        if (valuesForBonus[i] !== "") {
          onesToSixes += valuesForBonus[i];
        }
      }
      if (onesToSixes >= 63) {
        this.valueBonus = 50;
      }
    },
    calculateTopSection: function() {
      let allValuesTop = [
        this.valueOnes,
        this.valueTwos,
        this.valueThrees,
        this.valueFours,
        this.valueFives,
        this.valueSixes,
        this.valueBonus
      ];
      this.valueTopSection = 0;
      for (let i = 0; i < allValuesTop.length; i++) {
        if (allValuesTop[i] !== "") {
          this.valueTopSection += allValuesTop[i];
        }
      }
    },
    calculateBottomSection: function() {
      let allValuesBottom = [
        this.valueOnePair,
        this.valueTwoPair,
        this.valueThreeOfaKind,
        this.valueFourOfaKind,
        this.valueSmallStraight,
        this.valueLargeStraight,
        this.valueFullHouse,
        this.valueChance,
        this.valueYahtzee
      ];
      this.valueBottomSection = 0;
      for (let i = 0; i < allValuesBottom.length; i++) {
        if (allValuesBottom[i] !== "") {
          this.valueBottomSection += allValuesBottom[i];
        }
      }
    },
    calculateTotalScore: function() {
      this.calculateTopSection();
      this.calculateBottomSection();
      this.score = this.valueTopSection + this.valueBottomSection;
      this.sendScore(this.score);
      if (this.round == 16) {
        this.resetGame();
      }
    },
    resetGame: function() {
      this.valueOnes = "";
      this.valueTwos = "";
      this.valueThrees = "";
      this.valueFours = "";
      this.valueFives = "";
      this.valueSixes = "";
      this.valueBonus = 0;
      this.valueOnePair = "";
      this.valueTwoPair = "";
      this.valueThreeOfaKind = "";
      this.valueFourOfaKind = "";
      this.valueSmallStraight = "";
      this.valueLargeStraight = "";
      this.valueFullHouse = "";
      this.valueChance = "";
      this.valueYahtzee = "";
      this.dices = [
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
      ];
      this.rollsLeft = 3;
      this.score = 0;
      this.valueTopSection = 0;
      this.valueBottomSection = 0;
      this.noScore = false;
    },
    topSection: function(value) {
      if (
        this.rollsLeft < 3 && // If player have hit throw once
        this.checkTopValues(value) && // If the clicked box value is zero
        this.checkDices(value) && // If any dices is the same number as the box clicked
        !this.noScore // If noScore is false
      ) {
        let sum = 0;
        for (let i = 0; i < 5; i++) {
          if (this.dices[i].number === value) {
            sum += this.dices[i].number;
          }
        }
        switch (value) {
          case 1:
            this.valueOnes = sum;
            break;

          case 2:
            this.valueTwos = sum;
            break;

          case 3:
            this.valueThrees = sum;
            break;

          case 4:
            this.valueFours = sum;
            break;

          case 5:
            this.valueFives = sum;
            break;

          case 6:
            this.valueSixes = sum;
            break;

          default:
            console.log("topSection - Switch - Something went wrong!");
            break;
        }
        this.nextRound();
        this.rollsLeft = 3;
        this.calculateBonus();
        this.resetSelectedDices();
        this.calculateTotalScore();
      } else if (this.noScore && this.checkTopValues(value)) {
        let sum = 0;
        switch (value) {
          case 1:
            this.valueOnes = sum;
            break;

          case 2:
            this.valueTwos = sum;
            break;

          case 3:
            this.valueThrees = sum;
            break;

          case 4:
            this.valueFours = sum;
            break;

          case 5:
            this.valueFives = sum;
            break;

          case 6:
            this.valueSixes = sum;
            break;

          default:
            console.log(
              "topSection - Switch - noScore - Something went wrong!"
            );
            break;
        }
        this.nextRound();
        this.rollsLeft = 3;
        this.calculateBonus();
        this.resetSelectedDices();
        this.calculateTotalScore();
        this.noScore = false;
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
      if (this.rollsLeft < 3 && this.checkBottomValues(box) && !this.noScore) {
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
              this.valueSmallStraight = 15;
              correctCombo = true;
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
              this.valueLargeStraight = 20;
              correctCombo = true;
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
            this.valueChance = sum;
            correctCombo = true;
            break;

          case 9: // yahtzee
            for (let i = 1; i < this.dices.length; i++) {
              if (this.dices[0].number == this.dices[i].number) {
                correctMatch++;
              }
            }
            if (correctMatch == 4) {
              this.valueYahtzee = 50;
              correctCombo = true;
            }
            break;

          default:
            console.log("bottomSection - switch - Something went wrong!");
            break;
        }
        if (correctCombo) {
          this.nextRound();
          this.rollsLeft = 3;
          this.resetSelectedDices();
          this.calculateTotalScore();
        }
      } else if (this.noScore && this.checkBottomValues(box)) {
        sum = 0;
        switch (box) {
          case 1: // one pair
            this.valueOnePair = sum;
            break;

          case 2: // two pair
            this.valueTwoPair = sum;
            break;

          case 3: // three of a kind
            this.valueThreeOfaKind = sum;
            break;

          case 4: // four of a kind
            this.valueFourOfaKind = sum;
            break;

          case 5: // small straight
            this.valueSmallStraight = sum;
            break;

          case 6: // large straight
            this.valueLargeStraight = sum;
            break;

          case 7: // fullhouse
            this.valueFullHouse = sum;
            break;

          case 8: // chance
            this.valueChance = sum;
            break;

          case 9: // yahtzee
            this.valueYahtzee = sum;
            break;

          default:
            console.log("bottomSection - switch - Something went wrong!");
            break;
        }
        this.noScore = false;
        this.nextRound();
        this.rollsLeft = 3;
        this.resetSelectedDices();
        this.calculateTotalScore();
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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(75, 75, 75);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #d1d1d1;
}

input:focus + .slider {
  box-shadow: 0 0 1px #d1d1d1;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
