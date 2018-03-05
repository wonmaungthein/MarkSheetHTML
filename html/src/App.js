import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const style = {
  background: 'lightgreen',
  paddingTop: 150,
  paddingBottom: 150,
}

const table = {
  padding: 30
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to MarkSheet HTML practice</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section style={style}>
          <p>Have you seen this <a href="https://www.youtube.com">amazing video</a> on YouTube?</p>


          <table >
            <tr>
              <th style={table}>First Name</th>
              <th style={table}>Middle Name</th>
              <th style={table}>Last Name</th>
            </tr>
            <tr>
              <td>Won</td>
              <td>Maung</td>
              <td>Thein</td>
            </tr>
          </table>

          <p>
            Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi: <q> That lad must have been born offside. </q>
          </p>

          <article>
            <h1>Famous football quotes</h1>
            <p>
              Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi:<q>"That lad must have been born offside"</q>.
            </p>
            <p>
              When criticized by John Carew, <strong>Zlatan Ibrahimovic</strong> replied: <q>"What Carew does with a football, I can do with an orange"</q>.
            </p>
            <p>
              <strong>George Best</strong> said <q>"I spent a lot of money on booze, birds and fast cars. The rest I just squandered."</q> when asked about his lifestyle.
            </p>
            <output>
              <q> (to display the result of a calculation) </q>
            </output>
            <code> Write codes </code>
          </article>

          <p>
            Let's push      this text
            with tabulations.
          </p>

          <header>header</header>
          <nav>Nav</nav>
          <footer>footer</footer>
          <blockquote>blockquote</blockquote>
          <aside>Aside</aside>
          <strong> Strong Words</strong>
          <small>Small words</small>
          <em> Emphasise</em>
          <abbr>Abbrevation</abbr>
          <a href="#" > Links </a>
          <strong> div </strong>
          <span> <em>Span </em> </span>
          <dt>dt is Defenitation terms</dt>
          <dd>dd is Defenitation discription</dd>
          <p>
            I just bought a <abbr title="Compact Disc">CD</abbr>.
          </p>

          This URL can be segmented in 3 parts:
<em>
            protocol https://</em> <em>
            domain ireallylovecats.com</em><em>
            file path gallery.html</em>


          <thead>Table head</thead>,
            <tfoot>Table footer</tfoot> and <tbody>Table body</tbody> are collections of rows.
            You can merge columns or rows by using the <strong>rowspan</strong> and <strong>colspan</strong> attribute respectively.

For example, a blog’s webpage can be divided in 4 parts:

a header that is similar on every page, and is the main navigation of the website
a main content, that changes for every page: a list of articles, a single article with comments, an about page…
a sidebar that links to monthly archives and categories
a footer for additional links to less important pages
There are some structural HTML elements you can use as containers for other elements.
The main element contains, as its name suggests, the most important content of the page, the one that defines the purpose of the page.
he aside element usually lives alongside the main and contains additional information related to the main content.
The section element allows to group
          <div>
            <input type="text" />
            <input type="checkbox" />
            <input type="radio" />
          </div>

          <p>
            The form is a block-level element. all form controls (like input, textarea or button) must appear within a form element.
            Two HTML attributes are required:

  action contains an address that defines where the form information will be sent
  method can be either GET or POST and defines how the form information will be sent

a email input <input type="email" />
            a password input <input type="password" />
            a submit button <input type="submit" />
          </p>

          <form action="/login" method="POST" />
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <input type="number" />
          <input type="tel" />
          <textarea></textarea>

          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" />

          using <strong>label </strong> is semantically more valid because they only exist within forms, and can be paired with a specific form control by using the for attribute and matching its value with the input’s id.

          <label for="first_name">First name</label>
          <input id="first_name" type="text" />

          Because it can be hard to click on a small checkbox, it is recommended to wrap a label around the checkbox and its description.
          
<label>
            <input type="checkbox" /> I agree to the terms
</label>

By default, a checkbox input is unchecked. You can mark it as checked by using the simply called checked attribute.

<label>
  <input type="checkbox" checked/> Use as my billing address
</label>

<h1>Radio button </h1>
For this form control to work, your HTML code needs to group a list of radio buttons together. This is achieved by using the same value for the name attribute:
       
<label>Marital status</label>
<label>
  <input type="radio" name="status"/>
  Single
</label>
<label>
  <input type="radio" name="status"/>
  Married
</label>
<label>
  <input type="radio" name="status"/>
  Divorced
</label>
<label>
  <input type="radio" name="status"/>
  Widowed
</label>
       
While a checkbox exists on its own, radio buttons can only appear as a list (which means having at least 2 options).

Also, clicking a checkbox is optional while choosing one of the radio buttons is mandatory. That’s why it is impossible to uncheck a radio button unless choosing a sibling option. But in the end, one of the radio buttons is always selected.
       
       
       <h1>Drop down menu</h1>
       use select tag. 

       <select>
  <option>January</option>
  <option>February</option>
  <option>March</option>
  <option>April</option>
  <option>May</option>
  <option>June</option>
  <option>July</option>
  <option>August</option>
  <option>September</option>
  <option>October</option>
  <option>November</option>
  <option>December</option>
</select>
       
<label>Which browsers do you have?</label>
<select multiple>
  <option>Google Chrome</option>
  <option>Internet Explorer</option>
  <option>Mozilla Firefox</option>
  <option>Opera</option>
  <option>Safari</option>
</select>

<h1> This is a complete sign up form</h1>

<form action="/signup" method="POST">
  <p>
    <label>Title</label>
    <label>
      <input type="radio" name="title" value="mr"/>
      Mr
    </label>
    <label>
      <input type="radio" name="title" value="mrs"/>
      Mrs
    </label>
    <label>
      <input type="radio" name="title" value="miss"/>
      Miss
    </label>
  </p>
  <p>
    <label>First name</label>
    <input type="text" value="first_name"/>
  </p>
  <p>
    <label>Last name</label>
    <input type="text" value="last_name"/>
  </p>
  <p>
    <label>Email</label>
    <input type="email" value="email"/>
  </p>
  <p>
    <label>Phone number</label>
    <input type="tel" value="phone"/>
  </p>
  <p>
    <label>Password</label>
    <input type="password" value="password"/>
  </p>
  <p>
    <label>Confirm your password</label>
    <input type="password" value="password_confirm"/>
  </p>
  <p>
    <label>Country</label>
    <select>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
      <option>Italy</option>
      <option>Japan</option>
      <option>Russia</option>
      <option>United Kingdom</option>
      <option>United States</option>
    </select>
  </p>
  <p>
    <label>
      <input type="checkbox" value="terms"/>
      I agree to the <a href="/terms">terms and conditions</a>
    </label>
  </p>
  <p>
    <button>
      Sign up
    </button>
  </p>
</form>


<basefont> defined a font for a whole HTML document</basefont>
<font> defined a typeface, a color, and a size for the text it contains</font>
<center> horizontally centered all its content</center>
<big> increased the size of the text</big>
<strike> rendered text with a strikethrough</strike>
Several HTML attributes could also be used:

bgcolor defined a background color on the element
text defined the text color
several margin attributes could be used to add space on any side of the element


<html>
  <head>
    <title>Hello World</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
  <body>
    <p>This paragraph will be red.</p>
  </body>
</html>

The color value can be inherited from an ancestor. Considering we want to alter the whole webpage, we will choose the ancestor of all HTML elements, the body tag:

body colorgrey
for body text, a line height of 1.5 times the size of the text is recommended.
for headings, a line height of 1.2 is recommended

The font property regroups (in this particular order):

font-style
font-variant
font-weight
font-size
line-height
font-family
You can thus define 6 properties through a single one:
body{` font: italic small-caps bold 16px/1.5 Arial, sans-serif;`}
The text-align property must be applied on a block-level element 
body{ `text-align: left;`}
The most used values are:
left
right
center
justify

<h1>Text decoration </h1>
.deleted{ `text-decoration: line-through;`}
Possible values:

overline
underline
line-through
<h1>
text-indent
</h1>
The text-indent property allows to add space before the first letter of the first line of a block-level element.

body{ `background-position: right bottom;`}
body{ `background-repeat: repeat-x;`} /* Only horizontally */
body{ `background-repeat: repeat-y;`} /* Only vertically */
body{` background-repeat: no-repeat;`} /* The background image will only appear once 


display: block
This will turn any element into a block element.
.menu a{` background: red; color: white;`}
<ul class="menu">
  <li>
    <a>Home</a>
  </li>
  <li>
    <a>Features</a>
  </li>
  <li>
    <a>Pricing</a>
  </li>
  <li>
    <a>About</a>
  </li>
</ul>

.menu li{ `display: inline;`}

Applying display: none; to an HTML element removes it from your webpage, as if it never existed in your code.
.hollow-man{ `visibility: hidden;`}

CSS overflow.
By applying overflow: hidden;,you can't see overflow texts.
If you want your content to overflow but still want to make it accessible, you can decide to display scrollbars by applying overflow: scroll.
A better option is use overflow: auto, 

A CSS border has 3 properties:

border-color defined by using a color unit
border-style can be solid, dashed, dotted…
border-width defined by using a size unit

It also has 4 possible sides:

border-top
border-bottom
border-left
border-right

Fluidity

In HTML, the content is King.

All block elements are fluid. They will naturally adapt their layout to accommodate their inner content:

width: 100%
a block will take up the whole width available
word wrap
if a block’s inline content doesn’t fit on a single line, it will continue on a new line
height: auto
a block’s height varies automatically to match its content’s size


<section class = 'position'>
  I'm in position relative.
  <p class ='position'>
    I'm in position absolute!
  </p>
</section>

float can only have one of these 3 values:

left and right turns an element into a floating one
none removes the floating aspect

<p>
  <img src="https://placehold.it/150x150"/>
  The bells of the neighbouring church made a jangling tumult, a cart carelessly driven smashed, amid shrieks and curses, against the water trough up the street.  Sickly yellow lights went to and fro in the houses, and some of the passing cabs flaunted unextinguished lamps. And overhead the dawn was growing brighter, clear and steady and calm.
</p>
<div>
Float = block

Clearing the float
The clear property allows to push elements after the float. It can only be applied on block elements.

<p>
  <img src="https://placehold.it/150x150"/>
  <span>He heard footsteps running to and fro in the rooms, and up and down stairs behind him</span>
</p>
</div>


<h1>Sudo class </h1>

('.selector:pseudo-class{ }')

":hover, :visited, :focus, :first-child and :last-child"

<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>

(':nth-child')

if you want to target the second child, you would use :nth-child(2):
:nth-child(odd) will target every odd element
:nth-child(even) will target every even element

The n value increments from zero 0 to the number of child elements present.

li:nth-child(3n){ 'background: hotpink;'}// every third child will be applied 

n +1 
li:nth-child(3n+1){ 'background: limegreen;'}
The 3n+1 has two parts:

3n selects every 3rd item
+1 offsets the start by 1

There are 2 types of gradients in CSS:

linear: colors go from point to another, in a straight line
radials: colors go from the center of a circle to its edges, in all directions
A gradient is considered a background image and must be used with the according property.

linear-gradient
which colors you want
where these colors must appear along the axis (at the start, middle, end, etc.)
in which direction the gradient must go

<div id='two'>A simple vertical background gradient</div>
<div id='three'>A diagonal gradient from the top left corner to the bottom right one</div>

If you want a more specific angle, you can use a value in degrees:

0deg is the default value, from top to bottom
20deg is slightly diagonal, going clockwise
90deg is like 3pm, from right to left
180deg is from bottom to top

<div id="degreeSpefic">A diagonal gradient with an angle of 20 degrees</div>

Setting specific color stops

If you don’t want colors to equally distributed, you can set specific color stop positions, using either percentages % or pixels px:

radial-gradient

While linear gradients follow a single-line axis, radial gradients spread out in all directions.
a shape: either a circle or an ellipse
a starting point: which will be the center of the circle/ellipse
an end point: where the edge of the circle/ellipse will be
<div id='radial'>This looks like the sun, doesn't it?</div>

<div id="gloomy">A gloomy day.</div>


By default, the shape will end at the farthest corner. You can either choose:

closest-side
closest-corner
farthest-side
farthest-corner

<div id="hover">Hover this green star in the sky to see it expand.</div>

<button class='button-grey'> something </button>
<button class='button-yellow'>Yellow </button> 
<button class='button-orange'/> 
<button class='button-red   '/> 
<button class='button-purple'/> 
<button class='button-blue'/> 
<button class='button-green'/> 


transition-property: which properties to animate
transition-duration: how long the animation lasts
transition-timing-function: how the intermediate states are calculated
transition-delay: to start the animation after a certain amount of time

<a id='transition'>This is big button</a>

transition-duration
A transition’s duration is the only CSS property needed to create a transition. It can either be set in seconds 2s or milliseconds 100ms.
        

        <a> With transition </a>
        <a > With fast transition </a>
        <a >With slow transition</a>
        
        <h3 class="ex-trans">transition </h3>
        <h3 class="ex-trans.with-background-transition">with background transition </h3>
        <h3 class="ex-trans.with-all-transition"> with all transition </h3>

        
        transition-timing-function


<main>
  <p><strong>Ease</strong>: slow start, fast middle, slow end</p>
  <div class="ease"></div>
  <p><strong>Linear</strong>: constant speed</p>
  <div class="linear"></div>
  <p><strong>Ease In</strong>: slow start, fast end</p>
  <div class="ease-in"></div>
  <p><strong>Ease Out</strong>: fast start, slow end</p>
  <div class="ease-out"></div>
  <p><strong>Ease In Out</strong>: like ease, but with more pronounced acceleration/deceleration curves</p>
  <div class="ease-in-out"></div>
</main>

css Animation properties

name: the animation’s name
duration: how long the transition lasts
timing-function: how the intermediate states are calculated
delay: to start the animation after a certain amount of time
iteration-count: how many times the animation should be performed
direction: if the animation should be reversed or not
fill-mode: what styles are applied before the animation starts and after it ends

<button class="loading-button"> This is Loading button </button>

@keyframes

Before applying animations to HTML elements, you need to write animations using keyframes. Basically, keyframes are each intermediate step in an animation. They are defined using percentages:

0% is the first step of the animation
50% is the step halfway through the animation
100% is the last step
You can also use the keywords from and to instead of 0% and 100% respectively.

<h1 class="helloanimi"> Hello Animation </h1>

Animation direction
The animation’s direction defines in which order the keyframes are read.

normal: starts at 0%, ends at 100%, starts at 0% again
reverse: starts at 100%, ends at 0%, starts at 100% again
alternate: starts at 0%, goes to 100%, goes to 0%
alternate-reverse: starts at 100%, goes to 0%, goes to 100%
It’s easier to visualise if the animation’s iteration count is set to infinite.

CSS transforms are a collection of functions that allow to shape elements in particular ways:

translate: moves the element along up to 3 axis (x,y and z)
rotate: moves the element around a central point
scale: resizes the element
skew: distorts the element
transform defines which transform function to use (translate, rotate, scale…)
transform-origin allows to modify the origin point of a transformation (works like background positions)
transform-style is for 3d settings

The translate() function allows to move an element across the plane (on the x and y axis). It accepts either:

1 parameter: moves the element along the x axis
2 parameters: first value is for the x axis, second for the y one

rotate() accepts only 1 parameter, which is an angle value defined in degrees deg, gradians grad, radians rad or turns turn (with 1 turn being equivalent to a full circle).
<button class='rotating'>Rotating </button>


The scale() function allows to resize an element. It can either expand or shrink it. The function accepts either:

1 parameter: the element is resized uniformily in height and width
2 parameters: the first value resizes the element horizontally, the second one vertically

1: the element retains its original size
2: the element doubles in size
0.5: the element is half of its size
0: the element basically disappears (as its height and width are equal to zero)
-1: the element is mirrored


<button class="square"> square </button>
<button class="circle"> This circle </button> 
        </section>
      </div>
    );
  }
}

export default App;
