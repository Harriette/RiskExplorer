

//Initiate modal to add or edit a risk
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
      $('#inputRiskID').val('');
      $('#inputRiskName').val('');
      $('#inputRiskDescription').val('');
      $('#inputProbRating').val('');
      $('#inputSevRating').val('');
      $('#inputRepRating').val('');
      $('#selectRAGRating').val('');
      $('#inputRiskLevel').val('');
      $('#form-check-input').prop('checked', '');
      $('#inputCompany').val('');
      $('#inputDepartment').val('');
      $('#inputProcess').val('');

      $('#addRiskLabel').html('Add a new risk')
    }

  } //End of return function
}

//Initiate modal to delete a risk
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


//Function to validate a new risk
const validateRisk = ({risks}) => {

  console.log('Validating risks');

  //Check ID is filled in and it does not refer to an already used ID
  var testValue = $( '#inputRiskID' ).val();
  if (testValue === '') {
    alert('Must enter a risk ID!');
    return false;
  } else if ( $('#addRiskForm').hasClass('new-risk') ) {
    //If it is filled in and entering a new risk, then it cant repear risk ID
    //Get already used IDs
    var check = risks.find(item => item.id === testValue);
    if ( typeof(check) !== 'undefined' ){
      alert('Cannot use an existing risk ID!');
      return false;
    }
  }

  //Check name is filled in
  var testValue = $( '#inputRiskName' ).val();
  if (testValue === '') {
    alert('Must enter a risk name!');
    return false;
  }

  //Check Company is filled in
  var testValue = $( '#inputCompany' ).val();
  if (testValue === '') {
    alert('Must enter a company name!');
    return false;
  }

  // Otherwise return true
  return true;
}


// Function to add new risk record to the database
export const addRisk = ({risks}) => {

  //Validate form data
  if( !validateRisk({risks}) ) {return};

  //Submit form data and then reload page if successful
  var riskData = $( '#addRiskForm' ).serialize();
  $.ajax({
    url: '../../common/addRisk.php',
    type: 'POST',
    data: riskData,
    cache: false,
    success: function(data) {
      location.reload(true)
    }
  });
}


//Function to delete a risk
export const deleteRisk = () => {

    //Submit form data and then reload page if successful
  $.ajax({
    url: '../../common/deleteRisk.php',
    type: 'POST',
    data: 'id=' + $('#deleteRiskButton').val(),
    cache: false,
    success: function(data) {
      location.reload(true)
    }
  });
}
