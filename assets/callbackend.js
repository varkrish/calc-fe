var backendUrl="http://localhost:8080/assets/test/add.json"
var tableCounter=1;
function callBackEnd()
{
 var operand1= $('#operand_1').val(); 
 var operand2= $('#operand_2').val(); 
 var operator= $('#operator :selected').text();
 var posting = $.get(backendUrl, {
    "operand1": operand1,
    "operand2": operand2,
    "operator": operator
  });

    /* Alerts the results */
    posting.done(function(data) {
        $('#result').text('Result is ' + data['result']);
        addResultToTable(data);
      });
      posting.fail(function() {
        $('#result').text('failed');
      });
}

function addResultToTable(data)
{
  var responses = $('#calc_history').DataTable();
  responses.row.add( [
          tableCounter++,
          data['input']['operand_1'],
          data['input']['operand_2'],
          data['input']['operator'],
          data.result,
          "Unknown"
      ] ).draw( true );
}