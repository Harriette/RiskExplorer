
//Helper function to initialise selectors
function initComponents(selectorID, autocompleteID, formClass) {


  return ( function(data) {
    console.log(data);

    var selInput = $(selectorID);
    selInput.empty();
    selInput.append($('<option></option>').attr('value', '').text('(All)'));
    selInput.prop('selectedIndex', 0);

    var availableOptions = [];

    $.each(data, function(key, val) {
      // Add option to selector
      selInput.append($('<option></option>').attr('value', val['name']).text(val['name']));
      // Add option to autocomplete list
      availableOptions.push(val['name'])
    });

    $( autocompleteID ).autocomplete({
      source: availableOptions,
      appendTo: formClass
    });


  });

}


//Helper function to initialise selectors
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
