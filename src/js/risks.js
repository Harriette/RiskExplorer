import { getAllRiskTables } from  './modules/getAllRiskTables.js'
import { rag_ratings } from './modules/riskLevels2.js';
import { riskMap } from './modules/newRiskMap.js'

getAllRiskTables().then(
  ([companies, departments, processes, risks]) => {



    riskMap(
      d3.select('#riskmap_graph'),
      {
        aes: {
          xValue: 'severity_rating',
          yValue: 'prob_rating',
          colValue: 'rag_rating'
        },
        titles: {
          main: 'Main',
          xAxis: 'X Axis',
          yAxis: 'Y Axis'
        },
        rag_ratings: rag_ratings,
        risks: risks
      }
    );


  }
);



/*
var risks;
var companies;
var departments;
var processes;

$(document).ready( function () {

$.getJSON('common/get_tables.php', 'table=companies', initCompanies );

$.getJSON('common/get_tables.php', 'table=departments', initDepartments );

$.getJSON('common/get_tables.php', 'table=processes', initProcesses );

$.getJSON('common/get_risks.php', initRisklogTable('#risklog-table') );

$("#addRiskForm").submit(function(event){
addRisk();
return false;
});

$("#deleteRiskForm").submit(function(event){
deleteRisk();
return false;
});

$("#addRiskModal").on('show.bs.modal', initRiskModal );

$("#deleteRiskModal").on('show.bs.modal', initDeleteRiskModal );

});
*/
