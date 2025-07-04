// DECLARE VARIABLES FOR ENTIRE PAGE --------------------------------
// //////////////////////////////////////////////////////////////////

    // VARIABLES DECLARED -------------------------------------------
    // //////////////////////////////////////////////////////////////

        // VARIABLES FOR USE ----------------------------------------
        // //////////////////////////////////////////////////////////

            var getSetPostMainContainer = document.querySelector(`.adminIncomingPostsSetterFirstSetContainer`)


                // VARIABLES FOR COMMENTS CLICKERS ------------------
                // //////////////////////////////////////////////////

                    var getCommentBlockMain = document.querySelector(`.adminIncomingPostsOtherSwitchesContainer`)

                    var getOpenCommentsClicker = document.querySelector(`.adminAllPostsCommentsSwitchButtonClickersOn`)
                    var getCloseCommentsClicker = document.querySelector(`.adminAllPostsCommentsSwitchButtonClickersOff`)

        

    // SRINGS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // STRINGS FOR USE ------------------------------------------
        // //////////////////////////////////////////////////////////

        

    // ARRAYS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // ARRAYS FOR DOCUMENT GATHER -------------------------------
        // //////////////////////////////////////////////////////////

            // ARRAY FOR ID GATHER ----------------------------------
            // //////////////////////////////////////////////////////

                var gatherPostDBid = []

            // ARRAY FOR IMAGE GATHER -------------------------------
            // //////////////////////////////////////////////////////

                var gatherPostDBimage = []

            // ARRAY FOR AREA GATHER --------------------------------
            // //////////////////////////////////////////////////////

                var gatherPostDBarea = []

            // ARRAY FOR RATING GATHER ------------------------------
            // //////////////////////////////////////////////////////

                var gatherPostDBrating = []

            // ARRAY FOR CALORIES GATHER ----------------------------
            // //////////////////////////////////////////////////////

                var gatherPostDBcalorie = []

            // ARRAY FOR COMMENTS GATHER ----------------------------
            // //////////////////////////////////////////////////////

                var gatherPostDBcomments = []

        // ARRAYS FOR GATHERED CARDS MAIN CLASSNAMES ----------------
        // //////////////////////////////////////////////////////////

            var arrayForGatheredCardsMainClassNames = []

        // ARRAYS FOR DOCUMENT GATHER ALIGNER -----------------------
        // //////////////////////////////////////////////////////////

            var arrayAlignerForItemsPush = [

                gatherPostDBid, gatherPostDBimage, gatherPostDBarea,
                gatherPostDBrating, gatherPostDBcalorie, gatherPostDBcomments

            ]
            

        // ARRAYS FOR CLASS NUMBERS ---------------------------------
        // //////////////////////////////////////////////////////////

            var classNumbers = [

                "One", "Two", "Three", "Four", "Five", 
                "Six", "Seven", "Eight", "Nine", "Ten",

                "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
                "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", 
                "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", 
                "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive", 
                "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fiftty"

            ]
            

        // ARRAYS FOR STAR IMAGES -----------------------------------
        // //////////////////////////////////////////////////////////

            var startDefault = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgB7VrrcdpAEF5eMzDDs4LIFQR3IEpIBbErwKnAdgdOB6QCuwOUCowrgFQAA/zjlW+JxGBFgluxOsQM34zG9unmbj/2vYboiisuD/P5vDudToez2ex9PB47lCJylBJY8GKxONxb8mq1WodSQp5SQqlUegwtudDOHaWEVDQCk2pvNpv3iFeT5XJ502q1JqSMtDTyGrPezOfzD5QC1Imw+UAbTtx7EOnCf5qkDFUiLCAEfTyyrRnhPydDlQiiVPeQNgJgz4N2OFZz9ohwewyq4VhNIwnMxUWidEkJKho5EG6PQU0rWhp5pWRQS5InE+F6ysTBYwVAlNNwfLFpsRmt1+s2BPgKAm0suXQicrncCGcNcO4HzvWQ/UfI/iPRGXEvOCfAgZ09oV0sO3jUk1kMuIwZgCQT/A0ZRtVqdRC3eUfET2Z3hUIh+KTblE14PrmP1Wr1FtRtOyIwmeEptn4m7KLelkiCZJYZQG6nUqn82UYtdixoY0QXBpaZSfDvu/ALe+tcEhmWlWUO/v4UtdjE4Ox9OJNDGUZAYj9E/xd+/XKjT/bCrAiQbeKT+BSKI/OIX8z1KYNAsrwNk2BEligIaR6Y31PGAJO/jyLBiK216vV6D0nnB2UHz8jsvbiXB4vGRqPxwgfQ+fEMK3k6tMGoaITPPOGHep9tiKMkGMbVL/qGHmz0O9nFT5AwGh+JynhohiOZS3YwAIlb082ixorLabIE3PVLsj+12a8CRAlZRIQbLLIElEpfJPulGrFWtsC0WpL9IiI2Gy+p9kVEbFbF+NDS8RGU+LZ7+KZkam9MBC2l9bK+XC43TPcaEznHYGKxWOgnxKREuJvjZoiSQd+06N9wTgIPTwftwA2eFvc30pmA5MMzJoJwaJqgPDwdnjdxgxYscn/DpCSEJElR07Q8iiAQhoSQJCkaEzmQQzwyIBDGHqFv/hlRd+prJHwZLunx/8ylBMIAmTd/7NmJuGNgeo5xP+KPVbdNDgi8SMf+Ce6Z+Peof7ngChv4C+FebC5yhenSAAAAAElFTkSuQmCC`
            var starSelected = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANkSURBVHgB7ZpfThNBHMe/u1tBYlLgRW01cTdUE58oNyg3WE4AngA8gXCDegLxAjo3oJ6A8mSiJl0TkhqfGk3UIOz4m+kWZdktM3RmLEk/D7TZ/nZnvjPz+zOzADNmWMGDRb704m2eYocDA+8EG7WnLIElKrBE/30ckoi2+C5Hax6v6O86LOHDEv4cXly4wNE6/hRvwRJWltZxL24GKQ4LGhv8/IYoWmMDGMbKjJCIt0XXyVeW5qrYgQWMC+kPl09Y9nsAbPcO4yUYxqgQ2UEv5xs5xKwsVMfbXAejQm5XsY0xszGCxOyIqAaDGBOSdWxX+YZhODaGMSGXwu1VUDjuf4xbMIQRISLcpsAWdAnM+YoRIWXh9koMJsmJhYh6CgoOXkZAUc6E42tn9uMPcZM+mpUAq9xDU4wqJiehjnTPUhzREu1UTpHoFpilQkROuHVHjrTsNDXQoukLRR6AA0Q5QwPV9Ti6Jxzv/BTJwyesO8Ye5x2fr2KLLqxSZ5v02cQ04qEjxJ1yHP3+Djaq287LeEpmosgLh7ZTDC1lGugW+RaCRWwi2xrIPvd75GwperiB8AU/rNfffJZRqxZJx0pw80iECPHlb/j15RQluDkkWZ8lF9whW2IHmCAvOEKKyFaS5JJffxXlBolxFWZ1EWHZJxF3o4uhuDBAyWLOlzMzdQQ+1vIiBIUlSu0x61CYe4Zpg/pUJEJQWmvVGmyfltdzTA97ok9lP44tGusrrE3Ov4f/z15the2OM1BK4uQzuyTZ+D5bkStFCJSrETod2SfrTTiEc7ysN5jS8ZFWWUViDuiOFhxA/tmlpb2maq+1sUqpnIYrUrzWMbd29jspuglZSwglo1U4grL3Iy17HWNyPmdlC7W1rGOvt7Q8d8Wk5+nNvq6PhHCEZ8tHstMTZwhn1zm1VxZCJxrOy/r5e/6iqq2ykAp3v9niP1LzCTG9vqOLw7drvWqjl6nml5Z2xOLoUHZep4Ivur/ClrP9TaLzCE+jTWUhZKiWoEYCGmxdbtAyxF5CiNIRpJMUzc1IiYA8OoJ0kqJOHgkLryoKyDMSRIXohnxGUec8GzNyubF9ujvSFZDnQYMx8QwxGPk2RCmv+hz1jRWdefGz4TtyL0D73zMlk4zaoYPqwa8K2lFk/p8LZrjgD70JH5InxbN8AAAAAElFTkSuQmCC`

            var star64Images = [

                startDefault,
                starSelected

            ]
            

        // ARRAYS FOR COMMENTS BLOCKS -------------------------------
        // //////////////////////////////////////////////////////////

            var arrayForCommentsBlocks = []
            

        // ARRAY FOR LOAD MORE BUTTON CLASSNAMES --------------------
        // //////////////////////////////////////////////////////////

            var arrayForLoadMoreClassNames = []

        

    // NUMBER MAKES AND COLLECTIONS DECLARED ------------------------
    // //////////////////////////////////////////////////////////////

        // OVERALL POST NUMBER GATHERER -----------------------------
        // //////////////////////////////////////////////////////////

            var collectOverAllPostsNumberCount = 0

        // POST CONTROL NUMBERS -------------------------------------
        // //////////////////////////////////////////////////////////

            var getRunPostCreateWholeNumber = 0
            var getRunPostCreateRemainderNumber = 0

        // MAXIMUM POST NUMBER GATHERER -----------------------------
        // //////////////////////////////////////////////////////////

            var collectMaximumPostsNumberCount = 200

        // NUMBERS MAKES FOR POST CREATION PAGINATION LIMITS --------
        // //////////////////////////////////////////////////////////

            var makePostPaginationLimitsDefault = 0

        // GET NUMBERS FOR LOAD MORE BUTTON CLASS NUMBERS -----------
        // //////////////////////////////////////////////////////////

            var collectPreviousLoadButtonClassNameNumber = 0
            var collectNextLoadButtonClassNameNumber = 0




















// MAKE FUNCTIONS FOR ENTIRE PAGE -----------------------------------
// //////////////////////////////////////////////////////////////////

    // --------------------------------------------------------------
    // GATHER POSTS FUNCTIONS ---------------------------------------
    // --------------------------------------------------------------




        function getDOMpostsInfoFromDBDownload () {


            // GET NUMBER OF OBJECTS IN PARENT CONTAINER ------------
            // ------------------------------------------------------

                var getPostsNumber = getSetPostMainContainer.children.length

                    // UPDATE POSTS COLLECTED NUMBER ----------------
                    // ----------------------------------------------

                        collectOverAllPostsNumberCount = getPostsNumber

















            // MAKE FUNCTION FOR COLLECTION BASED ON POST NUMBER ----
            // ------------------------------------------------------

                // FOR POST NUMBER CREATION -------------------------
                // --------------------------------------------------


                    // COLLECT DATA FROM INCOMING DB POSTS -----------------
                    // -----------------------------------------------------

                        for ( childrenCounter = 0; childrenCounter < getPostsNumber; childrenCounter++ ) {
                            
                            // GET CHILD AND RUN LOOP TO GET CHILDREN DATA -
                            // ---------------------------------------------

                                var getFirstChildMainContainer = getSetPostMainContainer.children[childrenCounter]

                                    // GET CHILDREN OF FIRST CHILD AND RUN COLLECTION LOOP
                                    // -------------------------------------

                                        var getFirstGrandchildMain = getFirstChildMainContainer

                                        console.log()
                                        var getFirstChildChilrenCount = getFirstGrandchildMain.children.length

                                            // RUN COLLECTION LOOP OF CHILDREN
                                            // -----------------------------

                                                for ( grandChildrenCounter = 0; grandChildrenCounter < getFirstChildChilrenCount; grandChildrenCounter++ ) {

                                                    // IF UNDEFINED THEN SKIP
                                                    // ---------------------

                                                        if ( 
                                                            
                                                                (getFirstGrandchildMain.children[grandChildrenCounter].textContent == undefined) ||
                                                                (getFirstGrandchildMain.children[grandChildrenCounter].textContent == null)
                                                            
                                                            ) 
                                                            
                                                        {

                                                        }

                                                    // IF NOT, THEN CONTINUE
                                                    // ---------------------

                                                        else {


                                                            var makeItemCollectString = getFirstGrandchildMain.children[grandChildrenCounter].textContent

                                                                // POPULATE ARRAYS WITH INFO COLLECTED
                                                                // ---------

                                                                    arrayAlignerForItemsPush[grandChildrenCounter].push(makeItemCollectString)

                                                                

                                                        }

                                                }




                        


                    }











                        





            // EMPTY OUT DOM AND MAKE SPACE FOR NEW POSTS SET -------
            // ------------------------------------------------------

                // RUN LOOP FOR CHILDREN REMOVAL --------------------
                // --------------------------------------------------

                    // FOR RAW COLLECTED INITIAL DATA REMOVAL -------
                    // ----------------------------------------------

                        for ( childrenRemoverCount = 0; childrenRemoverCount < getPostsNumber; childrenRemoverCount++ ) {

                            // REMOVE FIRST CHILD TILL EMPTY ------------
                            // ------------------------------------------

                                getSetPostMainContainer.removeChild(getSetPostMainContainer.children[0])

                        }











                        





            // CHECK POPST PARAMS AND SETUP POSTS CARDS -------------
            // ------------------------------------------------------

                checkPostCreateLimits()


        }









    // --------------------------------------------------------------
    // POST CREATION LIMITSS FUNCTIONS ------------------------------
    // --------------------------------------------------------------

        function checkPostCreateLimits () {


            // DECLARE VARIABLES FOR USE ----------------------------
            // ------------------------------------------------------

                var numberOfPosts = collectOverAllPostsNumberCount
                var pageDividerWholeNumberMake = Number(String(collectOverAllPostsNumberCount / 10).split(".")[0])
                var pageDividerNumberRemainderMake = Number(String(collectOverAllPostsNumberCount / 10).split(".")[1])


            // UPDATE GLOBAL USE VARIABLES --------------------------
            // ------------------------------------------------------

                getRunPostCreateWholeNumber = pageDividerWholeNumberMake
                getRunPostCreateRemainderNumber = pageDividerNumberRemainderMake

                    





            // CHECK IF POSTS EXIST ---------------------------------
            // ------------------------------------------------------

                // IF NO POSTS THEN SHOW EMPTY SCREEN SETTING -------
                // --------------------------------------------------

                    if ( numberOfPosts == 0 ) {

                        console.log("NO POSTS TO SHOW SCREEN")

                        // REMOVE COMMENTS SHOW HIDE BLOCK ----------
                        // ------------------------------------------

                            removeCommentsMainButtonBlock()

                        // SHOW NO POSTS SCREEN ---------------------
                        // ------------------------------------------

                    }

                // AND IF ATLEAST ONE POST PRESENT TO COLLECT THEN COLLECT POST
                // --------------------------------------------------

                    else if ( numberOfPosts > 0 ) {

                        console.log("ATLEAST ONE POST DETECTED")


                            // CHECK POST NUMBER STEP COUNTER -------
                            // --------------------------------------

                                // 10 POSTS DETECTED ----------------
                                // ----------------------------------

                                    if ( (numberOfPosts > 0 && numberOfPosts < 10) || (numberOfPosts == 10) ) {

                                        // IF 10 POSTS TOTAL --------
                                        // --------------------------

                                            if ( numberOfPosts == 10 ) {

                                                console.log(`${numberOfPosts} POSTS COLLECTED...`)

                                                // CREATE POSTS -----
                                                // ------------------

                                                    postCreateFirstPageresultsSetup(numberOfPosts)

                                            }

                                        // IF UNDER 10 AND OVER 0 POSTS
                                        // --------------------------
                                        
                                            else {

                                                console.log(`${numberOfPosts} POSTS COLLECTED...`)

                                                // CREATE POSTS -----
                                                // ------------------

                                                    postCreateFirstPageresultsSetup(numberOfPosts)

                                            }

                                    }

                                // 20 POSTS DETECTED ----------------
                                // ----------------------------------

                                    else if ( (numberOfPosts > 10 && numberOfPosts < 20 ) || (numberOfPosts == 20) ) {

                                        // IF 20 POSTS TOTAL --------
                                        // --------------------------

                                            if ( numberOfPosts == 20 ) {

                                                console.log(`${numberOfPosts} POSTS COLLECTED...`)

                                                    // CREATE POSTS BASED ON NUMBER LIMITER
                                                    // --------------

                                                    // CREATE LOAD MORE BUTTON
                                                    // --------------

                                            }

                                        // IF UNDER 20 AND OVER 10 POSTS
                                        // --------------------------
                                        
                                            else {

                                                console.log(`${numberOfPosts} POSTS COLLECTED...`)

                                                    // CREATE POSTS BASED ON NUMBER LIMITER
                                                    // --------------

                                                    // CREATE LOAD MORE BUTTON
                                                    // --------------

                                            }

                                    }

                        // PLACE COMMENTS SHOW HIDE BLOCK -----------
                        // ------------------------------------------

                            placeCommentsMainButtonBlock()

                    }



        }









    // --------------------------------------------------------------
    // MAKE FUNCTIONS FOR COMMENTS BUTTON MAIN PLACE OR REMOVE FUNCTIONS
    // --------------------------------------------------------------

        // FOR PLACE COMMENTS BLOCK ---------------------------------
        // ----------------------------------------------------------

            function placeCommentsMainButtonBlock () {

                // CHECK IF HIDDEN THEN MAKE VISIBLE ----------------
                // --------------------------------------------------

                    if ( getCommentBlockMain.style.display = `none` ) {

                        getCommentBlockMain.style = `
                
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:0px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            setTimeout(() => {

                                getCommentBlockMain.style = `
                                
                                    width:300px;
                                    opacity:1;
                                    display:block;
                                    margin-top:10px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                            }, 50)


                    }

            }



        // FOR REMOVE COMMENTS BLOCK --------------------------------
        // ----------------------------------------------------------

            function removeCommentsMainButtonBlock () {

                // CHECK IF VISIBLE THEN HIDE -----------------------
                // --------------------------------------------------

                    if ( getCommentBlockMain.style.display = `block` ) {

                        getCommentBlockMain.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:0px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            setTimeout(() => {

                                getCommentBlockMain.style = `
                                
                                    width:300px;
                                    opacity:0;
                                    display:none;
                                    margin-top:0px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                            }, 300)


                    }

            }









    // --------------------------------------------------------------
    // CREATE POST CARDS INITIAL SETTING ----------------------------
    // --------------------------------------------------------------

        function postCreateFirstPageresultsSetup (postCreateWholeNumber) {

            // RUN LOOP FOR FIRST PAGE RESULTS CREATION -------------
            // ------------------------------------------------------

                for ( postCreateCounter = 0; postCreateCounter < postCreateWholeNumber; postCreateCounter++ ) {

                    createPostBlocks(postCreateCounter)

                }

        }









    // --------------------------------------------------------------
    // MAKE POST CONTAINER DEFAULT START FUNCTIONS ------------------
    // --------------------------------------------------------------

        function createPostBlocks (ClassNumberSelector) {


            // CREATE POST GENERAL BLOCK --------------------------------
            // ----------------------------------------------------------

                var createGeneralPostContainer = document.createElement(`div`)
                createGeneralPostContainer.className = `postGeneralContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST GENERAL CONTAINER ---------------------
                    // --------------------------------------------------

                        createGeneralPostContainer.style = `
                        
                            width:100%;
                            padding:10px 0px;
                            position:relative;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND POST GENERAL CONTAINER --------------------
                    // --------------------------------------------------

                        getSetPostMainContainer.appendChild(createGeneralPostContainer)






        

            // CREATE POST GENERAL HOST BLOCK ---------------------------
            // ----------------------------------------------------------

                var createGeneralPostHostContainer = document.createElement(`div`)
                createGeneralPostHostContainer.className = `postGeneralHostBlockContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST GENERAL CONTAINER ---------------------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.style = `
                        
                            width:90%;
                            padding:10px 0px;
                            display:inline-block;
                            background:#FFFFFF;
                            box-shadow:0px 30px 30px -10px rgba(0,0,0,0.20);
                            border-radius:10px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND POST GENERAL CONTAINER --------------------
                    // --------------------------------------------------

                        createGeneralPostContainer.appendChild(createGeneralPostHostContainer)






        

            // CREATE POST GENERAL HOST ID BLOCK ------------------------
            // ----------------------------------------------------------

                var createGeneralPostHostIDContainer = document.createElement(`div`)
                createGeneralPostHostIDContainer.className = `postGeneralHostBlockIDContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST GENERAL ID TEXT CONTAINER -------------
                    // --------------------------------------------------

                        createGeneralPostHostIDContainer.style = `
                        
                            width:90%;
                            margin:10px 0px 10px 0px;
                            display:inline-block;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND POST GENERAL ID TEXT CONTAINER ------------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.appendChild(createGeneralPostHostIDContainer)




                        


                                // CREATE POST GENERAL HOST ID ACTUAL TEXT 
                                // ======================================

                                    var createGeneralPostHostIDTextActualContainer = document.createElement(`div`)
                                    createGeneralPostHostIDTextActualContainer.className = `postGeneralHostBlockIDActual${classNumbers[ClassNumberSelector]}`

                                        // STYLE POST HOST ID ACTUAL TEXT
                                        // ==============================

                                            createGeneralPostHostIDTextActualContainer.style = `
                                            
                                                width:90%;
                                                color:#2C2C2C;
                                                display:inline-block;
                                                font-size:17px;
                                                text-align:left;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // ADD TEXT TO ID TEXT ACTUAL =
                                        // ==============================

                                            createGeneralPostHostIDTextActualContainer.textContent = `by: ${arrayAlignerForItemsPush[0][ClassNumberSelector]}`

                                        // APPEND ID TEXT ACTUAL TO PARENT ID MAIN BOX
                                        // ==============================

                                            createGeneralPostHostIDContainer.appendChild(createGeneralPostHostIDTextActualContainer)






        

            // CREATE POST GENERAL HOST IMAGE BLOCK ---------------------
            // ----------------------------------------------------------

                var createGeneralPostHostImageContainer = document.createElement(`div`)
                createGeneralPostHostImageContainer.className = `postGeneralHostBlockPostImageContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST IMAGE GENERAL CONTAINER ---------------
                    // --------------------------------------------------

                        createGeneralPostHostImageContainer.style = `
                        
                            width:90%;
                            height:230px;
                            display:inline-block;
                            background:url(${arrayAlignerForItemsPush[1][ClassNumberSelector]});
                            border-radius:8px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND POST IMAGE GENERAL CONTAINER --------------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.appendChild(createGeneralPostHostImageContainer)






        

            // CREATE POST GENERAL HOST RATINGS BLOCK -------------------
            // ----------------------------------------------------------

                var createGeneralPostHostRatingsContainer = document.createElement(`div`)
                createGeneralPostHostRatingsContainer.className = `postGeneralHostBlockRatingsContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST GENERAL CONTAINER ---------------------
                    // --------------------------------------------------

                        createGeneralPostHostRatingsContainer.style = `
                        
                            width:90%;
                            height:50px;
                            display:inline-block;
                            margin-top:0px;
                            background:#FFFFFF;
                            border-radius:8px;
                            box-shadow:0px 20px 30px -10px rgba(0,0,0,0.10);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND POST GENERAL CONTAINER --------------------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.appendChild(createGeneralPostHostRatingsContainer)




                        


                                // MAKE STAR ONE CONTAINER MAIN =========
                                // ======================================

                                    var createGeneralPostHostRatingsStarOneContainer = document.createElement(`div`)
                                    createGeneralPostHostRatingsStarOneContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ContainerOne`

                                        // STYLE RATING STAR ONE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsStarOneContainer.style = `
                                            
                                                width:20%;
                                                height:50px;
                                                float:left;
                                                display:inline-block;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // APPEND RATING STAR ONE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsContainer.appendChild(createGeneralPostHostRatingsStarOneContainer)




                                                // MAKE STAR ONE ACTUAL ICON ============
                                                // ======================================

                                                    var createGeneralPostHostRatingsStarOneActualContainer = document.createElement(`div`)
                                                    createGeneralPostHostRatingsStarOneActualContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ActualContainerOne`

                                                        // STYLE RATING STAR ONE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarOneActualContainer.style = `
                                                            
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                background:url(${star64Images[0]});
                                                                background-size:cover;
                                                                background-repeat:no-repeat;
                                                                background-position:center;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        // APPEND RATING STAR ONE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarOneContainer.appendChild(createGeneralPostHostRatingsStarOneActualContainer)




                        


                                // MAKE STAR TWO CONTAINER MAIN =========
                                // ======================================

                                    var createGeneralPostHostRatingsStarTwoContainer = document.createElement(`div`)
                                    createGeneralPostHostRatingsStarTwoContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ContainerTwo`

                                        // STYLE RATING STAR TWO CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsStarTwoContainer.style = `
                                            
                                                width:20%;
                                                height:50px;
                                                float:left;
                                                display:inline-block;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // APPEND RATING STAR TWO CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsContainer.appendChild(createGeneralPostHostRatingsStarTwoContainer)




                                                // MAKE STAR TWO ACTUAL ICON ============
                                                // ======================================

                                                    var createGeneralPostHostRatingsStarTwoActualContainer = document.createElement(`div`)
                                                    createGeneralPostHostRatingsStarTwoActualContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ActualContainerTwo`

                                                        // STYLE RATING STAR ONE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarTwoActualContainer.style = `
                                                            
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                background:url(${star64Images[0]});
                                                                background-size:cover;
                                                                background-repeat:no-repeat;
                                                                background-position:center;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        // APPEND RATING STAR ONE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarTwoContainer.appendChild(createGeneralPostHostRatingsStarTwoActualContainer)




                        


                                // MAKE STAR THREE CONTAINER MAIN =======
                                // ======================================

                                    var createGeneralPostHostRatingsStarThreeContainer = document.createElement(`div`)
                                    createGeneralPostHostRatingsStarThreeContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ContainerThree`

                                        // STYLE RATING STAR ONE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsStarThreeContainer.style = `
                                            
                                                width:20%;
                                                height:50px;
                                                float:left;
                                                display:inline-block;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // APPEND RATING STAR ONE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsContainer.appendChild(createGeneralPostHostRatingsStarThreeContainer)




                                                // MAKE STAR ONE ACTUAL ICON ============
                                                // ======================================

                                                    var createGeneralPostHostRatingsStarThreeActualContainer = document.createElement(`div`)
                                                    createGeneralPostHostRatingsStarThreeActualContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ActualContainerThree`

                                                        // STYLE RATING STAR ONE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarThreeActualContainer.style = `
                                                            
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                background:url(${star64Images[0]});
                                                                background-size:cover;
                                                                background-repeat:no-repeat;
                                                                background-position:center;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        // APPEND RATING STAR ONE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarThreeContainer.appendChild(createGeneralPostHostRatingsStarThreeActualContainer)




                        


                                // MAKE STAR FOUR CONTAINER MAIN ========
                                // ======================================

                                    var createGeneralPostHostRatingsStarFourContainer = document.createElement(`div`)
                                    createGeneralPostHostRatingsStarFourContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ContainerFour`

                                        // STYLE RATING STAR FOUR CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsStarFourContainer.style = `
                                            
                                                width:20%;
                                                height:50px;
                                                float:left;
                                                display:inline-block;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // APPEND RATING STAR FOUR CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsContainer.appendChild(createGeneralPostHostRatingsStarFourContainer)




                                                // MAKE STAR FOUR ACTUAL ICON ============
                                                // ======================================

                                                    var createGeneralPostHostRatingsStarFourActualContainer = document.createElement(`div`)
                                                    createGeneralPostHostRatingsStarFourActualContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ActualContainerFour`

                                                        // STYLE RATING STAR FOUR ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarFourActualContainer.style = `
                                                            
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                background:url(${star64Images[0]});
                                                                background-size:cover;
                                                                background-repeat:no-repeat;
                                                                background-position:center;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        // APPEND RATING STAR FOUR ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarFourContainer.appendChild(createGeneralPostHostRatingsStarFourActualContainer)




                        


                                // MAKE STAR FIVE CONTAINER MAIN ========
                                // ======================================

                                    var createGeneralPostHostRatingsStarFiveContainer = document.createElement(`div`)
                                    createGeneralPostHostRatingsStarFiveContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ContainerFive`

                                        // STYLE RATING STAR FIVE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsStarFiveContainer.style = `
                                            
                                                width:20%;
                                                height:50px;
                                                float:left;
                                                display:inline-block;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // APPEND RATING STAR FIVE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostRatingsContainer.appendChild(createGeneralPostHostRatingsStarFiveContainer)




                                                // MAKE STAR FIVE ACTUAL ICON ============
                                                // ======================================

                                                    var createGeneralPostHostRatingsStarFiveActualContainer = document.createElement(`div`)
                                                    createGeneralPostHostRatingsStarFiveActualContainer.className = `postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ActualContainerFive`

                                                        // STYLE RATING STAR FIVE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarFiveActualContainer.style = `
                                                            
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                background:url(${star64Images[0]});
                                                                background-size:cover;
                                                                background-repeat:no-repeat;
                                                                background-position:center;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        // APPEND RATING STAR FIVE ACTUAL ICON
                                                        // ==============================

                                                            createGeneralPostHostRatingsStarFiveContainer.appendChild(createGeneralPostHostRatingsStarFiveActualContainer)













                                                                    // SWITCH ON SELECTED STARS
                                                                    // xx

                                                                        for ( starNumberCounter = 0; starNumberCounter < arrayAlignerForItemsPush[3][ClassNumberSelector]; starNumberCounter++ ) {

                                                                            
                                                                            // GET STARS VARIABLES 

                                                                                var getStars = document.querySelector(`.postGeneralHostBlockRatingsStar${classNumbers[ClassNumberSelector]}ActualContainer${classNumbers[starNumberCounter]}`)

                                                                            // SWITCH ON STARS 

                                                                                getStars.style = `
                                                                                
                                                                                    width:20px;
                                                                                    height:20px;
                                                                                    top:0;
                                                                                    left:0;
                                                                                    right:0;
                                                                                    bottom:0;
                                                                                    margin:auto;
                                                                                    position:absolute;
                                                                                    background:url(${star64Images[1]});
                                                                                    background-size:cover;
                                                                                    background-repeat:no-repeat;
                                                                                    background-position:center;
                                                                                    transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;

                                                                                `


                                                                        }










        

            // CREATE POST GENERAL HOST AREA BLOCK ----------------------
            // ----------------------------------------------------------

                var createGeneralPostHostAreaContainer = document.createElement(`div`)
                createGeneralPostHostAreaContainer.className = `postGeneralHostBlockAreaContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST GENERAL CONTAINER ---------------------
                    // --------------------------------------------------

                        createGeneralPostHostAreaContainer.style = `
                        
                            width:90%;
                            margin:10px 0px 0px 0px;
                            display:inline-block;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND POST GENERAL CONTAINER --------------------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.appendChild(createGeneralPostHostAreaContainer)




                        


                                // CREATE POST GENERAL HOST AREA ACTUAL TEXT 
                                // ======================================

                                    var createGeneralPostHostAreaTextActualContainer = document.createElement(`div`)
                                    createGeneralPostHostAreaTextActualContainer.className = `postGeneralHostBlockAreaActual${classNumbers[ClassNumberSelector]}`

                                        // STYLE RATING STAR ONE CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostAreaTextActualContainer.style = `
                                            
                                                width:90%;
                                                color:#2C2C2C;
                                                display:inline-block;
                                                font-size:17px;
                                                text-align:left;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // ADD TEXT TO AREA TEXT ACTUAL =
                                        // ==============================

                                            createGeneralPostHostAreaTextActualContainer.textContent = `${arrayAlignerForItemsPush[2][ClassNumberSelector]}`

                                        // APPEND AREA TEXT ACTUAL TO PARENT AREA MAIN BOX
                                        // ==============================

                                            createGeneralPostHostAreaContainer.appendChild(createGeneralPostHostAreaTextActualContainer)






        

            // CREATE POST GENERAL HOST COMMENTS BLOCK ------------------
            // ----------------------------------------------------------

                var createGeneralPostHostCommentsContainer = document.createElement(`div`)
                createGeneralPostHostCommentsContainer.className = `postGeneralHostBlockCommentsContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE POST GENERAL COMMENTS CONTAINER ------------
                    // --------------------------------------------------

                        createGeneralPostHostCommentsContainer.style = `
                        
                            width:90%;
                            margin:0px 0px 10px 0px;
                            opacity:0;
                            display:none;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND TO POST GENERAL COMMENTS CONTAINER --------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.appendChild(createGeneralPostHostCommentsContainer)




                        


                                // CREATE POST GENERAL HOST AREA ACTUAL TEXT 
                                // ======================================

                                    var createGeneralPostHostCommentsTextActualContainer = document.createElement(`div`)
                                    createGeneralPostHostCommentsTextActualContainer.className = `postGeneralHostBlockCommentsResizer${classNumbers[ClassNumberSelector]}`

                                        // STYLE COMMENTS TEXT ACTUAL CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostCommentsTextActualContainer.style = `
                                            
                                                width:90%;
                                                color:#2C2C2C;
                                                display:inline-table;
                                                font-size:14px;
                                                text-align:left;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // ADD TEXT TO COMMENTS TEXT ACTUAL
                                        // ==============================

                                            createGeneralPostHostCommentsTextActualContainer.textContent = `${arrayAlignerForItemsPush[5][ClassNumberSelector]}`

                                        // APPEND COMMENTS TO POST HOST CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostCommentsContainer.appendChild(createGeneralPostHostCommentsTextActualContainer)


                                                // PUSH COMMENTS BLOCKS CLASS NAMES TO CLASSNAME ARRAY HOLDER
                                                // ======================

                                                    arrayForCommentsBlocks.push(`postGeneralHostBlockCommentsContainer${classNumbers[ClassNumberSelector]}`)






        

            // CREATE VIEW MANAGE COMMENTS CONTAINER --------------------
            // ----------------------------------------------------------

                var createGeneralPostHostManageCommentsContainer = document.createElement(`div`)
                createGeneralPostHostManageCommentsContainer.className = `postGeneralViewManageCommentsContainer${classNumbers[ClassNumberSelector]}`

                    // STYLE VIEW MANAGE COMMENTS CONTAINER -------------
                    // --------------------------------------------------

                        createGeneralPostHostManageCommentsContainer.style = `
                        
                            width:83%;
                            height:50px;
                            margin:10px 0px 0px 0px;
                            display:inline-block;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // APPEND TO POST GENERAL COMMENTS CONTAINER --------
                    // --------------------------------------------------

                        createGeneralPostHostContainer.appendChild(createGeneralPostHostManageCommentsContainer)
















                        


                                // CREATE POST GENERAL HOST MANAGE POST BUTTON BLOCK
                                // ======================================

                                    var createGeneralPostHostManagePostContainer = document.createElement(`div`)
                                    createGeneralPostHostManagePostContainer.className = `postGeneralManagePostContainer${classNumbers[ClassNumberSelector]}`

                                        // STYLE POST GENERAL HOST MANAGE POST BUTTON BLOCK
                                        // ==============================

                                            createGeneralPostHostManagePostContainer.style = `
                                            
                                                width:100%;
                                                height:50px;
                                                float:left;
                                                margin:0px 0px 0px 0px;
                                                display:inline-block;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // APPEND POST GENERAL HOST MANAGE POST BUTTON BLOCK
                                        // ==============================

                                            createGeneralPostHostManageCommentsContainer.appendChild(createGeneralPostHostManagePostContainer)




                        


                                                    // CREATE POST GENERAL HOST VIEW COMMENTS BUTTON ACTUAL TEXT 
                                                    // ======================================

                                                        var createGeneralPostHostManagePostButtonActualContainer = document.createElement(`div`)
                                                        createGeneralPostHostManagePostButtonActualContainer.className = `postGeneralManagePostButtonActual${classNumbers[ClassNumberSelector]}`

                                                            // STYLE VIEW COMMENTS BUTTON ACTUAL CONTAINER MAIN
                                                            // ==============================

                                                                createGeneralPostHostManagePostButtonActualContainer.style = `
                                                                
                                                                    width:95%;
                                                                    height:50px;
                                                                    float:left;
                                                                    color:#FFFFFF;
                                                                    cursor:pointer;
                                                                    padding:0px 5px;
                                                                    display:inline-table;
                                                                    background:#2C2C2C;
                                                                    line-height:50px;
                                                                    border-radius:10px;
                                                                    letter-spacing:1px;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // ADD TEXT TO VIEW COMMENTS BUTTON ACTUAL CONTAINER MAIN
                                                            // ==============================

                                                                createGeneralPostHostManagePostButtonActualContainer.textContent = `manage post`

                                                            // APPEND VIEW COMMENTS BUTTON ACTUAL TO POST HOST CONTAINER MAIN
                                                            // ==============================

                                                                createGeneralPostHostManagePostContainer.appendChild(createGeneralPostHostManagePostButtonActualContainer)



        }









    // --------------------------------------------------------------
    // MAKE OPEN CLOSE COMMENTS FUNCTIONS ---------------------------
    // --------------------------------------------------------------

        // MAKE OPEN COMMENTS FUNCTION ------------------------------
        // ----------------------------------------------------------

            function openCommentsFunction () {

                // MOVE ON SWITCH TO BACK ---------------------------
                // --------------------------------------------------

                    getOpenCommentsClicker.style = `
                    
                        width:100%;
                        height:100%;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        z-index:-1;
                        margin:auto;
                        position:absolute;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // MOVE OFF SWITCH TO FRONT -------------------------
                // --------------------------------------------------

                    getCloseCommentsClicker.style = `
                    
                        width:100%;
                        height:100%;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        z-index:1;
                        margin:auto;
                        position:absolute;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // RUN LOOP AND GET ALL COMMENTS ON PAGE AND OPEN THEM
                // --------------------------------------------------

                    arrayForCommentsBlocks.forEach((classNameSelector) => {

                        // GET COMMENTS BLOCKS AND CHANGE STATUS TO OPENED
                        // ------------------------------------------

                            var getCommentsBlock = document.querySelector(`.${classNameSelector}`)

                                // CHANGE STATE TO OPENNED ----------
                                // ----------------------------------

                                    // SWITCH ON COMMENTS BLOCK -----
                                    // ------------------------------

                                        getCommentsBlock.style = `
                                        
                                            width:90%;
                                            margin:0px 0px 10px 0px;
                                            opacity:0;
                                            display:inline-block;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            // THEN FADE IN COMMENTS BLOCK
                                            // ----------------------

                                                setTimeout(() => {

                                                    getCommentsBlock.style = `
                                            
                                                        width:90%;
                                                        margin:10px 0px 10px 0px;
                                                        opacity:1;
                                                        display:inline-block;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                }, 50)

                    })

            }

        // MAKE CLOSE COMMENTS FUNCTION -----------------------------
        // ----------------------------------------------------------

            function closeCommentsFunction () { 

                // MOVE ON SWITCH TO FRONT --------------------------
                // --------------------------------------------------

                    getOpenCommentsClicker.style = `
                    
                        width:100%;
                        height:100%;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        z-index:1;
                        margin:auto;
                        position:absolute;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // MOVE OFF SWITCH TO BACK --------------------------
                // --------------------------------------------------

                    getCloseCommentsClicker.style = `
                    
                        width:100%;
                        height:100%;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        z-index:-1;
                        margin:auto;
                        position:absolute;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // RUN LOOP AND GET ALL COMMENTS ON PAGE AND CLOSE THEM
                // --------------------------------------------------

                    arrayForCommentsBlocks.forEach((classNameSelector) => {

                        // GET COMMENTS BLOCKS AND CHANGE STATUS TO OPENED
                        // ------------------------------------------

                            var getCommentsBlock = document.querySelector(`.${classNameSelector}`)

                                // CHANGE STATE TO OPENNED ----------
                                // ----------------------------------

                                    // FADE OUT COMMENTS BLOCK ------
                                    // ------------------------------

                                        getCommentsBlock.style = `
                                        
                                            width:90%;
                                            margin:0px 0px 10px 0px;
                                            opacity:0;
                                            display:inline-block;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            // THEN KILL COMMENTS BLOCK
                                            // ----------------------

                                                setTimeout(() => {

                                                    getCommentsBlock.style = `
                                            
                                                        width:90%;
                                                        margin:0px 0px 10px 0px;
                                                        opacity:0;
                                                        display:none;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                }, 300)

                    })

            }

        // CREATE LOAD MORE BUTTONS AFTER DEFAULT BUTTON ------------
        // ----------------------------------------------------------

            function createLoadMorebutton () {

                // CHECK FOR ACTIVE BUTTON AND REMOVE IT --------
                // ----------------------------------------------

                    var getLoadMorePostsButtonContainer = document.querySelector(`.adminIncomingPostsLoadMoreButton${classNumbers[collectPreviousLoadButtonClassNameNumber]}Container`)

                        // IF BUTTON DOES NOT EXISTS THEN ADD NEW BUTTON
                        // --------------------------------------

                            if ( 
                                
                                    getLoadMorePostsButtonContainer == undefined ||
                                    getLoadMorePostsButtonContainer == null
                                
                                )

                                
                            {

                                // INCREASE LOAD MORE BUTTON CLASS NUMBER
                                // ------------------------------

                                    collectPreviousLoadButtonClassNameNumber = collectPreviousLoadButtonClassNameNumber + 1
                                    collectNextLoadButtonClassNameNumber = collectNextLoadButtonClassNameNumber + 1


                                // CREATE LOAD MORE BUTTON VARIABLES 
                                // ------------------------------

                                    var createLoadMoreButtonMainContainer = document.createElement(`div`)

                                        var createLoadMoreButtonActual = document.createElement(`div`)

                                    createLoadMoreButtonMainContainer.className = `adminIncomingPostsLoadMoreButton${classNumbers[collectNextLoadButtonClassNameNumber]}Container`

                                        createLoadMoreButtonActual.className = `adminIncomingPostsLoadMoreButton${classNumbers[collectNextLoadButtonClassNameNumber]}Actual`


                                // ADD TEXT LOAD MORE BUTTON VARIABLES
                                // ------------------------------

                                    createLoadMoreButtonActual.textContent = `load more`


                                // STYLE LOAD MORE BUTTON VARIABLES
                                // ------------------------------

                                    createLoadMoreButtonMainContainer.style = `
                                    
                                        width:300px;
                                        margin-top:20px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        createLoadMoreButtonActual.style = `
                                        
                                            width:90%;
                                            height:50px;
                                            color:rgb(255, 255, 255);
                                            cursor:pointer;
                                            padding:0px 5px;
                                            display:inline-table;
                                            position:relative;
                                            background:rgb(44, 44, 44);
                                            line-height:50px;
                                            border-radius:10px;
                                            letter-spacing:1px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `


                                // APPEND LOAD MORE BUTTON VARIABLES TO MAIN POST CONTAINER
                                // ------------------------------

                                    getSetPostMainContainer.appendChild(createLoadMoreButtonMainContainer)

                                        createLoadMoreButtonMainContainer.appendChild(createLoadMoreButtonActual)

                                // CREATE LOAD MORE BUTTON EVENT LISTENER
                                // ------------------------------

                                    createLoadMoreButtonActual.addEventListener("click", function() {

                                        createLoadMorebutton()

                                    })

                            }

                        // IF BUTTON EXISTS THEN REMOVE OLD AND ADD NEW BUTTON 
                        // --------------------------------------

                            else {

                                // REMOVE PREVIOUS BUTTON -------
                                // ------------------------------

                                    getLoadMorePostsButtonContainer.remove(getLoadMorePostsButtonContainer)

                                // INCREASE LOAD MORE BUTTON CLASS NUMBER
                                // ------------------------------

                                    collectPreviousLoadButtonClassNameNumber = collectPreviousLoadButtonClassNameNumber + 1
                                    collectNextLoadButtonClassNameNumber = collectNextLoadButtonClassNameNumber + 1

                                // CREATE LOAD MORE BUTTON NEW INCREASED CLASS NUMBER
                                // ------------------------------

                                    // CREATE LOAD MORE BUTTON VARIABLES 
                                    // --------------------------

                                        var createLoadMoreButtonMainContainer = document.createElement(`div`)

                                            var createLoadMoreButtonActual = document.createElement(`div`)

                                        createLoadMoreButtonMainContainer.className = `adminIncomingPostsLoadMoreButton${classNumbers[collectNextLoadButtonClassNameNumber]}Container`

                                            createLoadMoreButtonActual.className = `adminIncomingPostsLoadMoreButton${classNumbers[collectNextLoadButtonClassNameNumber]}Actual`


                                    // ADD TEXT LOAD MORE BUTTON VARIABLES
                                    // --------------------------

                                        createLoadMoreButtonActual.textContent = `load more`


                                    // STYLE LOAD MORE BUTTON VARIABLES -
                                    // --------------------------

                                        createLoadMoreButtonMainContainer.style = `
                                        
                                            width:300px;
                                            margin-top:20px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            createLoadMoreButtonActual.style = `
                                            
                                                width:90%;
                                                height:50px;
                                                color:rgb(255, 255, 255);
                                                cursor:pointer;
                                                padding:0px 5px;
                                                display:inline-table;
                                                position:relative;
                                                background:rgb(44, 44, 44);
                                                line-height:50px;
                                                border-radius:10px;
                                                letter-spacing:1px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `


                                    // APPEND LOAD MORE BUTTON VARIABLES TO MAIN POST CONTAINER
                                    // --------------------------

                                        getSetPostMainContainer.appendChild(createLoadMoreButtonMainContainer)

                                            createLoadMoreButtonMainContainer.appendChild(createLoadMoreButtonActual)

                                // CREATE LOAD MORE BUTTON EVENT LISTENER
                                // ------------------------------

                                    createLoadMoreButtonActual.addEventListener("click", function() {

                                        createLoadMorebutton()

                                    })



                            }

            }























// MAKE EVENTS FOR ENTIRE PAGE --------------------------------------
// //////////////////////////////////////////////////////////////////

    // SETUP STREAM VIDEO EVENTS ------------------------------------
    // //////////////////////////////////////////////////////////////

    // SETUP OPEN CLOSE COMMENTS BLOCKS EVENTS ----------------------
    // //////////////////////////////////////////////////////////////

        // OPEN COMMENTS BLOCK EVENTS -------------------------------
        // ----------------------------------------------------------

            getOpenCommentsClicker.addEventListener("click", function () {

                openCommentsFunction()

            })

        // CLOSE COMMENTS BLOCK EVENTS ------------------------------
        // ----------------------------------------------------------

            getCloseCommentsClicker.addEventListener("click", function () {

                closeCommentsFunction()

            })





// MAKE AUTORUNS FOR ENTIRE PAGE ------------------------------------
// //////////////////////////////////////////////////////////////////

    // RUN POST INFO COLLECTOR --------------------------------------
    // --------------------------------------------------------------

        getDOMpostsInfoFromDBDownload()