var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

  var articles={
    'article-four':{
	title:'Article-four|Aniket yadav',
	heading:'Article-four',
	date:'20-Feb-2017',
	content:`
	<p>
	This is article-four.this is article-four.
	This is article-four.this is article-four.
	This is article-four.this is article-four.
    </p>
    <p>
	this is article-four.this is article-four.
	this is article-four.this is article-four.
	this is article-four.this is article-four.
    </p>`
},
   'article-five':{
	title:'Article-five|Aniket yadav',
	heading:'Article-five',
	date:'21-Feb-2017',
	content:`
	<p>
	this is Article-five.this is Article-five.
	this is article-five.this is Article-five.
	this is article-five.this is Article-five.
    </p>
    <p>
	this is article-five.this is article-five.
	this is article-five.this is article-five.
	this is article-five.this is article-five.
    </p>`
},
'article-six':{
	title:'Article-six|Aniket yadav',
	heading:'Article-six',
	date:'22-Feb-2017',
	content:`
	<p>
	this is Article-six.this is Article-six.
	this is Article-six.this is Article-six.
	this is Article-six.this is Article-six.
    </p>
    <p>
	this is Article-six.this is Article-six.
	this is Article-six.this is Article-six.
	this is Article-six.this is Article-six.
    </p>`
}
};


function createHTMLTemplate(data){
	var title=data.title;
	var heading=data.heading;
	var date=data.date;
	var content=data.content;
	var HTMLTemplate=`
	<!DOCTYPE html>
    <html>
    <head>
	   <title>${title}</title>
	   <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body class="article">
	   <h1><a href="/">Home</a></h1>
	   <hr>
       <h3>
         ${heading}
       </h3>
       <h4>
         ${date}
       </h4>
       <div> 
         ${content}
       </div>
    </body>
    </html>`;
    return HTMLTemplate;
}

var comment_list=[];
app.get('/comments',function(req,res){
    var comment=req.query.comment;
    comment_list.push(comment);
    res.send(JSON.stringify(comment_list));
});

var names=[];
app.get('/submit-names',function(req,res){
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});


var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});



app.get('/:articleName',function(req,res){
	var articleName=req.params.articleName;
	res.send(createHTMLTemplate(articles[articleName]));

});

  
/*
app.get('/article-one',function(req,res){
	res.sendFile(path.join(__dirname,'ui','article-one.html'));
});

app.get('/article-two',function(req,res){
	res.sendFile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three',function(req,res){
	res.sendFile(path.join(__dirname,'ui','article-three.html'));
});
*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/aniket.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aniket.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
