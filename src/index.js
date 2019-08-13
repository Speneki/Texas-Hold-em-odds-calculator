
    let board = d3.select("#board") 
        .append("svg")
        .attr("height", 1000)
        .attr("width", 1000);
    let circle = board.append("ellipse") 
        .attr("cx", 450)
        .attr("cy", 290)
        .attr("rx", 390)
        .attr("ry", 230)
        .attr("fill", "green")
        .style("stroke", "black")
        .style("stroke-width", 30);