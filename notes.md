# links 
https://unsplash.com/
google fonts
https://fontawesome.com/
MDN
http://youmightnotneedjquery.com/
https://uigradients.com/
https://html5up.net/
https://stackshare.io/
https://www.programmableweb.com/

To read/to learn:
https://medium.com/coderbyte/learn-by-doing-the-8-best-interactive-coding-websites-4c902915287c
https://hackernoon.com/beginners-playbook-to-building-a-first-product-project-or-software-portfolio-6d6d8b69dcb
https://medium.com/coderbyte/a-guide-to-becoming-a-full-stack-developer-in-2017-5c3c08a1600c
jsdoc
https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
js module object pattern
https://www.getpostman.com/
script integrity, crossorigin
https://news.ycombinator.com/item?id=14078320

CORS
http in depth
http request types
rest api



#tips
contenu (image) ne va pas jusqu'au bas 
html {
	height: 100%;
}


# REST
7 restful routes

| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /photos/         | GET       | index  
| /photos/new         | GET       | new   
| /photos          | POST      | create   
| /photos/:id      | GET       | show       
| /photos/:id/edit | GET       | edit       
| /photos/:id      | PATCH/PUT | update    
| /photos/:id      | DELETE    | destroy  

# 3 15 HTML basics
tag = <>
element = <blah>...</blah> (ou self closing)
<b> deprecated

# 3 17 MDN
Mozilla Developer Network
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML

# 3 19 Basic Tags
Liste des éléments HTML
https://developer.mozilla.org/en-US/docs/Web/HTML/Element

strong instead of b
em instead of i


# 3 20 HTML lists
<ol>
	<li>item</li>
</ol> 
<ul>
	<li>item</li>
</ul>

# 3 23 div span
div and span are generic containers
div = block level
span = inline  


# 4 28 HTML Tables
Old style
<table border="1">
	<tr>
		<th>Name</th>
		<th>Age</th>
	</tr>
	<tr>
		<td>Rusty</td>
		<td>3</td>
	</tr>
</table>

New style (accessibilité)
<table border="1">
	<thead>
		<tr>
			<th>Name</th>
			<th>Age</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Rusty</td>
			<td>3</td>
		</tr>
	</tbody>
	<tfoot>
		...
	</tfoot>
</table>

# 4 31 Introduction to Forms

<form action="/submit-page" method="post">
	<input type="text">	
	<button>Login</button>
	<input type="submit">
</form>

form
	action
	method
input
	type
		submit
		password
		...
	name
	id
	placeholder
	required
select
	name
option
	value
textarea
	rows
	cols


# 5 CSS
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
rule:
selector {
	property: value;
}

<style></style>
<link rel="stylesheet" href="...">
<div style="..."></div>

color
	red
	#FF0000
	rgb(255, 0, 0)
	rgba(1, 2, 3, [0, 1])
url(...);

background
background-repeat
background-size

width
height
by default = only to the content (padding, border, margin are ignored)
can change what the width includes or not with box-sizein

border-width
border-style
border-color
border: px solid blue
can also use box-shadow

text-decoration
	line-through


## selectors
https://www.cheatography.com/dimitrios/cheat-sheets/the-30-css-selectors-you-must-memorize/
https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

### element
li {}

### class
.class {}

### id
#id {}

### star
*

### descendant selectors
a inside of an li  
li a {}

### adjacent selector
come after (on the same level)  
h3 + ul

### attribute selector
a[href="http://wwww.google.com"]

### nth of types
ul:nth-of-type(3){}
ul:nth-of-type(even){}


## inheritence
Property on a parent can be inherited
color, font, visibility,...
https://gist.github.com/dcneiner/1137601

## Specificity
When one element has multiple styles
more specific wins
To read https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
https://specificity.keegan.st/
Selection rule : 
-element visé directement toujours > héritage
-!important above all else
-specificité:
3 inline toujours > external
 (internal = external)
2 id
1 class + attribute + pseudo-class (:selected)
0 type + pseudo-element (::before ::first-letter)
-dernière apparition

https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance

document.querySelector('div:first-of-type')
document.querySelector('div:first-child')

## Font
font-family :;
font-size:;
font-weight:;
line-height:;
text-align;:
text-transform
	uppercase
text-decoration
	underline
	...

https://fonts.google.com/


## units
px
em. for font relative to parent's text size
rem like em but 1rem defined by the root element

## Box model
Every element has a box around it
margin border padding element

block-level = takes its own line

border
width: 
	px
	x% percent of the parent
padding:
margin:
	top right bottom left;
	top-bottom left-right;
	auto	centers for us
margin-top, -right,...: xx% le pourcentage est basé sur la largeur du parent


largeur mais avec maximum :
max-width:700px;
width:80%;

### float
take the div outside the normal float and be put to the left
todo lire cdd layout : https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction
...


## Styling
How to style from the top (need) to the bottom (implementation)

space on top/below
margin-top: 

align an element on a row to the right
float: right


# Bootstrap
container class to not take 100% of the width of the page

## navbar
to get nice spacing : <div class="container"> INSIDE the nav outer div
navbar menu and hamburger (when small width) : requires bootstrap js (and jquery)

### to reverse color
navbar-inverse	

### to keep displayed
navbar-fixed-top
navbar-fixed-bottom

careful of hidden content. Fix with (css) padding
body {
	padding-top: 60px;
}

## grid
12
always cols inside row

### sizes

4 sizes with each its layout
xs
sm
md
lg
if nothing defined for a size : take the value of the smaller defined
ex.: xs-x md-y  : sm=x lg=y


### nested grids

### glyphicon


### Thumbnail
adds a nice border + scale down to fit
to be used in grids
<div class="thumbnail">

add inside thumbnail to provide nice description
<div class="caption">

centering text 
class='center'


# JS

##Primitives
2
"h"
true
null
undefined

## String
"".length
"a"[0]
"".indexOf()

## Naming
camelCase
PascalCase
kebab-case
snake_case


prompt("...?");
	null if cancel


"2"*3 == 6
"2"+3 == 23
Number()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
== equality
=== strict equality, no conversion
Object.is (nan is nan and +0 is not -0)
null == undefined
null !== undefined

Falsey
""
0
null
Nan
Undefined

DRY

## Function

## Arrays
[0, 1, 2][4] = 4 ==> [0, 1, 2, undefined, 4]
a.length

a.push(x) add to right, returns new index
a.pop     pop from right

a.shift() pop from left
a.unshift("add to the front")

a.indexof() -1 if not found

a.slice(1, 3) like python's a[1:3]
a.slice()     copies the array

a.forEach(function(item, index, array){})

a.splice(index, nbToRemove, itemsToAdd...)
splice(x) remove from x till end
splice(x, 1) remove at x
splice(x, 1, y) replace at x with y
## loading
async load asynchronously (while parsing the html), run whenever
defer wait for the dom to be completely loadd


## Objects
{
	func: function(){this. ...},
	...
}

## Hoisting is for variable also
var salary = "1000$";
 (function () {
     console.log("Original salary was " + salary);
     var salary = "5000$";
     console.log("My New Salary " + salary);
})();

# Dom
Document Object Model

console.dir() to show the real object instead of html

document
		.head
		.body
		.links
		.URL

document.getElementById
document.getElementsByClassName
	lightweight array (no forEach,...)
	but can do [].forEach.call(l, function(){})
document.getElementsByTagName

document.querySelector
	returns the first match
document.querySelectorAll
	returns "array" (like getElementsByXXX)
	forEach exists

elem.style.xxx
	modify style (css)

elem.classList
	.add
	.remove
	.toggle
	.contains

elem.getAttribute
elem.setAttribute

elem.textContent
elem.innerHTML

elem.addEventListener("click", function(){})

event bubbling
peut être arrêté avec 
event.stopPropagation();

pour être averti des evènements sur des éléments créé dynamiquement:
-ajouter listener lors de la création
-écouter au niveau du parent (event bubbling), attention, certains éléments
 ne remontent pas (mouseenter).

click
input change
mouseover
mouseout


# JQuery
Why?
http://youmightnotneedjquery.com/
brevity
cross browser compatibility

Why not?
DOM is no longer so bad


Selector
$("#sale img.bonus")

$('h1')[0] or console.dir($('h1')[0])
	display actual element

$('x').last()...

no need to loop
note: some methods only work on the first result
e.g.:
$('ul').html()
$('a').attr('href')


like style
x.css(property, value)
var styles = {
	background-color: "red";
	background: "black";
	border: "2px solid purple";
}
$("...").css(styles)


like textContent
$('x').text();
$('x').text('new value');

like innerHTML
$('x').html()
$('x').html('new value')


retrieve/set the value of attribute
$('x').attr('src')
$('x').attr('src', 'new src')

$('h1').addClass('correct')
$('h1').removeClass('correct')
$('li').toggleClass('wrong')

value of form
$('input').val()
$('input').val('val')


Events
$('button').click(function(e){
    $(this).css('backgroundColor', 'pink')
});
attention, autant de fonctions que de boutons trouvé

keypress = a 'letter'
keydown/keyup = a key on the sheyboard (shift, a, ...)
$('input').keypress(function(e){
   console.log(e.key);	//the letter
   console.log(e.which);//the code of the key
});

call is like addEventListener
can replace keypress/keydown/...
$('li').on('click', function(e){console.log(e)})

pour gérer éléments créés dynamiquement : peut s'enregistrer au niveau du parent (une fois) pour des évenements d'enfants :
enregistre une fois au niveau du div parent pour les clicks des boutons qu'il contient :
<div>
	<button></button>	créé dynamiquement
</div>
$('div').on('click', 'button', function(){
	$(this).css('font-weight', 'bold')
})



effects
opacity then display='none'
$('div').fadeOut(1000);
$('div').fadeOut(1000, function(){
	$(this).remove();
});
$('div').fadeIn(1000);
$('div').fadeToggle(1000);

appear
$('div').slideDown(1000);
disappear
$('div').slideUp(1000);
$('div').slideToggle();





# Backend
Solutions
https://github.com/nax3t/webdevbootcamp
https://ide.c9.io/learnwithcolt/webdevbootcamp


## NPM
npm install

npm install xxx --save
add to package.json

npm init
	create a new package.json
package.json


var xxx = require("xxx")
node file.js



## Express

### route
var app = express();
app.get('/', function(req, res){
    res.send('content');
});

star router (404)
app.get('*', function(req, res){
    res.send('content');
});


order matters!
routes are evaluated in the order they were added

route parameters
app.get('/r/:subredditName', function(req, res){
    res.send('Welcome to ' + req.params.subredditName);
});


serve the directory
app.use(express.static('public'));



res.redirect('/friends');

### template
requires
npm install ejs --save

res.render
app.get('/', function(req, res){
	//it is assumed that dogs.ejs is in a subdirectory
    res.render('dogs.ejs');
})

pass values
app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing
    res.render('love.ejs', {
        thingVar: thing,
    })
})

<%= %>  returned value will be added to the html
<% %>   logic, just runs the code


<% posts.forEach(function(p){ %>
	<span>xxx</span>
    <li><%= p.title %> - <strong><%= p.author %></strong></li>
<% }); %>


If define the template engine, no need to write the file extension: posts.ejs => posts

app.set('view engine', 'ejs');
res.render('posts', {posts: posts});

include
<% include partials/header%>
in the header:
<link rel='stylesheet' href='/app.css'>
	do not forget the /xxx otherwise page in subdirs won't find it : 
	/page/this --> /page/app.css instead of /app.css


### POST
post is sent to the body
by default express doesn't give info on the body for use
need body-parser package to get a req.body

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.post('/addfriend', function(req, res){
    console.log(req.body);
    res.send('You have reached the post route')
})




# Mongo

## Install
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

sudo apt-get update
sudo apt-get install -y mongodb-org

cd ~
mkdir data
echo "mongod --dbpath=data --nojournal" > mongod
chmod a+x mongod

Now, in order to run mongod you'll first need to cd into root ~ then run ./mongod 

mongod 	deamon

mongo 	shell
show dbs
	list existing dbs
use xxx
	use the db(create if does not exists)
show collections
	show th 'tables'

## API
ODM

db.dogs.insert({name: "Rusty", breed: "Mutt"})

db.dogs.find()
db.dogs.find({name: 'Rusty'})

db.dogs.findById(id)
	xxx._id

db.dogs.update({name: 'Rusty'}, {breed: 'Labradoodle'})
	replace content (name will disappear)
db.dogs.update({name: 'Lucy'}, {$set: {breed: 'Labradoodle', isCute: true}})
	update/add content. keep existing

db.dogs.remove({breed: 'Labradoodle'})

dg.dogs.drop()
