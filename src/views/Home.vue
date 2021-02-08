<template>
    <div class="html">
        <div id="top" class="homeHead">
            <!--ANCHOR Heading Banner-->
            <img class="homeimg" src="../assets/sig.png">
            <div class="headbutt">
                <div class="emptydiv"></div>
                <h2 style="text-align: center; padding: 0px; margin: 0px;">Full-stack Web Developer</h2>
                <img class="profile" src="../assets/profile.png">
            </div>
        </div>
        <!--#region [yellow] 
#endregion-->
        <div class="body">
            <!--ANCHOR submenu-->
            <div class="submenu">
                <a href="#intermediate" v-scroll-to="'#intermediate'">
                    <h5>Intermediate Level</h5>
                </a>
                <a href="#beginner" v-scroll-to="'#beginner'">
                    <h5>Beginner Level</h5>
                </a>
                <a href="#classes" v-scroll-to="'#classes'">
                    <h5>Specialized Coursework</h5>
                </a>
            </div>
            <br>
            <!--#region [yellow] 
#endregion-->
            <div class="subhead" id="intermediate">
                <!--ANCHOR intermediate skills-->
                <h2 id="platforms">Intermediate Level</h2>
            </div>
            <div class="section">
                <div class="item">
                    <img class="logo" src="../assets/HTML.png">
                    <p>HTML</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/CSS.png">
                    <p>CSS</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/bootstrap.png">
                    <p>Bootstrap</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/JS.png">
                    <p>Javascript</p>
                </div>
            </div>
            <!--#region [pink] #endregion -->
            <div class="subhead" id="beginner">
                <!--ANCHOR Beginner skills-->
                <h2 id="platforms">Beginner Level</h2>
            </div>
            <div class="section">
                <div class="itemClose">
                    <img class="logo" src="../assets/logo.png">
                    <p>Vue</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/wordpress.png">
                    <p>Wordpress</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/digital_ocean.png">
                    <p>Digital Ocean</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/heroku.png">
                    <p>Heroku</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/dreamhost.png">
                    <p>dreamhost</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/nginx.png">
                    <p>NGINX</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/mssql.png">
                    <p>MSSQL</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/mongo.png">
                    <p>mongodb</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/python.png">
                    <p>Python</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/C++.png">
                    <p>C++</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/sql.png">
                    <p>SQL</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/linux.png">
                    <p>Linux and SSH</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/visual_studio.png">
                    <p>Visual Studio</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/photoshop.png">
                    <p>Photoshop</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/git.png">
                    <p>Git</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/githubblack.png">
                    <p>Github</p>
                </div>
                <div class="itemClose">
                    <img class="logo" src="../assets/data_structures.png">
                    <p>Data Structures</p>
                </div>
            </div>
            <!--#region [pink] #endregion -->
            <div class="subhead">
                <!--ANCHOR Coursework-->
                <h2 id="classes">Specialized Coursework</h2>
            </div>
            <div class="section">

                <div class="item" v-b-modal.enterprise>
                    <div>
                        <img style="margin-right: 10px;" class="logo" src="../assets/c_sharp.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/aspnet.png">
                    </div>
                        <p>Enterprise Application Development</p>
                    <b-modal ok-only id="enterprise" title="Enterprise Application Development: Current">
                        <p class="my-4">Stated Learning Objectives:</p>
                        <ol class="my-4">
                            <li>
                                Create web apps using the .NET MVC Core Framework.
                            </li>
                            <li>
                                Write Razor pages using the fundamentals of C#. </li>
                            <li>
                                Use libraries such as Bootstrap, JQuery, Angular etc. in the web apps.
                            </li>
                            <li>
                                Set up connection strings to connect database(es) and interact with data. </li>
                            <li>
                                Interact with APIs as needed to attain desired results.
                            </li>
                            <li>
                                Use basic security measures to protect code from malicious attacks </li>
                            <li>
                                Use REACT to build front end applications that can change data without reloading. </li>
                            <li>
                                Work as a team to build and integrate a web app. </li>
                        </ol>
                    </b-modal>
                </div>

                <div class="item" v-b-modal.discrete>
                    <div>
                        <img style="margin-left: 10px;" class="logo" src="../assets/C++.png">
                    </div>
                    <p> v-b-modal.discrete>Discrete Structure</p>
                    <b-modal ok-only id="discrete" title="Discrete Structure: Current">
                        <p class="my-4">Learning Objectives</p>
                        <ol class="my-4">
                            <li>
                                Understand and be conversant with basic discrete mathematical structures (finite state machines, regular expressions, grammars, propositional calculus, proof techniques, predicate calculus, sets, relations, functions, graphs).
                            </li>
                            <li>
                                Write complex programs by using mathematical concepts as the basis for solving programming problems (finite state machines for lexical analysis; grammars for parsing; propositional and predicate calculus for logic programming; sets and algebras for relational databases; algebras, graphs, and topological sorting for optimizing datalog query processing).
                            </li>
                            <li>
                                Incrementally build sophisticated programs by a systematic design process based on discrete mathematics.
                            </li>
                            <li>
                                Design a solution for a programming problem and justify the design as one that is maintainable and extendable by other programmers who understand and are conversant with discrete mathematical structures.
                            </li>
                        </ol>
                    </b-modal>
                </div>

                <div class="item" v-b-modal.web>
                    <div>
                        <img style="margin-left: 10px;" class="logo" src="../assets/nginx.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/linux.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/mongo.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/digital_ocean.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/vsc.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/githubblack.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/logo.png">
                    </div>

                    <p>Web Programming</p>
                    <b-modal ok-only id="web" title="Web Programming: Fall 2020">
                        <p class="my-4">Learning Outcomes:</p>
                        <ol class="my-4">
                            <li>
                                Use HTML and CSS to design websites that are visually and interactively pleasing, by following web design principles.
                            </li>
                            <li>
                                Be proficient with JavaScript and several libraries.
                            </li>
                            <li>
                                Use a framework to build the front end of a creative JavaScript web application that includes login, user input, and communication with a back end using a REST API.
                            </li>
                            <li>
                                Use Node, Express, and a Mongo database to build the back end of a web application that provides a REST API, including user authentication and basic create/read/update/delete methods.
                            </li>
                            <li>
                                Use Git to manage and collaborate on code.
                            </li>
                            <li>
                                Setup a web and database server running on a remote virtual machine running Linux and use command line tools to manage the server.
                            </li>
                            <li>
                                Register a domain name for your web server and setup separate subdomains for each lab and project you create for the class.
                            </li>
                        </ol>
                    </b-modal>
                </div>

                <div class="item" v-b-modal.communication>
                    <div>
                        <img style="margin-left: 10px; height: 50px; width: 30px;" class="logo" src="../assets/apache.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/linux.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/aws.png">
                    </div>
                    <p>Data Communication</p>
                    <b-modal ok-only id="communication" title="Data Communication: Current">
                        <p class="my-4">Develop Understanding of Data Communications</p>
                        <p class="my-4">Develop an understanding of data communications and network systems in general and specifically be able to:</p>
                        <ol class="my-4">
                            <li>Set up and configure basic network components including systems and firewalls.</li>
                            <li>Understand basic protocols in TCP/IP network stack.</li>
                            <li>Understand and be able to setup and configure basic network services.</li>
                        </ol>
                    </b-modal>

                </div>
                <div class="item" v-b-modal.business>
                    <div>
                        <img style="margin-left: 10px;" class="logo" src="../assets/django.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/python.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/heroku.png">
                    </div>
                    <p>Principles of Business Programming</p>
                    <b-modal ok-only id="business" title="Principles of Business Programming: Fall 2020">
                        <p class="my-4">Stated Learning Objectives:</p>
                        <ol class="my-4">
                            <li>
                                Course content: Master fundamental programming concepts through the use of Python syntax.
                            </li>
                            <li>
                                Develop critical thinking skills through solving programming problems in homework, on projects, and on tests.
                            </li>
                            <li>
                                Written communication: Be able to identify the problem and solution and then implement a solution using software engineering practices. Learn the standard syntax for Python/Django/React and other development tools. Demonstrate this knowledge by writing a significant number of programs and websites.
                            </li>
                        </ol>
                    </b-modal>
                </div>

                <div class="item" v-b-modal.data>
                    <div>
                        <img style="margin-left: 10px;" class="logo" src="../assets/C++.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/data_structures.png">
                    </div>
                    <p>Data Structures</p>
                    <b-modal ok-only id="data" title="Data Structures: 2017">
                        <p class="my-4"> Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.</p>
                    </b-modal>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300;400&display=swap');

    h1 {
        font-size: 30px;
        font-family: 'Montserrat', sans-serif;

    }

    h2 {
        font-family: 'Raleway', sans-serif;
        color: #000807;
        padding: 10px;
        text-align: left;
        padding-left: 50px;
        font-size: 25px;
    }

    h5 {
        text-decoration: none;
        color: #000807;
        max-width: 500px;
        margin: 5px auto;
        opacity: 0.5;
        transition: opacity 0.8s;
    }

    h5:hover {
        opacity: 1;
        transition: opacity 0.5s
    }

    a {
        color: #000807;
    }

    a:hover {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;

    }

    .body {
        max-width: 1200px;
        margin: auto;
        background-color: white;
        padding-bottom: 20px;
    }

    .profile {
        max-width: 300px;
        width: 50%;
        margin: 40px 0px 0px 0px;
        padding: 0px;
        z-index: 0;
    }

    .headbutt {
        max-width: 1200px;
        margin: auto;
    }

    .btn-link {
        font-family: 'Raleway', sans-serif;
        color: #000807;
        padding: 10px;
        text-align: left;
        padding-left: 20px;
        font-size: 16px;
        font-weight: 400;
    }

    .btn-link:hover {
        color: #646E68;
        text-decoration: none;
    }

    .btn-link:focus {
        text-decoration: none;
        box-shadow: none;
    }


    p {
        font-family: 'Montserrat', sans-serif;
        color: #000807;
        padding: 5px;
        font-size: 14px;
    }

    .logo {
        max-width: 50px;
    }

    .html {
        margin-bottom: -10px;
        background: rgb(100, 111, 88);
        background: linear-gradient(0deg, rgba(100, 111, 88, .5) 20%, rgba(100, 111, 88, .05) 60%);
    }

    .headImage {
        width: 100%;
    }

    .section {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .item {
        width: 43%;
        /* padding: 100px; */
    }

    .itemClose {
        width: 20%;
    }

    .cardpic {
        width: 35px;
        margin: 0px 10px 20px 10px;
    }

    .card-header {
        background-color: rgb(240, 240, 240);
        text-align: left;
        display: flex;
    }

    .card-header:hover {
        background-color: #a6b4ac;
    }

    .card-body {
        text-align: left;
    }

    #accordion {
        margin-bottom: 10px;
    }

    h1 {
        margin-bottom: 50px;
        font-size: 20px;
    }

    .icon {
        text-align: right;
        padding: 11px;
        position: absolute;
        right: 20px;
    }

    .subhead {
        background-color: rgba(197, 233, 155, 0.3);

    }

    .submenu {
        padding-top: 30px;
    }

    img {
        width: 90%;
        margin: 50px 0px 15px 0px;
    }

    #top {
        background-color: #C5E99B;
        padding-bottom: 50px;
    }



    @media only screen and (max-width: 1200px) {
        .subhead {
            max-width: 100% !important;
        }
    }

    @media only screen and (min-width: 1200px) {
        .subhead {
            min-width: 1200px !important;
        }

        h2 {
            width: 33%;
        }

        .headbutt {
            align-items: center;
            justify-content: center;
            display: flex;
            margin: auto;
        }

        .profile {
            margin: -225px 50px 0px 0px;
            width: 33%;
        }

        .emptydiv {
            width: 33%;
        }

    }



    /* .Droplist {
      width: 100%;
      
    } */
</style>