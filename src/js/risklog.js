
//Helper function to initialise selectors
function initSelector(selectorID, data) {


  return ( function(data) {
    console.log(data);

    var selInput = $(selectorID);
    selInput.empty();
    selInput.append($('<option></option>').attr('value', '').text('(All)'));
    selInput.prop('selectedIndex', 0);

    $.each(data, function(key, val) {
      selInput.append($('<option></option>').attr('value', val.name).text(val.name));
    });


  });

}


//Return a function for the callback function of the getJSON function
//This will initialise the risklog table
function initRisklogTable(tableID, data) {

  return ( function(data) {
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
          data: 'rag_rating' },
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
    });


    $('#selectCompany').change(function(){
      table.column('company:name').search( $(this).val() ).draw();
    })

    $('#selectDepartment').change(function(){
      table.column('department:name').search( $(this).val() ).draw();
    })

  });

}
