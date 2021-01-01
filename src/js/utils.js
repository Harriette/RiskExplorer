
//Helper function to initialise selectors
function initSelector(selectorID, data) {


  return ( function(data) {
    console.log(data);

    var selInput = $(selectorID);
    selInput.empty();
    selInput.append($('<option></option>').attr('value', '').text('(All)'));
    selInput.prop('selectedIndex', 0);

    $.each(data, function(key, val) {
      selInput.append($('<option></option>').attr('value', val['name']).text(val['name']));
    });


  });

}
