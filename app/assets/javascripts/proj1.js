// --------------------------------------------------
// Draw the Star Break Revenue, using id = "star"

function dispRevenue(myRe) {
    console.log(myRe);

    myRe.forEach(function(d) {
        d.revenue = +d.revenue;
        d.profit = +d.profit;
        // console.log(typeof d.profit);
    });

    var margin = { left: 100, right: 10, top: 10, bottom: 100 };
    var width = 600 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // svg canvas
    var svg = d3.select("#star")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom + 50);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + ", " +
            margin.top + ")")

    // x, axis;  domain-range used for Building rectangle
    var x = d3.scaleBand()
        .domain(myRe.map(function(d) {
            return d.month;
        }))
        .range([0, width])
        .paddingInner(0.5)
        .paddingOuter(0.3);

    // y, axis; domain-range used for Building rectangle
    var y = d3.scaleLinear()
        .domain([0, d3.max(myRe, function(d) {
            return d.revenue;
        })])
        .range([height, 0]);

    // rectangle content
    var rect = g.selectAll("rect")
        .data(myRe)
        .enter()
        .append("rect")
        .attr("y", function(d) { return y(d.revenue); })
        .attr("x", function(d) { return x(d.month); })
        .attr("width", x.bandwidth)
        .attr("height", function(d) {
            return height - y(d.revenue);
        })
        .attr("fill", "lightgreen");


    // x scale
    var xAxisCall = d3.axisBottom(x);
    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall);

    // adjust the text ticks
    g.selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-30)");

    // y scale
    var yAxisCall = d3.axisLeft(y)
        .ticks(10)
        .tickFormat(function(d) {
            return d + "m";
        });
    g.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall);

    // x label
    g.append("text")
        .attr("class", "x axis-label")
        .attr("x", width / 2)
        .attr("y", height + 90)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("Month");

    // y label
    g.append("text")
        .attr("class", "y axis-label")
        .attr("x", -(height / 2))
        .attr("y", -60)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Revenue ($)");


}