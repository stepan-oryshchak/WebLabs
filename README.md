# WebLabs
Web Laboratory works
1. Simple landing page

Description: Create a landing page following the given design (Figma).
Requirements:
Use of semantic tags (<header>, <nav>, <ul>, <footer>, etc.) wherever is necessary 
All fonts, colour palette, elements sizes must strictly match the design.
Pixel perfect is also not required, BUT your website should visually match the design template (i.e. If the element is horizontally centred on the design, it should look centred on the website)
All class names must not be meaningless (i.e. class=”myClass”) and should follow the same naming convention, preferably BEM, but you could come up with your own (just be consistent)
Basic cross-browser support (website should look correctly on last versions of modern browsers (Chrome, Safari, Edge)
For now, responsiveness is not required.

P.S If your semester project has a landing website that satisfies the requirements, then you could skip this work by bringing your website for an assessment.
Note: The above goes only for those students. who were actually responsible for the website development. The whole team cannot use the right to skip this work!

A website example (from Live coding): https://github.com/NazarGorokhivskiy/LandingForLiveCoding

LIVE CODING LINK (YouTube video)
https://youtu.be/-X-XTeDaCmo

Variant
Design template link
1
https://www.figma.com/file/CKE7rSZvwWAckhsFpQLfZW/LabWork1-V1
2
https://www.figma.com/file/XHYmp9yKTxcOQD5zFAbKQH/LabWork1-V2
3
https://www.figma.com/file/vwiwu6GnDphlI25vncvl3F/LabWork1-V3
4
https://www.figma.com/file/pRfvOqsPgu7HrlMPgLKkto/LabWork1-V4
5
https://www.figma.com/file/bW1PzYlXgABwctUobkRAyA/LabWork1-V5
6
https://www.figma.com/file/wmMTQTdBymNHxX8ew0mG45/LabWork1-V6
7
https://www.figma.com/file/iJD99BqtY8vzmZdrXbZOCc/LabWork1-V7
8
https://www.figma.com/file/fJKhikm2WvdbmetEvibfhN/LabWork1-V8
9
https://www.figma.com/file/XT2jhcwmHBGxAjIBJsMnH0/LabWork1-V9
10
https://www.figma.com/file/ZM6o4UFoZUq9Kup8NjV94p/LabWork1-V10


2. Advanced landing

Description: Improve a landing page following the given design (same as previous) by adding full responsiveness and some animation.
Requirements:
The website should be partly responsive: 
Required: for 320px (iPhone 5s)  2560px (4K screens). 
Hint: for extra-large screen width, you can just fit website content inside a previously set container for the regular screen width and centre it horizontally.
The header should collapse to a hamburger on small screens
The website must contain animations (at least 3). Can be made in any possible way, preferably with css properties (animation/transition).
Your project should be logically structured (all your CSS can’t be in just one-two files)
All of the previous work requirements must be kept.

P.S If your semester project has a landing website that satisfies the requirements, then you could skip this work by bringing your website for an assessment.
Note: The above goes only for those students, who were actually responsible for the website development. The whole team cannot use the right to skip this work!

A website example (from Live Coding): https://github.com/NazarGorokhivskiy/LandingForLiveCoding

LIVE CODING LINK (YouTube video)
https://youtu.be/-xBxSv51TAw


3. CRUD Javascript App: View Page

Description: In this work, you have to make a simple presentation part of a website - View Page (You can find the template of the page by following the link - https://wireframepro.mockflow.com/view/lviv-iot-crud-js-app

For your blocks you must use data from your java/python project class.

In case you don’t have a data from previous year, you should choose any free task from this link: 
https://docs.google.com/document/d/1RW9PpalOlHn-nVIi8kbCr71vu_XLNsjj4TKpTdBnZ-w/edit?usp=sharing

Then using JavaScript, you need to implement the following operations on your data (it is up to you to decide which field should be used for each of the operations): 
Sort of your items option
Search option 
Count total amount of some of the field 
(e.g total price of all cars)

Requirements:
Responsiveness absolutely not required.
Styling is not important at all. Is up to you.

Our recommendations and tips:
use JS Array methods: map(), sort(), filter(), reduce()
use native JS for any DOM operations (querySelector | findById | insertAdjacentHTML | etc)
a website example from live coding
Working with DOM & JS Array methods project
https://github.com/bradtraversy/vanillawebprojects/tree/master/dom-array-methods
useful projects examples


LIVE CODING LINK (YouTube video)
https://youtu.be/E4qeqHceD-E

4. CRUD Javascript App: Create/Edit Pages

Description: In this work, you need to continue working and add two new parts to your website - Create & Edit Pages (You can find the template of these pages by following the link)

Update/Delete operations are not required for this work!

Also you must validate the forms using HTML attributes (inputs must be configured for your data format).
If incorrect data is entered in the inputs, you must use JavaScript to inform the user with modal windows or just plain alert() function.

Bonus points are provided for this work, if you implement a styled modal window that will work with JavaScript.

Requirements:
Responsiveness absolutely not required.
Styling is not important at all. Is up to you.

Our recommendations and tips:
a website example from live coding

LIVE CODING LINK (YouTube video)
https://youtu.be/E4qeqHceD-E

5. CRUD Javascript App: Backend

Description: In the last part of working on the website you have to implement all Create/Read/Update/Delete operations which must be made via the corresponding HTTP methods in your REST API.

Important. You don't have to make a backend from the beginning - connect an existing one that you worked on in the first year.
If you don’t have a backend server, you should create a new REST API using any preferred technology.

Guide for creating Node.js server, if you would like also to try JavaScript as a backend language >>> [LINK]

Our recommendations and tips:
Working with REST API with fetch() link (POST method example)
a website example from live coding

LIVE CODING LINK (YouTube video)
https://youtu.be/jaRmBtmP2TA

NOTE: CORS error solutions

How to enable CORS in Python Flask server
Install Flask-Сors by running - pip install -U flask-cors. 

This package exposes a Flask extension which by default enables CORS support on all routes, for all origins and methods. It allows parameterization of all CORS headers on a per-resource level. The package also contains a decorator, for those who prefer this approach.

Initialize the Flask-Cors extension with default arguments in order to allow CORS for all domains on all routes.

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

You can also use decorator @cross_origin() to allow CORS on a given route

@app.route("/")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"
That’s all! Flask-CORS documentation - https://flask-cors.readthedocs.io/en/latest/
Universal solution (only if previous solutions didn’t work or aren’t mentioned above)

Вирішення проблеми за допомогою плагіна Chrome:
Переходимо за посиланням https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf та натискаємо “Додати в Chrome”

Натискаємо на значок “Extensions” у правому верхньому куті (виглядає як фрагмент пазлу) і вибираємо CORS та закріплюємо його (для зручності)

Має з’явитися іконка CORS біля “Extensions”
	
Натискаємо “Toggle On/Off” (тепер іконка має стати різнокольоровою)


Натискаємо “Open options page” і вибираємо таку конфігурацію


Помилки, пов’язані з CORS, мали би зникнути


Single Page App with React.js (6+)
6th work - Landing (Home) page with React.js
7th work - Items list (Catalog) page. React Routing
8th work - Item page. Adding interactivity to a website.
9th work - Making everything work. (connecting to REST API)
10th work - Cart page (Items list). First look at Redux
11th work - Cart page (Shipping form) with validation (+ Formik)

Description: For all of this works, you have to create a SPA(Single Page Application) E-commerce platform with the following pages: Home, Catalog, Item, Cart, using React.js library and your REST API.

Note: You probably have to extend your existing backend app with a bunch of new features, so choose backend tech stack wisely!

General requirements for all next works:
The backend can be implemented from scratch, but we recommend extending the project you used for 3-5 works.
All of the pages have to be made with React.js and all interaction should work properly (without many visible issues)
Crossbrowserness / Responsiveness are not required, but at least latest versions of Chrome should be supported (so we can check your works on our systems)
UX: All pages should stick to the following wireframes. Design and layout of some elements is totally up to you, but if the element is presented on the wireframe, you should implement it as well
https://wireframepro.mockflow.com/view/lviv-iot-react-app
UI (Design, css techniques etc.):
Is totally up to you (external CSS/SCSS files / styled-components / react-bootstrap / MaterialUI / etc.)
But choose at least one.


A website example (from Live Coding):
https://github.com/NazarGorokhivskiy/PureJSDragNDrop
6. React.js: Home page

Description: Start creating your React App with a simple Home page (see the link to wireframe above). Your e-commerce app subject is about your entities from previous (3-5) works.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)


Requirements: 
You have to use only React.js library for all of your mark-up. Which means - your index.html file shouldn’t be touched.
Use create-react-app tool for creating base of your project
https://github.com/facebook/create-react-app
Your Home page should follow the wireframe, i.e all of the elements ( header, navigation, footer etc. ) from wireframes must be presented on your website.
Design: You have to use CSS styling or/and component libraries. Don't overthink it, use your imagination for UI, BUT the work with almost no styling is unacceptable.
Functionality: For this work nothing but view only part is required. Any interaction (links/buttons) is not necessary, but you will have to complete them in your next labs.
Code style: 
Project structure: Your UI elements should be logically separated into React components (one file for each component) - at least 5 component files are required. In other words, you can’t just put all your JSX into 1-2 files. 
Use Functional components instead of Class components
https://uk.reactjs.org/docs/components-and-props.html


LIVE CODING LINK (YouTube video)
https://youtu.be/aEp5Ssg8m6c

7. React.js: Catalog page

Description: Continue work on your React App by adding a page with Items list (see the link to wireframe of Catalog page above).


Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements: 
All of the requirements for previous React.js works should be kept.
Code style: 
Use array.map() method for rendering your items list
Routing (switching between pages) should work now. 
Use react-router-dom library: https://reactrouter.com/web/guides/quick-start
All UI elements (buttons / select) should have corresponding React components (PrimaryButton.jsx / Select.jsx  etc.)
Functionality (filter / search / view more) is still not required (you have to complete it on next works)

8. React.js: Item page

Description: Continue work on your React App by adding a page for  your Item (see the link to wireframe of Item page above). Also, now, you have to make all your previous pages (Home & Catalog) more interactive.


Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements: 
All of the requirements for previous React.js works should be kept.
Code style: 
Your items should be stored inside the state or context (your choice) of your page
https://uk.reactjs.org/docs/hooks-state.html
https://uk.reactjs.org/docs/hooks-reference.html#usecontext
For your state management use useState() inside Functional Component  instead of this.state and Class component
If you decided to use context, use useContext() hook instead of Context.Consumer
https://www.robinwieruch.de/react-usecontext-hook
Functionality (IMPORTANT):
Home page: “View more” button should display more elements on the same page Tip: Elements can be just random paragraph & heading, use your imagination ;)
Catalog page: You should be able to filter your items list, by applying different filters by item's properties (i.e size/color/type)
Catalog page: Search by any text property option should also work
Catalog & Item pages: “View more” action on every item should refer to corresponding Item page, with correct information about item (get the info from your state/context)

9. React.js: Connecting to REST API

Description: Finally! Now, you are about to put a final touches on all pages you created - implement interaction with your REST API server.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Backend - just as discussed before, can be the one you used for your 3-5 work or a new one created from scratch. Tech stack - absolutely up to you. 


Requirements: 
All of the requirements for previous React.js works should be kept.
Code style: 
For any http request - use axios library
https://github.com/axios/axios#installing
All your API functions should be separated into single file (or folder, if you want) - just like you saw in Live coding for 5 lab with fetch() function
Functionality: 
On Catalog Page - all items should now be fetched from your backend with GET method (using axios)
Search with filters - should also be implemented with GET request (search by text field can be left as it is)
Hint: pass filters as url parameter
Before response from your GET method is received you have to display a Spinner(Loader component) to the user. Something like this: https://projects.lukehaas.me/css-loaders/

10. React.js: Redux: Cart page (shopping cart)

Description: You are on your way to finishing this insane project… Create the first of three cart pages - Shopping cart page.
Also, here you meet one of the most popular React library - Redux.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements: 
All of the requirements for previous React.js works should be kept.
Functionality:
Item page: “Add to cart” action should be implemented using Redux flow: when you add an item to cart, it should be added to your redux store. On Cart page you take all of the items from the store
Cart page: “add/remove” actions should be implemented through redux actions & reducers as well.
 Code style: 
Redux: All Redux parts (actions / reducers / store) should be kept in separate and specific files (actions.js / reducers.js / store.js etc.)
Use useSelector hook for getting the data from redux store (instead of connect() function)
https://react-redux.js.org/api/hooks#useselector-examples
Use useDispatch hook for dispatching your actions (instead of connect() function)
https://react-redux.js.org/api/hooks#usedispatch

11. React.js: Formik: 
Cart page (Checkout & Success)

Description: Finish your project by creating the last of three cart pages - Checkout & Success pages.
As a bonus, you will learn a very handy and powerful form validation library - Formik.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements: 
All of the requirements for previous React.js works should be kept.
Functionality: 
Form: Your form should have at least 5 fields
Form: Every field should have a validation rule (i.e max length / no special characters / only numbers), just required option - is not enough 
Form: You should have at least one field that uses RegEx and at least one field that doesn’t required string value(i.e Phone number)
Form: In the error message you should describe all errors in all fields with clear reason (i.e Email is incorrect, First name is a required field...)
Form: Error message should be a separate React Component
After successful form submit - the user is redirected to final page (Success page)
 Code style:
Use Formik & Yup libraries or any functionality related to form validation (fields validating, error messages, form submit)
https://youtu.be/3sXYK60T6Us?t=390



12. BONUS (React.js): Sign Up & Login pages

Description: Extra tasks for highly interested in Frontend development students. This work is more complicated than others, so stay strong - the reward is worth it ;) 

Wireframe template to Sign Up & Login pages (same link as before)
https://wireframepro.mockflow.com/view/lviv-iot-react-app#/page/bb92d63b438c4b0d9d333f328c1d61a0

Requirements: 
All of the requirements for previous React.js works should be kept.

Functionality: 
From this point, only Login and Registration pages are available for everyone. All your previous pages (Home/Catalog/Cart etc.) should be available only for logged in users.
Hint: Use ProtectedRoute Pattern:
https://dev.to/pprathameshmore/protected-routes-in-react-js-216i
Check the value inside LocalStorage before letting the user access protected pages. If the value is invalid/empty - redirect him to the Login page.
After user successfully authorizes (via login/registration) - store his credentials (email) inside LocalStorage. For consequent login/registration pages visits just check whether the value exists in LocalStorage and if it is - redirect the user to any protected page (i.e Home page).
Sign out option just has to clear the LocalStorage value (and of course redirect to /login). This action could be made just as simple “Sign me out” Button.
Keep the authentication process simple - there is no need to implement the backend part, only /login & /register endpoints with mocked response is enough.


You did it, you …


 My congratulations to everyone that has passed all this way by himself! 
You did a lot of work and I am really proud of you, my children.

“Student life is the seed of your life,
Plaint it wisely…”

