<template>
    <div class="html">
        <div id="top" class="homeHead">
            <img class="homeimg" src="../assets/sig.png">
            <div class="headbutt">
                <div class="emptydiv"></div>
                <h2 style="text-align: center; padding: 0px; margin: 0px;">Full-stack Web Developer</h2>
                <img class="profile" src="../assets/profile.png">
            </div>
        </div>
        <div class="body">
            <div class="submenu">
                <a href="#platforms" v-scroll-to="'#platforms'">
                    <h5>Platforms</h5>
                </a>
                <a href="#hosting" v-scroll-to="'#hosting'">
                    <h5>Hosting</h5>
                </a>
                <a href="#servers" v-scroll-to="'#servers'">
                    <h5>Servers</h5>
                </a>
                <a href="#languages" v-scroll-to="'#languages'">
                    <h5>Languages</h5>
                </a>
                <a href="#skills" v-scroll-to="'#skills'">
                    <h5>Other Skills</h5>
                </a>
                <a href="#classes" v-scroll-to="'#classes'">
                    <h5>Current Coursework</h5>
                </a>
            </div>
            <br>
            <div class="subhead">
                <h2 id="platforms">Platforms</h2>
            </div>
            <div class="section">
                <div class="item">
                    <img class="logo" src="../assets/django.png">
                    <p>django</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/logo.png">
                    <p>Vue</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/wordpress.png">
                    <p>Wordpress</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/bootstrap.png">
                    <p>Bootstrap</p>
                </div>
            </div>
            <div class="subhead">
                <h2 id="hosting">Hosting</h2>
            </div>
            <div class="section">
                <div class="item">
                    <img class="logo" src="../assets/aws.png">
                    <p>Amazon Web Services</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/digital_ocean.png">
                    <p>Digital Ocean</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/heroku.png">
                    <p>Heroku</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/dreamhost.png">
                    <p>dreamhost</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/nginx.png">
                    <p>NGINX</p>
                </div>
                <div class="item">
                    <img style="height: 50px; width: 30px;" class="logo" src="../assets/apache.png">
                    <p>Apache</p>
                </div>
            </div>

            <div class="subhead">
                <h2 id="servers">Servers</h2>
            </div>
            <div class="section">
                <div class="item">
                    <img class="logo" src="../assets/mssql.png">
                    <p>MSSQL</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/mongo.png">
                    <p>mongodb</p>
                </div>
            </div>

            <div class="subhead">
                <h2 id="languages">Languages</h2>
            </div>
            <div class="section">
                <div class="item">
                    <img class="logo" src="../assets/JS.png">
                    <p>Javascript</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/python.png">
                    <p>Python</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/C++.png">
                    <p>C++</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/sql.png">
                    <p>SQL</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/HTML.png">
                    <p>HTML</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/CSS.png">
                    <p>CSS</p>
                </div>
            </div>

            <div class="subhead">
                <h2 id="skills">Other Skills</h2>
            </div>
            <div class="section">
                <div class="item">
                    <img class="logo" src="../assets/api.png">
                    <p>APIs</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/linux.png">
                    <p>Linux and SSH</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/filezilla.png">
                    <p>Filezilla</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/winscp.png">
                    <p>WinSCP</p>
                </div>

                <div class="item">
                    <img class="logo" src="../assets/visual_studio.png">
                    <p>Visual Studio</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/vsc.png">
                    <p>Visual Studio Code</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/photoshop.png">
                    <p>Photoshop</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/git.png">
                    <p>Git</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/githubblack.png">
                    <p>Github</p>
                </div>
                <div class="item">
                    <img class="logo" src="../assets/data_structures.png">
                    <p>Data Structures</p>
                </div>
            </div>

            <div class="subhead">
                <h2 id="classes">Current Coursework</h2>
            </div>
            <div class="section">

                <div class="item">
                    <div>
                        <img style="margin-right: 10px;" class="logo" src="../assets/c_sharp.png">
                        <img style="margin-left: 10px;" class="logo" src="../assets/aspnet.png">
                    </div>
                    <p>Enterprise Application Development</p>
                </div>

                <div class="item">
                    <div>
                        <img style="margin-left: 10px;" class="logo" src="../assets/C++.png">
                    </div>
                    <p>Discrete Math</p>
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