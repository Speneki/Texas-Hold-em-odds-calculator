// const cards = [
//     "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "Tc", "Jc", "Qc", "Kc", "Ac",
//     "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "Td", "Jd", "Qd", "Kd", "Ad",
//     "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "Th", "Jh", "Qh", "Kh", "Ah",
//     "2s", {
//         code: "3S",
//         value: "3",
//         image: "https://deckofcardsapi.com/static/img/3S.png"}, "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks", "As",
// ];

let heroHand = [null, null]
let villanHand = [null, null]

function setVillanHand() {
    let villanPercentages = board.append("text")
        .attr("id", "villanHand")
        .attr("x", 600)
        .attr("y", 160)
        .text(villanHand)
        .attr("z-index", 100)  
}

function setHeroHand() {
    let heroPercentages = board.append("text")
        .attr("id", "heroHand")
        .attr("x", 180)
        .attr("y", 160)
        .text(heroHand)
        .attr("z-index", 100)  
}

hero1.on("click", function () {
    heroHand[0] = cards[Math.floor(Math.random() * cards.length)].code
    console.log(heroHand)
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        d3.select("#heroHand").remove()
        d3.select("#villanHand").remove()
        setHeroHand()
        setVillanHand()
    }
})

hero2.on("click", function () {
    heroHand[1] = cards[Math.floor(Math.random() * cards.length)].code
    console.log(heroHand)
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        d3.select("#heroHand").remove()
        d3.select("#villanHand").remove()
        setHeroHand()
        setVillanHand()
    }
})


villan1.on("click", function () {
    villanHand[0] = cards[Math.floor(Math.random() * cards.length)].code
    console.log(villanHand)
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        d3.select("#heroHand").remove()
        d3.select("#villanHand").remove()
        setHeroHand()
        setVillanHand()
    }
})

villan2.on("click", function () {
    villanHand[1] = cards[Math.floor(Math.random() * cards.length)].code
    console.log(villanHand)
    if (!heroHand.includes(null) && !villanHand.includes(null)) {
        d3.select("#heroHand").remove()
        d3.select("#villanHand").remove()
        setHeroHand()
        setVillanHand()
    }
})
