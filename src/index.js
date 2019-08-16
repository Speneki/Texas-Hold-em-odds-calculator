import { calculateEquity } from "poker-odds";
import { cards } from "./cards"
import * as Setup from "./setup"
import { Gauge} from "./guage"

let heroHand = [null, null]
let villanHand = [null, null]
let fallenCards = [null, null, null, null, null]

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
    let odds = calculateEquity([heroHand, villanHand], args)
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
    let odds = calculateEquity([heroHand, villanHand], args)
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

    d3.select("#hero1-photo").on("click", () => {
        d3.select("#hero1-photo").remove()
        handsSelected()
        heroHand[0] = null
        handsSelected()
    })
    
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", heroOneSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", heroTwoSelect);
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

    handsSelected()

    d3.select("#hero2-photo").on("click", () => {
        d3.select("#hero2-photo").remove()
        heroHand[1] = null
        handsSelected()
    })

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", heroTwoSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", villanOneSelect);
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

    d3.select("#villan1-photo").on("click", () => {
        d3.select("#villan1-photo").remove()
        villanHand[0] = null
        handsSelected()
    })

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", villanOneSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", villanTwoSelect);
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

    handsSelected()
    d3.select("#villan2-photo").on("click", () => {
        d3.select("#villan2-photo").remove()
        villanHand[1] = null
        handsSelected()
    })
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", villanTwoSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", flopOneSelect);
    }
}


function flopFallOne(num) {
    fallenCards[0] = cards[num].code
    handsSelected()

    let boardOne = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board1-photo")
        .attr("x", 172)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#board1-photo").on("click", () => {
        d3.select("#board1-photo").remove()
        fallenCards[0] = null
        handsSelected()
    })
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopOneSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", flopTwoSelect);
    }
}


function flopFallTwo(num) {
    fallenCards[1] = cards[num].code
    handsSelected()

    let boardTwo = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board2-photo")
        .attr("x", 282)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#board2-photo").on("click", () => {
        d3.select("#board2-photo").remove()
        fallenCards[1] = null
        handsSelected()
    })

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopTwoSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", flopThreeSelect);
    }
}

function flopFallThree(num) {
    fallenCards[2] = cards[num].code
    handsSelected()


    let boardThree = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board3-photo")
        .attr("x", 392)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#board3-photo").on("click", () => {
        d3.select("#board3-photo").remove()
        fallenCards[2] = null
        handsSelected()
    })
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopThreeSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", flopFourSelect);
    }
}

function flopFallFour(num) {
    fallenCards[3] = cards[num].code
    handsSelected()

    let boardFour = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board4-photo")
        .attr("x", 502)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#board4-photo").on("click", () => {
        d3.select("#board4-photo").remove()
        fallenCards[3] = null
        handsSelected()
    })
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopFourSelect)
    }

    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.addEventListener("click", flopFiveSelect);
    }
}

function flopFallFive(num) {
    fallenCards[4] = cards[num].code
    handsSelected()

    let boardFive = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board5-photo")
        .attr("x", 612)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);

    d3.select("#board5-photo").on("click", () => {
        d3.select("#board5-photo").remove()
        fallenCards[4] = null
        handsSelected()
    })
    for (let i = 0; i < cardsArr.length; i++) {
        const card = cardsArr[i];
        card.removeEventListener("click", flopFiveSelect)
    }
}