// --------------------------------------------------
//  Draw the circle, using id = "area" 

var svg = d3.select("#area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circle = svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill", "lightgreen");

// Draw the line, rectangle, ellipse, using id = "more"
var mysvg = d3.select("#more").append("svg")
    .attr("width", 900)
    .attr("height", 300);

var line = mysvg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 200)
    .attr("y2", 200)
    .attr("stroke-width", 2)
    .attr("stroke", "green");

var rect = mysvg.append("rect")
    .attr("x", 200)
    .attr("y", 10)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "lightblue");

var ellipse = mysvg.append("ellipse")
    .attr("cx", 600)
    .attr("cy", 100)
    .attr("rx", 150)
    .attr("ry", 50)
    .attr("fill", "lightgray")