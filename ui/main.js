var button=document.getElementById('counter');

button.onclick=function(){
  //create a request object
 var request=new XMLHttpRequest();
//capture response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE){
   //take some action
      if(request.status===200){
        var counter=request.responseText;
        var span=document.getElementById('count');
            span.innerHTML=counter.toString();
      }
    }
   };
   //make a request

   request.open('GET','http://localhost:8080/counter',true);
   request.send();
};



var submit=document.getElementById('submit_btn');

submit.onclick=function(){
  //create a request object
 var request=new XMLHttpRequest();

	request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE){
   //take some action
      if(request.status===200){
        var names=request.responseText;
        names=JSON.parse(names);
         
            var list='';
            for(var i=0;i<names.length;i++)
             {
             list+='<li>'+names[i]+'</li>';
             }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list;  
          
      }
    }
    
   };
   //make a request
   
    var nameinput=document.getElementById('name');
     
     var name=nameinput.value;
    if(name.length!=0){
    request.open('GET','http://localhost:8080/submit-names?name='+name,true);
    request.send();
  }
  
};
 

 
 
 
var submit_comment=document.getElementById('submit-cmt');
submit_comment.onclick=function(){
  //create a request object
 var request=new XMLHttpRequest();

  request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE){
   //take some action
      if(request.status===200){
        var comment_list=request.responseText;
        comment_list=JSON.parse(comment_list);
         
            var comments='';
            for(var i=0;i<comment_list.length;i++)
             {
             comments+='<hr><li>'+comment_list[i]+'</li>';
             }
            var ol=document.getElementById('comment-list');
            ol.innerHTML='<h3>See comments</h3>'+comments;  
          
      }
    }
    
   };
   //make a request
   
    var commentinput=document.getElementById('comment');
    var comment=commentinput.value;
    if(comment.length!=0){
    request.open('GET','http://localhost:8080/comments?comment='+comment,true);
    request.send();
  }
};
 


