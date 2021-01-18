import { getAllRiskTables } from  './modules/getAllRiskTables2.js'
import { rag_ratings } from './modules/riskLevels2.js';
import { setupRiskMap, renderRisks } from './modules/newRiskMap4.js'
import { renderRiskDetailsPanel } from './modules/riskDetailsPanel2.js'

var selectedRiskPoint = null;

const onClickRiskPoint = (risks, id) => {
  selectedRiskPoint = id;
  render({risks})
};

const render = ({risks}) => {

  renderRisks(
    d3.select('#riskmap_graph'),
    {
      aes: {
        xValue: 'severity_rating',
        yValue: 'prob_rating',
        colValue: 'rag_rating'
      },
      risks: risks,
      onClick: onClickRiskPoint,
      selectedRiskPoint: selectedRiskPoint
    }
  )

  renderRiskDetailsPanel(
    d3.select('#risk_details_panel'),
    {
      risks: risks,
      selectedRiskPoint: selectedRiskPoint
    }
  )

}


getAllRiskTables().then(
  ([companies, departments, processes, risks]) => {

    // Render riskMap for first time
    setupRiskMap(
      d3.select('#riskmap_graph'),
      {
        aes: {
          xValue: 'severity_rating',
          yValue: 'prob_rating',
          colValue: 'rag_rating'
        },
        titles: {
          main: 'Main',
          xAxis: 'Severity Rating',
          yAxis: 'Probability Rating'
        },
        rag_ratings: rag_ratings,
      }
    );
    render({risks});


    //After 2 seconds remove a risk and see what happens
    setTimeout(() => {
      risks.pop();
      render({risks});
    }, 2000)

    //After 3 seconds remove a risk and see what happens
    setTimeout(() => {
      risks[1].prob_rating = "1";
      render({risks});
    }, 3000)

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
