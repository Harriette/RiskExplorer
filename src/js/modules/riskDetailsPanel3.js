
const riskDetailsPanel = `
<h2>Risks Details</h2>
<table class="table table-sm table-striped" id="risk_details_table">
  <tr><th>ID</th><td id="risk-details-id"></td></tr>
  <tr><th>Name</th><td id="risk-details-name"></td></tr>
  <tr><th>Description</th><td id="risk-details-description"></td></tr>
  <tr><th>Probability Rating</th><td id="risk-details-prob_rating"></td></tr>
  <tr><th>Severity Rating</th><td id="risk-details-severity_rating"></td></tr>
  <tr><th>Reputation Rating</th><td id="risk-details-reputation_rating"></td></tr>
  <tr><th>RAG Rating</th><td id="risk-details-rag_rating"></td></tr>
  <tr><th>Loss</th><td id="risk-details-loss"></td></tr>
  <tr><th>Level</th><td id="risk-details-risk_level"></td></tr>
  <tr><th>Company</th><td id="risk-details-company"></td></tr>
  <tr><th>Department</th><td id="risk-details-department"></td></tr>
  <tr><th>Process</th><td id="risk-details-process"></td></tr>
</table>
`

// Set up html for panel
export const setupRiskDetailsPanel = selection => $(selection).html(riskDetailsPanel);


// Render risk details
export const renderRiskDetailsPanel = (selection, {risks, selectedRiskPoint}) => {

  if (selectedRiskPoint) {

    let risk = risks.find(risk => risk.id === selectedRiskPoint);

    $('#risk-details-id').text( risk.id);
    $('#risk-details-name').text( risk.name);
    $('#risk-details-description').text( risk.description);
    $('#risk-details-prob_rating').text( risk.prob_rating);
    $('#risk-details-sev_rating').text( risk.sev_rating);
    $('#risk-details-reputation_rating').text( risk.reputation_rating);
    $('#risk-details-rag_rating').text( risk.rag_rating);
    $('#risk-details-loss').text( risk.loss);
    $('#risk-details-risk_level').text( risk.risk_level);
    $('#risk-details-company').text( risk.company);
    $('#risk-details-department').text( risk.department);
    $('#risk-details-process').text( risk.process);
  }

}
