import { rag_ratings } from './riskLevels2.js';

export const renderRiskMap = function (risks) {

  console.log('Running render function');

  const xValue = d => d.severity_rating;
  const xAxisTitle = 'Severity Rating';
  const yValue = d => d.prob_rating;
  const yAxisTitle = 'Probability Rating';
  const colValue = d => d.rag_rating;

  var plot = d3.select('#riskmap_graph')

  var margin = {top: 80, right: 10, bottom: 60, left: 60};
  var width = +plot.style('width').slice(0, -2) - margin.left - margin.right;
  var height = +plot.style('height').slice(0, -2) - margin.top - margin.bottom;

  const xScale = d3.scaleBand()
  .domain(rag_ratings.map(xValue))
  .range([0, width])
  .padding(0.03);

  const yScale = d3.scaleBand()
  .domain(rag_ratings.map(yValue))
  .range([height, 0])
  .padding(0.03);

  const colScale = d3.scaleOrdinal()
  .domain(rag_ratings.map(colValue))
  .range(['#96ff96', '#fbff96', '#ffd596', '#ff9696']);

  const xAxis = d3.axisBottom(xScale)
  const yAxis = d3.axisLeft(yScale)

  plot = plot.append('svg')
    .style('width', '100%')
    .style('height', '100%')
  const plotArea = plot.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top} )`);

  const yAxisGroup = plotArea.append('g').call(yAxis);
  const xAxisGroup = plotArea.append('g').call(xAxis)
    .attr('transform', `translate(0, ${height})`);

  xAxisGroup.selectAll('.domain, .tick line').remove()
  yAxisGroup.selectAll('.domain, .tick line').remove()

  xAxisGroup.append('text')
    .attr('class', 'axis-title')
    .attr('x', width/2)
    .attr('y', 50)
    .text(xAxisTitle)
  yAxisGroup.append('text')
    .attr('class', 'axis-title')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(270)')
    .attr('x', -height/2)
    .attr('y', -40)
    .text(yAxisTitle)

  var rects = plotArea.append('g').selectAll('rect')
    .data(rag_ratings)
    .join('rect')
      .attr('x', d => xScale(xValue(d)))
      .attr('y', d => yScale(yValue(d)))
      .attr('width', xScale.bandwidth())
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colScale(colValue(d)))
      .attr('rx', height*0.02);

  var points = plotArea.append('g')
      .attr('fill-opacity', 0.4)
    .selectAll('circle')
      .data(risks)
      .join('circle')
      .attr('cx', d => xScale(xValue(d)) + xScale.bandwidth() * (0.5 + d3.randomUniform(-0.4, 0.4)()) )
      .attr('cy', d => yScale(yValue(d)) + yScale.bandwidth() * (0.5 + d3.randomUniform(-0.4, 0.4)()) )
      .attr('r', 0.1 * xScale.bandwidth() );

}
