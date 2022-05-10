var tableCounter=1;

function callBackEnd()
{
 var operand1= encodeURI ($('#operand_1').val()); 
 var operand2= encodeURI ($('#operand_2').val()); 
 var operator= encodeURI ($('#operator :selected').val());
 var tmpUrl;
 if (env==="local")
  tmpUrl=backendUrl +"/" + operator + "/result.json";
 else
  tmpUrl=backendUrl + "/" + operator + "/" + operand1 + "/" + operand2; 
 var posting = $.get(tmpUrl, {
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