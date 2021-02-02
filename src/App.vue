<!--Palette:
   dark:000807
   med_blue: 005f93
   light_blue: 57c4e5
   red: 840032
   light: F5EDF0 -->

<template>
    <div id="app">
        <div>
            <b-navbar class="navbar navbar-dark bg-dark" toggleable="lg" type="dark" variant="info">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="mx-auto">
                        <b-navbar-nav>
                            <b-nav-item to="">Home</b-nav-item>
                            <b-nav-item to="Portfolio">My Work</b-nav-item>
                            <b-nav-item to="About">About Me</b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view />
        <div class="footer">
            <Contact></Contact>
            <div class="section bottom">
                <a class="item" href="https://github.com/mintyfreshfish">
                    <b-icon-github class="social"></b-icon-github>
                    <p>mintyfreshfish</p>
                </a>
                <a class="item" href="www.linkedin.com/in/jackson-rebecca">
                    <b-icon-linkedin class="social"></b-icon-linkedin>
                    <p>jackson-rebecca</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Contact from "./components/Contact.vue"


    export default {
        name: 'app',
        components: {
            Contact
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300;400&display=swap');

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        padding: 5px;
    }

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 10px;
    }

    .icon {
        width: 50px;
    }

    .item {
        width: 40%;
    }

    .footer {
        background-color: #000807
    }

    .navbarImg {
        width: 50px;
    }

    h1,
    h2,
    h3,
    h4 {
        color: #000807;
        font-family: 'Raleway', sans-serif;

    }

    .item {
        color: white;
        font-size: 10px;
    }

    .item:hover {
        color: #e9e7e7;
        text-decoration: none;
    }

    .social {
        font-size: 20px;
    }

    .navbar.navbar-dark.bg-dark {
        background-color: #000807 !important;
        color: #e7eeea;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #b2bbba !important
    }

    .bar {
        display: none;
    }

    @media only screen and (min-width: 700px) {
        .bottom {
            justify-content: center;
            margin: auto;
            max-width: 700px;
        }
    }

</style>