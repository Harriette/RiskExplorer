

function initRisklogTable(tableID, data) {

  console.log(data);

  return ( function(data) {
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
      ],
      columnDefs: [ {
        targets: "Actions",
        data: null,
        defaultContent: "<button>Click</button>",
      }],

    });




  });

}
