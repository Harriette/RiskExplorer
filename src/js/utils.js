

function initRisklogTable(tableID, data) {


  return ( function(data) {
  //  console.log(data);

    var table = $(tableID).DataTable( {
      data: data,
      columns: [
        { data: 'id' },
        { data: 'risk_level' },
        { data: 'name' },
        { data: 'description' },
        { data: 'prob_rating' },
        { data: 'severity_rating' },
        { data: 'reputation_rating' },
        { data: 'rag_rating' },
        { data: 'company' },
        { data: 'department' },
        { data: 'process' },
        { data: 'risk_ID',
          render: function ( data, type, row, meta ) {
            return ('<button type="button" class="btn btn-primary btn-sm" value=' + data + '><i class="fa fa-pencil-alt" style="color: white;"></i></button>' +
              '<button type="button" class="btn btn-danger btn-sm" value=' + data + '><i class="fa fa-trash-alt"></i></button>'
            );
          }
        }

      ],

    });

  });

}


function initSelector(selectorID, message, data) {


  return ( function(data) {
    console.log(data);

    var selInput = $(selectorID);
    selInput.empty();
    selInput.append('<option selected="true" disabled>' + message + '</option>');
    selInput.prop('selectedIndex', 0);

    $.each(data, function(key, val) {
      selInput.append($('<option></option>').attr('value', val.name).text(val.name));
    });


  });

}
