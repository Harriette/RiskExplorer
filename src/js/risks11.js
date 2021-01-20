import { getAllRiskTables } from  './modules/getAllRiskTables2.js'
import { rag_ratings } from './modules/riskLevels2.js';
import { setupRiskMap, renderRisks } from './modules/newRiskMap4.js'
import { setupRiskDetailsPanel, renderRiskDetailsPanel } from './modules/riskDetailsPanel3.js'
import { initRisklogTable } from './modules/riskLogTable2.js'
import { initRiskModal, initDeleteRiskModal, addRisk, deleteRisk } from './modules/riskModals2.js'

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


// Load tables from database and then initialise components
getAllRiskTables().then(
  ([companies, departments, processes, risks]) => {


    // Initialise behaviour when showing module to load up selected risk if necessary
    $("#addRiskModal").on('show.bs.modal', initRiskModal({risks}) );
    $("#addRiskForm").submit(({risks}) => {
      addRisk({risks});
      return false;
    });

    $("#deleteRiskModal").on('show.bs.modal', initDeleteRiskModal({risks}) );
    $("#deleteRiskForm").submit(function(event){
      deleteRisk();
      return false;
    });


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
    setupRiskDetailsPanel('#risk_details_panel');
    render({risks});

    // Render risklog table
    initRisklogTable(
      '#table-risklog',
      {
        data: risks
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



$("#addRiskModal").on('show.bs.modal', initRiskModal );

$("#deleteRiskModal").on('show.bs.modal', initDeleteRiskModal );

});
*/
