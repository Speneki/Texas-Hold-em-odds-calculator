

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
//     .attr("patternContentUnits", "objectBoundingBox")
//     .attr("overflow", "visable")
//     .append("image")
//     .attr("id", "cardback")
//     .attr("height", 100)
//     .attr("width", 100)
//     .attr("x", 0)
//     .attr("y", 0)
//     .attr("preserveAspectRatio", "none")
//     // .attr("xmlns:xnk", "https://www.ezmagicrobbins.com/images/B11649-1.jpg")
//     .attr("xlink:href", "http://lorempixel.com/150/150/people/2");

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
    .attr("x", 172)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let flop2 = board.append("rect")
    .attr("x", 282)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")


let flop3 = board.append("rect")
    .attr("x", 392)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let turn = board.append("rect")
    .attr("x", 502)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")

let river = board.append("rect")
    .attr("x", 612)
    .attr("y", 250)
    .attr("width", 100)
    .attr("height", 150)
    .attr("fill", "white")
    .style("stroke", "black")


