
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
