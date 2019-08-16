const cardBack = "https://opengameart.org/sites/default/files/card%20back%20orange.png"
import { cards } from "./cards"

export const board = d3.select("#board")
    .attr("x", 1000)
    .append("svg")
    .attr("height", 600)
    .attr("width", 1100);

export const table = board.append("ellipse")
    .attr("class", "ellipse")
    .attr("cx", 450)
    .attr("cy", 290)
    .attr("rx", 390)
    .attr("ry", 200)
    .attr("fill", "green")
    .style("stroke", "black")
    .style("stroke-width", 30);

export const hero1 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 150)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .style("fill", "white")
    .style("stroke", "red")

export const hero2 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 260)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const villan1 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 550)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const villan2 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 660)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const flop1 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 172)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const flop2 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 282)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const flop3 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 392)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const turn = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 502)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const river = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 612)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")


for (let i = 0; i < 13; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("class", "cards")
        .attr("height", 80)
        .attr("width", 60)
        .attr("x", 860)
        .attr("y", 36 * i + 10)
}


for (let i = 13; i < 26; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("class", "cards")
        .attr("x", 920)
        .attr("y", 36 * (i - 13) + 10)
        .attr("height", 80)
        .attr("width", 60)
}

for (let i = 26; i < 39; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("class", "cards")
        .attr("x", 980)
        .attr("y", 36 * (i - 26) + 10)
        .attr("height", 80)
        .attr("width", 60)
}

for (let i = 39; i < 52; i++) {
    board.append("svg:image")
        .attr("xlink:href", cards[i].image)
        .attr("id", "cardselect-" + i)
        .attr("class", "cards")
        .attr("x", 1040)
        .attr("y", 36 * (i - 39) + 10)
        .attr("height", 80)
        .attr("width", 60)
}
