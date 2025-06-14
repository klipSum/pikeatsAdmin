// DECLARE VARIABLES FOR ENTIRE PAGE --------------------------------
// //////////////////////////////////////////////////////////////////

    // VARIABLES DECLARED -------------------------------------------
    // //////////////////////////////////////////////////////////////

        // VARIABLES FOR PICTURE CAPTURE ----------------------------
        // //////////////////////////////////////////////////////////

            var getStartCaptureIntroTextMainContainer = document.querySelector(`.startPictureIntroTextContainer`)
            var getStartCaptureIntroHeaderText = document.querySelector(`.startPictureIntroHeaderTextContainer`)
            var getStartCaptureIntroBodyText = document.querySelector(`.startPictureIntroBodyTextContainer`)


                // SHOT CANVAS AND ELEMENTS SECTION -----------------
                // --------------------------------------------------

                    // SHOT TO CANVAS CAPTURE SECTION ---------------
                    // //////////////////////////////////////////////

                        var getStartPicButton = document.querySelector(`.cameraStartButtonActual`)
                        var getCamBox = document.querySelector(`.cameraBoxActualPicture`)
                        var getCamBoxMain = document.querySelector(`.cameraBoxContainer`)
                        var getShotButtonMainContainer = document.querySelector(`.cameraTakePictureButtonContainer`)
                        var getShotButton = document.querySelector(`.cameraTakePictureButtonActual`)

                        var getShotSnippetCanvasBoxMain = document.querySelector(`.cameraSnipDisplayBoxContainer`)

                    // SHOT TO CANVAS RETAKE CONFIRM SECTION --------
                    // //////////////////////////////////////////////

                        var getRetakeConfirmButtonContainerMain = document.querySelector(`.cameraSnipConfirmDiscardContainer`)
                        var getRetakeButtonActual = document.querySelector(`.cameraSnipDiscardButtonActualText`)
                        var getConfirmButtonActual = document.querySelector(`.cameraSnipConfirmButtonActualText`)


                // SHOT DATA URL SECTION ----------------------------
                // --------------------------------------------------

                    var getCamSnipDisplay = document.querySelector(`.cameraSnipDisplayActual`)
                    var getShotHeaderDataUrl = document.querySelector(`.cameraSnipDisplayHeaderUrlActual`)


                // SHOT LOCATION AREA SECTION -----------------------
                // --------------------------------------------------

                    // SHOT LOCATION DROP DOWN BUTTON AND ELEMENTS --
                    // ----------------------------------------------

                        var getAreaSelectIconLineOne = document.querySelector(`.cameraShotAreaDropDownIconSideIconLineOne`)
                        var getAreaSelectIconLineThree = document.querySelector(`.cameraShotAreaDropDownIconSideIconLineThree`)

                        var getAreaDropDownOpenClicker = document.querySelector(`.cameraShotAreaDropDownIconSideOpenClicker`)
                        var getAreaDropDownCloseClicker = document.querySelector(`.cameraShotAreaDropDownIconSideCloseClicker`)

                    // SHOT LOCATION DROP DOWN MAIN ITEMS CONTAINER -
                    // ----------------------------------------------

                        var getDropDownDownMainContainer = document.querySelector(`.cameraShotAreaDropDownContainer`)
                        
                        var getDropDownSelectedAreaTextContainer = document.querySelector(`.cameraShotAreaDropDownItemsSideActualTextContainer`)

                        var getAreaDropDownMainItemContainer = document.querySelector(`.cameraShotAreaDropAreaDownContentsContainer`)
                        var getAreaDropDownSlider = document.querySelector(`.cameraShotAreaDropAreaDownSliderContainer`)



        // VARIABLES FOR RATINGS CAPTURE ----------------------------
        // //////////////////////////////////////////////////////////

            // STAR RATINGS MAIN CONTAINER --------------------------
            // ------------------------------------------------------

                var getRatingsMainContainer = document.querySelector(`.cameraShotRatingsContainer`)

            // STAR CLICKERS ----------------------------------------
            // ------------------------------------------------------

                // STAR ONE CLICKERS --------------------------------
                // --------------------------------------------------

                    var starClickerOneOn = document.querySelector(`.cameraShotRatingsAreaStarOneClickerOn`)
                    var starClickerOneOff = document.querySelector(`.cameraShotRatingsAreaStarOneClickerOff`)

                // STAR TWO CLICKERS --------------------------------
                // --------------------------------------------------

                    var starClickerTwoOn = document.querySelector(`.cameraShotRatingsAreaStarTwoClickerOn`)
                    var starClickerTwoOff = document.querySelector(`.cameraShotRatingsAreaStarTwoClickerOff`)

                // STAR THREE CLICKERS ------------------------------
                // --------------------------------------------------

                    var starClickerThreeOn = document.querySelector(`.cameraShotRatingsAreaStarThreeClickerOn`)
                    var starClickerThreeOff = document.querySelector(`.cameraShotRatingsAreaStarThreeClickerOff`)

                // STAR FOUR CLICKERS -------------------------------
                // --------------------------------------------------

                    var starClickerFourOn = document.querySelector(`.cameraShotRatingsAreaStarFourClickerOn`)
                    var starClickerFourOff = document.querySelector(`.cameraShotRatingsAreaStarFourClickerOff`)

                // STAR FIVE CLICKERS -------------------------------
                // --------------------------------------------------

                    var starClickerFiveOn = document.querySelector(`.cameraShotRatingsAreaStarFiveClickerOn`)
                    var starClickerFiveOff = document.querySelector(`.cameraShotRatingsAreaStarFiveClickerOff`)



            // ACTUAL STARS -----------------------------------------
            // ------------------------------------------------------

                var getRatingStarOne = document.querySelector(`.cameraShotRatingsAreaStarActualOne`)
                var getRatingStarTwo = document.querySelector(`.cameraShotRatingsAreaStarActualTwo`)
                var getRatingStarThree = document.querySelector(`.cameraShotRatingsAreaStarActualThree`)
                var getRatingStarFour = document.querySelector(`.cameraShotRatingsAreaStarActualFour`)
                var getRatingStarFive = document.querySelector(`.cameraShotRatingsAreaStarActualFive`)



        // VARIABLES FOR CALORIE ESTIMATES CAPTURE ------------------
        // //////////////////////////////////////////////////////////

            // CALORIE ESTIMATE MAIN CONTAINER ----------------------
            // ------------------------------------------------------

                var getCalorieEstimateMainContainer = document.querySelector(`.cameraShotCalorieEstimateContainer`)



        // VARIABLES FOR COMMENTS SECTION CAPTURE -------------------
        // //////////////////////////////////////////////////////////

            // COMMENTS SECTION MAIN CONTAINER ----------------------
            // ------------------------------------------------------

                var getCommentsSectionMainContainer = document.querySelector(`.cameraShotMakeCommentContainer`)

                var getCommentsSectioninput = document.querySelector(`.cameraShotMakeCommentInputActual`)



        // VARIABLES FOR SUBMIT FORM --------------------------------
        // //////////////////////////////////////////////////////////

            var getImageFormCollect = document.querySelector(`.submitImageConvertedStringInputContainer`).children[0]
            var getAreaFormCollect = document.querySelector(`.submitAreaStringInputContainer`).children[0]
            var getRatingsFormCollect = document.querySelector(`.submitRatingsStringInputContainer`).children[0]
            var getCaloriesFormCollect = document.querySelector(`.submitCaloriesStringInputContainer`).children[0]
            var getCommentsFormCollect = document.querySelector(`.submitCommentsStringInputContainer`).children[0]

            var getSubmitButtonMain = document.querySelector(`.submitButtonContainer`)

        

    // SRINGS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // STRINGS FOR RATINGS CAPTURE ------------------------------
        // //////////////////////////////////////////////////////////

            // STRINGS FOR RATING IMAGE CAPTURE ---------------------
            // //////////////////////////////////////////////////////

                var startDefault = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgB7VrrcdpAEF5eMzDDs4LIFQR3IEpIBbErwKnAdgdOB6QCuwOUCowrgFQAA/zjlW+JxGBFgluxOsQM34zG9unmbj/2vYboiisuD/P5vDudToez2ex9PB47lCJylBJY8GKxONxb8mq1WodSQp5SQqlUegwtudDOHaWEVDQCk2pvNpv3iFeT5XJ502q1JqSMtDTyGrPezOfzD5QC1Imw+UAbTtx7EOnCf5qkDFUiLCAEfTyyrRnhPydDlQiiVPeQNgJgz4N2OFZz9ohwewyq4VhNIwnMxUWidEkJKho5EG6PQU0rWhp5pWRQS5InE+F6ysTBYwVAlNNwfLFpsRmt1+s2BPgKAm0suXQicrncCGcNcO4HzvWQ/UfI/iPRGXEvOCfAgZ09oV0sO3jUk1kMuIwZgCQT/A0ZRtVqdRC3eUfET2Z3hUIh+KTblE14PrmP1Wr1FtRtOyIwmeEptn4m7KLelkiCZJYZQG6nUqn82UYtdixoY0QXBpaZSfDvu/ALe+tcEhmWlWUO/v4UtdjE4Ox9OJNDGUZAYj9E/xd+/XKjT/bCrAiQbeKT+BSKI/OIX8z1KYNAsrwNk2BEligIaR6Y31PGAJO/jyLBiK216vV6D0nnB2UHz8jsvbiXB4vGRqPxwgfQ+fEMK3k6tMGoaITPPOGHep9tiKMkGMbVL/qGHmz0O9nFT5AwGh+JynhohiOZS3YwAIlb082ixorLabIE3PVLsj+12a8CRAlZRIQbLLIElEpfJPulGrFWtsC0WpL9IiI2Gy+p9kVEbFbF+NDS8RGU+LZ7+KZkam9MBC2l9bK+XC43TPcaEznHYGKxWOgnxKREuJvjZoiSQd+06N9wTgIPTwftwA2eFvc30pmA5MMzJoJwaJqgPDwdnjdxgxYscn/DpCSEJElR07Q8iiAQhoSQJCkaEzmQQzwyIBDGHqFv/hlRd+prJHwZLunx/8ylBMIAmTd/7NmJuGNgeo5xP+KPVbdNDgi8SMf+Ce6Z+Peof7ngChv4C+FebC5yhenSAAAAAElFTkSuQmCC`
                var starSelected = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANkSURBVHgB7ZpfThNBHMe/u1tBYlLgRW01cTdUE58oNyg3WE4AngA8gXCDegLxAjo3oJ6A8mSiJl0TkhqfGk3UIOz4m+kWZdktM3RmLEk/D7TZ/nZnvjPz+zOzADNmWMGDRb704m2eYocDA+8EG7WnLIElKrBE/30ckoi2+C5Hax6v6O86LOHDEv4cXly4wNE6/hRvwRJWltZxL24GKQ4LGhv8/IYoWmMDGMbKjJCIt0XXyVeW5qrYgQWMC+kPl09Y9nsAbPcO4yUYxqgQ2UEv5xs5xKwsVMfbXAejQm5XsY0xszGCxOyIqAaDGBOSdWxX+YZhODaGMSGXwu1VUDjuf4xbMIQRISLcpsAWdAnM+YoRIWXh9koMJsmJhYh6CgoOXkZAUc6E42tn9uMPcZM+mpUAq9xDU4wqJiehjnTPUhzREu1UTpHoFpilQkROuHVHjrTsNDXQoukLRR6AA0Q5QwPV9Ti6Jxzv/BTJwyesO8Ye5x2fr2KLLqxSZ5v02cQ04qEjxJ1yHP3+Djaq287LeEpmosgLh7ZTDC1lGugW+RaCRWwi2xrIPvd75GwperiB8AU/rNfffJZRqxZJx0pw80iECPHlb/j15RQluDkkWZ8lF9whW2IHmCAvOEKKyFaS5JJffxXlBolxFWZ1EWHZJxF3o4uhuDBAyWLOlzMzdQQ+1vIiBIUlSu0x61CYe4Zpg/pUJEJQWmvVGmyfltdzTA97ok9lP44tGusrrE3Ov4f/z15the2OM1BK4uQzuyTZ+D5bkStFCJSrETod2SfrTTiEc7ysN5jS8ZFWWUViDuiOFhxA/tmlpb2maq+1sUqpnIYrUrzWMbd29jspuglZSwglo1U4grL3Iy17HWNyPmdlC7W1rGOvt7Q8d8Wk5+nNvq6PhHCEZ8tHstMTZwhn1zm1VxZCJxrOy/r5e/6iqq2ykAp3v9niP1LzCTG9vqOLw7drvWqjl6nml5Z2xOLoUHZep4Ivur/ClrP9TaLzCE+jTWUhZKiWoEYCGmxdbtAyxF5CiNIRpJMUzc1IiYA8OoJ0kqJOHgkLryoKyDMSRIXohnxGUec8GzNyubF9ujvSFZDnQYMx8QwxGPk2RCmv+hz1jRWdefGz4TtyL0D73zMlk4zaoYPqwa8K2lFk/p8LZrjgD70JH5InxbN8AAAAAElFTkSuQmCC`

            // STRINGS FOR RATING NUMBER CAPTURE --------------------
            // //////////////////////////////////////////////////////

                var captureRatingNumber = 0

        

    // ARRAYS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

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

        // ARRAYS FOR PICTURE CAPTURE -------------------------------
        // //////////////////////////////////////////////////////////

            var captureComment = []
            var captureShot64 = []
            var captureStarRating = []
            var captureLocationName = []

            var captureAreaItemsList = [

                "nc1", "nc2", "oxagon", "trojena"

            ]

            var captureDinerItemsList = [

                ["the terrace", "oasis", "american diner"],
                ["nc2 diner one", "nc2 diner main"],
                ["oxagon diner one", "oxagon diner main", "oxagon beach diner"],
                ["trojena diner one", "trojena diner main"]

            ]

            var captureLocationItemClassNames = []
            var captureLocationItemActualClassNames = []

            var captureDinerItemClassNames = []
            var captureDinerItemActualClassNames = []

        // ARRAYS FOR RATINGS CAPTURE -------------------------------
        // //////////////////////////////////////////////////////////

            var captureRatingsNumbers = []

                // ARRAYS FOR RATINGS STAR IMAGE --------------------
                // //////////////////////////////////////////////////

                    var cpatureRatingsStarImages = [

                        startDefault, starSelected

                    ]




















// MAKE FUNCTIONS FOR ENTIRE PAGE -----------------------------------
// //////////////////////////////////////////////////////////////////

    // --------------------------------------------------------------
    // MAKE LIVE FUNCTIONS ------------------------------------------
    // --------------------------------------------------------------

        // REMAKE LIVE CAPTURE SECTION ------------------------------
        // ----------------------------------------------------------

            function reOpenCameraViewSection () {



                // REOPEN CAMERA VIEW AND CAPTURE BUTTON ------------
                // //////////////////////////////////////////////////

                    // FADE IN AND REOPEN CAMERA VIEW BLOCK ---------
                    // //////////////////////////////////////////////

                        // MAKE LIVE CAMERA VIEW BLOCK --------------
                        // //////////////////////////////////////////

                            getCamBoxMain.style = `
                            
                                width:300px;
                                height:230px;
                                left:0;
                                right:0;
                                margin:40px 0px 0px 0px;
                                opacity:0;
                                display:block;
                                position:relative;
                                background:#FFFFFF;
                                box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                                border-radius:10px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // FADE IN CAMERA VIEW BLOCK ----------------
                        // //////////////////////////////////////////

                            setTimeout(() => {

                                getCamBoxMain.style = `
                            
                                    width:300px;
                                    height:230px;
                                    left:0;
                                    right:0;
                                    margin:20px 0px 0px 0px;
                                    opacity:1;
                                    display:block;
                                    position:relative;
                                    background:#FFFFFF;
                                    box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                                    border-radius:10px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                            }, 50)






                

                    // FADE IN AND REOPEN CAPTURE BUTTON BLOCK ------
                    // //////////////////////////////////////////////

                        // MAKE LIVE CAPTURE BUTTON BLOCK -----------
                        // //////////////////////////////////////////

                            getShotButtonMainContainer.style = `
                            
                                width:100%;
                                height:50px;
                                display:block;
                                opacity:0;
                                position:relative;
                                margin-top:50px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // FADE IN CAPTURE BUTTON BLOCK -------------
                        // //////////////////////////////////////////

                            setTimeout(() => {

                                getShotButtonMainContainer.style = `
                                
                                    width:100%;
                                    height:50px;
                                    display:block;
                                    opacity:1;
                                    position:relative;
                                    margin-top:20px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
    
                                `

                            }, 50)



            }

        // REMAKE CAPTURED SHOT SECTION -----------------------------
        // ----------------------------------------------------------

            function reOpenCapturedShotSection () {



            // MAKE LIVE AND FADE IN CAPTURED SHOT AND CONTROLS >>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                // MAKE LIVE CAPTURED SHOT BOX >>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    getShotSnippetCanvasBoxMain.style = `
                    
                        width:300px;
                        height:230px;
                        left:0;
                        right:0;
                        margin:50px 0px 0px 0px;
                        opacity:0;
                        display:block;
                        padding:12px 0px;
                        position:relative;
                        background:#FFFFFF;
                        box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                        border-radius:10px;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `



                // MAKE LIVE CAPTURED SHOT CONTROLS >>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    getRetakeConfirmButtonContainerMain.style = `
                    
                        width:100%;
                        height:50px;
                        display:block;
                        opacity:0;
                        position:relative;
                        margin-top:40px;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;
                    
                    `











                // FADE IN CAPTURED SHOT BOX >>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    setTimeout(() => {

                        getShotSnippetCanvasBoxMain.style = `
                    
                            width:300px;
                            height:230px;
                            left:0;
                            right:0;
                            margin:30px 0px 0px 0px;
                            opacity:1;
                            display:block;
                            padding:12px 0px;
                            position:relative;
                            background:#FFFFFF;
                            box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                            border-radius:10px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    }, 50)

                // FADE IN CAPTURED SHOT CONTROLS >>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    setTimeout(() => {

                        getRetakeConfirmButtonContainerMain.style = `
                        
                            width:100%;
                            height:50px;
                            display:block;
                            opacity:1;
                            position:relative;
                            margin-top:20px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    }, 50)



            }

                // CLEAR CAPTURE CONTROLS SECTION -------------------
                // --------------------------------------------------

                    function reOpenPreviewShotControlsSection () {

                        // MAKE LIVE CAPTURED SHOT CONTROLS ---------
                        // ------------------------------------------

                            getRetakeConfirmButtonContainerMain.style = `
                                
                                width:100%;
                                height:50px;
                                display:block;
                                opacity:0;
                                position:relative;
                                margin-top:40px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // FADE IN CAPTURED SHOT CONTROLS -----------
                        // ------------------------------------------

                            setTimeout(() => {

                                getRetakeConfirmButtonContainerMain.style = `
                                
                                    width:100%;
                                    height:50px;
                                    display:block;
                                    opacity:1;
                                    position:relative;
                                    margin-top:20px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                            }, 50)

                    }

        // REMAKE DATA CAPTURE SECTION ------------------------------
        // ----------------------------------------------------------

        // REMAKE SELECT AREA SECTION -------------------------------
        // ----------------------------------------------------------

            function reOpenSelectAreaSection () {



                // MAKE LIVE AND FADE IN AREA SELECT AND CONTROLS >>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // MAKE LIVE SELECT AREA >>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getDropDownDownMainContainer.style = `
                        
                            width:300px;
                            height:50px;
                            margin:20px 0px 0px 0px;
                            opacity:0;
                            display:inline-block;
                            position:relative;
                            box-shadow:0px 30px 30px -10px rgba(0,0,0,0.15);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // FADE IN SELECTED AREA BOX >>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getDropDownDownMainContainer.style = `
                            
                                width:300px;
                                height:50px;
                                margin:0px 0px 0px 0px;
                                opacity:1;
                                display:inline-block;
                                position:relative;
                                box-shadow:0px 30px 30px -10px rgba(0,0,0,0.15);
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;
    
                            `

                        }, 50)

            }

        // REMAKE RATINGS CAPTURE SECTION ---------------------------
        // ----------------------------------------------------------

            function reOpenRatingsSection () {



                // MAKE LIVE AND FADE IN RATINGS >>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // MAKE LIVE RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getRatingsMainContainer.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:40px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // FADE IN RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getRatingsMainContainer.style = `
                            
                                width:300px;
                                opacity:1;
                                display:block;
                                margin-top:20px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        }, 50)

            }

        // REMAKE CALORIE ESTIMATES CAPTURE SECTION -----------------
        // ----------------------------------------------------------

            function reOpenCalorieEstimateSection () {



                // MAKE LIVE AND FADE IN RATINGS >>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // MAKE LIVE RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getCalorieEstimateMainContainer.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:40px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // FADE IN RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getCalorieEstimateMainContainer.style = `
                        
                                width:300px;
                                opacity:1;
                                display:block;
                                margin-top:20px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        }, 50)



            }

        // REMAKE COMMENTS CAPTURE SECTION --------------------------
        // ----------------------------------------------------------

            function reOpenCommentsSection () {



                // MAKE LIVE AND FADE IN COMMENTS >>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // MAKE LIVE COMMENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getCommentsSectionMainContainer.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:40px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // FADE IN COMMENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getCommentsSectionMainContainer.style = `
                        
                                width:300px;
                                opacity:1;
                                display:block;
                                margin-top:20px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        }, 50)



            }











    // --------------------------------------------------------------
    // CLEARING FUNCTIONS -------------------------------------------
    // --------------------------------------------------------------

        // CLEAR CAPTURE SECTION ------------------------------------
        // ----------------------------------------------------------

            function closeMainCaptureSection () {



            // REMOVE CAMERA CAPTURE BLOCKS AND ELEMENTS xxxxxxxxxxx
            // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                // FADE OUT CAMERA BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxx
                // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                    getCamBoxMain.style = `
                    
                        width:300px;
                        height:230px;
                        left:0;
                        right:0;
                        margin:40px 0px 0px 0px;
                        opacity:0;
                        display:block;
                        position:relative;
                        background:#FFFFFF;
                        box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                        border-radius:10px;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // FADE OUT SHOT CAPTURE BUTTON BLOCK xxxxxxxxxxxxxx
                // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                    getShotButtonMainContainer.style = `
                    
                        width:100%;
                        height:50px;
                        display:block;
                        opacity:0;
                        position:relative;
                        margin-top:50px;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `






                // HIDE CAMERA BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                    setTimeout(() => {

                        getCamBoxMain.style = `
                    
                            width:300px;
                            height:230px;
                            left:0;
                            right:0;
                            margin:40px 0px 0px 0px;
                            opacity:0;
                            display:none;
                            position:relative;
                            background:#FFFFFF;
                            box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                            border-radius:10px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    }, 300)

                // HIDE SHOT CAPTURE BUTTON BLOCK xxxxxxxxxxxxxxxxxx
                // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                    setTimeout(() => {

                        getShotButtonMainContainer.style = `
                    
                            width:100%;
                            height:50px;
                            display:none;
                            opacity:0;
                            position:relative;
                            margin-top:50px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    }, 300)


            }

        // CLEAR CAPTURED PREVIEW SHOT SECTION ----------------------
        // ----------------------------------------------------------

            function closePreviewShotSection () {



                // CLOSE CAPTURED IMAGE PREVIEW AND BUTTONS xxxxxxxxx
                // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                    // FADE OUT AND HIDE CAPTURED IMAGE BLOCK xxxxxxx
                    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                        // FADE OUT CAPTURED IMAGE BLOCK xxxxxxxxxxxx
                        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                            getShotSnippetCanvasBoxMain.style = `
                            
                                width:300px;
                                height:230px;
                                left:0;
                                right:0;
                                margin:50px 0px 0px 0px;
                                opacity:0;
                                display:block;
                                padding:12px 0px;
                                position:relative;
                                background:#FFFFFF;
                                box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                                border-radius:10px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // HIDE CAPTURED IMAGE BLOCK xxxxxxxxxxxxxxxx
                        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                            setTimeout(() => {

                                getShotSnippetCanvasBoxMain.style = `
                                
                                    width:300px;
                                    height:230px;
                                    left:0;
                                    right:0;
                                    margin:50px 0px 0px 0px;
                                    opacity:0;
                                    display:none;
                                    padding:12px 0px;
                                    position:relative;
                                    background:#FFFFFF;
                                    box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                                    border-radius:10px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                            }, 300)

                    // FADE OUT AND HIDE CAPTURED IMAGE CONTROLS xxxx
                    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                        // FADE IN CAPTURED IMAGE CONTROLS xxxxxxxxxx
                        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                            getRetakeConfirmButtonContainerMain.style = `
                            
                                width:100%;
                                height:50px;
                                display:block;
                                opacity:0;
                                position:relative;
                                margin-top:40px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // HIDE CAPTURED IMAGE CONTROLS xxxxxxxxxxxxx
                        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                            setTimeout(() => {

                                getRetakeConfirmButtonContainerMain.style = `
                                
                                    width:100%;
                                    height:50px;
                                    display:none;
                                    opacity:0;
                                    position:relative;
                                    margin-top:40px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `
                                
                            }, 300);



            }

                // CLEAR CAPTURE CONTROLS SECTION -------------------
                // --------------------------------------------------

                    function closePreviewShotControlsSection () {

                        // FADE OUT CAPTURED SHOT CONTROLS ----------
                        // ------------------------------------------

                            getRetakeConfirmButtonContainerMain.style = `
                            
                                width:100%;
                                height:50px;
                                display:block;
                                opacity:0;
                                position:relative;
                                margin-top:40px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // HIDE CAPTURED SHOT CONTROLS --------------
                        // ------------------------------------------

                            setTimeout(() => {

                                getRetakeConfirmButtonContainerMain.style = `
                                
                                    width:100%;
                                    height:50px;
                                    display:none;
                                    opacity:0;
                                    position:relative;
                                    margin-top:40px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
    
                                `

                            }, 300)

                    }
                    

        // CLEAR DATA CAPTURE SECTION -------------------------------
        // ----------------------------------------------------------

            function closeDataUrlSection () {



                // ERASE DATA URL SECTION AND ELEMENTS xxxxxxxxxxxxxx
                // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                    // ERASE DATA URL TEXT IN USER FORM xxxxxxxxxxxxx
                    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                        getShotHeaderDataUrl.textContent = "shot data url"

                    // ERASE DATA URL TEXT IN SUBMIT FORM xxxxxxxxxxx
                    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


            }

        // CLEAR SELECT AREA SECTION --------------------------------
        // ----------------------------------------------------------

            function closeSelectAreaSection () {



                // HIDE AND FADE IN AREA SELECT AND CONTROLS >>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // FADE OUT SELECT AREA >>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getDropDownDownMainContainer.style = `
                        
                            width:300px;
                            height:50px;
                            margin:20px 0px 0px 0px;
                            opacity:0;
                            display:inline-block;
                            position:relative;
                            box-shadow:0px 30px 30px -10px rgba(0,0,0,0.15);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // HIDE SELECTED AREA BOX >>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getDropDownDownMainContainer.style = `
                        
                                width:300px;
                                height:50px;
                                margin:20px 0px 0px 0px;
                                opacity:0;
                                display:none;
                                position:relative;
                                box-shadow:0px 30px 30px -10px rgba(0,0,0,0.15);
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `
                            
                        }, 300);

            }

        // CLEAR RATINGS CAPTURE SECTION ----------------------------
        // ----------------------------------------------------------

            function closeRatingsSection () {



                // HIDE AND FADE IN RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // FADE OUT RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getRatingsMainContainer.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:40px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // HIDE RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getRatingsMainContainer.style = `
                            
                                width:300px;
                                opacity:0;
                                display:none;
                                margin-top:40px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `


                        }, 300)



            }

        // CLEAR CALORIE ESTIMATES CAPTURE SECTION ------------------
        // ----------------------------------------------------------

            function closeCalorieEstimateSection () {



                // HIDE AND FADE IN RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // FADE OUT RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getCalorieEstimateMainContainer.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:40px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // HIDE RATINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getCalorieEstimateMainContainer.style = `
                        
                                width:300px;
                                opacity:0;
                                display:none;
                                margin-top:40px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        }, 300)



            }

        // CLEAR COMMENTS CAPTURE SECTION ---------------------------
        // ----------------------------------------------------------

            function closeCommentsSection () {



                // HIDE AND FADE IN COMMENTS >>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
                    // FADE OUT COMMENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        getCommentsSectionMainContainer.style = `
                        
                            width:300px;
                            opacity:0;
                            display:block;
                            margin-top:40px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `











                    // HIDE COMMENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                        setTimeout(() => {

                            getCommentsSectionMainContainer.style = `
                        
                                width:300px;
                                opacity:0;
                                display:none;
                                margin-top:40px;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        }, 300)



            }











    // NAV BAR FUNCTIONS --------------------------------------------
    // //////////////////////////////////////////////////////////////

    // RETAKE CONFIRM PICTURE FUNCTIONS -----------------------------
    // //////////////////////////////////////////////////////////////

        // START STREAM FUNCTIONS -----------------------------------
        // //////////////////////////////////////////////////////////

            async function startStream () {

                

            // START THE STREAM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                let stream = null;

                    try {

                        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false});

                    }

                    catch (error) {

                        alert(error.message);
                        return;

                    }

            // STREAM VIDEO CAPTURE TO CAMERA BOX ON PAGE >>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                getCamBox.srcObject = stream;

            // INLINE STYLES FOR INTRO TEXT >>>>>>>>>>>>>>>>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                getStartCaptureIntroTextMainContainer.style.display = `none`

            // INLINE STYLES FOR STREAM BOX >>>>>>>>>>>>>>>>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                getCamBox.style.display = `block`;
                getStartPicButton.style.display = `none`;
                getShotButton.style.display = `block`;







            // MAKE LIVE AND FADE IN CAM CAPTURE BOX ITEMS >>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                // MAKE LIVE CAM BOX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    getCamBoxMain.style = `
                    
                        width:300px;
                        height:230px;
                        left:0;
                        right:0;
                        margin:40px 0px 0px 0px;
                        opacity:0;
                        display:block;
                        position:relative;
                        background:#FFFFFF;
                        box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                        border-radius:10px;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // MAKE LIVE CAM CAPTURE BUTTON >>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    getShotButtonMainContainer.style = `
                    
                        width:100%;
                        height:50px;
                        display:block;
                        opacity:0;
                        position:relative;
                        margin-top:50px;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // FADE IN CAM BOX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    setTimeout(() => {

                        getCamBoxMain.style = `
                        
                            width:300px;
                            height:230px;
                            left:0;
                            right:0;
                            margin:20px 0px 0px 0px;
                            opacity:1;
                            display:block;
                            position:relative;
                            background:#FFFFFF;
                            box-shadow:0px 50px 30px -20px rgba(0,0,0,0.15);
                            border-radius:10px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;
    
                        `

                    }, 50)

                // FADE IN CAM BOX CAPTURE BUTTON >>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    setTimeout(() => {

                        getShotButtonMainContainer.style = `
                        
                            width:100%;
                            height:50px;
                            display:block;
                            opacity:1;
                            position:relative;
                            margin-top:30px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    }, 50)

            }

        // RETAKE PICTURE FUNCTIONS ---------------------------------
        // //////////////////////////////////////////////////////////

            async function retakeImage () {



                // START THE STREAM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    let stream = null;

                        try {

                            stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false});

                        }

                        catch (error) {

                            alert(error.message);
                            return;

                        }

                // STREAM VIDEO CAPTURE TO CAMERA BOX ON PAGE >>>>>>>
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    getCamBox.srcObject = stream;



                // REOPEN CAPTURE IMAGE SECTION ---------------------
                // //////////////////////////////////////////////////

                    reOpenCameraViewSection()



                // CLOSE PREVIEW SHOT SECTION -----------------------
                // //////////////////////////////////////////////////

                    closePreviewShotSection()



                // ERASE DATA URL SECTION ---------------------------
                // //////////////////////////////////////////////////

                    closeDataUrlSection()
                    
                    

            }

        // CONFIRM PICTURE FUNCTIONS --------------------------------
        // //////////////////////////////////////////////////////////

            function confirmImage () {



                // REOPEN SELECT AREA SECTION ------------------------
                // //////////////////////////////////////////////////

                    reOpenSelectAreaSection()



                // CLOSE PREVIEW SHOT CONTROLS SECTION --------------
                // //////////////////////////////////////////////////

                    closePreviewShotControlsSection()



            }

    // CAPTURE AREA FUNCTIONS ---------------------------------------
    // //////////////////////////////////////////////////////////////

        // POPULATE DROP DOWN AREA SELECTION FUNCTIONS --------------
        // //////////////////////////////////////////////////////////

            function populateAreaDropDownItems () {

                // DECLARE VARIABLES FOR USE ------------------------
                // //////////////////////////////////////////////////

                    var getAreaDropDownMain = document.querySelector(`.cameraShotDropDownAreaSelectSide`)





                        // CLEAR OUT CLASS NAMES ARRAY --------------
                        // //////////////////////////////////////////

                            captureLocationItemClassNames = []
                            captureLocationItemActualClassNames = []










                        // RUN LOOP TO MAKE NEW AREA DROP DOWN ITEM -
                        // //////////////////////////////////////////


                            for ( areaItemCounter = 0; areaItemCounter < captureAreaItemsList.length; areaItemCounter++ ) {


                                // CREATE ITEM BLOCK FOR DROP DOWN ------
                                // //////////////////////////////////////
    
                                    var makeAreaDropDownItem = document.createElement("div")
                                    var makeAreaDropDownItemButton = document.createElement("div")
    
                                    makeAreaDropDownItem.className = `cameraShotAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Container`
                                    makeAreaDropDownItemButton.className = `cameraShotAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Resizer`
    
    
                                
    
                                // STYLE ITEM BLOCKS --------------------
                                // //////////////////////////////////////

                                    makeAreaDropDownItem.style = `
                                    
                                        width:99%;
                                        left:0;
                                        right:0;
                                        cursor:pointer;
                                        padding:10px 0px 0px 0px;
                                        margin:0px auto;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        makeAreaDropDownItemButton.style = `
                                        
                                            width:100%;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            position:relative;
                                            background:rgb(231, 221, 80, 0.00);
                                            border-radius:8px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `
    
    
                                
    
                                // UPDATE TEXT OF BUTTON ----------------
                                // //////////////////////////////////////

                                    makeAreaDropDownItemButton.textContent = `${captureAreaItemsList[areaItemCounter]}`
    
    
                                
    
                                // UPDATE CLASSNAMES IN ARRAY -----------
                                // //////////////////////////////////////

                                    captureLocationItemClassNames.push(`cameraShotAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Container`)
                                    captureLocationItemActualClassNames.push(`cameraShotAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Resizer`)
    
    
                                
    
                                // APPEND BLOCKS TO DROP DOWN MAIN ------
                                // //////////////////////////////////////

                                    getAreaDropDownMain.appendChild(makeAreaDropDownItem)

                                        makeAreaDropDownItem.appendChild(makeAreaDropDownItemButton)

                                    


                            }










                        // RUN LOOP FOR MOUSE OVER EVENTS -----------
                        // //////////////////////////////////////////

                            captureLocationItemClassNames.forEach((classSkipper) => {

                                var getSkipperNumber = captureLocationItemClassNames.indexOf(classSkipper)

                                var makeElement = document.querySelector(`.${classSkipper}`)
                                var makeElementButtonActual = document.querySelector(`.${captureLocationItemActualClassNames[getSkipperNumber]}`)










                                    // CREATE EVENT LISTENER FOR SELECTED ELEMENT
                                    // //////////////////////////////

                                        // FOR CLICKS ---------------
                                        // //////////////////////////

                                            makeElement.addEventListener("click", function () {



                                                // SLIDE ITEM SLIDER TO AREA DINER SELECT AREA
                                                // //////////////////

                                                    getAreaDropDownSlider.style = `
                                                    
                                                        width:200%;
                                                        margin-left:-100%;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `



                                                // SELECT DINER FUNCTION
                                                // //////////////////

                                                    populateDinerDropDownItems(getSkipperNumber)



                                            })




                                        // FOR MOUSE OVERS AND OUTS -
                                        // //////////////////////////

                                            makeElement.addEventListener("mouseover", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 1.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            })

                                            makeElement.addEventListener("mouseout", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 0.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease; 

                                                `
                                                
                                            })

                                        



                            })



            }
                

        // POPULATE DROP DOWN DINER SELECTION FUNCTIONS -------------
        // //////////////////////////////////////////////////////////

            function populateDinerDropDownItems (selectDinerSet) {

                // DECLARE VARIABLES FOR USE ------------------------
                // //////////////////////////////////////////////////

                    var getDinerDropDownMain = document.querySelector(`.cameraShotDropDownDinerSelectSide`)





                        // CLEAR OUT CLASS NAMES ARRAY --------------
                        // //////////////////////////////////////////

                            captureDinerItemClassNames = []
                            captureDinerItemActualClassNames = []





                        // CLEAR OUT DINER SECTION LIST AND READY FOR NEW
                        // //////////////////////////////////////////

                            // FIRST GET NUMBER OF CHILDREN INSIDE --
                            // //////////////////////////////////////

                                var getChildrenCount = getDinerDropDownMain.children.length

                            // THEN CHECK IF PARENT HAS CHILDREN ----
                            // //////////////////////////////////////

                                // IF HAS CHILDREN THEN CLEAR ALL CHILDREN
                                // //////////////////////////////////

                                    if ( getChildrenCount > 0 ) {

                                        for ( parentEraserCount = getChildrenCount; parentEraserCount != 0; parentEraserCount-- ) {

                                            // REMOVE FIRST CHILD UNTIL NOTHING LEFT
                                            // //////////////////////

                                                getDinerDropDownMain.removeChild(getDinerDropDownMain.children[0])

                                                console.log("REBOOTED...")
                                            
                                        }

                                    }










                        // RUN LOOP TO MAKE NEW AREA DROP DOWN ITEM -
                        // //////////////////////////////////////////

                            
                            for ( dineItemCounter = 0; dineItemCounter < captureDinerItemsList[selectDinerSet].length; dineItemCounter++ ) {


                                // CREATE ITEM BLOCK FOR DROP DOWN ------
                                // //////////////////////////////////////
    
                                    var makeDinerDropDownItem = document.createElement("div")
                                    var makeDinerDropDownItemButton = document.createElement("div")
    
                                    makeDinerDropDownItem.className = `cameraShotDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Container`
                                    makeDinerDropDownItemButton.className = `cameraShotDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Resizer`
    
    
                                
    
                                // STYLE ITEM BLOCKS --------------------
                                // //////////////////////////////////////

                                    makeDinerDropDownItem.style = `
                                    
                                        width:99%;
                                        left:0;
                                        right:0;
                                        cursor:pointer;
                                        padding:10px 0px 0px 0px;
                                        margin:0px auto;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        makeDinerDropDownItemButton.style = `
                                        
                                            width:100%;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            position:relative;
                                            background:rgb(231, 221, 80, 0.00);
                                            border-radius:8px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `
    
    
                                
    
                                // UPDATE TEXT OF BUTTON ----------------
                                // //////////////////////////////////////

                                    captureDinerItemClassNames.push(`cameraShotDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Container`)
                                    captureDinerItemActualClassNames.push(`cameraShotDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Resizer`)
    
    
                                
    
                                // UPDATE BUTTON NAMES FROM ARRAY -------
                                // //////////////////////////////////////

                                    makeDinerDropDownItemButton.textContent = `${captureDinerItemsList[selectDinerSet][dineItemCounter]}`
    
    
                                
    
                                // APPEND BLOCKS TO DROP DOWN MAIN ------
                                // //////////////////////////////////////

                                    getDinerDropDownMain.appendChild(makeDinerDropDownItem)

                                        makeDinerDropDownItem.appendChild(makeDinerDropDownItemButton)

                            }










                        // RUN LOOP FOR MOUSE OVER EVENTS -----------
                        // //////////////////////////////////////////

                            captureDinerItemClassNames.forEach((classSkipper) => {

                                var getSkipperNumber = captureDinerItemClassNames.indexOf(classSkipper)

                                var makeElement = document.querySelector(`.${classSkipper}`)
                                var makeElementButtonActual = document.querySelector(`.${captureDinerItemActualClassNames[getSkipperNumber]}`)










                                    // CREATE EVENT LISTENER FOR SELECTED ELEMENT
                                    // //////////////////////////////

                                        // FOR CLICKS ---------------
                                        // //////////////////////////

                                            makeElement.addEventListener("click", function () {



                                                // DECLARE VARIABLES FOR THIS INSTANCE
                                                // //////////////////

                                                    var getButtonText = makeElement.children[0].textContent



                                                // SLIDE ITEM SLIDER TO AREA DINER SELECT AREA
                                                // //////////////////

                                                    getAreaDropDownSlider.style = `
                                                    
                                                        width:200%;
                                                        margin-left:0%;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `



                                                // UPDATE AREA DISPLAY TEXT WITH SELECTED AREA
                                                // //////////////////

                                                    updateSelectedArea(getButtonText)


                                                // CLOSE DOWN SELECT AREA AND RESET DROP DOWNS
                                                // //////////////////

                                                    closeSelectAreaDropDown()



                                                // OPEN RATINGS SECTION
                                                // //////////////////

                                                    reOpenRatingsSection()



                                            })




                                        // FOR MOUSE OVERS AND OUTS -
                                        // //////////////////////////

                                            makeElement.addEventListener("mouseover", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 1.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            })

                                            makeElement.addEventListener("mouseout", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 0.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease; 

                                                `
                                                
                                            })

                                        



                            })

            }
                

        // DROP DOWN CLICKERS FUNCTIONS -----------------------------
        // //////////////////////////////////////////////////////////


            // DROP DOWN AREA SELECT OPEN CLICKER -------------------
            // //////////////////////////////////////////////////////

                function openSelectAreaDropDown() {

                    // SEND OPEN CLICKER TO BACK --------------------
                    // //////////////////////////////////////////////

                        getAreaDropDownOpenClicker.style = `
                        
                            width:100%;
                            height:100%;
                            left:0;
                            right:0;
                            margin:0px auto;
                            z-index:-1;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING CLOSE CLICKER TO FRONT -----------------
                    // //////////////////////////////////////////////

                        getAreaDropDownCloseClicker.style = `
                        
                            width:100%;
                            height:100%;
                            left:0;
                            right:0;
                            margin:0px auto;
                            z-index:1;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // CHANGE STATE OF DROP DOWN ICON TO OPEN MODE --
                    // //////////////////////////////////////////////

                        getAreaSelectIconLineOne.style = `
                        
                            width:10px;
                            height:4px;
                            top:0;
                            left:-5px;
                            right:0;
                            bottom:0;
                            opacity:1;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            border-radius:1000px;
                            transform:rotateZ(-45deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getAreaSelectIconLineThree.style = `
                        
                            width:10px;
                            height:4px;
                            top:0;
                            left:0;
                            right:-5px;
                            bottom:0;
                            opacity:1;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            border-radius:1000px;
                            transform:rotateZ(45deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // OPEN DROP DOWN SLIDER ------------------------
                    // //////////////////////////////////////////////

                        getAreaDropDownMainItemContainer.style = `
                        
                            width:280px;
                            margin:0px 0px 0px 0px;
                            opacity:0;
                            padding:0px 10px 10px 10px;
                            display:inline-table;
                            overflow:hidden;
                            position:relative;
                            background:#FFFFFF;
                            border-radius:10px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            // FADE IN DROP DOWN SLIDER -------------
                            // //////////////////////////////////////

                                setTimeout(() => {

                                    getAreaDropDownMainItemContainer.style = `
                        
                                        width:280px;
                                        margin:10px 0px 0px 0px;
                                        opacity:1;
                                        padding:0px 10px 10px 10px;
                                        display:inline-table;
                                        overflow:hidden;
                                        position:relative;
                                        background:#FFFFFF;
                                        border-radius:10px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                }, 50)

                }
                

            // DROP DOWN AREA SELECT CLOSE CLICKER ------------------
            // //////////////////////////////////////////////////////

                function closeSelectAreaDropDown() {

                    // DECLARE VARIABLES ----------------------------
                    // //////////////////////////////////////////////

                        var getAreaSelectSlider = document.querySelector(`.cameraShotAreaDropAreaDownSliderContainer`)
                        var getAreaSelectSecondSide = document.querySelector(`.cameraShotDropDownDinerSelectSide`)

                    // BRING OPEN CLICKER TO FRONT ------------------
                    // //////////////////////////////////////////////

                        getAreaDropDownOpenClicker.style = `
                        
                            width:100%;
                            height:100%;
                            left:0;
                            right:0;
                            margin:0px auto;
                            z-index:1;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SEND CLOSE CLICKER TO BACK -------------------
                    // //////////////////////////////////////////////

                        getAreaDropDownCloseClicker.style = `
                        
                            width:100%;
                            height:100%;
                            left:0;
                            right:0;
                            margin:0px auto;
                            z-index:-1;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // CHANGE STATE OF DROP DOWN ICON TO CLOSED MODE 
                    // //////////////////////////////////////////////

                        getAreaSelectIconLineOne.style = `
                        
                            width:10px;
                            height:4px;
                            top:0;
                            left:-5px;
                            right:0;
                            bottom:0;
                            opacity:1;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            border-radius:1000px;
                            transform:rotateZ(45deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getAreaSelectIconLineThree.style = `
                        
                            width:10px;
                            height:4px;
                            top:0;
                            left:0;
                            right:-5px;
                            bottom:0;
                            opacity:1;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            border-radius:1000px;
                            transform:rotateZ(-45deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // FADE OUT DROP DOWN SLIDER --------------------
                    // //////////////////////////////////////////////

                        getAreaDropDownMainItemContainer.style = `
                        
                            width:280px;
                            margin:0px 0px 0px 0px;
                            opacity:0;
                            padding:0px 10px 10px 10px;
                            display:inline-table;
                            overflow:hidden;
                            position:relative;
                            background:#FFFFFF;
                            border-radius:10px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            // CLOSE DROP DOWN SLIDER ---------------
                            // //////////////////////////////////////

                                setTimeout(() => {

                                    getAreaDropDownMainItemContainer.style = `
                        
                                        width:280px;
                                        margin:0px 0px 0px 0px;
                                        opacity:0;
                                        padding:0px 10px 10px 10px;
                                        display:none;
                                        overflow:hidden;
                                        position:relative;
                                        background:#FFFFFF;
                                        border-radius:10px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                            // RESET ITEM SLIDERS TO DEFAULT POSITIONS
                            // //////////////////////////////////////

                                // EMPTY OUT SECOND SLIDER ----------
                                // //////////////////////////////////

                                    var getChildrenCount = getAreaSelectSecondSide.children.length

                                        if ( getChildrenCount > 0 ) {

                                            for ( parentEraserCount = getChildrenCount; parentEraserCount != 0; parentEraserCount-- ) {

                                                // REMOVE FIRST CHILD UNTIL NOTHING LEFT
                                                // //////////////////

                                                    getAreaSelectSecondSide.removeChild(getAreaSelectSecondSide.children[0])
                                                
                                            }

                                        }

                                // SLIDE SECOND ITEM SLIDER TO DEFAULT
                                // //////////////////////////////////

                                    getAreaSelectSlider.style = `
                                    
                                        width:200%;
                                        margin-left:0%;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                }, 300)

                }
                

        // SELECT AREA SELECTED AREA FUNCTIONS ----------------------
        // //////////////////////////////////////////////////////////

            // FOR AUTOSELECTED AREA FUNCTIONS ----------------------
            // //////////////////////////////////////////////////////

            // FOR MANUAL SELECTED AREA FUNCTIONS -------------------
            // //////////////////////////////////////////////////////

                function updateSelectedArea (selectedAreaText) {

                    // UPDATE AREA SELECTED DISPLAY WITH SELECTED AREA
                    // //////////////////////////////////////////////

                        getDropDownSelectedAreaTextContainer.textContent = selectedAreaText

                    // UPDATE FORM INPUT FOR SELECTED DISPLAY WITH SELECTED AREA
                    // //////////////////////////////////////////////

                        getAreaFormCollect.value = selectedAreaText

                }
                

    // RATING STARS FUNCTIONS ---------------------------------------
    // //////////////////////////////////////////////////////////////

        // STAR RATINGS CLICKS FUNCTIONS ----------------------------
        // ----------------------------------------------------------

            // FOR CLICKERS ON --------------------------------------
            // ------------------------------------------------------

                function ratingStarClickerOnOne () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 1

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER ONE TO BACK ------------------
                    // //////////////////////////////////////////////
                        
                        starClickerOneOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER ONE TO FRONT ---------------
                    // //////////////////////////////////////////////

                        starClickerOneOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                }


                function ratingStarClickerOnTwo () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 2

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER TWO TO BACK ------------------
                    // //////////////////////////////////////////////
                        
                        starClickerTwoOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO FRONT ---------------
                    // //////////////////////////////////////////////

                        starClickerTwoOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                }


                function ratingStarClickerOnThree () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 3

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER THREE TO BACK ----------------
                    // //////////////////////////////////////////////
                        
                        starClickerThreeOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER THREE TO FRONT -------------
                    // //////////////////////////////////////////////

                        starClickerThreeOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                }


                function ratingStarClickerOnFour () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 4

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER FOUR TO BACK -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFourOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER FOUR TO FRONT --------------
                    // //////////////////////////////////////////////

                        starClickerFourOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                }


                function ratingStarClickerOnFive () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 5

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER FIVE TO BACK -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFiveOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER FIVE TO FRONT --------------
                    // //////////////////////////////////////////////

                        starClickerFiveOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                }




            // FOR CLICKERS OFF -------------------------------------
            // ------------------------------------------------------

                function ratingStarClickerOffOne () {



                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER ONE TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerOneOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER ONE TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerOneOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `


                }


                function ratingStarClickerOffTwo () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerTwoOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerTwoOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                }


                function ratingStarClickerOffThree () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerThreeOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerThreeOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                }


                function ratingStarClickerOffFour () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFourOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerFourOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `


                }


                function ratingStarClickerOffFive () {

                    

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // UPDATE RATING NUMBER IN FORM -----------------
                    // //////////////////////////////////////////////

                        getRatingsFormCollect.value = captureRatingNumber

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFiveOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerFiveOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `


                }
                

    // COMMENTS SECTION FUNCTIONS -----------------------------------
    // //////////////////////////////////////////////////////////////

        function makeComments () {

            // UPDATE FORM WITH UPDATED COMMENTS SECTION ------------
            // //////////////////////////////////////////////////////

                // CHECK IF EMPTY OR NOT ----------------------------
                // //////////////////////////////////////////////////

                    // IF EMPTY THEN HIDE SUBMIT BUTTON -------------
                    // //////////////////////////////////////////////

                        if ( getCommentsSectioninput.value.length < 50 ) {

                            // UPDATE FORM TO DEFAULT EMPTY SLOT ----
                            // //////////////////////////////////////

                                getCommentsFormCollect.value = ""

                            // CHECK IF SUBMIT BUTTON IS ALREADY DEAD
                            // //////////////////////////////////////

                                // IF BUTTON IS ALREADY DEAD --------
                                // //////////////////////////////////

                                    if ( getSubmitButtonMain.style.display == `none` ) {

                                        console.log("ALREADY DEAD...")

                                    }

                                // IF BUTTON IS STILL ALIVE --------
                                // //////////////////////////////////

                                    else {



                                        // FADE OUT SUBMIT BUTTON ---
                                        // //////////////////////////

                                            getSubmitButtonMain.style = `
                                            
                                                width:100%;
                                                margin:40px 0px 0px 0px;
                                                display:block;
                                                opacity:0;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                                // HIDE SUBMIT BUTTON
                                                // //////////////////

                                                    setTimeout(() => {

                                                        getSubmitButtonMain.style = `
                                            
                                                            width:100%;
                                                            margin:40px 0px 0px 0px;
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

                    // IF NOT EMPTY THEN SHOW SUBMIT BUTTON ---------
                    // //////////////////////////////////////////////

                        else {

                            // UPDATE FORM TO DEFAULT EMPTY SLOT ----
                            // //////////////////////////////////////

                                getCommentsFormCollect.value = getCommentsSectioninput.value

                            // FADE IN SUBMIT BUTTON ----------------
                            // //////////////////////////////////////

                                // CHECK IF BUTTON ALREADY IS LIVE --
                                // //////////////////////////////////

                                    if ( getSubmitButtonMain.style.display == `block` ) {

                                        console.log("EXISTS...")

                                    }

                                // AND IF BUTTON IS NOT LIVE --------
                                // //////////////////////////////////

                                    else {

                                        // MAKE LIVE SUBMIT BUTTON --
                                        // //////////////////////////

                                            getSubmitButtonMain.style = `
                                
                                                width:100%;
                                                margin:40px 0px 0px 0px;
                                                display:block;
                                                opacity:0;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                                // FADE IN SUBMIT BUTTON
                                                // //////////////////

                                                    setTimeout(() => {

                                                        getSubmitButtonMain.style = `
                                
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

                                                    }, 50)

                                    }

                        }

        }























// MAKE EVENTS FOR ENTIRE PAGE --------------------------------------
// //////////////////////////////////////////////////////////////////

    // SETUP STREAM VIDEO EVENTS ------------------------------------
    // //////////////////////////////////////////////////////////////

        getStartPicButton.addEventListener("click", function () {

            startStream()

        })

    // SHOT CAPTURE EVENTS ------------------------------------------
    // //////////////////////////////////////////////////////////////

        getShotButton.addEventListener("click", function () {


            // CLOSE CAMERA VIEW SECTION ----------------------------
            // //////////////////////////////////////////////////////

                closeMainCaptureSection()


            // REOPEN SHOT PREVIEW SECTION --------------------------
            // //////////////////////////////////////////////////////

                reOpenCapturedShotSection()
            
            
            // DRAW SHOT IMAGE TO CANVAS ----------------------------
            // //////////////////////////////////////////////////////

                getCamSnipDisplay.getContext("2d").drawImage(getCamBox, 0, 0, getCamSnipDisplay.width, getCamSnipDisplay.height);


            // GET HEADER URL DATA ----------------------------------
            // //////////////////////////////////////////////////////

                let imageDataHeaderUrlText = getCamSnipDisplay.toDataURL(`image/jpeg`);

                    // EMPTY OUT ELEMENTS ---------------------------
                    // //////////////////////////////////////////////

                        getShotHeaderDataUrl.textContent = ""

                        getImageFormCollect.value = 0

                    // REPOPULATE ELEMENTS --------------------------
                    // //////////////////////////////////////////////

                        getShotHeaderDataUrl.textContent = imageDataHeaderUrlText

                        getImageFormCollect.value = imageDataHeaderUrlText


            // CLOSE STREAM -----------------------------------------
            // //////////////////////////////////////////////////////

                getCamBox.srcObject.getTracks().forEach(track => track.stop())


        })

    // RETAKE CONFIRM PICTURE EVENTS --------------------------------
    // //////////////////////////////////////////////////////////////

        // RETAKE PICTURE EVENTS ------------------------------------
        // //////////////////////////////////////////////////////////

            getRetakeButtonActual.addEventListener("click", function () {

                retakeImage()

            })

        // CONFIRM PICTURE EVENTS -----------------------------------
        // //////////////////////////////////////////////////////////

            getConfirmButtonActual.addEventListener("click", function () {

                confirmImage()

            })


    // CAPTURE AREA EVENTS ------------------------------------------
    // //////////////////////////////////////////////////////////////

        // OPEN CLOSE CLICKERS FOR AREA SELECT ----------------------
        // //////////////////////////////////////////////////////////

            // FOR OPEN CLICKER -------------------------------------
            // //////////////////////////////////////////////////////

                getAreaDropDownOpenClicker.addEventListener("click", function () {

                    openSelectAreaDropDown()

                })

            // FOR CLOSE CLICKER ------------------------------------
            // //////////////////////////////////////////////////////

                getAreaDropDownCloseClicker.addEventListener("click", function () {

                    closeSelectAreaDropDown()
                    
                })

        // EVENTS --------------
        // //////////////////////////////////////////////////////////







    // CAPTURE RATINGS EVENTS ---------------------------------------
    // //////////////////////////////////////////////////////////////

        // RATING STAR CLICKER ONE ----------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerOneOn.addEventListener("click", function () {

                    
                    // SWITCH ON STAR ONE ---------------------------
                    // ----------------------------------------------

                        ratingStarClickerOnOne()

                    
                    // SWITCH ON CALORIE ESTIMATE SECTION -----------
                    // ----------------------------------------------

                        reOpenCalorieEstimateSection()

                    
                    // SWITCH ON COMMENTS SECTION -------------------
                    // ----------------------------------------------

                        reOpenCommentsSection()


                })


            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerOneOff.addEventListener("click", function () {

                    
                    // SWITCH OFF STAR ONE --------------------------
                    // ----------------------------------------------

                        ratingStarClickerOffOne()

                    
                    // SWITCH OFF CALORIE ESTIMATE SECTION ----------
                    // ----------------------------------------------

                        closeCalorieEstimateSection()

                    
                    // SWITCH OFF COMMENTS SECTION ------------------
                    // ----------------------------------------------

                        closeCommentsSection()

                })
                

        // RATING STAR CLICKER TWO ----------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerTwoOn.addEventListener("click", function () {

                    
                    // SWITCH ON STAR TWO ---------------------------
                    // ----------------------------------------------

                        ratingStarClickerOnTwo()

                    
                    // SWITCH ON CALORIE ESTIMATE SECTION -----------
                    // ----------------------------------------------

                        reOpenCalorieEstimateSection()

                    
                    // SWITCH ON COMMENTS SECTION -------------------
                    // ----------------------------------------------

                        reOpenCommentsSection()

                })
                

            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerTwoOff.addEventListener("click", function () {

                    
                    // SWITCH OFF STAR TWO --------------------------
                    // ----------------------------------------------

                        ratingStarClickerOffTwo()

                    
                    // SWITCH OFF CALORIE ESTIMATE SECTION ----------
                    // ----------------------------------------------

                        closeCalorieEstimateSection()

                    
                    // SWITCH OFF COMMENTS SECTION ------------------
                    // ----------------------------------------------

                        closeCommentsSection()

                })
                

        // RATING STAR CLICKER THREE --------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerThreeOn.addEventListener("click", function () {

                    
                    // SWITCH ON STAR THREE -------------------------
                    // ----------------------------------------------

                        ratingStarClickerOnThree()

                    
                    // SWITCH ON CALORIE ESTIMATE SECTION -----------
                    // ----------------------------------------------

                        reOpenCalorieEstimateSection()

                    
                    // SWITCH ON COMMENTS SECTION -------------------
                    // ----------------------------------------------

                        reOpenCommentsSection()

                })
                

            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerThreeOff.addEventListener("click", function () {

                    
                    // SWITCH OFF STAR THREE ------------------------
                    // ----------------------------------------------

                        ratingStarClickerOffThree()

                    
                    // SWITCH OFF CALORIE ESTIMATE SECTION ----------
                    // ----------------------------------------------

                        closeCalorieEstimateSection()

                    
                    // SWITCH OFF COMMENTS SECTION ------------------
                    // ----------------------------------------------

                        closeCommentsSection()

                })
                

        // RATING STAR CLICKER FOUR ---------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerFourOn.addEventListener("click", function () {

                    
                    // SWITCH ON STAR FOUR --------------------------
                    // ----------------------------------------------

                        ratingStarClickerOnFour()

                    
                    // SWITCH ON CALORIE ESTIMATE SECTION -----------
                    // ----------------------------------------------

                        reOpenCalorieEstimateSection()

                    
                    // SWITCH ON COMMENTS SECTION -------------------
                    // ----------------------------------------------

                        reOpenCommentsSection()

                })
                

            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerFourOff.addEventListener("click", function () {

                    
                    // SWITCH OFF STAR FOUR -------------------------
                    // ----------------------------------------------

                        ratingStarClickerOffFour()

                    
                    // SWITCH OFF CALORIE ESTIMATE SECTION ----------
                    // ----------------------------------------------

                        closeCalorieEstimateSection()

                    
                    // SWITCH OFF COMMENTS SECTION ------------------
                    // ----------------------------------------------

                        closeCommentsSection()

                })
                

        // RATING STAR CLICKER FIVE ---------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerFiveOn.addEventListener("click", function () {

                    
                    // SWITCH ON STAR FIVE --------------------------
                    // ----------------------------------------------

                        ratingStarClickerOnFive()

                    
                    // SWITCH ON CALORIE ESTIMATE SECTION -----------
                    // ----------------------------------------------

                        reOpenCalorieEstimateSection()

                    
                    // SWITCH ON COMMENTS SECTION -------------------
                    // ----------------------------------------------

                        reOpenCommentsSection()

                })
                

            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerFiveOff.addEventListener("click", function () {

                    
                    // SWITCH OFF STAR FIVE -------------------------
                    // ----------------------------------------------

                        ratingStarClickerOffFive()

                    
                    // SWITCH OFF CALORIE ESTIMATE SECTION ----------
                    // ----------------------------------------------

                        closeCalorieEstimateSection()

                    
                    // SWITCH OFF COMMENTS SECTION ------------------
                    // ----------------------------------------------

                        closeCommentsSection()

                })







    // CAPTURE CALORIES EVENTS --------------------------------------
    // //////////////////////////////////////////////////////////////







    // CAPTURE COMMENTS EVENTS --------------------------------------
    // //////////////////////////////////////////////////////////////

        getCommentsSectioninput.addEventListener("keyup", function () {

            makeComments()

        })





// MAKE AUTORUNS FOR ENTIRE PAGE ------------------------------------
// //////////////////////////////////////////////////////////////////

    // CAPTURE AREA AUTORUN EVENTS ----------------------------------
    // //////////////////////////////////////////////////////////////

        // POPULATE DROP DOWN AREA ----------------------------------
        // //////////////////////////////////////////////////////////

            populateAreaDropDownItems()