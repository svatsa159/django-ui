function refresh(){

}
function send(){
  document.getElementById('logg').innerHTML+=new Date().toLocaleTimeString()+"<br>";
  document.getElementById('gif').src='brain-animation.gif';
  var start_time = new Date().getTime();
  var k=0;
  var k1=0;
  var ele = document.getElementsByName('choice');
  for(i=0;i<ele.length;i++){
      if(ele[i].checked){
        k=i;
        console.log(k);
      }
  }
  var ele1 = document.getElementsByName('choice1');
  for(i=0;i<ele1.length;i++){
      if(ele1[i].checked){
        k1=i;
        console.log(k1);
      }
  }

  if(k==0){
    
    var request_time=0;
    for(var i=0;i<10;i++){
      start_time = new Date().getTime();
      $.ajax({
        url: "http://139.59.63.205:8000/get/",
        type: 'GET',
        success: function(res) {
          request_time += new Date().getTime() - start_time;
               
        },
        async:false
    });
    
    }
    document.getElementById('name').innerHTML="With Cache : ";
    document.getElementById('time').innerHTML=request_time/10+"ms";
    document.getElementById('logg').innerHTML+="With Cache - "+request_time/10+"ms"+"<br>"+"----------------------------------------------"+"<br>";
  }
  else if(k==1){
    
    var request_time=0;
    for(var i=0;i<10;i++){
      start_time = new Date().getTime();
      $.ajax({
        url: "http://139.59.63.205:8000/noget/",
        type: 'GET',
        success: function(res) {
          request_time += new Date().getTime() - start_time;
               
        },
        async:false
    });
    
    }
    document.getElementById('name').innerHTML="Without Cache : ";
    document.getElementById('time').innerHTML=request_time/10+"ms";
    document.getElementById('logg').innerHTML+="Without Cache - "+request_time/10+"ms"+"<br>"+"----------------------------------------------"+"<br>";
  }
  
}
function defg(){

  let fre={"des":10};
  $.ajax({
    url: "http://localhost:8000/post/",
    type: 'POST',
    data: {
      fre : fre,
      csrfmiddlewaretoken: '{{ csrf_token }}'
    },
    success: function(res) {
      var request_time = new Date().getTime() - start_time;
      // document.getElementById('name').innerHTML="Without Cache: ";
      // document.getElementById('time').innerHTML=request_time+"ms";
      console.log(request_time);
      
    }
});
}