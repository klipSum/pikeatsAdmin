const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");







// INITIALIZE EXPRESS -----------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    const app = express();







// INITIALIZE BODY PARSER -------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // parse application/x-www-form-urlencoded xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        app.use(bodyparser.urlencoded({ extended: true }))

    // parse application/json xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        app.use(bodyparser.json())







// BRING IN STATIC FILES --------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // FOR STYLES ---------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.use("/public/styles", express.static("./public/styles"));



    // FOR SCRIPTS --------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.use("/public/scripts", express.static("./public/scripts"));
    
    
    
    /////////////////////////////////////////////////////////////////////////////
    // SET VIEW ENGINE ----------------------------------------------------------
    /////////////////////////////////////////////////////////////////////////////
    
        app.set("view engine", "ejs");







// SETUP MONGO DB xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // CREATE MONGOOSE SCHEMA FOR UPLOAD ----------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        const postSchema = {

            image:String,
            area:String,
            rating:Number,
            calorie:Number,
            comments:String

        }

    // CREATE NEW USER POST -----------------------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        const Post = mongoose.model("Post", postSchema)







// SETUP ROUTES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // SETUP ROUTES FOR DEFAULT HOME PATH ---------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // FOR INDEX HOME PAGE --------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/", (req, res) => {

                res.render("index");

            });










    // SETUP ROUTES FOR OTHER PAGE ROUTES ---------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // SETUP GET PATHS ------------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            // REVIEW PAGE PATH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                app.get("/review", (req, res) => {

                    res.render("review");

                });





        // SETUP POST PATHS -----------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            // REVIEW PAGE PATH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                app.post("/review", (req, res) => {

                    // OPEN CONNECTION FOR USERS POSTS --------------------------
                    // ----------------------------------------------------------

                        mongoose.connect("mongodb+srv://klipsumlmp:sZRAj3EnrLFPfm23@pikeats.urlwdfx.mongodb.net/pikEatsUsers")

                    // CREATE NEW POST ------------------------------------------
                    // ----------------------------------------------------------

                        let newPost = new Post ({

                            image:req.body.userImageConverted,
                            area:req.body.userArea,
                            rating:req.body.userRatings,
                            calorie:req.body.userCalories,
                            comments:req.body.userComments

                        })

                    // SAVE POST TO MONGO DB ------------------------------------
                    // ----------------------------------------------------------

                        newPost.save()

                    // FINALLY RERENDER PAGE WHEN DONE --------------------------
                    // ----------------------------------------------------------

                        res.redirect("review");

                });









/////////////////////////////////////////////////////////////////////////////////
// OPEN PORT AND LISTEN ---------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////
        
    // PORT LISTEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // //////////////////////////////////////////////////////////////////////////

        const port = process.env.PORT || 8081;


    // PORT LISTEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // //////////////////////////////////////////////////////////////////////////

        app.listen(port, () => {

            console.log("server started at port: "  + port);

        });