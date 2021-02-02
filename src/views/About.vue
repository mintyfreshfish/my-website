<template>
    <div class="about">
        <div class="head">
            <!-- <h1>Meet Rebecca</h1> -->
            <img class="header" src="../assets/name.png">
        </div>
        <div class="content">
            <div class="content-top">
                <div class="sidebar">
                    <img class="portrait" src="../assets/portrait.png">
                    <h4 style="text-align: center;">Fun facts about Rebecca:</h4>
                    <ul>
                        <li>
                            <b-icon-brush-fill style="color: orange; margin-right: 5px;"></b-icon-brush-fill>
                            <p>Her favorite color is orange</p>
                        </li>
                        <li>
                            <b-icon-headphones style="color: green; margin-right: 5px;"></b-icon-headphones>
                            <p>Her favorite instrument is the flugelhorn, but swoons for any piccolo trumpet played with perfection</p>
                        </li>
                        <li>
                            <b-icon-dice-5-fill style="color: blue; margin-right: 5px;"></b-icon-dice-5-fill>
                            <p>She has a set of dice with llamas on the sides</p>
                        </li>
                        <li>
                            <b-icon-eyeglasses style="color: maroon; margin-right: 5px;"></b-icon-eyeglasses>
                            <p>She is a novice at 3D printing…but she’s getting better!</p>
                        </li>
                    </ul>
                </div>
                <div class="text">
                    <p>
                        Rebecca was born in the mystical land of Northern California, just east of the SF bay. She spent a lot of time sailing on the bay with her family, as well as hiking into the depths of Utah’s Capitol Reef National Park. Rebecca went to high school and fell in love with the trumpet. She got decently good, at least, she thought so.
                    </p>
                    <p>
                        Rebecca attends college at BYU in Provo, Utah. She began as a music education major, until she saw the light and switched to Information Systems. Why information systems? Rebecca doesn’t think she’s quite nerdy enough to make friends with the Computer Science majors, and she wanted to learn about the internet.
                    </p>
                    <p>
                        We now come to the present day. Rebecca is working as a freelance web developer. She and her development team offers to build websites for upstart freelancers and entrepreneurs at cost to help their businesses gain visibility and build their clientele. She works as consultant and designer to create branded websites that speak to her clients’ audience.
                    </p>
                    <p>
                        Remember that part about music education? Well, Rebecca never left teaching behind. She has taught math classes, offered tutoring services, and now is a private coding instructor for Juni Learning. Why teach? Rebecca likes breaking things down into fundamentals and helping her students build a solid foundation in what they are learning. She believes that if someone knows HOW something works, he or she is able to make it work in any circumstance.
                    </p>
                    <p>
                        Rebecca likes to do more than code and teach. She spent a summer as a professional Dungeon Master, hosting and teaching D&D 5e games for several groups and at a weekly open table. If you let her, Rebecca can talk about the difference between a perception and investigation check from dawn ‘till dusk. Currently, she is running an alien-horror version of Curse of Strahd on Roll20.
                    </p>
                    <p>
                        Rebecca also likes to climb and canyoneer. She was projecting 11d/12as but now stays at home building websites. She has dived into the depths of Pandora’s Box in Capitol Reef and discovered just how narrow a canyon can be without being TOO narrow.
                    </p>
                    <br>
            <img class="sig" src="../assets/sig.png">
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
    p {
        text-align: left;
        /* margin: 0px 10px; */
    }

    img {
        width: 80%;
    }

    ul {
        font-family: 'Montserrat', sans-serif;
        padding: 5px;
        text-align: left;
        list-style-type: none;
    }

    li {
        margin-left: 50px;
        display: flex;
    }

    li p {
        margin-top: -10px;
        margin-left: 10px;
    }

    h4 {
      margin-bottom: 20px;
      margin-top: 30px;
    }

    .header {
        width: 100%;
        max-width: 500px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .head {
        background-color: rgb(100, 111, 88);
    }

    .portrait {
        margin: 0px 0px 20px 0px;
        max-width: 300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .about {
        margin-bottom: -10px;
    }

    .sig {
        max-width: 300px;
    }

    .content {
        padding-top: 30px;
        padding: 10px;
    }

    @media only screen and (min-width: 700px) {
        .content-top {
            display: flex;
            align-items: flex-start;
            flex-direction: row-reverse;
            padding-top: 50px;
        }

        .endingp {
            margin-bottom: 200px;
        }

        .sig {
            margin: -90px 400px 0px 0px;
            width: 200px;
        }

        .content {
            max-width: 1200px;
            margin: auto;
            background-color: white;
            padding: 50px;
        }

        .about {
            margin-bottom: -10px;
            background: rgb(100, 111, 88);
            background: linear-gradient(0deg, rgba(100, 111, 88, .5) 20%, rgba(100, 111, 88, .05) 60%);
        }

        .portrait {
            margin-left: 30px;
            margin-bottom: 50px;
        }

        .sidebar {
            width: 500px;
        }

        .text {
          width: 800px;
        }


        @media only screen and (min-width: 1000px) {
            .sig {

                right: 100px;
            }
        }

    }
</style>