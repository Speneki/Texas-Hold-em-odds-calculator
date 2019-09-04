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
    let odds = calculateEquity([heroHand, villanHand], args, 1000)
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
    // debugger
    let odds = calculateEquity([heroHand, villanHand], args, 1000)
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
    let heroOneCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image) 
        .attr("id", "hero1-photo")
        .attr("x", 150)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);

    handsSelected()

    selectybois.push(parseInt(num))

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", heroOneSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        if (selectybois.includes(i)) {
            console.log(i)
        } else {
            const card = cardsArr[i];
            card.addEventListener("click", heroTwoSelect);
        }
    }
}

function heroHandDos(num) {
    heroHand[1] = cards[num].code
    d3.select("#hero2-photo").remove()
    let heroTwoCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "hero2-photo")
        .attr("x", 260)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
    d3.select("#instruction").remove()

    selectybois.push(parseInt(num))

    handsSelected()

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    Setup.board.append("text")
        .attr('id', 'instruction')
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
    let villanOneCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "villan1-photo")
        .attr("x", 550)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);

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
    let villanTwoCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "villan2-photo")
        .attr("x", 660)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#instruction").remove()

    handsSelected()

    selectybois.push(parseInt(num))

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    Setup.board.append("text")
        .attr('id', 'instruction')
        .attr('x', 200)
        .attr('y', 420)
        .attr("fill", "white")
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
    console.log(num)
    fallenCards[0] = cards[num].code
    // debugger
    handsSelected()

    selectybois.push(parseInt(num))

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    let boardOne = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board1-photo")
        .attr("x", 185)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

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
    console.log(num)
    // debugger
    fallenCards[1] = cards[num].code
    handsSelected()

    selectybois.push(parseInt(num))

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    let boardTwo = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board2-photo")
        .attr("x", 295)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

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
    handsSelected()
    selectybois.push(parseInt(num))

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    let boardThree = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board3-photo")
        .attr("x", 405)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#instruction").remove()


    Setup.board.append("text")
        .attr('id', 'instruction')
        .attr('x', 300)
        .attr('y', 420)
        .attr("fill", "white")
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
    handsSelected()

    selectybois.push(parseInt(num))
    let boardFour = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board4-photo")
        .attr("x", 515)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#instruction").remove()

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    Setup.board.append("text")
        .attr('id', 'instruction')
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
    handsSelected()

    selectybois.push(parseInt(num))

    d3.select(cardsArr[num]).attr("xlink:href", cardBack);

    let boardFive = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board5-photo")
        .attr("x", 625)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

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