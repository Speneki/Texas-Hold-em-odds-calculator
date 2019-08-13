
import * as PokerOdds from "poker-odds";

let board = d3.select("#board") 
    .append("svg")
    .attr("height", 1000)
    .attr("width", 1000);

let table = board.append("ellipse")
    .attr("cx", 450)
    .attr("cy", 290)
    .attr("rx", 390)
    .attr("ry", 200)
    .attr("fill", "green")
    .style("stroke", "black")
    .style("stroke-width", 30);


// let img_url = function (d) { return "url(#img_" + d + ")"; }

// let defs = board.append("defs")
//     .append("pattern")
//     .attr("id", "img_cardback")
//     .attr("height", 150)
//     .attr("width", 100)
    // .attr("patternContentUnits", "objectBoundingBox")
    // .attr("overflow", "visable")
    // .append("image")
    // .attr("id", "cardback")
    // .attr("height", 100)
    // .attr("width", 100)
    // .attr("x", 0)
    // .attr("y", 0)
    // .attr("preserveAspectRatio", "none")
    // .attr("xmlns:xlink", "https://www.ezmagicrobbins.com/images/B11649-1.jpg")
    // .attr("xlink:href", "http://lorempixel.com/150/150/people/3");

let hero1 = board.append("rect")
    .attr("x", 150)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 150)
    .style("fill", "white")
    .style("stroke", "black")


let hero2 = board.append("rect")
    .attr("x", 260)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")


let villan1 = board.append("rect")
    .attr("x", 550)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let villan2 = board.append("rect")
    .attr("x", 660)
    .attr("y", 30)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let flop1 = board.append("rect")
    .attr("x", 180)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let flop2 = board.append("rect")
    .attr("x", 290)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")


let flop3 = board.append("rect")
    .attr("x", 400)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let turn = board.append("rect")
    .attr("x", 510)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let river = board.append("rect")
    .attr("x", 620)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")


const cards = [
    "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "Tc", "Jc", "Qc", "Kc", "Ac",
    "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "Td", "Jd", "Qd", "Kd", "Ad",
    "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "Th", "Jh", "Qh", "Kh", "Ah",
    "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks", "As",
];

let heroHand = [null, null]
let villanHand = [null, null]

hero1.on("click", function() {
    heroHand[0] = cards[Math.floor(Math.random() * cards.length)]
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        console.log('yup')
    }
})

hero2.on("click", function() {
    heroHand[1] = cards[Math.floor(Math.random() * cards.length)]
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        console.log('yup')
    }
})


villan1.on("click", function() {
    villanHand[0] = cards[Math.floor(Math.random() * cards.length)]
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        console.log('yup')
    }
})

villan2.on("click", function() {
    villanHand[1] = cards[Math.floor(Math.random() * cards.length)]
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        console.log(calculateEquity([heroHand, villanHand]))
    }
})