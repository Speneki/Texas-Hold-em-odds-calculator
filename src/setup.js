export const cardBack = "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-2_1024x1024.png?v=1535755695"
import { cards } from "./cards"

export const board = d3.select("#board")
    .attr("x", 1000)
    .append("svg")
    .attr("height", 600)
    .attr("width", 1100);

export const table = board.append("svg:image")
    .attr("xlink:href", "https://i.imgur.com/VHDSPO7.png")
    .attr("class", "ellipse")
    .attr('x', 52)
    .attr('y', 70)
    .attr("width", 860)
    .attr("height", 430)
    .attr("fill", "green")


export const hero1 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("id", "hero-1")
    .attr("x", 150)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .style("fill", "white")
    .style("stroke", "red")

export const hero2 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("id", "hero-2")
    .attr("x", 260)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const villan1 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("id", "villan-1")
    .attr("x", 550)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const villan2 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("id", "villan-2")
    .attr("x", 660)
    .attr("y", 33)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const flop1 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 185)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const flop2 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 295)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const flop3 = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 405)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const turn = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 515)
    .attr("y", 252)
    .attr("width", 100)
    .attr("height", 136)
    .attr("fill", "white")
    .style("stroke", "black")

export const river = board.append("svg:image")
    .attr("xlink:href", cardBack)
    .attr("x", 625)
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
