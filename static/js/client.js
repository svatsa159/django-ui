function fr(){
  document.getElementById('gif').src='brain-animation.gif';
  setTimeout(update, 50);
}

function update(){
  $.ajax({
    url: "http://localhost:8000/post/",
    type: 'GET',
    success: function(res) {
      document.getElementById('logg').innerHTML+=new Date().toLocaleTimeString()+"<br>Cache and Database Updated<br>----------------------------------------------<br>";
    },
    async:false
});
}
function cr(){
  document.getElementById("images").innerHTML="";
  document.getElementById('gif').src='brain-animation.gif';
  setTimeout(send, 300);
}
function send(){
  document.getElementById('name').innerHTML="";
    document.getElementById('time').innerHTML="";
  document.getElementById('logg').innerHTML+=new Date().toLocaleTimeString()+"<br>";
  
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
  var dat;
  if(k==0){
    
    var request_time=0;
    for(var i=0;i<4;i++){
      start_time = new Date().getTime();
      $.ajax({
        url: "http://localhost:8000/get/",
        type: 'GET',
        success: function(res) {
          request_time += new Date().getTime() - start_time;
          dat=res[0].results;
        },
        async:false
    });
    
    }
    document.getElementById('name').innerHTML="With Cache : ";
    document.getElementById('time').innerHTML=request_time/4+"ms";
    document.getElementById('logg').innerHTML+="With Cache - "+request_time/4+"ms"+"<br>"+"----------------------------------------------"+"<br>";
    var objDiv = document.getElementById("log");
    objDiv.scrollTop = objDiv.scrollHeight;
    request_time=0;
  }
  else if(k==1){
    
    var request_time=0;
    for(var i=0;i<4;i++){
      start_time = new Date().getTime();
      $.ajax({
        url: "http://localhost:8000/noget/",
        type: 'GET',
        success: function(res) {
          request_time += new Date().getTime() - start_time;
          dat=res[0].results;     
        },
        async:false
    });
    
    }
    document.getElementById('name').innerHTML="Without Cache : ";
    document.getElementById('time').innerHTML=request_time/4+"ms";
    document.getElementById('logg').innerHTML+="Without Cache - "+request_time/4+"ms"+"<br>"+"----------------------------------------------"+"<br>";
    var objDiv = document.getElementById("log");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  for(var i=0;i<4;i++){
    for(var key in dat){
      var c = document.createElement("img");
      c.src=dat[key];
      document.getElementById("images").appendChild(c);
    }
  }
}
function defg(){

  let fre={"des":10};
  $.ajax({
    url: "http://139.59.63.205:8000/post/",
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
function cs(){
  document.getElementById("logg").innerHTML="";
  document.getElementById("images").innerHTML="";
}