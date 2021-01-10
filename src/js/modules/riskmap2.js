import { riskLevels } from './riskLevels.js';
import { risks } from './risks.js';


console.log(risks);

var plot = d3.select('#riskmap_graph')

var margin = {top: 80, right: 25, bottom: 30, left: 40};
var width = +plot.style('width').slice(0, -2) - margin.left - margin.right;
var height = +plot.style('height').slice(0, -2) - margin.top - margin.bottom;

plot = plot.append('svg')
  .style('width', '100%')
  .style('height', '100%')

const xValue = d => d.sev;
const yValue = d => d.prob;
const colValue = d => d.level;

const xScale = d3.scaleBand()
  .domain(riskLevels.map(xValue))
  .range([0, width])
	.padding(0.03);

const yScale = d3.scaleBand()
  .domain(riskLevels.map(yValue))
  .range([height, 0])
	.padding(0.03);


const colScale = d3.scaleOrdinal()
  .domain(riskLevels.map(colValue))
  .range(['#96ff96', '#fbff96', '#ffd596', '#ff9696']);

const plotArea = plot.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top} )`);

plotArea.append('g').call(d3.axisLeft(yScale));
plotArea.append('g').call(d3.axisBottom(xScale))
  .attr('transform', `translate(0, ${height})`);

var rects = plotArea.selectAll('rect')
  .data(riskLevels)
  .join('rect')
    .attr('x', d => xScale(xValue(d)))
    .attr('y', d => yScale(yValue(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale.bandwidth())
    .attr('fill', d => colScale(colValue(d)))
    .attr('rx', height*0.02);


//wew
