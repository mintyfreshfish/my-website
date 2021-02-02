<template>
    <div class="html">
        <div class="banner">
            <img id="headImage" src="../assets/mywork.png">
        </div>
        <div class="body">
            <div class="container">
                <figure v-b-modal.modal-1-center>
                    <img src="../assets/characterz.png" alt="Characterz Cafe" />
                    <caption><a href="#">Characterz Café Landing Page</a></caption>
                </figure>
                <figure v-b-modal.modal-6-center>
                    <img src="../assets/weather.jpg" alt="weather" />
                    <caption><a href="#">Weather App</a></caption>
                </figure>
                <figure v-b-modal.modal-2-center>
                    <img src="../assets/book.jpg" alt="Book" />
                    <caption><a href="#">Lina Golden Books</a></caption>
                </figure>
                <figure v-b-modal.modal-3-center>
                    <img src="../assets/teasdale.png" alt="house" />
                    <caption><a href="#">Photography Portfolio</a></caption>
                </figure>
                <figure v-b-modal.modal-4-center>
                    <img src="../assets/bcrjobs.jpg" alt="bcr jobs" />
                    <caption><a href="#">Black Cyber Recruiter</a></caption>
                </figure>
                <figure v-b-modal.modal-5-center>
                    <img src="../assets/groceries.png" alt="grocery icon" />
                    <caption><a href="#">Generic Grocery Store</a></caption>
                </figure>

            </div>
            <div class="section">
                <h2>Characterz Café</h2>
                <p>Characterz Café is a local coffee shop with a comic-book theme. The walls are covered with chalk drawings of Marvel and DC characters, and the counter sports some Doctor Who memorabilia. This website serves as a single page, general site for both regulars and newcomers. Rebecca used vanilla JS which accompanied a Bootstrap theme. The site has a menu for online ordering, and a calendar for events that syncs with the café’s general Google Calendar. The website is designed with the comic book theme in mind, pulling from Marvel colors and comic-style pictures. Currently, this prototype is hosted on an Amazon EC2 instance using apache.</p>
                <a href="http://18.212.64.149/Characterz/templates/scroller/characterz.html">
                    <b-button class="sendbtn">See for Yourself</b-button>
                </a>
            </div>
            <div class="section">
                <h2>Weather App</h2>
                <p>This weather app utilizes a simple API to tell the weather in a given city. This site is made with vanilla javascript along with HTML and CSS and Bootstrap elements. Notice that the title will change with the time of day, greeting you with the proper phrase "Good Morning," "Good Afternoon," or "Good Evening." This site is hosted on an Amazon EC2 instance.</p>
            <a href="http://18.212.64.149">
                    <b-button class="sendbtn">Visit the Site</b-button>
                </a>
            </div>
            <div class="section">
                <h2>Lina Golden Books</h2>
                <p>Lina Golden is an up-and-coming author who just released her first book, Love at First Loot. Her website serves to market her book, as well as give Lina a connection with her readers. This site was created on Wordpress and hosted through DreamHost. Rebecca consulted with Lina about branding, design, and functionality while building the site, and oversaw her development team as they completed her brief. Lina now manages the website on her own through the Wordpress infrastructure.</p>
                <a href="http://www.linagoldenbooks.com">
                    <b-button class="sendbtn">Take a Look</b-button>
                </a>
            </div>
            <div class="section">
                <h2>Photography Portfolio</h2>
                <p>This generic photography site includes a login for users to see their own, uploaded pictures. The site was built with Vue and Node. It is hosted on Digital Ocean with NGINX.</p>
            <a href="https://photobomb.misplacedmusings.com">
                    <b-button class="sendbtn">Don't Believe Me?</b-button>
                </a>
            </div>
            <div class="section">
                <h2>Black Cyber Recruiter</h2>
                <p>Black Cyber Recruiter is a fictional business similar to LinkedIn, but targeted towards minorities, specifically Blacks. This site uses machine learning to match job searchers to companies, companies, to job searchers, and job searchers to job positions. Rebecca worked on a skilled development team to build the site using Django, postgres, and azure studios. Rebecca implemented design elements to give the site its professional look.</p>
            <a href="http://bcrjobs.herokuapp.com">
                    <b-button class="sendbtn">I Dare You</b-button>
                </a>
            </div>
            <div class="section">
                <h2>Generic Grocery Store</h2>
                <p>Mother Earth is a fictional grocery store. This simple site uses Vue to display grocery items for users to add to their cart. Users can also edit their cart and search for specific items. Vue reloads certain parts of a webpage in real time, letting your searches filter through the grocery list in real time instead of needing to refresh the page.</p>
            <a href="https://groceries.misplacedmusings.com">
                    <b-button class="sendbtn">Time for a Test Drive</b-button>
                </a>
            </div>
        </div>
        <b-modal id="modal-1-center" hide-footer centered title="Characterz Cafe: One-Page">
            <img class="modimage" src="../assets/characterz.png">
            <p class="my-4">Characterz Café is a local coffee shop with a comic-book theme. The walls are covered with chalk drawings of Marvel and DC characters, and the counter sports some Doctor Who memorabilia. This website serves as a single page, general site for both regulars and newcomers. Rebecca used vanilla JS which accompanied a Bootstrap theme. The site has a menu for online ordering, and a calendar for events that syncs with the café’s general Google Calendar. The website is designed with the comic book theme in mind, pulling from Marvel colors and comic-style pictures. Currently, this prototype is hosted on an Amazon EC2 instance using apache.</p>
            <a href="http://18.212.64.149/Characterz/templates/scroller/characterz.html">
                <b-button class="btnfill">Go to Site</b-button>
            </a>
        </b-modal>
        <b-modal id="modal-2-center" hide-footer centered title="Lina Golden: Author Page">
            <img class="modimage" src="../assets/book.jpg">
            <p class="my-4">Lina Golden is an up-and-coming author who just released her first book, Love at First Loot. Her website serves to market her book, as well as give Lina a connection with her readers. This site was created on Wordpress and hosted through DreamHost. Rebecca consulted with Lina about branding, design, and functionality while building the site, and oversaw her development team as they completed her brief. Lina now manages the website on her own through the Wordpress infrastructure.</p>
            <a href="http://www.linagoldenbooks.com">
                <b-button class="btnfill" id="linagolden">Go to Site</b-button>
            </a>
        </b-modal>
        <b-modal id="modal-3-center" hide-footer centered title="Photography Account">
            <img class="modimage" src="../assets/teasdale.png">
            <p class="my-4">This generic photography site includes a login for users to see their own, uploaded pictures. The site was built with Vue and Node. It is hosted on Digital Ocean with NGINX.</p>
            <a href="https://photobomb.misplacedmusings.com">
                <b-button class="btnfill">Go to Site</b-button>
            </a>
        </b-modal>
        <b-modal id="modal-4-center" hide-footer centered title="BCR Jobs: Company Page">
            <img class="modimage" src="../assets/bcrjobs.jpg">
            <p class="my-4">Black Cyber Recruiter is a fictional business similar to LinkedIn, but targeted towards minorities, specifically Blacks. This site uses machine learning to match job searchers to companies, companies, to job searchers, and job searchers to job positions. Rebecca worked on a skilled development team to build the site using Django, postgres, and azure studios. Rebecca implemented design elements to give the site its professional look. This site is hosted on Heroku.</p>
            <a href="http://bcrjobs.herokuapp.com">
                <b-button class="btnfill">Go to Site</b-button>
            </a>
        </b-modal>
        <b-modal id="modal-5-center" hide-footer centered title="Mother Earth: Simple Grocery Page">
            <img class="modimage" src="../assets/groceries.png">
            <p class="my-4">Mother Earth is a fictional grocery store. This simple site uses Vue to display grocery items for users to add to their cart. Users can also edit their cart and search for specific items. Vue reloads certain parts of a webpage in real time, letting your searches filter through the grocery list in real time instead of needing to refresh the page.</p>
            <a href="https://groceries.misplacedmusings.com">
                <b-button class="btnfill">Go to Site</b-button>
            </a>
        </b-modal>
        <b-modal id="modal-6-center" hide-footer centered title="Generic Weather API">
            <img class="modimage" src="../assets/weather.jpg">
            <p class="my-4">This weather app utilizes a simple API to tell the weather in a given city. This site is made with vanilla javascript along with HTML and CSS and Bootstrap elements. Notice that the title will change with the time of day, greeting you with the proper phrase "Good Morning," "Good Afternoon," or "Good Evening." This site is hosted on an Amazon EC2 instance.</p>
            <a href="http://18.212.64.149">
                <b-button class="btnfill">Go to Site</b-button>
            </a>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'portfolio',
    }
</script>

<style scoped>
    body {
        background-color: #000;
        font: 1.1em Arial, Helvetica, sans-serif;
    }

    img {
        max-width: 100%;
        display: block;
        margin: auto;
        transition: opacity 0.8s;
        opacity: 85%;

    }

    img:hover {
        opacity: 100%;
        transition: opacity 0.5s
    }

    figure {
        margin: 0;
        display: grid;
        grid-template-rows: 1fr auto;
        margin-bottom: 10px;
        break-inside: avoid;
    }

    figure>img {
        grid-row: 1 / -1;
        grid-column: 1;
    }

    figure a {
        color: black;
        text-decoration: none;
    }

    caption {
        grid-row: 2;
        grid-column: 1;
        background-color: rgba(255, 255, 255, .7);
        padding: .2em .5em;
        justify-self: left;
        width: 100%;
        z-index: 5;
        text-align: center;
    }

    .btnfill {
        width: 100%;
        background-color: #477998;
    }

    .banner {
        width: 100%;
        background-color: rgb(100, 111, 88);
        padding: 20px;
    }

    .modimage {
        opacity: 100%;
    }

    .container {
        max-width: 1200px;
        margin: auto;
        background-color: white;
        padding-bottom: 100px;
        padding-top: 100px;
        column-count: 1;
        column-gap: 10px;
    }

    .body {
        max-width: 1200px;
        margin: auto;
        background-color: white;
        padding-bottom: 100px;
        padding-top: 100px;
        column-count: 1;
        column-gap: 10px;
        padding: 30px;
        text-align: left;
    }

    .section h2 {
        font-family: 'Montserrat', sans-serif;
        color: #000807;
        padding: 10px;
        text-align: left;
        padding-left: 50px;
        font-size: 30px;
        background-color: rgba(197, 233, 155, 0.3);
        width: 100%;
    }

    .section {
        margin-bottom: 50px;

    }

    .html {
        margin-bottom: -10px;
        background: rgb(100, 111, 88);
        background: linear-gradient(0deg, rgba(100, 111, 88, .5) 20%, rgba(100, 111, 88, .05) 60%);
    }

    #headImage {
        opacity: 100%;
        max-width: 800px;
        width: 100%;
    }

    .sendbtn {
            background-color: #646F58;
opacity: 0.8;
            width: 200px;
            outline: none;
    }

    @media only screen and (min-width: 600px) {
        .container {
            column-count: 2;
            column-gap: 10px;
        }

        .sendbtn:hover {
            /* background-color: #C5E99B;
        color: #000807; */
            background-color: #646F58;
            outline: none;
            box-shadow: 0px 0px 10px #C5E99B;
        }

    }

    @media only screen and (min-width: 768px) {
        .container {
            column-count: 3;
            column-gap: 10px;
        }
    }

    @media only screen and (min-width: 900px) {
        .container {
            column-count: 4;
            column-gap: 10px;
        }
    }
</style>