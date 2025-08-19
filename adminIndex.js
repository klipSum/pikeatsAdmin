const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

require("dotenv").config()

const getSeason = process.env.getOpenSeason
const giveSeason = process.env.giveOpenSeason







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

        const getPostSchema = {

            // USER SUBMITS -------------------------------------
            // --------------------------------------------------

                userImage:String,                           // 1
                userArea:String,                            // 2
                userRating:Number,                          // 3
                userCalorie:Number,                         // 4
                userDescription:String,                     // 5
                userTime:String,                            // 6
                userDate:String,                            // 7
                userReply:String,                           // 8
                userReplyTime:String,                       // 9
                userReplyDate:String,                       // 10

            // ADMIN SUBMITS ------------------------------------
            // --------------------------------------------------

                adminComments:String,                       // 11
                adminCommentTime:String,                    // 12
                adminCommentDate:String,                    // 13

            // IDENTIFICATION SUBMITS ---------------------------
            // --------------------------------------------------

                userId:String                               // 14



        }

    // CREATE NEW USER POST -----------------------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        const posts = mongoose.model("posts", getPostSchema)







// SETUP ROUTES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // SETUP ROUTES FOR DEFAULT HOME PATH ---------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // FOR INDEX HOME PAGE --------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/", (req, res) => {

                // OPEN CONNECTION FOR USERS POSTS ------------------------------
                // --------------------------------------------------------------

                    mongoose.connect(`${getSeason}`)

                // FIND ALL POSTS -----------------------------------------------
                // --------------------------------------------------------------

                    posts.find().then((posts) => {

                        // RENDER INDEX PAGE ------------------------------------
                        // ------------------------------------------------------

                            res.render("index", {

                                postList: posts,
                                adminPostList: posts

                            });

                    })

            });










    // SETUP ROUTES FOR OTHER PAGE ROUTES ---------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // SETUP GET PATHS ------------------------------------------------------
        // //////////////////////////////////////////////////////////////////////





        // SETUP POST PATHS -----------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.post("/", (req, res) => {

                    // CREATE TIME AND DATE STAMPS ------------------------------
                    // ----------------------------------------------------------

                        // SETUP VARIABLES --------------------------------------
                        // //////////////////////////////////////////////////////

                            // SETUP VARIABLES FOR TIME DATE STRINGS ////////////
                            // //////////////////////////////////////////////////

                                const timeDateInitiate = new Date()

                                    // SETUP VARIABLES FOR GET TIME MARKERS /////
                                    // //////////////////////////////////////////

                                        const hour = timeDateInitiate.getHours()
                                        const minute = timeDateInitiate.getMinutes()

                                    // SETUP VARIABLES FOR GET DATE MARKERS /////
                                    // //////////////////////////////////////////

                                        const day = timeDateInitiate.getDate()
                                        const month = timeDateInitiate.getMonth()
                                        const year = timeDateInitiate.getFullYear()


                            // SETUP VARIABLES FOR ARRAYS ///////////////////////
                            // //////////////////////////////////////////////////

                                const monthMappers = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

                            // SETUP FULL CONSTRUCTED STRINGS ///////////////////
                            // //////////////////////////////////////////////////

                                // MAKE FULL TIME AND DATE STRING ///////////////
                                // //////////////////////////////////////////////

                                    var currentTime = `${hour}H${minute}`
                                    var currentDate = `${day} ${monthMappers[month]} ${year}`

                    
                                

                            // VARIABLES FOR UPDATES TO ADMIN REPLY -------------
                            // --------------------------------------------------

                                const newCommentUpdate = req.body.adminReplyActual
                                const currentObjectToReplace = '68910d8647d76d44988bfcd6'

                            // UPDATE FOUND POST USING SELECTED USERS ID --------
                            // --------------------------------------------------

                                posts.updateOne(
                                    
                                    {
                                        _id: currentObjectToReplace 
                                    
                                    },
                                    
                                    {
                                        $set: {
                                        
                                            adminComments: newCommentUpdate,
                                            adminCommentTime: currentTime,
                                            adminCommentDate: currentDate
                                    
                                        }
                                    })

                                .then(result => {
                                    console.log('Update result:', result)
                                    
                                    if (result.acknowledged == true) {

                                        console.log("UPDATED. HOORAY.")

                                    }

                                    else {

                                        console.log("NOT UPDATED. BOO.")

                                    }
                                })
                                .catch(error => {
                                    console.error('Error updating user:', error)
                                })

                    // FINALLY RERENDER PAGE WHEN DONE --------------------------
                    // ----------------------------------------------------------

                        res.redirect("/")

            })









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