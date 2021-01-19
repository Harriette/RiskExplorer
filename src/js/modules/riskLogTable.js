
const risklogTable = `
<table class="risklog-table display">
  <thead>
    <tr>
      <th rowspan="2">ID</th>
      <th rowspan="2">Level</th>
      <th rowspan="2">Name</th>
      <th rowspan="2">Description</th>
      <th colspan="4">Ratings</th>
      <th rowspan="2">Company</th>
      <th rowspan="2">Department</th>
      <th rowspan="2">Process</th>
      <th rowspan="2">Actions</th>
    <tr>
      <th>Prob</th>
      <th>Sev</th>
      <th>Rep</th>
      <th>RAG</th>
    </tr>
  </thead>
  <!-- Javascript to fill the table -->
</table>
`;



//Return a function for the callback function of the getJSON function
//This will initialise the risklog table
export const initRisklogTable = (selection, props) => {

  const {data} = props;

  //Create table using string literal
  $(selection).html(risklogTable);

  var table = $('.risklog-table').DataTable( {
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
              break;
          }
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
          return ('<button type="button" class="btn btn-primary btn-sm" value=' + data + ' data-bs-toggle="modal" data-bs-target="#addRiskModal"><i class="fa fa-pencil-alt" style="color: white;"></i></button>' +
            '<button type="button" class="btn btn-danger btn-sm" value=' + data + ' data-bs-toggle="modal" data-bs-target="#deleteRiskModal"><i class="fa fa-trash-alt"></i></button>'
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

}
