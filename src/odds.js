
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
        .attr("fill", "rgba(0, 128, 0, 0.7)")
        .attr("z-index", 100)  
    let villanPercentages = board.append("text")
    .attr("id", "villanHand")
    .attr("x", 600)
    .attr("y", 160)
    .text(villanHand)

}

function setHeroHand() {
    board.append("rect")
        .attr("id", "heroHand")
        .attr("x", 150)
        .attr("y", 110)
        .attr("width", 210)
        .attr("height", 60)
        .attr("fill", "rgba(128,128,128,0.7)")
        .attr("z-index", 100)  
    let heroPercentages = board.append('text')
        .attr("x", 150)
        .attr("y", 130)
        .attr("id", heroHand)
        .text("heroHand")
        .style("font-color", "white")
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
    hero1.attr("stroke", "red")
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

// (instanceOf board[0] === "null") && (instanceOf board[1]     