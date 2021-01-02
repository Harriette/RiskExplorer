
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
      selInput.append($('<option></option>').attr('value', val['name']).text(val['name']));
      availableOptions.push(val['name'])
    });

    $( autocompleteID ).autocomplete({
      source: availableOptions,
      appendTo: formClass
    });


  });

}
