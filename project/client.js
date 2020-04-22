<html lang="en" dir="ltr">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
        <link type="text/css" rel="stylesheet" href="style.css">
        <script type="text/javascript" src="client.js"></script>
        <title></title>
    </head>

<body class= "body" >
    
        <nav>
            <div id="dmswitch">Dark mode<br/>
                <label style="margin-top: 0px; " class="switch">
                    <input type="checkbox" id="Input" value="OFF" >
                    <span class="slider round"></span>
                </label>
            </div>
          
            <label for="drop" class="toggle" >Menu</label>
            <input type="checkbox" id="drop" />
            <ul class="menu" >
                <li><a href="index.html" >HOME</a></li>
                <li><a href="File/QUIZZ.html" >QUIZ</a></li>
                <li><a href="File/RELATIONSHIP_ISSUES.html" >RELATIONSHIP ISSUES</a></li>
                <li><a href="File/CONTACT_US.html" >CONTACT US</a></li>
            </ul>
        </nav>

        <div class="whole-middlepage" >
            
            <section class="middle-left" >

            </section>

            <section class="middle-right" >

            </section>
            
        </div>

        <div id="middle-bottom">

        </div>

        

        <div id="footer"></div>
        <!-----------------Dark Mode----------------------->
        <script>
            document.getElementById("Input").addEventListener("click",function(event){
                if (event.target.value === "OFF")
                {
                    var element = document.body;
                    element.classList.toggle("dark");
                    event.target.value = "ON";
                }
                else
                {
                    var element = document.body;
                    element.classList.toggle("dark");
                    event.target.value = "OFF";
                }
            },false);
        </script>
      
    </body>

</html>
