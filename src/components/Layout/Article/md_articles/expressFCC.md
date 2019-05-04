# Free Code Camp's Node Express Tutorial
*Due to a few minor complications with glitch.com* 😞 *I decided to handle this tutorial locally. I created my own VERY simplistic set of views to go along with the tutorial.*

This is less of an article and more of a reference and guide to use as you follow along with FreeCodeCamp.com's [Node Express Tutorial](https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express). All you will need to follow along is to clone [this repository](https://github.com/no-trbl-2-u/FCC_node-express.git) and follow the instructions below. I wanted to create something that could help fellow FCC curriculum users, but with a little extra. I plan to further elaborate on several other ideas, like middleware composition, static typing, and possibly even using Algebraic Data Types to handle our exceptions. For now, this is just what you'll need to get up and running with node Express. 💻

### Have fun!

*Also, if you feel pretty confident, and want to help turn this tutorial into its own entity, beyond what FCC has to offer, send a PR and let's take this tutorial even further 🚀. I would doubly recommend you to play with ./styles.css and pretty the routes up a little bit* 😉

```sh
git clone https://github.com/no-trbl-2-u/FCC_node-express.git
cd FCC_node-express
npm install
npm run start
```

After you run these commands, you can open up ./server_START.js  and follow along with the comments, the README, and if you get REALLY stuck, you can take a look at ./server_FINAL.js


*Final Note: You will NOT be able to hand this in to "Complete" the task in FCC. You can only do that if you use their glitch.com repository, which is where some people are having problems. Oh well, we're here for the knowledge anyway, not for a tick in a box, right?* 😸
## Curriculum 🏫 💻
* Meet the Node consoles 🤝
  * Log "Hello World" from the server
  * server.js - line 23

* Start a Working Express Server 🔰
  * At the bottom of your code, use app.listen(PORT, HANDLER) to begin listening for other app.METHODs
    * server.js - line 21
  * Create another route via app.get()
    * app.get() has the following format ```app.get(PATH: string, (req, res) => void)```
      * server.js - line 16
  * set its path as the first argument to app.get()
  * send "Hello Express" via the app.send() method

* Serve an HTML File 📰
  * Create another route and set its path
  * This time, instead of sending a string like "Hello Express":
    * Serve an HTML file you've written using the app.sendFile() method which is formatted as such (using join() & __dirname):
      * ```app.get(PATH, res.sendFile(path.join(__dirname + 'views/YOUR_FILE.html')))```
      * First, import a library called "path" that is inherit in node (no need for npm)
      * Then, use the inherit global variable __dirname to calculate the path passed to path.join()
      * server.js - line 12

* Serve Static Assets 🎁
  * Create a directory that will be served to the client, typically "public", "static", "client" etc...
  * Using app.use(), signal the app to use your new directory via the static method on the express object called express.static()
  * express.static() is formatted as such:
    * ```express.static(PATH_TO_THE_STATIC_DIRECTORY: string)```
    * Since this is another case of an **absolute path**, we will be using __dirname and path.join()

* Serve JSON on a Specific Route ⤴️
  * To implement a **RESTful API**, we'll need to serve up a json file of our making
  * First, create your .json
    * Here we'll create a directory called data and place our json in there
  * Then using app.get()
 
* Use the .env File 🌲🌻
  * The .env file is a hidden file used to store **environment variables** ie. PORT, Database URL, API Keys, etc.
  * First, create your .env file in your root directory.
    * The format for the variables declared here is as follows:
      * ```ENV_VARIABLE="value"```
      * Variable names, since their CONSTANTs, should be uppercase
      * There mustn't be any spaces between the "=" in the assignment
  * Next, you'll need a package called **dotenv**
    * In your terminal, ```npm i dotenv --save```
  * Then, as early as possible in your server.js...
    * ```require('dotenv').config()``` - This will import your environment variables and place them in node's process.env object for you to be able to access your environment variables.
    * In our case, I like my requires to be together, so I split the function call.
      * server.js - line 1 (Imported the dotenv module)
      * server.js - line 7 (Called the _.config() method to place variables inside process.env)
  * Lastly, in order to use the variables, you can reference them off of the process.env object literal
    * ```process.env.PORT ``` server.js - line 32, 33

* Implement a Root-Level Request Logger Middleware 🌳
  * A Middleware function is in the following format:
    * ```js 
      function middleWareFunction(request, response, next){
        doSomething()
        next()
      }
      ```
  * To use your middleware function with every route, place an ```app.use(middleWareFunction)``` before all your routes
  * Now, we'll use this format and take advantage of:
    ```req.method```, ```req.path```, and ```req.ip```, all of which are metadata surrounding our HTTP traffic
  * Lastly, 

* Chain Middleware to Create a Time Server ⛓
  * Middleware can be mounted to a **SPECIFIC** route by using the following format:
    * ```app.METHOD(path, middlewareFunction)```
    * You can also chain multiple middleware functions like so:
      * ```js
        app.get('/yourPath',
          mWareFN1, // Must set data to req.CUSTOM_KEY then call next()
          (req, res) => res.send(req.CUSTOM_KEY)
        )
        ```
  * To create our ```getTime``` middleware function, all we have to do is instantiate a new date object:
    * ```customMiddleware.js``` - line 17
  * Next, attach that new date object to the request object that's passed to the middleware function and route
    * ```customMiddleware.js``` - line 18
  * Then call ```next()``` to make sure the middleware function continues on
  * Lastly, create your route using ```app.get(...)``` and use ```res.send(req.customProperty)```
    * ```server.js``` - line 56

* Get Route Parameter Input from the Client 🚸
  * In order to accomplish this task, we'll need to use ```req.params``` which will provide us any queries passed via the url
    * ```req.params``` returns undefined, unless there is a dynamic URL
  * We'll also need to use a **dynamic url** in our express server
    * For example, ```app.get(':/word', (...) => {...})```
    * Now any URL passed, that isn't already accounted for, will be directed to this particular route
  * Server.js - line 58 (dynamic URL) + 59 (req.params)


* Get Query Parameter Input from the Client 🚸
  * A query in the URL is in the following format:
    * ```yourpage.com/yourRoute?key=value&key2=value2```
      * Note the "?" to begin query and the "&" to separate multiple queries
  * In order to access the query in your code:
    * ```req.query``` will give you your entire query object
    * ```req.query[key]``` or ```req.query.key``` will get you the direct value
      * Note: It is important to create logic flow here to direct the User with feedback
      * server.js - line 66 (logic flow)
    * server.js  - line 67 (sending direct values)

* Use body-parser to Parse POST Requests 📮🏣
  * Mounting the body-parser is as easy as:
    * ```js const bodyParser = require('body-parser')```
    * Or in my case:
      * server.js - line 6 (const parse = ...)

* Get Data from POST Requests 📮🏣
  * Now in order to demonstrate this, I had to make the simplest form possible to get to the point:
    * views/form.html - lines 10 - 18
    * Your form tag just needs to be fed the method to be used when the form is submitted and most importantly, the route that will receive the information.
      * ```html
        <form action="/form" method="POST">
          <...>
        </form>
        ```
    * By creating a simple "sumbit" input, whatever is in the ```<form>...</form>``` will get sent to our server at the path designated in the form tag.
      * ```html
        <input type="submit" value="submit" >
        ```

  * Now to access this information from the form, we'll need to make sure we have a route named ```/form```:
    * We'll have to use the ```app.all(PATH).get(GET_HANDLER).post(POST_HANDLER)```
      * The **GET** method is used when they visit the ```/form``` page
        * **GET** responds with an html page
        * server.js - line 75
      * The **POST** method is used when they submit the form
        ** **POST** responds with raw html containing the input from the user
        * server.js - line 77
## Notes
* Routes take the following structure:
  * app.METHOD(PATH: string, HANDLER: (req, res): void)
  * *ALSO* routes will be calculated from ***TOP** to **Bottom*** as they appear in the code

* When serving an HTML file via app.get(), the **header** information will be taken care of for you

* ```__dirname``` is a global variable in **Node** used to calculate the **absolute path**
  * e.g. absolutePath = __dirname + relativePath/file.ext.

* ```express.static()``` is a **middleware function**
  * **middleware functions** are functions that intercept **route handlers** and add some kind of information or functionality
    * **middleware functions** must be mounted using ```app.use()``` formatted as such:
      * app.use(path, middlewareFunction)
        * *The "path" argument is optional. If it is NOT provided, the middleware function will intercept **ALL current paths**

* ```app.get()``` is used to respond to **GET** requests from the client. 
  * GET is used in cases where the server will send information to the client **without modifying anything server-side**

* ```.env``` is normally included in the ```.gitignore``` in order to prevent your secret environment variables from being made public.
  * In our case, we'll leave it as is for educational purposes. It is important however to keep prevent this file from being posted online, ie. Github, Gitlab, etc...

* Using the ```dotenv``` npm package is a typical best practice to separate the app configuration from the app code.
  * An alternative to this methodology, is to create a ```.env.js``` file, place your environment variables in a single object literal, export that single object, and then import and reference that object in your server.js
  * The downside to this, is in your deployment stage, when you have environment variables stored in **production**, they'll end up being separate from your variables stored in **development**. (ie. ```config.PORT``` vs ```process.env.PORT```)

* Morgan is an express middleware function used to create log files or the incoming HTTP requests.
  * By creating a ```writeStream``` using the internal ```fs``` library, we're able to take the HTTP requests and create an access.log file

* In an effort to keep our ```server.js``` file a little neater, I decided to keep our middleware definitions in a separate file.
  * We'll be defining our Middleware functions in ```customMiddleware.js```
  * Import: server.js - line 7

* When **Chaining** middleware functions, to be able to share any results, just attach a ```{key: value}``` pair to your ```req``` object. When you call ```next()```, the next middleware function will have access to that data.
  * Here is an example:
    * ```js 
      const mWare1 = (req, res, next) => {req.data = "data"; next()};
      const mWare2 = (req, res, next) => {req.data = req.data.toUpperCase(); next()};
      app.get('', mWare1, mWare2, (req, res) => res.send(req.data))
      ```
    * As arbitrary as the example is, it's very powerful to be able to persist data, chain small modular functions, and send the results back to the user.

* When using dynamic URLs, make sure it is the last URL in your code to be registered or else ```"/:word"``` before "/word2" would cause word2 to be picked up by the dynamic URL and will redirect you to that path.

* Something to note about generated HTML from the res.send method. I don't think it receives the styles loaded when the page is initially loaded since they are created after it is loaded.