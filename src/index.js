import { calculateEquity } from "poker-odds";
import { cards } from "./cards"

let board = d3.select("#board")
    .append("svg")
    .attr("height", 600)
    .attr("width", 1100);


let table = board.append("ellipse")
    .attr("cx", 450)
    .attr("cy", 290)
    .attr("rx", 390)
    .attr("ry", 200)
    .attr("fill", "green")
    .style("stroke", "black")
    .style("stroke-width", 30);

let hero1 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 150)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 136)
    .style("fill", "white")
    .style("stroke", "black")

let hero2 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 260)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")


let villan1 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 550)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

let villan2 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 660)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

let flop1 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 172)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

let flop2 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 282)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

let flop3 = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 392)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

let turn = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 502)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

let river = board.append("svg:image")
    .attr("xlink:href", "https://opengameart.org/sites/default/files/card%20back%20orange.png")
    .attr("x", 612)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")


let heroHand = [null, null]
let villanHand = [null, null]
let fallenCards = [null, null, null, null, null]

function setVillanHand() {
    board.append("rect")
        .attr("id", "villanHand")
        .attr("x", 550)
        .attr("y", 110)
        .attr("width", 210)
        .attr("height", 60)
        .attr("fill", "rgba(128,128,128,0.9)")
        .attr("z-index", 100)

    let villanHandText = board.append("text")
        .attr("x", 570)
        .attr("y", 140)
        .text(villanHand)
        .style('fill', 'white')

    if (fallenCards[0] !== null && fallenCards[1] !== null && fallenCards[2] !== null) {
        let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2]])
        let villanPercentages = board.append("text")
            .attr("x", 570)
            .attr("y", 153)
            .text((odds[1].wins / odds[1].count * 100).toFixed(2) + "%")
            .style("fill", "white")
        if ((odds[1].wins / odds[1].count * 100) > 50) {
            villanPercentages.style("fill", "green");
        } else {
            villanPercentages.style("fill", "red");
        }
            
    }
}

function setHeroHand() {
    board.append("rect")
        .attr("id", "heroHand")
        .attr("x", 150)
        .attr("y", 110)
        .attr("width", 210)
        .attr("height", 60)
        .attr("fill", "rgba(128,128,128,0.9)")
        .attr("z-index", 100);
    if (fallenCards[0] !== null && fallenCards[1] !== null && fallenCards[2] !== null) {
        console.log(calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2]]))

    }
    let heroHandText = board.append('text')
        .attr("x", 160)
        .attr("y", 140)
        .style('fill', 'white')
        .text(heroHand)

    if (fallenCards[0] !== null && fallenCards[1] !== null && fallenCards[2] !== null) {
        let odds = calculateEquity([heroHand, villanHand], [fallenCards[0], fallenCards[1], fallenCards[2]])
        let heroPercentages = board.append("text")
            .attr("x", 160)
            .attr("y", 153)
            .text((odds[0].wins / odds[0].count * 100).toFixed(2) + "%");
        if ((odds[0].wins / odds[0].count * 100) > 50) {
            heroPercentages.style("fill", "green");
        } else {
            heroPercentages.style("fill", "red");
        }
    }
}


function handsSelected() {
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        d3.select("#heroHand").remove()
        d3.select("#villanHand").remove()
        setHeroHand()
        setVillanHand()
    }
}

hero1.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    heroHand[0] = cards[num].code
    d3.select("hero1-photo").remove()
        .attr("stroke", "red")
    handsSelected()

    let heroOneCardPhoto = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "hero1-photo")
        .attr("x", 150)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})

hero2.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    heroHand[1] = cards[num].code
    d3.select("hero2-photo").remove()

    handsSelected()

    let heroTwoCardPhoto = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "hero2-photo")
        .attr("x", 260)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})


villan1.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    villanHand[0] = cards[num].code
    d3.select("villan1-photo").remove()
    handsSelected()

    let villanOneCardPhoto = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "villan1-photo")
        .attr("x", 550)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})

villan2.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    villanHand[1] = cards[num].code
    handsSelected()

    let villanTwoCardPhoto = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "villan2-photo")
        .attr("x", 660)
        .attr("y", 25)
        .attr("height", 150)
        .attr("width", 100);
})


flop1.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[0] = cards[num].code
    handsSelected()

    let boardOne = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board1-photo")
        .attr("x", 172)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})


flop2.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[1] = cards[num].code
    handsSelected()

    let boardTwo = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board2-photo")
        .attr("x", 282)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

flop3.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[2] = cards[num].code
    handsSelected()


    let boardThree = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board3-photo")
        .attr("x", 392)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

turn.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[3] = cards[num].code
    handsSelected()

    let boardFour = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board4-photo")
        .attr("x", 502)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

river.on("click", function () {
    let num = Math.floor(Math.random() * cards.length)
    fallenCards[4] = cards[num].code
    handsSelected()

    let boardFive = board.append("svg:image")
        .attr("xlink:href", cards[num].image)
        .attr("id", "board5-photo")
        .attr("x", 612)
        .attr("y", 245)
        .attr("height", 150)
        .attr("width", 100);
})

for (let i = 0; i < 13; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 860)
        .attr("y", 36 * i)
        .attr("height", 80)
        .attr("width", 60)
}


for (let i = 13; i < 26; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 920)
        .attr("y", 36 * (i - 13))
        .attr("height", 80)
        .attr("width", 60)
}

for (let i = 26; i < 39; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 980)
        .attr("y", 36 * (i - 26))
        .attr("height", 80)
        .attr("width", 60)
}

for (let i = 39; i < 52; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("x", 1040)
        .attr("y", 36 * (i - 39))
        .attr("height", 80)
        .attr("width", 60)
}