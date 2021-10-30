# react_course_1

# Course 1 : Creating React App
 1. Index.js : Main component renders to DOM
     public/Index.html - searches tag id = 'root'
     This is where react injects its javascript code
     Injected using className = "App"
    
    App.js : Before return can + anything js
        Using variables in App :--> Use 
          {<variableName>}

    > Not supported for boolean & object       
    Creating variables in React App :
    ```js
      function App() {

        //Creating variables
        const title = "";
        //Javascript also allowed
        //-------before this point anything is allowed-------------------
        return (
          <div className="App">
              <div className="content">
                <h1>Hello</h1>
              </div>

          </div>
        );
      }

    ```


    2. React Components
    ![alt](https://i.imgur.com/NBffezV.png)
