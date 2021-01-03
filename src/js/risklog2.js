
// Helper function to initialise company based components
// Selector in Sidebar
// Input autocomplete in Add Risks Modal
function initCompanies(data) {

  // Store in global variable
  companies = data;

  // Initialise options on selector
  var selInput = $('#selectCompany');
  selInput.empty();
  selInput.append($('<option></option>').attr('value', '').text('(All)'));
  selInput.prop('selectedIndex', 0);

  // Initialise options for autocomplete in risks modal
  var availableOptions = [];

  // Loop though array adding options
  $.each(data, function(key, val) {
    // Add option to selector
    selInput.append($('<option></option>').attr('value', val['name']).text(val['name']));
    // Add option to autocomplete list
    availableOptions.push(val['name'])
  });

  // Initialise options for autocomplete in risks modal
  $( '#inputCompany' ).autocomplete({
    source: availableOptions,
    appendTo: '.addRisk'
  });

}


//Helper function to initialise selectors
// Selector in Sidebar
// Input autocomplete in Add Risks Modal
function initDepartments(data) {

  // Store in global variable
  departments = data;

  // Initialise options on selector
  var selInput = $('#selectDepartment');
  selInput.empty();
  selInput.append($('<option></option>').attr('value', '').text('(All)'));
  selInput.prop('selectedIndex', 0);

  // Initialise options for autocomplete in risks modal
  var availableOptions = [];

  // Loop though array adding options
  $.each(data, function(key, val) {
    // Add option to selector
    selInput.append($('<option></option>').attr('value', val['name']).text(val['name']));
    // Add option to autocomplete list
    availableOptions.push(val['name'])
  });

  // Initialise options for autocomplete in risks modal
  $( '#inputDepartment' ).autocomplete({
    source: availableOptions,
    appendTo: '.addRisk'
  });

}


//Return a function for the callback function of the getJSON function
//This will initialise the risklog table
function initRisklogTable(tableID, data) {

  return ( function(data) {

    risks = data;

    var table = $(tableID).DataTable( {
      data: data,
      columns: [
        { name: 'id',
        data: 'id' },
        { name: 'level',
        data: 'risk_level'},
        { name: 'name',
        data: 'name'},
        { name: 'description',
        data: 'description' },
        { name: 'prob',
        data: 'prob_rating' },
        { name: 'sev',
        data: 'severity_rating' },
        { name: 'rep',
        data: 'reputation_rating' },
        { name: 'rag',
        data: 'rag_rating',
        render: function ( data, type, row, meta ) {
          switch (data) {
            case '1':
            return('G')
            break;
            case '2':
            return('Y')
            break;
            case '3':
            return('A')
            break;
            case '4':
            return('R')
            break;            }
          }
        },
        { name: 'company',
        data: 'company' },
        { name: 'department',
        data: 'department' },
        { name: 'process',
        data: 'process' },
        { name: 'risk_ID',
        data: 'risk_ID',
        render: function ( data, type, row, meta ) {
          return ('<button type="button" class="btn btn-primary btn-sm" value=' + data + '><i class="fa fa-pencil-alt" style="color: white;"></i></button>' +
          '<button type="button" class="btn btn-danger btn-sm" value=' + data + '><i class="fa fa-trash-alt"></i></button>'
        );
      }
    }
  ],
  createdRow: function(row, data, dataIndex) {
    switch (data['rag_rating']) {
      case '1':
      $(row).addClass('green')
      break;
      case '2':
      $(row).addClass('yellow')
      break;
      case '3':
      $(row).addClass('amber')
      break;
      case '4':
      $(row).addClass('red')
      break;
    }
  }
});

$('#selectCompany').change(function(){
  table.column('company:name').search( $(this).val() ).draw();
})

$('#selectDepartment').change(function(){
  table.column('department:name').search( $(this).val() ).draw();
})

// Autocomplete for risk modal
var availableRiskIDs = [];
$.each(data, function(key, val) {
  availableRiskIDs.push(val['id'])
});

$( '#inputRiskID' ).autocomplete({
  source: availableRiskIDs,
  appendTo: '.addRisk'
});

//Avoid values for risk ID
$( '#inputRiskID' ).on('change', function() {
  $(this).avoidValues(risks, 'id', $(this).val());
});


}); //End of return

}


//Add new record to database
function addRisk() {
  //alert("Adding risk");
  validateNewRisk();

  var riskData = $( '#addRiskForm' ).serialize();
  console.log(riskData);

  $.ajax({
    url: 'common/addRisk.php',
    type: 'POST',
    data: riskData,
    cache: false,
    success: function(data) {
      console.log(data);
    }

  });

}


function validateNewRisk() {

  console.log('Validating risks');

  //Check ID is filled in and it does not refer to an already used ID
  //Get already used IDs
  // Convert to upper case
  testValue = $( '#inputRiskID' ).val().toUpperCase();
  $( '#inputRiskID' ).val(testValue);

  if (testValue === '') {
    alert('Must enter a Risk ID!');
    return false;
  } else {
    var check = risks.find(item => item.id === testValue);
    if ( typeof(check) !== 'undefined' ){
      alert('Cannot use an existing Risk ID!');
      return false;
    }
  }


}

$.fn.avoidValues = function(json, lookIn, lookFor) {

  return this.each( function() {
    var check = json.find( item => item[lookIn] === lookFor);
    if ( typeof(check) !== 'undefined' ) {
      $(this).addClass('form-input-error ');
    } else {
      $(this).removeClass('form-input-error ');
    }

  });  // End of return

}  //End of function
