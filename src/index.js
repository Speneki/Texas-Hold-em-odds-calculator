import { calculateEquity } from "poker-odds";
import { cards } from "./cards"
import * as Setup from "./setup"
import {cardBack} from "./setup"

let heroHand = [null, null]
let villanHand = [null, null]
let fallenCards = []
let selectybois = []

function handsSelected() {
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        d3.select("#heroHand").remove()
        d3.select("#villanHand").remove()
        setHeroHand()
        setVillanHand()
    }
}

function setHeroHand() {
    Setup.board.append("rect")
        .attr("id", "heroHand")
        .attr("x", 150)
        .attr("y", 110)
        .attr("width", 210)
        .attr("height", 60)
        .attr("fill", "rgba(128,128,128,0.9)")
    let fallenCardsArrHero = fallenCards.filter(card => card !== null)
    heroPercentage(fallenCardsArrHero)
} 

function setVillanHand() {
    Setup.board.append("rect")
        .attr("id", "villanHand")
        .attr("x", 550)
        .attr("y", 110)
        .attr("width", 210)
        .attr("height", 60)
        .attr("fill", "rgba(128,128,128,0.9)")

    let fallenCardsArr = fallenCards.filter(card => card !== null)
    villanPercentage(fallenCardsArr)
}

function heroPercentage(args) {
    d3.selectAll("#percentages").remove();
    let odds = calculateEquity([heroHand, villanHand], args, 1200, false)
    let heroPercentages = Setup.board.append("text")
        .attr("id", "percentages")
        .attr("x", 160)
        .attr("y", 135)
        .text("Win: " + (odds[0].wins / odds[0].count * 100).toFixed(2) + "%");

    let heroTiePercentages = Setup.board.append("text")
        .attr("id", "percentages")
        .attr("x", 160)
        .attr("y", 160)
        .text("Tie: " + (odds[0].ties / odds[0].count * 100).toFixed(2) + "%")
        .style("fill", "orange")

    if ((odds[0].wins / odds[0].count * 100) > (odds[1].wins / odds[1].count * 100)) {
        heroPercentages.style("fill", "white");
    } else {
        heroPercentages.style("fill", "red");
    }
}

function villanPercentage(args) {
    let odds = calculateEquity([heroHand, villanHand], args, 1200, false)
    let villanPercentages = Setup.board.append("text")
        .attr("id", "percentages")
        .attr("x", 560)
        .attr("y", 135)
        .text("Win: " + (odds[1].wins / odds[1].count * 100).toFixed(2) + "%")
        .style("fill", "white")
    let heroTiePercentages = Setup.board.append("text")
        .attr("id", "percentages")
        .attr("x", 560)
        .attr("y", 160)
        .text("Tie: " + (odds[0].ties / odds[0].count * 100).toFixed(2) + "%")
        .style("fill", "orange")

    if ((odds[1].wins / odds[1].count * 100) > (odds[0].wins / odds[0].count * 100)) {
        villanPercentages.style("fill", "white")
    } else {
        villanPercentages.style("fill", "red");
    }
}

let cardsArr = document.getElementsByClassName("cards");

for (let i = 0; i < cardsArr.length; i++) {
    const card = cardsArr[i];
    card.addEventListener("click", heroOneSelect);
}

function heroOneSelect(evt) {
    heroHandUno(this.id.split("-")[1])
}

function heroTwoSelect(evt) {
    heroHandDos(this.id.split("-")[1])
}

function villanOneSelect(evt) {villanHandUno(this.id.split("-")[1])}
function villanTwoSelect(evt) {villanHandDos(this.id.split("-")[1])}
function flopOneSelect(evt) {flopFallOne(this.id.split("-")[1])}
function flopTwoSelect(evt) {flopFallTwo(this.id.split("-")[1])}
function flopThreeSelect(evt) {flopFallThree(this.id.split("-")[1])}
function flopFourSelect(evt) {flopFallFour(this.id.split("-")[1])}
function flopFiveSelect(evt) {flopFallFive(this.id.split("-")[1])}

Setup.board.append("text")
    .attr('id', 'instruction')
    .attr('x', 170)
    .attr('y', 200)
    .attr("fill", "white")
    .text("Select two cards from the \n right as this players hand")
    
function heroHandUno(num) {
    heroHand[0] = cards[num].code
    d3.select("#hero-1").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", heroOneSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i))  {
            const card = cardsArr[i];
            card.addEventListener("click", heroTwoSelect);
        }
    }
}

function heroHandDos(num) {
    heroHand[1] = cards[num].code
    d3.select("#hero-2").attr("xlink:href", cards[num].image)
    selectybois.push(parseInt(num))
    handsSelected()
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    d3.select('#instruction')
        .attr('x', 330)
        .attr('y', 200)
        .attr("fill", "white")
        .text("Select two  more cards from the right as the opponents hand")
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", heroTwoSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", villanOneSelect);
        }
    }
}


function villanHandUno(num) {
    villanHand[0] = cards[num].code
    d3.select("#villan-1").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", villanOneSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", villanTwoSelect);
        }
    }
}

function villanHandDos(num) {
    villanHand[1] = cards[num].code
    d3.select("#villan-2").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    d3.select('#instruction')
        .attr('x', 200)
        .attr('y', 420)
        .text("Select three community cards for the flop")
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", villanTwoSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", flopOneSelect);
        }
    }
}


function flopFallOne(num) {
    fallenCards[0] = cards[num].code
    d3.select("#board-1").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopOneSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", flopTwoSelect);
        }
    }
}


function flopFallTwo(num) {
    fallenCards[1] = cards[num].code
    d3.select("#board-2").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopTwoSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", flopThreeSelect);
        }
    }
}

function flopFallThree(num) {
    fallenCards[2] = cards[num].code
    d3.select("#board-3").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    d3.select("#instruction")
        .attr('x', 300)
        .attr('y', 420)
        .text("Select one community cards for the turn")
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopThreeSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", flopFourSelect);
        }
    }
}

function flopFallFour(num) {
    fallenCards[3] = cards[num].code
    d3.select("#board-4").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    d3.select("#instruction")
        .attr('x', 350)
        .attr('y', 420)
        .attr("fill", "white")
        .text("Select one community cards for the river")
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopFourSelect)
    }
    for (let i = 0; i < cardsArr.length; i++) {
        if (!selectybois.includes(i)) {
            const card = cardsArr[i];
            card.addEventListener("click", flopFiveSelect);
        }
    }
}

function flopFallFive(num) {
    fallenCards[4] = cards[num].code
    d3.select("#board-5").attr("xlink:href", cards[num].image)
    handsSelected()
    selectybois.push(parseInt(num))
    d3.select(cardsArr[num]).attr("xlink:href", cardBack);
    d3.select("#instruction").remove()
    Setup.board.append("a")
        .attr("xlink:href", ".")
        .attr('id', 'final-instruction')
        .append("text")
        .attr('x', 340)
        .attr('y', 420)
        .text("Click Here to Reset!"); 
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopFiveSelect)
    }
}