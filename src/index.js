import { calculateEquity } from "poker-odds";
import { cards } from "./cards"
import * as Setup from "./setup"


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

function setVillanHand() {
    Setup.board.append("rect")
        .attr("id", "villanHand")
        .attr("x", 550)
        .attr("y", 110)
        .attr("width", 210)
        .attr("height", 60)
        .attr("fill", "rgba(128,128,128,0.9)")

    if (fallenCards[0] !== null && fallenCards[1] !== null && fallenCards[2] !== null) {
        if (fallenCards[3] !== null) {
            if (fallenCards[4] !== null) {
                let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2], fallenCards[3], fallenCards[4]])
                let villanPercentages2 = Setup.board.append("text")
                    .attr("id", "percentages")
                    .attr("x", 560)
                    .attr("y", 135)
                    .text("Win: " +(odds[1].wins / odds[1].count * 100).toFixed(2) + "%")
                    .style("fill", "white")
                let heroTiePercentages = Setup.board.append("text")
                    .attr("id", "percentages")
                    .attr("x", 560)
                    .attr("y", 160)
                    .text("Tie: " + (odds[0].ties / odds[0].count * 100).toFixed(2) + "%")
                    .style("fill", "orange")

                if ((odds[1].wins / odds[1].count * 100) > (odds[0].wins / odds[0].count * 100)) {
                    villanPercentages2.style("fill", "white")
                } else {
                    villanPercentages2.style("fill", "red");
                }   
            } else {
                let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2], fallenCards[3]])
                let villanPercentages2 = Setup.board.append("text")
                    .attr("id", "percentages")
                    .attr("x", 560)
                    .attr("y", 135)
                    .text("Win: " +(odds[1].wins / odds[1].count * 100).toFixed(2) + "%")
                    .style("fill", "white")
                let heroTiePercentages = Setup.board.append("text")
                    .attr("id", "percentages")
                    .attr("x", 560)
                    .attr("y", 160)
                    .text("Tie: " + (odds[0].ties / odds[0].count * 100).toFixed(2) + "%")
                    .style("fill", "orange")

                if ((odds[1].wins / odds[1].count * 100) > (odds[0].wins / odds[0].count * 100)) {
                    villanPercentages2.style("fill", "white")
                } else {
                    villanPercentages2.style("fill", "red");
                }   
            }
        } else {
            let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2]])
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
                    .style("font-weigth", 700)
            } else {
                villanPercentages.style("fill", "red");
            }
        }
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

    if (fallenCards[0] !== null && fallenCards[1] !== null && fallenCards[2] !== null) {
        if (fallenCards[3] !== null) {  
            if (fallenCards[4] !== null) {
                d3.selectAll("#percentages").remove();
                let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2], fallenCards[3], fallenCards[4]])
                let heroPercentages = Setup.board.append("text")
                    .attr("id", "percentages")
                    .attr("x", 160)
                    .attr("y", 135)
                    .text("Win: " +(odds[0].wins / odds[0].count * 100).toFixed(2) + "%");

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
            } else {
                d3.selectAll("#percentages").remove();
                let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2], fallenCards[3]])
                let heroPercentages = Setup.board.append("text")
                    .attr("id", "percentages")
                    .attr("x", 160)
                    .attr("y", 135)
                    .text("Win: " +(odds[0].wins / odds[0].count * 100).toFixed(2) + "%");

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
        } else {
            let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2]])
            let heroPercentages = Setup.board.append("text")
                .attr("id", "percentages")
                .attr("x", 160)
                .attr("y", 135)
                .text("Win: " +(odds[0].wins / odds[0].count * 100).toFixed(2) + "%" );
            
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
    }
}


Setup.hero1.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    heroHand[0] = cards[num].code
    d3.select("#hero1-photo").remove()
        .attr("stroke", "red")
    handsSelected()

    let heroOneCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "hero1-photo")
        .attr("x", 150)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})

Setup.hero2.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    heroHand[1] = cards[num].code
    d3.select("#hero2-photo").remove()

    handsSelected()

    let heroTwoCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "hero2-photo")
        .attr("x", 260)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})


Setup.villan1.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    villanHand[0] = cards[num].code
    d3.select("#villan1-photo").remove()
    handsSelected()

    let villanOneCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "villan1-photo")
        .attr("x", 550)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})

Setup.villan2.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    villanHand[1] = cards[num].code
    handsSelected()

    let villanTwoCardPhoto = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "villan2-photo")
        .attr("x", 660)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})


Setup.flop1.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[0] = cards[num].code
    handsSelected()

    let boardOne = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board1-photo")
        .attr("x", 172)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})


Setup.flop2.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[1] = cards[num].code
    handsSelected()

    let boardTwo = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board2-photo")
        .attr("x", 282)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

Setup.flop3.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[2] = cards[num].code
    handsSelected()


    let boardThree = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board3-photo")
        .attr("x", 392)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

Setup.turn.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[3] = cards[num].code
    handsSelected()

    let boardFour = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board4-photo")
        .attr("x", 502)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

Setup.river.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[4] = cards[num].code
    handsSelected()

    let boardFive = Setup.board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board5-photo")
        .attr("x", 612)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

for (let i = 0; i < 13; i++) {
    Setup.board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 860)
        .attr("y", 36 * i + 10)
        .attr("height", 80)
        .attr("width", 60)
}


for (let i = 13; i < 26; i++) {
    Setup.board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 920)
        .attr("y", 36 * (i - 13) + 10)
        .attr("height", 80)
        .attr("width", 60)
}

for (let i = 26; i < 39; i++) {
    Setup.board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 980)
        .attr("y", 36 * (i - 26)+ 10)
        .attr("height", 80)
        .attr("width", 60)
}

for (let i = 39; i < 52; i++) {
    Setup.board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 1040)
        .attr("y", 36 * (i - 39) + 10)
        .attr("height", 80)
        .attr("width", 60)
}