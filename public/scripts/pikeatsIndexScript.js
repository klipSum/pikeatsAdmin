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


                // VARIABLES FOR LOAD MORE BUTTON CLICKERS ----------
                // //////////////////////////////////////////////////

                    var getLoadMoreMainButton = document.querySelector(`.adminAllPostsLoadMorePostsButtonContainer`)


                // VARIABLES FOR POSTS COUNTER CLICKERS -------------
                // //////////////////////////////////////////////////

                    var getPostCounterMainContainer = document.querySelector(`.counterBlock`)


                // MANAGE POSTS MAIN CONTAINER ----------------------
                // //////////////////////////////////////////////////

                    var getManagePostsMainContainer = document.querySelector(`.managePostContainer`)

                    var getManaePostsContentResizer = document.querySelector(`.managePostContentBlockResizer`)

                    var getManagePostsCloseButton = document.querySelector(`.managePostContentBlockBackButton`)


                        // VARIABLES FOR MANAGE POST POPULATION -----
                        // //////////////////////////////////////////

                            var getManagePostCardUserText = document.querySelector(`.managePostContentIDPosterHeadlineContainer`)

                            var getManagePostCardStarOne = document.querySelector(`.managePostContentRatingsStarActualOne`)
                            var getManagePostCardStarTwo = document.querySelector(`.managePostContentRatingsStarActualTwo`)
                            var getManagePostCardStarThree = document.querySelector(`.managePostContentRatingsStarActualThree`)
                            var getManagePostCardStarFour = document.querySelector(`.managePostContentRatingsStarActualFour`)
                            var getManagePostCardStarFive = document.querySelector(`.managePostContentRatingsStarActualFive`)

                            var getmanagePostCardImage = document.querySelector(`.managePostContentImageContainer`)

                            var getManagePostCardLocation = document.querySelector(`.managePostContentResturauntNameContainer`)

                            var getManagePostCardPostedTime = document.querySelector(`.postUserTimeHeaderPostTag`)
                            var getManagePostCardPostedDate = document.querySelector(`.postUserDateHeaderPostTag`)

                            var getManagePostCardUserDescription = document.querySelector(`.managePostContentUserCommentContainer`)


                        // VARIABLES FOR ADMIN POST CREATION --------
                        // //////////////////////////////////////////

                            var getAdminReplyInputField = document.querySelector(`.managePostContentAdminCommentInputActual`)
                            var getAdminReplySubmitButtonMain = document.querySelector(`.managePostContentAdminCommentSubmitButtonContainer`)

                                // VARIABLES FOR ADMIN POSTED COMMENT
                                // //////////////////////////////////

                                    var getResponseBlockMain = document.querySelector(`.managePostContentAdminResponsePostedContainer`)
                                    var getResponseBlockResizer = document.querySelector(`.managePostContentAdminResponsePostedResizer`)

                                // VARIABLES FOR ADMIN POSTED SUBMIT
                                // //////////////////////////////////

                                    var getResponseButton = document.querySelector(`.managePostContentAdminCommentSubmitButtonBlock`)

        

    // SRINGS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // STRINGS FOR USE ------------------------------------------
        // //////////////////////////////////////////////////////////

        

    // ARRAYS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // ARRAYS FOR DOCUMENT GATHER -------------------------------
        // //////////////////////////////////////////////////////////

            // FOR GENERAL USE --------------------------------------
            // //////////////////////////////////////////////////////

                // GET CURRENT SELECTED ID --------------------------
                // //////////////////////////////////////////////////

                    var currentSelectedId = []

            // FOR USERS --------------------------------------------
            // //////////////////////////////////////////////////////

                // ARRAY FOR ID GATHER ------------------------------
                // //////////////////////////////////////////////////

                    var gatherUserPostDBid = []

                // ARRAY FOR IMAGE GATHER ---------------------------
                // //////////////////////////////////////////////////

                    var gatherUserPostDBimage = []

                // ARRAY FOR AREA GATHER ----------------------------
                // //////////////////////////////////////////////////

                    var gatherUserPostDBarea = []

                // ARRAY FOR RATING GATHER --------------------------
                // //////////////////////////////////////////////////

                    var gatherUserPostDBrating = []

                // ARRAY FOR CALORIES GATHER ------------------------
                // //////////////////////////////////////////////////

                    var gatherUserPostDBcalorie = []

                // ARRAY FOR COMMENTS GATHER ------------------------
                // //////////////////////////////////////////////////

                    var gatherPostDBuserDescription = []

                // ARRAY FOR TIME DATE GATHER -----------------------
                // //////////////////////////////////////////////////

                    var gatherPostDBuserTime = []
                    var gatherPostDBuserDate = []

                // ARRAY FOR USER REPLY GATHER ----------------------
                // //////////////////////////////////////////////////

                    var gatherPostDbUserReply = []

                    var gatherPostDbUserReplyTime = []
                    var gatherPostDbUserReplyDate = []

            // FOR ADMINS -------------------------------------------
            // //////////////////////////////////////////////////////

                // ARRAY FOR ADMIN COMMENTS GATHER ------------------
                // //////////////////////////////////////////////////

                    var gatherPostDBadminComments = []

                // ARRAY FOR ADMIN TIME DATE GATHER -----------------
                // //////////////////////////////////////////////////

                    var gatherPostDBadminCommentsTime = []
                    var gatherPostDBadminCommentsDate = []

            // FOR ID COLLECTTIONS ----------------------------------
            // //////////////////////////////////////////////////////

                    var gatherPostDBuserId = []

        // ARRAYS FOR GATHERED CARDS MAIN CLASSNAMES ----------------
        // //////////////////////////////////////////////////////////

            var arrayForGatheredCardsMainClassNames = []

        // ARRAYS FOR DOCUMENT GATHER ALIGNER -----------------------
        // //////////////////////////////////////////////////////////

            var arrayAlignerForItemsPush = [


                // USERS SECTION ------------------------------------
                // --------------------------------------------------

                    gatherUserPostDBid, gatherUserPostDBimage, gatherUserPostDBarea,
                    gatherUserPostDBrating, gatherUserPostDBcalorie, gatherPostDBuserDescription,
                    gatherPostDBuserTime, gatherPostDBuserDate, gatherPostDbUserReply,
                    gatherPostDbUserReplyTime, gatherPostDbUserReplyDate,


                // ADMIN SECTION ------------------------------------
                // --------------------------------------------------

                    gatherPostDBadminComments, gatherPostDBadminCommentsTime, gatherPostDBadminCommentsDate,


                // ID SECTION ---------------------------------------
                // --------------------------------------------------

                    gatherPostDBuserId

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
            

        // ARRAY FOR LOAD BATCH AND LIMITERS ------------------------
        // //////////////////////////////////////////////////////////

            var arrayForNextLoadBatch = [0, 11, 21, 31, 51, 61, 71, 81, 91]
            var arrayForNextBatchLimit = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            

        // ARRAY FOR CLASSNAME COLLECTORS ---------------------------
        // //////////////////////////////////////////////////////////

            // FOR MANAGE POST BUTTON COLLECTION --------------------
            // //////////////////////////////////////////////////////

                var collectedManagedButtonsClassNames = []

                var arrayForManageButtonCollecttion = []

        

    // NUMBER MAKES AND COLLECTIONS DECLARED ------------------------
    // //////////////////////////////////////////////////////////////

        // POST CREATE POPULATE NUMBERS GATHERER --------------------
        // //////////////////////////////////////////////////////////

            var makePopulateNextLoadBatchCounterNumber = 0
            var makePopulateNextSetLoadBatchNumber = 0

        // OVERALL POST NUMBER GATHERER -----------------------------
        // //////////////////////////////////////////////////////////

            var collectOverAllPostsNumberCount = 0

        // REMAINING POSTS AFTER FIRST LOAD -------------------------
        // //////////////////////////////////////////////////////////

            var numberOfPostsAfterFirstLoad = 0

            var numberOfWholePostsAfterFirstLoad = 0
            var numberOfRemainingPostsAfterFirstLoad = 0

        // LOAD MORE POST BUTTON COUNTER TICKERS --------------------
        // //////////////////////////////////////////////////////////

            var loadMorePostsForLoopCounter = 0
            var loadLastBatchPreviousNumberCounter = 0

        // MANAGE POST BUTTON SELECTOR NUMBER -----------------------
        // //////////////////////////////////////////////////////////

            var collectManagePostButtonNumber = 0




















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

                                                                    console.log("THIS THING: " + makeItemCollectString)

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

                                                // CREATE POSTS -----
                                                // ------------------

                                                    postCreateFirstPageresultsSetup(0, numberOfPosts)

                                                // REMOVE LOAD MORE BUTTON
                                                // ------------------

                                                    removeLoadMoreMainButtonBlock()

                                            }

                                        // IF UNDER 10 AND OVER 0 POSTS
                                        // --------------------------
                                        
                                            else {

                                                // CREATE POSTS -----
                                                // ------------------

                                                    postCreateFirstPageresultsSetup(0, numberOfPosts)

                                                // REMOVE LOAD MORE BUTTON
                                                // ------------------

                                                    removeLoadMoreMainButtonBlock()

                                            }

                                    }

                                // MORE THAN 10 POSTS DETECTED ------
                                // ----------------------------------

                                    else {

                                        // CREATE FIRST BATCH OF POSTS
                                        // --------------------------
                                    
                                            postCreateFirstPageresultsSetup(arrayForNextLoadBatch[makePopulateNextLoadBatchCounterNumber], arrayForNextBatchLimit[makePopulateNextSetLoadBatchNumber])

                                        // ADD LOAD MORE BUTTON -----
                                        // --------------------------

                                            placeLoadMoreMainButtonBlock()

                                    }

                        // PLACE COMMENTS SHOW HIDE BLOCK -----------
                        // ------------------------------------------

                            placeCommentsMainButtonBlock()

                    }

                    





            // UPDATE REMAINING POSTS NUMBER AFTER FIRST POST -------
            // ------------------------------------------------------

                numberOfPostsAfterFirstLoad = numberOfPosts - 10

                    





            // UPDATE POSTS NUMBER AFTER FIRST POST -----------------
            // ------------------------------------------------------

                // CHECK IF NUMBER HAS REMAINDER TO FORM NUMBER -----
                // --------------------------------------------------

                    if (  
                        
                            (numberOfRemainingPostsAfterFirstLoad == undefined) || 
                            (numberOfRemainingPostsAfterFirstLoad == null) ||
                            (numberOfRemainingPostsAfterFirstLoad == NaN) 
                        
                        ) 
                        
                    {

                    }

                    else {

                        numberOfRemainingPostsAfterFirstLoad = Number(String(numberOfPostsAfterFirstLoad / 10).split(".")[1])

                    }

                    





            // UPDATE POSTS REMAINDERS ------------------------------
            // ------------------------------------------------------
                    
                numberOfWholePostsAfterFirstLoad = (numberOfPostsAfterFirstLoad - numberOfRemainingPostsAfterFirstLoad)

                



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
    // MAKE FUNCTIONS FOR LOAD MORE POSTS BUTTON MAIN PLACE OR REMOVE FUNCTIONS
    // --------------------------------------------------------------

        // FOR LOAD MORE CONDITIONS ---------------------------------
        // ----------------------------------------------------------

            function loadMorePostsFunction () {

                // CREATE VARIABLES FOR BATCH CALCULATOR ------------
                // --------------------------------------------------

                    loadMorePostsForLoopCounter = loadMorePostsForLoopCounter + 1


                // CHECK IF POSTS TO BE CREATED IS AT 0 -------------
                // --------------------------------------------------

                    // IF POSTS TO BE ADDED ARE NOT AT 0, CONTINUE --
                    // ----------------------------------------------

                        if ( (numberOfWholePostsAfterFirstLoad > 0) && (numberOfRemainingPostsAfterFirstLoad > 0) ) {

                            // LESSEN POSTS REMAINING WHOLE NUMBER --
                            // --------------------------------------

                                numberOfWholePostsAfterFirstLoad = numberOfWholePostsAfterFirstLoad - 10

                            // RUN LOOP TO CREATE NEXT BATCH --------
                            // --------------------------------------

                                for ( 
                                    
                                        nextBatchCounter = arrayForNextLoadBatch[loadMorePostsForLoopCounter] - 1; 
                                        nextBatchCounter < arrayForNextBatchLimit[loadMorePostsForLoopCounter]; 
                                        nextBatchCounter ++
                                    
                                    ) 
                                    
                                {


                                    // ADD NEXT BATCH OF POSTS ------
                                    // ------------------------------

                                        createPostBlocks(nextBatchCounter)

                                    // UPDATE LAST POST NUMBER FOR NEXT LAST BATCH START
                                    // ------------------------------

                                        loadLastBatchPreviousNumberCounter = nextBatchCounter

                                }

                        }

                    // IF REMAINDER STILL ACTIVE AND LAST BATCH -----
                    // ----------------------------------------------

                        else if ( (numberOfWholePostsAfterFirstLoad == 0) && (numberOfRemainingPostsAfterFirstLoad > 0) ) {

                            // RUN LOOP TO CREATE LAST BATCH --------
                            // --------------------------------------

                                for ( 
                                    
                                        nextBatchCounter = loadLastBatchPreviousNumberCounter + 1; 
                                        nextBatchCounter < loadLastBatchPreviousNumberCounter + numberOfRemainingPostsAfterFirstLoad + 1; 
                                        nextBatchCounter ++
                                    
                                    ) 
                                    
                                {

                                    // ADD NEXT BATCH OF POSTS ------
                                    // ------------------------------

                                        createPostBlocks(nextBatchCounter)

                                }

                            // ZERO OUT REMAINING POSTS TO 0 --------
                            // --------------------------------------

                                numberOfRemainingPostsAfterFirstLoad = 0

                            // REMOVE LOAD MORE POSTS BUTTON --------
                            // --------------------------------------

                                removeLoadMoreMainButtonBlock()

                                

                        }



            }

        // FOR PLACE LOAD COMMENTS BLOCK ----------------------------
        // ----------------------------------------------------------

            function placeLoadMoreMainButtonBlock () {

                // CHECK IF HIDDEN THEN MAKE VISIBLE ----------------
                // --------------------------------------------------

                    if ( getLoadMoreMainButton.style.display = `none` ) {

                        getLoadMoreMainButton.style = `
                
                            width:max-content;
                            top:-5px;
                            left:2px;
                            color:#FFFFFF;
                            cursor:pointer;
                            opacity:0;
                            padding:8px 20px;
                            display:inline-table;
                            position:relative;
                            background:#2C2C2C;
                            border-radius:8px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            setTimeout(() => {

                                getLoadMoreMainButton.style = `
                                
                                    width:max-content;
                                    top:-14px;
                                    left:2px;
                                    color:#FFFFFF;
                                    cursor:pointer;
                                    opacity:1;
                                    padding:8px 20px;
                                    display:inline-table;
                                    position:relative;
                                    background:#2C2C2C;
                                    border-radius:8px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                            }, 50)


                    }

            }

        // FOR PLACE LOAD COMMENTS BLOCK ----------------------------
        // ----------------------------------------------------------

            function removeLoadMoreMainButtonBlock () {

                // CHECK IF VISIBLE THEN HIDE -----------------------
                // --------------------------------------------------

                    if ( getLoadMoreMainButton.style.display = `block` ) {

                        getLoadMoreMainButton.style = `
                        
                            width:max-content;
                            top:-5px;
                            left:2px;
                            color:#FFFFFF;
                            cursor:pointer;
                            opacity:0;
                            padding:8px 20px;
                            display:inline-table;
                            position:relative;
                            background:#2C2C2C;
                            border-radius:8px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            setTimeout(() => {

                                getLoadMoreMainButton.style = `
                                
                                    width:max-content;
                                    top:-5px;
                                    left:2px;
                                    color:#FFFFFF;
                                    cursor:pointer;
                                    opacity:0;
                                    padding:8px 20px;
                                    display:none;
                                    position:relative;
                                    background:#2C2C2C;
                                    border-radius:8px;
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

        function postCreateFirstPageresultsSetup (numberForPopulateCounter, numberForCardPopulate) {

            // RUN LOOP FOR FIRST PAGE RESULTS CREATION -------------
            // ------------------------------------------------------

                for ( postCreateCounter = numberForPopulateCounter; postCreateCounter < numberForCardPopulate; postCreateCounter++ ) {

                    createPostBlocks(postCreateCounter)

                }

            // UPDATE BATCH POPULATION NUMBERS ----------------------
            // ------------------------------------------------------

                makePopulateNextLoadBatchCounterNumber = makePopulateNextLoadBatchCounterNumber ++
                makePopulateNextSetLoadBatchNumber = makePopulateNextSetLoadBatchNumber ++

                console.log("BENS:" + makePopulateNextLoadBatchCounterNumber)
                console.log("KIMS:" + makePopulateNextSetLoadBatchNumber)

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
                                                letter-spacing:1px;
                                                text-transform:uppercase;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        // ADD TEXT TO ID TEXT ACTUAL =
                                        // ==============================

                                            createGeneralPostHostIDTextActualContainer.textContent = `BY: ${String(arrayAlignerForItemsPush[14][ClassNumberSelector]).toUpperCase()}`

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




                        


                                // CREATE POST GENERAL HOST DESCRIPTION ACTUAL TEXT 
                                // ======================================

                                    var createGeneralPostHostCommentsTextActualContainer = document.createElement(`div`)
                                    createGeneralPostHostCommentsTextActualContainer.className = `postGeneralHostBlockCommentsResizer${classNumbers[ClassNumberSelector]}`

                                        // STYLE DESCRIPTION TEXT ACTUAL CONTAINER MAIN
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

                                        // ADD TEXT TO DESCRIPTION TEXT ACTUAL
                                        // ==============================

                                            createGeneralPostHostCommentsTextActualContainer.textContent = `${arrayAlignerForItemsPush[5][ClassNumberSelector]}`

                                        // APPEND DESCRIPTION TO POST HOST CONTAINER MAIN
                                        // ==============================

                                            createGeneralPostHostCommentsContainer.appendChild(createGeneralPostHostCommentsTextActualContainer)


                                                // PUSH DESCRIPTION BLOCKS CLASS NAMES TO CLASSNAME ARRAY HOLDER
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

                                                            // PUSH POSTS CLASSNAMES INTO ARRAY
                                                            // ==============================

                                                                collectedManagedButtonsClassNames.push(`postGeneralManagePostButtonActual${classNumbers[ClassNumberSelector]}`)

                                                            // APPEND VIEW COMMENTS BUTTON ACTUAL TO POST HOST CONTAINER MAIN
                                                            // ==============================

                                                                createGeneralPostHostManagePostContainer.appendChild(createGeneralPostHostManagePostButtonActualContainer)










        

            // UPDATE POST COUNTER --------------------------------------
            // ----------------------------------------------------------

                getPostCounterMainContainer.textContent = getSetPostMainContainer.children.length



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









    // --------------------------------------------------------------
    // POST REPLY FUNCTIONS -----------------------------------------
    // --------------------------------------------------------------


            // ADMIN REPLY COMMENT DISPLAY BLOCK FUNCTIONS ----------
            // ------------------------------------------------------

                // SHOW HIDE ADMIN COMMENT DISPLAY BLOCK ------------
                // --------------------------------------------------

                    // SHOW ADMIN COMMENT DISPLAY BLOCK -------------
                    // ----------------------------------------------

                        function showAdminCommentDisplayBlockFunction () {

                            // MAKE LIVE ----------------------------
                            // //////////////////////////////////////

                                getResponseBlockMain.style = `
                                
                                    width:100%;
                                    margin:0px 0px 0px 0px;
                                    display:block;
                                    opacity:0;
                                    padding:20px 0px;
                                    background:#F0F0F0;
                                    border-radius:8px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // THEN FADE IN -----------------
                                    // //////////////////////////////

                                        setTimeout(() => {

                                            getResponseBlockMain.style = `
                                
                                                width:100%;
                                                margin:20px 0px 0px 0px;
                                                display:block;
                                                opacity:1;
                                                padding:20px 0px;
                                                background:#F0F0F0;
                                                border-radius:8px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        },50)

                        }

                    // HIDE ADMIN COMMENT DISPLAY BLOCK -------------
                    // ----------------------------------------------

                        function hideAdminCommentDisplayBlockFunction () {

                            // FADE OUT -----------------------------
                            // --------------------------------------

                                getResponseBlockMain.style = `
                                
                                    width:100%;
                                    margin:0px 0px 0px 0px;
                                    display:block;
                                    opacity:0;
                                    padding:20px 0px;
                                    background:#F0F0F0;
                                    border-radius:8px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // KILL BLOCK -------------------
                                    // ------------------------------

                                        setTimeout(() => {

                                            getResponseBlockMain.style = `
                                
                                                width:100%;
                                                margin:0px 0px 0px 0px;
                                                display:none;
                                                opacity:0;
                                                padding:20px 0px;
                                                background:#F0F0F0;
                                                border-radius:8px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        },300)

                        }

                // ADD COMMENT TO BLOCK -----------------------------
                // --------------------------------------------------

                    // MAKE USER COMMENT BLOCK AND ADD TEXT ---------
                    // ----------------------------------------------

                        function createUserReplyBlock (commentTextNumber) {

                            // VARIABLES DECLARE --------------------
                            // --------------------------------------

                                var createUserPostMainBlock = document.createElement(`div`)

                                    var createUserPostHostReplyNameTag = document.createElement(`div`)

                                        var createUserPostHostResponseTag = document.createElement(`div`)
                                        var createUserPostHostResponseNameTag = document.createElement(`div`)

                                    var createUserPostHostReplyTimeDateTag = document.createElement(`div`)

                                        var createUserPostHostResponseTimeTag = document.createElement(`div`)
                                        var createUserPostHostResponsePipeTag = document.createElement(`div`)
                                        var createUserPostHostResponseDateTag = document.createElement(`div`)

                                    var createUserPostHostReplyDescriptionActual = document.createElement(`div`)

                            // CLASSNAMES DECLARE -------------------
                            // --------------------------------------

                                createUserPostMainBlock.className = `managePostContentUserResponsePostedActualResponseContainer${classNumbers[commentTextNumber]}`

                                    createUserPostHostReplyNameTag.className = `managePostContentUserResponsePostedUserNameContainer${classNumbers[commentTextNumber]}`

                                        createUserPostHostResponseTag.className = `postUserNameHeaderResponseTag${classNumbers[commentTextNumber]}`
                                        createUserPostHostResponseNameTag.className = `postUserNameHeaderContainer${classNumbers[commentTextNumber]}`

                                    createUserPostHostReplyTimeDateTag.className = `managePostContentUserResponsePostedTimeStampContainer${classNumbers[commentTextNumber]}`

                                        createUserPostHostResponseTimeTag.className = `postUserTimeHeaderResponseTag${classNumbers[commentTextNumber]}`
                                        createUserPostHostResponsePipeTag.className = `postUserTimeDateSpacerResponseTag${classNumbers[commentTextNumber]}`
                                        createUserPostHostResponseDateTag.className = `postUserDateHeaderResponseTag${classNumbers[commentTextNumber]}`

                                    createUserPostHostReplyDescriptionActual.className = `managePostContentUserResponsePostedUserDescriptionContainer${classNumbers[commentTextNumber]}`

                            // VARIABLE STYLING ---------------------
                            // --------------------------------------

                                createUserPostMainBlock.style = `
                                
                                    width:100%;
                                    padding:10px 0px;
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 400ms ease;

                                `

                                    createUserPostHostReplyNameTag.style = `
                                    
                                        width:100%;
                                        color:#2C2C2C;
                                        display:block;
                                        margin:0px 0px -8px 0px;
                                        padding:0px 0px 0px 0px;
                                        font-size:12px;
                                        text-align:left;
                                        font-weight:600;
                                        line-height:25px;
                                        text-transform:uppercase;
                                        letter-spacing:2px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                                        createUserPostHostResponseTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                        createUserPostHostResponseNameTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                    createUserPostHostReplyTimeDateTag.style = `
                                    
                                        width:100%;
                                        color:#A3A3A3;
                                        display:inline-block;
                                        padding:0px 0px 0px 0px;
                                        font-size:10px;
                                        text-align:left;
                                        font-weight:600;
                                        line-height:25px;
                                        text-transform:uppercase;
                                        letter-spacing:2px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                                        createUserPostHostResponseTimeTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                        createUserPostHostResponsePipeTag.style = `
                                        
                                            display:inline-block;
                                            padding:0px 2px;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                        createUserPostHostResponseDateTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                    createUserPostHostReplyDescriptionActual.style = `
                                    
                                        width:100%;
                                        color:#2C2C2C;
                                        display:inline-block;
                                        padding:20px 0px 0px 0px;
                                        font-size:15px;
                                        text-align:left;
                                        letter-spacing:0.5px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                            // ADD TEXT TO VARIABLES ----------------
                            // --------------------------------------

                                createUserPostHostResponseTag.textContent = `COMMENT BY: `
                                createUserPostHostResponseNameTag.textContent = `${arrayAlignerForItemsPush[14][commentTextNumber]}`

                                createUserPostHostResponseTimeTag.textContent = `${arrayAlignerForItemsPush[6][commentTextNumber]}`
                                createUserPostHostResponsePipeTag.textContent = `|`
                                createUserPostHostResponseDateTag.textContent = `${arrayAlignerForItemsPush[7][commentTextNumber]}`

                                createUserPostHostReplyDescriptionActual.textContent = `${arrayAlignerForItemsPush[5][commentTextNumber]}`

                            // APPEND VARIABLES TO BLOCKS -----------
                            // --------------------------------------

                                getResponseBlockResizer.appendChild(createUserPostMainBlock)

                                    createUserPostMainBlock.appendChild(createUserPostHostReplyNameTag)

                                        createUserPostHostReplyNameTag.appendChild(createUserPostHostResponseTag)
                                        createUserPostHostReplyNameTag.appendChild(createUserPostHostResponseNameTag)

                                    createUserPostMainBlock.appendChild(createUserPostHostReplyTimeDateTag)

                                        createUserPostHostReplyTimeDateTag.appendChild(createUserPostHostResponseTimeTag)
                                        createUserPostHostReplyTimeDateTag.appendChild(createUserPostHostResponsePipeTag)
                                        createUserPostHostReplyTimeDateTag.appendChild(createUserPostHostResponseDateTag)

                                    createUserPostMainBlock.appendChild(createUserPostHostReplyCommentActual)

                        }

                    // MAKE COMMENT BLOCK AND ADD TEXT --------------
                    // ----------------------------------------------

                        function createCommentBlock (commentTextNumber) {

                            // VARIABLES DECLARE --------------------
                            // --------------------------------------

                                var createAdminPostMainBlock = document.createElement(`div`)

                                    var createAdminPostHostReplyNameTag = document.createElement(`div`)

                                        var createAdminPostHostResponseTag = document.createElement(`div`)
                                        var createAdminPostHostResponseNameTag = document.createElement(`div`)

                                    var createAdminPostHostReplyTimeDateTag = document.createElement(`div`)

                                        var createAdminPostHostResponseTimeTag = document.createElement(`div`)
                                        var createAdminPostHostResponsePipeTag = document.createElement(`div`)
                                        var createAdminPostHostResponseDateTag = document.createElement(`div`)

                                    var createAdminPostHostReplyCommentActual = document.createElement(`div`)

                            // CLASSNAMES DECLARE -------------------
                            // --------------------------------------

                                createAdminPostMainBlock.className = `managePostContentAdminResponsePostedActualResponseContainer${classNumbers[commentTextNumber]}`

                                    createAdminPostHostReplyNameTag.className = `managePostContentAdminResponsePostedAdminNameContainer${classNumbers[commentTextNumber]}`

                                        createAdminPostHostResponseTag.className = `postAdminNameHeaderResponseTag${classNumbers[commentTextNumber]}`
                                        createAdminPostHostResponseNameTag.className = `postAdminNameHeaderContainer${classNumbers[commentTextNumber]}`

                                    createAdminPostHostReplyTimeDateTag.className = `managePostContentAdminResponsePostedTimeStampContainer${classNumbers[commentTextNumber]}`

                                        createAdminPostHostResponseTimeTag.className = `postTimeHeaderResponseTag${classNumbers[commentTextNumber]}`
                                        createAdminPostHostResponsePipeTag.className = `postTimeDateSpacerResponseTag${classNumbers[commentTextNumber]}`
                                        createAdminPostHostResponseDateTag.className = `postDateHeaderResponseTag${classNumbers[commentTextNumber]}`

                                    createAdminPostHostReplyCommentActual.className = `managePostContentAdminResponsePostedAdminCommentContainer${classNumbers[commentTextNumber]}`

                            // VARIABLE STYLING ---------------------
                            // --------------------------------------

                                createAdminPostMainBlock.style = `
                                
                                    width:100%;
                                    padding:10px 0px;
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 400ms ease;

                                `

                                    createAdminPostHostReplyNameTag.style = `
                                    
                                        width:100%;
                                        color:#2C2C2C;
                                        display:block;
                                        margin:0px 0px -8px 0px;
                                        padding:0px 0px 0px 0px;
                                        font-size:12px;
                                        text-align:left;
                                        font-weight:600;
                                        line-height:25px;
                                        text-transform:uppercase;
                                        letter-spacing:2px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                                        createAdminPostHostResponseTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                        createAdminPostHostResponseNameTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                    createAdminPostHostReplyTimeDateTag.style = `
                                    
                                        width:100%;
                                        color:#A3A3A3;
                                        display:inline-block;
                                        padding:0px 0px 0px 0px;
                                        font-size:10px;
                                        text-align:left;
                                        font-weight:600;
                                        line-height:25px;
                                        text-transform:uppercase;
                                        letter-spacing:2px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                                        createAdminPostHostResponseTimeTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                        createAdminPostHostResponsePipeTag.style = `
                                        
                                            display:inline-block;
                                            padding:0px 2px;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                        createAdminPostHostResponseDateTag.style = `
                                        
                                            width:max-content;
                                            display:inline-block;
                                            transition:all 400ms ease;
                                            -o-transition:all 400ms ease;
                                            -ms-transition:all 400ms ease;
                                            -moz-transition:all 400ms ease;
                                            -webkit-transition:all 400ms ease;

                                        `

                                    createAdminPostHostReplyCommentActual.style = `
                                    
                                        width:100%;
                                        color:#2C2C2C;
                                        display:inline-block;
                                        padding:20px 0px 0px 0px;
                                        font-size:15px;
                                        text-align:left;
                                        letter-spacing:0.5px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                            // ADD TEXT TO VARIABLES ----------------
                            // --------------------------------------

                                createAdminPostHostResponseTag.textContent = `RESPONSE BY: `
                                createAdminPostHostResponseNameTag.textContent = `NEOM`

                                createAdminPostHostResponseTimeTag.textContent = `${arrayAlignerForItemsPush[12][commentTextNumber]}`
                                createAdminPostHostResponsePipeTag.textContent = `|`
                                createAdminPostHostResponseDateTag.textContent = `${arrayAlignerForItemsPush[13][commentTextNumber]}`

                                createAdminPostHostReplyCommentActual.textContent = `${arrayAlignerForItemsPush[11][commentTextNumber]}`

                            // APPEND VARIABLES TO BLOCKS -----------
                            // --------------------------------------

                                getResponseBlockResizer.appendChild(createAdminPostMainBlock)

                                    createAdminPostMainBlock.appendChild(createAdminPostHostReplyNameTag)

                                        createAdminPostHostReplyNameTag.appendChild(createAdminPostHostResponseTag)
                                        createAdminPostHostReplyNameTag.appendChild(createAdminPostHostResponseNameTag)

                                    createAdminPostMainBlock.appendChild(createAdminPostHostReplyTimeDateTag)

                                        createAdminPostHostReplyTimeDateTag.appendChild(createAdminPostHostResponseTimeTag)
                                        createAdminPostHostReplyTimeDateTag.appendChild(createAdminPostHostResponsePipeTag)
                                        createAdminPostHostReplyTimeDateTag.appendChild(createAdminPostHostResponseDateTag)

                                    createAdminPostMainBlock.appendChild(createAdminPostHostReplyCommentActual)

                            // ADD USER REPLY AFTER EACH ADMIN POST -
                            // --------------------------------------

                                // FIRST CHECK IF USER REPLY EXISTS THEN POST REPLY BLOCK
                                // ----------------------------------

                                    // IF REPLY DOES NOT EXIST THEN SKIP
                                    // ------------------------------

                                        if ( arrayAlignerForItemsPush[8][commentTextNumber] == "" ) {

                                            console.log("NO USER REPLY...")
                                            
                                        }

                                    // IF REPLY EXISTS THEN ADD REPLY
                                    // ------------------------------

                                        else {
                                            
                                            createUserReplyBlock(commentTextNumber)
                                            
                                        }

                                    

                        }

                    // CREATE NEW ADMIN REPLY COMMENT AFTER BUTTON IS CLICKED
                    // ----------------------------------------------

                        function createNewAdminReplyFunction () {

                            // FIRST CREATE QUICK DROP FORM FOR SUBMISSION
                            // --------------------------------------

                                // GET EXISTING ELEMENTS ------------
                                // ----------------------------------

                                    var getOpenCommentsPanelMainContainer = document.querySelector(`.managePostContentContainer`)

                                    var getOpenCommentsPanelAdminCommentText = document.querySelector(`.managePostContentAdminCommentInputActual`).value

                                // VARIABLES FOR POST BLOCK CREATION 
                                // ----------------------------------

                                    var createAdminSubmitForm = document.createElement(`form`)

                                        var createContentContainer = document.createElement(`div`)

                                            var createAdminReplyUserIdBlockContainer = document.createElement(`div`)
                                                var createAdminReplyUserIdBlockInput = document.createElement(`input`)

                                            var createAdminReplyCommentBlockContainer = document.createElement(`div`)
                                                var createAdminReplyCommentBlockInput = document.createElement(`input`)

                                            var createAdminReplyCommentSubmitButton = document.createElement(`button`)

                                // ADD CLASS NAME TO NEWLY CREATED VARIABLES 
                                // ----------------------------------

                                    createAdminSubmitForm.className = `postAdminReplyFormContainer`

                                        createContentContainer.className = `postAdminReplyContentContainer`

                                            createAdminReplyUserIdBlockContainer.className = `postAdminReplyTimeContainer`
                                                createAdminReplyUserIdBlockInput.className = `postAdminReplyTimeInput`

                                            createAdminReplyCommentBlockContainer.className = `postAdminReplyCommentContainer`
                                                createAdminReplyCommentBlockInput.className = `postAdminReplyCommentInput`

                                            createAdminReplyCommentSubmitButton.className = `managePostContentAdminCommentSubmitButtonActual`

                                // ADD ATTRIBUTES TO NEWLY CREATE VARIABLES 
                                // ----------------------------------

                                    createAdminSubmitForm.setAttribute(`method`,`post`)
                                    createAdminSubmitForm.setAttribute(`action`,`/`)

                                        createAdminReplyUserIdBlockInput.setAttribute(`name`,`adminReplyUserId`)
                                        createAdminReplyUserIdBlockInput.setAttribute(`type`,`text`)
                                        createAdminReplyUserIdBlockInput.setAttribute(`placeholder`,`user id...`)

                                        createAdminReplyCommentBlockInput.setAttribute(`name`,`adminReplyActual`)
                                        createAdminReplyCommentBlockInput.setAttribute(`type`,`text`)
                                        createAdminReplyCommentBlockInput.setAttribute(`placeholder`,`admin reply actual...`)

                                // ADD TEXT UPDATES TO INPUT FIELDS -
                                // ----------------------------------

                                    createAdminReplyUserIdBlockInput.value =  `${currentSelectedId[0]}`
                                    createAdminReplyCommentBlockInput.value = `${getOpenCommentsPanelAdminCommentText}`

                                    createAdminReplyCommentSubmitButton.textContent = `sub`

                                // STYLE NEWLY CREATED VARIABLES ---- 
                                // ----------------------------------

                                    createAdminSubmitForm.style = `
                                    
                                        width:100%;
                                        margin:20px 0px 0px 0px;
                                        display:none;
                                        opacity:1;
                                        padding:15px 0px;
                                        position:relative;
                                        background:#2C2C2C;
                                        border-radius:10px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        createContentContainer.style = `
                                        
                                            width:90%;
                                            height:90%;
                                            top:0;
                                            left:0;
                                            right:0;
                                            bottom:0;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            position:relative;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            createAdminReplyUserIdBlockContainer.style = `
                                            
                                                width:100%;
                                                height:20px;
                                                padding:10px 0px;
                                                position:relative;
                                                margin-top:10px;
                                                background:#2C2C2C;
                                                border-radius:5px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `
                                                createAdminReplyUserIdBlockInput.style = `
                                                
                                                    width:90%;
                                                    height:20px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    position:absolute;
                                                    background:#FFFFFF;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            createAdminReplyCommentBlockContainer.style = `
                                            
                                                width:100%;
                                                height:20px;
                                                padding:10px 0px;
                                                position:relative;
                                                margin-top:10px;
                                                background:#2C2C2C;
                                                border-radius:5px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `
                                                createAdminReplyCommentBlockInput.style = `
                                                
                                                    width:90%;
                                                    height:20px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    position:absolute;
                                                    background:#FFFFFF;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            createAdminReplyCommentSubmitButton.style = `
                                            
                                                width:100%;
                                                height:50px;
                                                float:left;
                                                color:#2C2C2C;
                                                cursor:pointer;
                                                padding:0px 5px;
                                                display:inline-table;
                                                position:relative;
                                                font-size:17px;
                                                background:#FFFFFF;
                                                line-height:45px;
                                                font-family:"poppins", sans-serif;
                                                border-radius:10px;
                                                letter-spacing:1px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                // APPEND VARIABLES TO STAGE BLOCK -- 
                                // ----------------------------------

                                    getOpenCommentsPanelMainContainer.appendChild(createAdminSubmitForm)

                                        createAdminSubmitForm.appendChild(createContentContainer)

                                            createContentContainer.appendChild(createAdminReplyUserIdBlockContainer)
                                                createAdminReplyUserIdBlockContainer.appendChild(createAdminReplyUserIdBlockInput)

                                            createContentContainer.appendChild(createAdminReplyCommentBlockContainer)
                                                createAdminReplyCommentBlockContainer.appendChild(createAdminReplyCommentBlockInput)

                                            createContentContainer.appendChild(createAdminReplyCommentSubmitButton)

                        }


            // ADMIN REPLY BUTTON BEHVIOUR --------------------------
            // ------------------------------------------------------

                function adminReplyButtonBehaviourFunction () {

                    // SHOW HIDE SUBMIT ADMIN POST REPLY --------------------
                    // ------------------------------------------------------

                        // IF CHARACTERS ARE BELOW LIMIT OR 0 ---------------
                        // --------------------------------------------------

                            // IF CHARACTERS EQUAL 0 THEN HIDE BUTTON -------
                            // ----------------------------------------------

                                if ( getAdminReplyInputField.value.length == 0 ) {

                                    if ( getAdminReplySubmitButtonMain.style.display = "none" ) {

                                    }

                                    else {

                                        hidePostAdminReplySubmitButton()

                                    }

                                }

                            // IF CHARACTERS UNDER LIMIT THEN HIDE BUTTON ---
                            // ----------------------------------------------

                                else if ( getAdminReplyInputField.value.length < 50 ) {

                                    if ( getAdminReplySubmitButtonMain.style.display = "none" ) {

                                    }

                                    else {

                                        hidePostAdminReplySubmitButton()

                                    }

                                }

                            // IF CHARACTERS OVER LIMIT THEN SHOW BUTTON ----
                            // ----------------------------------------------

                                else if ( getAdminReplyInputField.value.length > 50 ) {

                                    showPostAdminReplySubmitButton()

                                }


                }


                    // SHOW ADMIN POST BUTTON -----------------------
                    // ----------------------------------------------

                        function showPostAdminReplySubmitButton () {


                            // CHECK IF BUTTON IS NOT VISIBLE AND BRING BACK 
                            // --------------------------------------

                                if ( getAdminReplySubmitButtonMain.style.display = "none" ) {

                                    // MAKE BUTTON LIVE -------------
                                    // ------------------------------

                                        getAdminReplySubmitButtonMain.style = `
                                        
                                            width:100%;
                                            margin:0px 0px 0px 0px;
                                            display:block;
                                            opacity:0;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            // FADE BUTTON IN -------
                                            // ----------------------

                                                setTimeout(() => {

                                                    getAdminReplySubmitButtonMain.style = `
                                                    
                                                        width:100%;
                                                        margin:20px 0px 0px 0px;
                                                        display:block;
                                                        opacity:1;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                }, 5)

                                }


                        }


                    // HIDE ADMIN POST BUTTON -----------------------
                    // ----------------------------------------------

                        function hidePostAdminReplySubmitButton () {


                            // CHECK IF BUTTON ALREADY IS VISIBLE AND REMOVE 
                            // --------------------------------------

                                if ( getAdminReplySubmitButtonMain.style.display = "block" ) {

                                    // FADE OUT BUTTON --------------
                                    // ------------------------------

                                        getAdminReplySubmitButtonMain.style = `
                                        
                                            width:100%;
                                            margin:0px 0px 0px 0px;
                                            display:block;
                                            opacity:0;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            // KILL BUTTON ----------
                                            // ----------------------

                                                setTimeout(() => {

                                                    getAdminReplySubmitButtonMain.style = `
                                                    
                                                        width:100%;
                                                        margin:0px 0px 0px 0px;
                                                        display:none;
                                                        opacity:0;
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
    // EMPTY OUT MANAGE POST PANEL FUNCTIONS ------------------------
    // --------------------------------------------------------------

        function emptyOutManagePostPanelFunction () {

            // RESET BEFORE POPULATION
            // //////////////////

                getManagePostCardUserText.textContent = ``

                getManagePostCardStarOne.style = `
                
                    width:25px;
                    height:25px;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    position:absolute;
                    background:url(${star64Images[0]});
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position:top;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `
                getManagePostCardStarTwo.style = `
                
                    width:25px;
                    height:25px;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    position:absolute;
                    background:url(${star64Images[0]});
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position:top;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `
                getManagePostCardStarThree.style = `
                
                    width:25px;
                    height:25px;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    position:absolute;
                    background:url(${star64Images[0]});
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position:top;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `
                getManagePostCardStarFour.style = `
                
                    width:25px;
                    height:25px;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    position:absolute;
                    background:url(${star64Images[0]});
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position:top;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `
                getManagePostCardStarFive.style = `
                
                    width:25px;
                    height:25px;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    position:absolute;
                    background:url(${star64Images[0]});
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position:top;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `

                getmanagePostCardImage.style = `
                
                    width:100%;
                    height:230px;
                    margin:20px 0px 0px 0px;
                    display:inline-block;
                    overflow:hidden;
                    position:relative;
                    border-radius:8px;
                    background:#2C2C2C;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `

                getManagePostCardLocation.textContent = ``

                getManagePostCardPostedTime.textContent = ``
                getManagePostCardPostedDate.textContent = ``

                getManagePostCardUserDescription.textContent = ``

                    // IF COMMENTS SECTION IS ALREADY EMPTY ---------
                    // //////////////////////////////////////////////

                        if ( getResponseBlockResizer.children[0] == null || getResponseBlockResizer.children[0] == undefined ) {

                        }

                    // IF COMMENTS SECTION IS NOT EMPTY THEN EMPTY OUT
                    // //////////////////////////////////////////////

                        else {

                            console.log("EMPTYING OUT...")

                            getResponseBlockResizer.removeChild(getResponseBlockResizer.children[0])

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

    // SETUP LOAD MORE POSTS BUTTON EVENTS --------------------------
    // //////////////////////////////////////////////////////////////

        getLoadMoreMainButton.addEventListener("click", function (){

            loadMorePostsFunction()

        })

    // SETUP CLICK COLLECTION EVENTS --------------------------------
    // //////////////////////////////////////////////////////////////

        window.addEventListener("click", function (obj) {

            var selectedObject = obj.srcElement.className

            // CHECK IF CLASSNAME INCLUDES MANAGE AND ADD TO ARRAY --
            // //////////////////////////////////////////////////////

                if ( selectedObject.includes("postGeneralManagePostButtonActual") ) {

                    // FIRST EMPTY OUT ARRAY ------------------------
                    // //////////////////////////////////////////////

                        arrayForManageButtonCollecttion = []

                    // THEN PUSH NEW OBTAINED CLASSNAME INTO ARRAY --
                    // //////////////////////////////////////////////

                        arrayForManageButtonCollecttion.push(selectedObject)

                    // GET ARRAY MATCH NUMBER -----------------------
                    // //////////////////////////////////////////////

                        // RUN LOOP TO GET MATCHED INDEX ------------
                        // //////////////////////////////////////////

                            for( buttonFindCounter = 0; buttonFindCounter < collectedManagedButtonsClassNames.length; buttonFindCounter++ ){

                                // FOR PRESENT CLASS NUMBER ---------
                                // //////////////////////////////////

                                    if ( arrayForManageButtonCollecttion == collectedManagedButtonsClassNames[buttonFindCounter] ) {

                                        // UPDATE MANAGE POST COLLECTED NUMBER
                                        // //////////////////////////

                                            collectManagePostButtonNumber = buttonFindCounter

                                        // ADD EVENT LISTENER TO SELECTED BUTTON
                                        // //////////////////////////

                                            var createSelectedButton = document.querySelector(`.${collectedManagedButtonsClassNames[buttonFindCounter]}`)

                                            createSelectedButton.addEventListener("click", function(){


                                                // RESET BEFORE POPULATION
                                                // //////////////////

                                                    emptyOutManagePostPanelFunction()


                                                // UPDATE FIELDS WITH CONTENT
                                                // //////////////////

                                                    // EMPTY OUT CURRENTLY SELECTED USER ID
                                                    // //////////////

                                                        currentSelectedId = []

                                                    // LOAD CURRENTLY SELECTED USER ID
                                                    // //////////////

                                                        currentSelectedId.push(arrayAlignerForItemsPush[0][buttonFindCounter])

                                                    // UPDATE USER ID
                                                    // //////////////

                                                        getManagePostCardUserText.textContent = `BY: ${arrayAlignerForItemsPush[14][buttonFindCounter]}`

                                                    // RUN LOOP FOR EACH STAR BASED ON COLLECTED STAR COUNTER
                                                    // //////////////

                                                        var getStarCounter = `${arrayAlignerForItemsPush[3][buttonFindCounter]}`

                                                        for ( starCounter = 0; starCounter < getStarCounter; starCounter++ ) {

                                                            var getSelectedStar = document.querySelector(`.managePostContentRatingsStarActual${classNumbers[starCounter]}`)

                                                                getSelectedStar.style = `
                                                                
                                                                    width:25px;
                                                                    height:25px;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    position:absolute;
                                                                    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANkSURBVHgB7ZpfThNBHMe/u1tBYlLgRW01cTdUE58oNyg3WE4AngA8gXCDegLxAjo3oJ6A8mSiJl0TkhqfGk3UIOz4m+kWZdktM3RmLEk/D7TZ/nZnvjPz+zOzADNmWMGDRb704m2eYocDA+8EG7WnLIElKrBE/30ckoi2+C5Hax6v6O86LOHDEv4cXly4wNE6/hRvwRJWltZxL24GKQ4LGhv8/IYoWmMDGMbKjJCIt0XXyVeW5qrYgQWMC+kPl09Y9nsAbPcO4yUYxqgQ2UEv5xs5xKwsVMfbXAejQm5XsY0xszGCxOyIqAaDGBOSdWxX+YZhODaGMSGXwu1VUDjuf4xbMIQRISLcpsAWdAnM+YoRIWXh9koMJsmJhYh6CgoOXkZAUc6E42tn9uMPcZM+mpUAq9xDU4wqJiehjnTPUhzREu1UTpHoFpilQkROuHVHjrTsNDXQoukLRR6AA0Q5QwPV9Ti6Jxzv/BTJwyesO8Ye5x2fr2KLLqxSZ5v02cQ04qEjxJ1yHP3+Djaq287LeEpmosgLh7ZTDC1lGugW+RaCRWwi2xrIPvd75GwperiB8AU/rNfffJZRqxZJx0pw80iECPHlb/j15RQluDkkWZ8lF9whW2IHmCAvOEKKyFaS5JJffxXlBolxFWZ1EWHZJxF3o4uhuDBAyWLOlzMzdQQ+1vIiBIUlSu0x61CYe4Zpg/pUJEJQWmvVGmyfltdzTA97ok9lP44tGusrrE3Ov4f/z15the2OM1BK4uQzuyTZ+D5bkStFCJSrETod2SfrTTiEc7ysN5jS8ZFWWUViDuiOFhxA/tmlpb2maq+1sUqpnIYrUrzWMbd29jspuglZSwglo1U4grL3Iy17HWNyPmdlC7W1rGOvt7Q8d8Wk5+nNvq6PhHCEZ8tHstMTZwhn1zm1VxZCJxrOy/r5e/6iqq2ykAp3v9niP1LzCTG9vqOLw7drvWqjl6nml5Z2xOLoUHZep4Ivur/ClrP9TaLzCE+jTWUhZKiWoEYCGmxdbtAyxF5CiNIRpJMUzc1IiYA8OoJ0kqJOHgkLryoKyDMSRIXohnxGUec8GzNyubF9ujvSFZDnQYMx8QwxGPk2RCmv+hz1jRWdefGz4TtyL0D73zMlk4zaoYPqwa8K2lFk/p8LZrjgD70JH5InxbN8AAAAAElFTkSuQmCC);
                                                                    background-size:cover;
                                                                    background-repeat:no-repeat;
                                                                    background-position:top;
                                                                    transition:all 400ms ease;
                                                                    -o-transition:all 400ms ease;
                                                                    -ms-transition:all 400ms ease;
                                                                    -moz-transition:all 400ms ease;
                                                                    -webkit-transition:all 400ms ease;

                                                                `

                                                        }

                                                    // UPDATE USER IMAGE
                                                    // //////////////

                                                        getmanagePostCardImage.style = `
                                                        
                                                            width:100%;
                                                            height:230px;
                                                            margin:20px 0px 0px 0px;
                                                            display:inline-block;
                                                            overflow:hidden;
                                                            position:relative;
                                                            border-radius:8px;
                                                            background:url(${arrayAlignerForItemsPush[1][buttonFindCounter]});
                                                            background-size:cover;
                                                            background-repeat:no-repeat;
                                                            background-position:center;
                                                            transition:all 400ms ease;
                                                            -o-transition:all 400ms ease;
                                                            -ms-transition:all 400ms ease;
                                                            -moz-transition:all 400ms ease;
                                                            -webkit-transition:all 400ms ease;

                                                        `

                                                    // UPDATE USER LOCATION
                                                    // //////////////

                                                        getManagePostCardLocation.textContent = `${arrayAlignerForItemsPush[2][buttonFindCounter]}`

                                                    // UPDATE USER TIME AND DATE MAPPER
                                                    // //////////////

                                                        getManagePostCardPostedTime.textContent = `${arrayAlignerForItemsPush[6][buttonFindCounter]}`
                                                        getManagePostCardPostedDate.textContent = `${arrayAlignerForItemsPush[7][buttonFindCounter]}`

                                                    // UPDATE USER DESCRIPTION
                                                    // //////////////

                                                        getManagePostCardUserDescription.textContent = `${arrayAlignerForItemsPush[5][buttonFindCounter]}`








                                                            // CREATE NEOM ADMIN REPLY BLOCK AND COMMENT CHECK
                                                            // //////

                                                                // CHECK IF ADMIN COMMENT DOES NOT EXIST
                                                                // //

                                                                    if ( arrayAlignerForItemsPush[11][buttonFindCounter] == "" ) {

                                                                        console.log("NO ADMIN COMMENT YET...")

                                                                        // HIDE ADMIN COMMENT BOX -----------------
                                                                        // ////////////////////////////////////////

                                                                            hideAdminCommentDisplayBlockFunction()

                                                                    }

                                                                // CHECK IF ADMIN COMMENT DOES EXIST
                                                                // //

                                                                    else {

                                                                        console.log("COMMENT EXISTS...")

                                                                        // SHOW ADMIN COMMENT BOX -----------------
                                                                        // ////////////////////////////////////////

                                                                            showAdminCommentDisplayBlockFunction()

                                                                        // ADD ADMIN COMMENT TO BLOCK -------------
                                                                        // ////////////////////////////////////////

                                                                            // RUN LOOP FOR AMOUNT OF COMMENTS AND POPULATE
                                                                            // ///////////////////////////////////

                                                                                for ( commentBlockCounter = 0; commentBlockCounter < arrayAlignerForItemsPush[11].length; commentBlockCounter++ ) {

                                                                                    // IF COMMENT DOES NOT EXIST THEN SKIP
                                                                                    // ///////////////////////////

                                                                                        if ( arrayAlignerForItemsPush[11][commentBlockCounter] == "" ) {

                                                                                        }

                                                                                    // IF COMMENT EXISTS THEN CREATE COMMENT BLOCK
                                                                                    // ///////////////////////////

                                                                                        else {

                                                                                            console.log("this number: " + commentBlockCounter)

                                                                                            createCommentBlock(buttonFindCounter)

                                                                                        }

                                                                                }


                                                                    }

                                                        
                                                    

                                            })

                                                // FORCE CLICK ------
                                                // //////////////////

                                                    createSelectedButton.click()

                                                // OPEN MANAGE POSTS PANEL
                                                // //////////////////

                                                    // MAKE LIVE FIRST
                                                    // //////////////

                                                        getManagePostsMainContainer.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            top:0;
                                                            left:0;
                                                            right:0;
                                                            margin:0px auto;
                                                            display:block;
                                                            position:fixed;
                                                            background:rgba(255,255,255,0.0);
                                                            backdrop-filter:blur(8px);
                                                            transition:all 400ms ease;
                                                            -o-transition:all 400ms ease;
                                                            -ms-transition:all 400ms ease;
                                                            -moz-transition:all 400ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `

                                                    // FADE IN PANEL 
                                                    // //////////////

                                                        setTimeout(() => {

                                                            getManagePostsMainContainer.style = `
                                                        
                                                                width:100%;
                                                                height:100%;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                margin:0px auto;
                                                                display:block;
                                                                position:fixed;
                                                                background:rgba(255,255,255,0.8);
                                                                backdrop-filter:blur(10px);
                                                                transition:all 400ms ease;
                                                                -o-transition:all 400ms ease;
                                                                -ms-transition:all 400ms ease;
                                                                -moz-transition:all 400ms ease;
                                                                -webkit-transition:all 400ms ease;

                                                            `

                                                        }, 50)

                                                            // FADE IN CONTENT RESIZER 
                                                            // //////

                                                                getManaePostsContentResizer.style = `
                                                                
                                                                    width:300px;
                                                                    height:90%;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    opacity:1;
                                                                    padding:30px;
                                                                    overflow:auto;
                                                                    position:absolute;
                                                                    background:#FFFFFF;
                                                                    border-radius:10px;
                                                                    box-shadow:0px 30px 50px -10px rgba(0,0,0,0.15);
                                                                    transition:all 400ms ease;
                                                                    -o-transition:all 400ms ease;
                                                                    -ms-transition:all 400ms ease;
                                                                    -moz-transition:all 400ms ease;
                                                                    -webkit-transition:all 400ms ease;

                                                                `

                                    }

                                // FOR DISCARDED CLASS NUMBER -------
                                // ----------------------------------

                                    else {

                                    }

                            }

                }

            // AND IF CLASSNAME IS NOT MANAGE BUTTON THEN EMPTY ARRAY
            // //////////////////////////////////////////////////////

                else {

                    arrayForManageButtonCollecttion = []

                }

        })

    // SETUP MANAGE POSTS EVENTS ------------------------------------
    // //////////////////////////////////////////////////////////////

        // SETUP ADMIN POST REPLY EVENTS ----------------------------
        // //////////////////////////////////////////////////////////

            // SETUP ADMIN POST REPLY CHECK EXISTING COMMENT --------
            // //////////////////////////////////////////////////////

            // SETUP ADMIN POST REPLY SHOW HIDE BUTTON --------------
            // //////////////////////////////////////////////////////

                getAdminReplyInputField.addEventListener("keyup", function () {

                    adminReplyButtonBehaviourFunction()

                })

            // SETUP ADMIN POST REPLY BUTTONS -----------------------
            // //////////////////////////////////////////////////////

                getResponseButton.addEventListener("click", function () {

                    console.log("buttonOne...")

                        // FORCE CLICK AND SUBMIT -------------------
                        // //////////////////////////////////////////

                            createNewAdminReplyFunction()

                            var getResponseButtonActual = document.querySelector(`.managePostContentAdminCommentSubmitButtonActual`)

                            setTimeout(() => {

                                getResponseButtonActual.click()

                            }, 50)

                })

        // SETUP CLOSE MANAGE POSTS PANEL ---------------------------
        // //////////////////////////////////////////////////////////

            getManagePostsCloseButton.addEventListener("click", function () {

                // FADE OUT MANAGE POST PANEL RESIZER ---------------
                // //////////////////////////////////////////////////

                    getManaePostsContentResizer.style = `
                    
                        width:300px;
                        height:90%;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        margin:auto;
                        opacity:0;
                        padding:30px;
                        overflow:auto;
                        position:absolute;
                        background:#FFFFFF;
                        border-radius:10px;
                        box-shadow:0px 30px 50px -10px rgba(0,0,0,0.15);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                // FADE OUT MANAGE POST PANEL MAIN ------------------
                // //////////////////////////////////////////////////

                    setTimeout(() => {

                        getManagePostsMainContainer.style = `
                        
                            width:100%;
                            height:100%;
                            top:0;
                            left:0;
                            right:0;
                            margin:0px auto;
                            display:block;
                            position:fixed;
                            background:rgba(255,255,255,0.0);
                            backdrop-filter:blur(8px);
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    }, 300)

                        // KILL MANAGE POST PANEL MAIN --------------
                        // //////////////////////////////////////////

                            setTimeout(() => {

                                getManagePostsMainContainer.style = `
                                
                                    width:100%;
                                    height:100%;
                                    top:0;
                                    left:0;
                                    right:0;
                                    margin:0px auto;
                                    display:none;
                                    position:fixed;
                                    background:rgba(255,255,255,0.0);
                                    backdrop-filter:blur(8px);
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // EMPTY OUT ITEMS --------------
                                    // //////////////////////////////

                                        emptyOutManagePostPanelFunction()


                            },600)


                
            })





// MAKE AUTORUNS FOR ENTIRE PAGE ------------------------------------
// //////////////////////////////////////////////////////////////////

    // RUN POST INFO COLLECTOR --------------------------------------
    // --------------------------------------------------------------

        getDOMpostsInfoFromDBDownload()