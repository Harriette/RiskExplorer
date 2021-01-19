

//Function to add or edit a risk
export const initRiskModal = ({risks}, event) => {

  return (event) => {

    //Get risk ID from the value property of the button that triggered the modal
    //null is for adding a new risk and therefore blank form
    var riskID = event.relatedTarget.getAttribute('value');
    if (riskID !== null) {
      // Otherwise load data and input into cells
      var risk = risks.find(item => item.risk_ID === riskID);
      console.log(risk);
      $('#inputRiskID').val(risk.id);
      $('#inputRiskName').val(risk.name);
      $('#inputRiskDescription').val(risk.description);
      $('#inputProbRating').val(risk.prob_rating);
      $('#inputSevRating').val(risk.severity_rating);
      $('#inputRepRating').val(risk.reputation_rating);
      $('#selectRAGRating').val(risk.rag_rating);
      $('#inputRiskLevel').val(risk.risk_level);
      $('#form-check-input').prop('checked', risk.loss);
      $('#inputCompany').val(risk.company);
      $('#inputDepartment').val(risk.department);
      $('#inputProcess').val(risk.process);

      $('#addRiskLabel').html('Edit risk')
    } else {
      $('#addRiskLabel').html('Add a new risk')
    }

  } //End of return function
}

//Function to delete a risk
export const initDeleteRiskModal = ({risks}, event) => {

  return (event) => {
    //Get risk ID from the value property of the button that triggered the modal
    //null is for adding a new risk and therefore blank form
    var riskID = event.relatedTarget.getAttribute('value');
    if (riskID !== null) {
      // Otherwise load data and input into cells
      var risk = risks.find(item => item.risk_ID === riskID);
      $('#deleteRiskID').html(risk.id);
      $('#deleteRiskName').html(risk.name);
      $('#deleteRiskButton').val(risk.risk_ID);
    }
  } //End of return function

}
