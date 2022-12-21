
link :https://speedtypetest.ccbp.tech/










##########################                   index.html



<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>

<body>
    <div class="bg-container">
        <div class="d-none mt-5 pt-5" id="spinner">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
        <div id="speedTypingTest">
            <h1 class="heading">Speed Typing Test</h1>
            <p class="paragraph">On your fingers lets set Go!</p>
            <div class="timer-card d-flex flex-row">
                <img src="https://assets.ccbp.in/frontend/dynamic-webapps/clock-img.png" class="image" />
                <p class="timer aligning" id="timer">0</p>
                <p class="paragraph aligning2">seconds</p>
            </div>
            <div class="btm-card ">
                <p class="quote" id="quoteDisplay"></p>
                <textarea class="text" id="quoteInput" placeholder="type here!!"></textarea>
            </div>
            <p class="para" id="result"></p>
            <button class=" btn button" id="submitBtn">Submit</button>
            <button class="btn button2" id="resetBtn">Reset</button>
        </div>
    </div>
</body>

</html>













########################################################################3              index.css




@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

body {
    margin: 0;
}

.bg-container {
    background-image: linear-gradient(to right, #f3eaff, #dac0ff);
    padding-top: 30px;
    padding-left: 30px;
    height: 100vh;

}

.heading {
    font-family: "Roboto";
    color: #690cb0;
    font-weight: 900;
    font-size: 55px;
    text-align: center;
}

.paragraph {
    font-family: "Roboto";
    color: #3e4c59;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
}

.aligning {
    padding-top: 5px;
    padding-left: 22px;
}

.aligning2 {
    padding-top: 35px;
    padding-left: 12px;
}

.image {
    height: 60px;
    width: 60px;
}

.timer {
    font-family: "Roboto";
    color: #323f4b;
    font-weight: 600;
    font-size: 45px;
}

.quote {
    font-family: "Roboto";
    color: #323f4b;
    font-weight: 500;
    font-size: 25px;
}

.text {
    border-radius: 5px;
    font-family: "Roboto";
    color: #323f4b;
    font-weight: 500;
    font-size: 18px;
    background-color: #ffffff;
    border-color: #9aa5b1;
    min-height: 200px;
    min-width: 70%;
}

.btm-card {
    background-color: #f2ebfe;
    border-radius: 10px;
    padding: 22px;
    border: 1px solid #9aa5b1;
    width: 80%;
    min-height: 60%;


}

.para {
    font-family: "Roboto";
    color: #323f4b;
    font-weight: 500;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.button {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    background-color: #690cb0;
    margin-right: 14px;
    margin-bottom: 30px;
}

.button2 {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    color: #323f4b;
    background-color: #ffffff;
    margin-bottom: 30px;
}











######################################################################################               index.js









let timer = document.getElementById("timer");
let quote = document.getElementById("quoteDisplay");
let text = document.getElementById("quoteInput");
let para = document.getElementById("result");
let btn1 = document.getElementById("submitBtn");
let btn2 = document.getElementById("resetBtn");
let spin = document.getElementById("spinner");
let container = document.getElementById("speedTypingTest");
let count = 0;
let data;
let setTimer;

function reset() {

    spinner.classList.remove("d-none");
    container.classList.add("d-none");

    text.textContent = "";
    setTimer = setInterval(function() {
        count += 1;
        timer.textContent = count;
    }, 1000);

    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            data = json.content;

            spinner.classList.add("d-none");
            container.classList.remove("d-none");

            quote.textContent = data;
        });
}
reset();
btn2.onclick = function() {
    clearInterval(setTimer);
    para.textContent = "";
    timer.textContent = 0;
    count = 0;
    reset();

};
btn1.onclick = function() {

    clearInterval(setTimer);

    if (text.value === data) {
        para.textContent = " you did in " + count + " seconds";
    } else {
        para.textContent = " you typed incorrect sentence";
    }
};





