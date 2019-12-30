$(document).ready(function(){
    $.ajax({
      type:'GET',
      url:'data.json',
      dataType: 'json',
      success: jsonParser
    });
  });
  
    function jsonParser(json) {
      $.getJSON('data.json',function(data){
            console.log(data.title);
      });
    }
    