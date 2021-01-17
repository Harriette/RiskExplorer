// Declare variables to use for plot
var margin = {top: 80, right: 10, bottom: 60, left: 60};
var width, height;
var scales;
var plot, plotArea, rects, riskPoints;

// Set up the background for the plot
export const setupRiskMap = (selection, props) => {

  const {aes, titles, rag_ratings} = props;

  // Define sizes
  width = +selection.style('width').slice(0, -2) - margin.left - margin.right;
  height = +selection.style('height').slice(0, -2) - margin.top - margin.bottom;

  //Set up blank canvas with plot and plotArea
  plot = selection.append('svg')
      .style('width', '100%')
      .style('height', '100%')
      .attr('id', 'riskmap-plot');
  plotArea = plot.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top} )`)
      .attr('id', 'riskmap-plotArea');

  // Define scales
  scales = {
    x: d3.scaleBand()
      .domain(rag_ratings.map(d => d[aes.xValue]))
      .range([0, width])
      .padding(0.03),
    y: d3.scaleBand()
      .domain(rag_ratings.map(d => d[aes.yValue]))
      .range([height, 0])
      .padding(0.03),
    col: d3.scaleOrdinal()
      .domain(rag_ratings.map(d => d[aes.colValue]))
      .range(['#96ff96', '#fbff96', '#ffd596', '#ff9696'])
  }


  // Plot axes based on those scales
  const yAxisGroup = plotArea.append('g').call(d3.axisLeft(scales.y));
  const xAxisGroup = plotArea.append('g').call(d3.axisBottom(scales.x))
    .attr('transform', `translate(0, ${height})`);

  yAxisGroup.selectAll('.domain, .tick line').remove()
  xAxisGroup.selectAll('.domain, .tick line').remove()

  yAxisGroup.append('text')
    .attr('class', 'axis-title')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(270)')
    .attr('x', -height/2)
    .attr('y', -40)
    .text(titles.yAxis)
  xAxisGroup.append('text')
    .attr('class', 'axis-title')
    .attr('x', width/2)
    .attr('y', 50)
    .text(titles.xAxis)

  // Plot rectangular areas for background of plot
  rects = plotArea.append('g')
      .attr('id', 'riskmap-rects')
    .selectAll('rect')
    .data(rag_ratings)
    .join('rect')
      .attr('x', d => scales.x(d[aes.xValue]))
      .attr('y', d => scales.y(d[aes.yValue]))
      .attr('width', scales.x.bandwidth())
      .attr('height', scales.y.bandwidth())
      .attr('fill', d => scales.col(d[aes.colValue]))
      .attr('rx', height*0.02);

      // Plot rectangular areas for background of plot
      riskPoints = plotArea.append('g')
          .attr('id', 'riskmap-points')
          .attr('fill-opacity', 0.4)


}

// Render the risk points
export const renderRisks = (selection, { aes, risks }) => {

  const t = plotArea.transition().duration(500);

  riskPoints = d3.select('#riskmap-points')
    .selectAll('g')
    .data(risks, d => d.id)
    .join(enter => {
        //Append a group to hold risk points and set at lowest risk then animate to real position
        let riskPoint = enter.append('g')
            .attr('transform', d => `translate(${ scales.x(1) }, ${ scales.y(1) })`)
          .call(enter => enter.transition(t)
              .attr('transform', d => `translate(${
                scales.x(d[aes.xValue]) + scales.x.bandwidth() * (0.5 + d3.randomUniform(-0.4, 0.4)())
              }, ${
                scales.y(d[aes.yValue]) + scales.y.bandwidth() * (0.5 + d3.randomUniform(-0.4, 0.4)())
              })`)
          );
        // Each point consists of a circle, some text and a title
        riskPoint.append('circle')
            .attr('r', 0 )
          .call(enter => enter.transition(t).attr('r', 0.1 * scales.x.bandwidth() ));
        riskPoint.append('text')
            .text(d => d.id)
            .attr('text-anchor', 'middle')
            .attr('y', '0.32em')
            .attr('class', 'risk-points');
        riskPoint.append('title')
            .text(d => d.name);
        return riskPoint
      },
      update => update,
      exit => exit.remove()
    )
      .transition(t)
      .attr('transform', d => `translate(${
        scales.x(d[aes.xValue]) + scales.x.bandwidth() * (0.5 + d3.randomUniform(-0.4, 0.4)())
      }, ${
        scales.y(d[aes.yValue]) + scales.y.bandwidth() * (0.5 + d3.randomUniform(-0.4, 0.4)())
      })`)

}
