var backendUrl="http://localhost:8080/assets/test/add.json"

function callBackEnd()
{
 var operand1= $('#operand_1').val(); 
 var operand2= $('#operand_2').val(); 
 var operator= $('#operator :selected').text();
 alert('calling backend' + operator);
 var posting = $.get(backendUrl, {
    "operand1": operand1,
    "operand2": operand2,
    "operator": operator
  });

    /* Alerts the results */
    posting.done(function(data) {
        $('#result').text('Result is ' + data['result']);
      });
      posting.fail(function() {
        $('#result').text('failed');
      });
}