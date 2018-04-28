// --------------------------------------------------
// Draw the buildings, using id = "bld"

function process(bData) {
    console.log(bData);

    var margin = { left: 100, right: 10, top: 10, bottom: 100 };
    var width = 600 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // svg canvas
    var svg = d3.select("#bld")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom + 50);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + ", " +
            margin.top + ")")

    // x label
    g.append("text")
        .attr("class", "x axis-label")
        .attr("x", width / 2)
        .attr("y", height + 130)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("The world's tallest buildings");

    // y label
    g.append("text")
        .attr("class", "y axis-label")
        .attr("x", -(height / 2))
        .attr("y", -60)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Height (m)");

    bData.forEach(function(d) {
        d.height = +d.height;
    });

    // x, axis;  domain-range used for Building rectangle
    var x = d3.scaleBand()
        .domain(bData.map(function(d) {
            return d.name;
        }))
        .range([0, width])
        .paddingInner(0.5)
        .paddingOuter(0.3);

    // y, axis; domain-range used for Building rectangle
    var y = d3.scaleLinear()
        .domain([0, d3.max(bData, function(d) {
            return d.height;
        })])
        .range([height, 0]);

    // x scale
    var xAxisCall = d3.axisBottom(x);
    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
        .selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-40)");

    // y scale
    var yAxisCall = d3.axisLeft(y)
        .ticks(10)
        .tickFormat(function(d) {
            return d + "m";
        });
    g.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall);

    // rectangle content
    var rect = g.selectAll("rect")
        .data(bData)
        .enter()
        .append("rect")
        .attr("y", function(d) { return y(d.height); })
        .attr("x", function(d) { return x(d.name); })
        .attr("width", x.bandwidth)
        .attr("height", function(d) {
            return height - y(d.height);
        })
        .attr("fill", "lightgreen");
    return bData;
}