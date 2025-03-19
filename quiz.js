// Question Bank (Add all questions here)
// deleteUser("unwantedUser"); // Call this to remove a user
// clearAllData(); // Call to wipe all data
// deleteFromLeaderboard("unwantedUser"); // Call this to remove user from leaderboard



const questions = [
    {question: "What is the output of `print(2 * 3 ** 3)`?", options: ["54", "18", "216", "24"], answer: "54"},
    {question: "Which of the following is a valid variable name in Python?", options: ["2var", "_my_var", "my-var", "for"], answer: "_my_var"},
    {question: "Which function is used to get the length of a list?", options: ["length()", "size()", "len()", "count()"], answer: "len()"},
    {question: "What is the correct syntax to define a function in Python?", options: ["function my_func():", "def my_func():", "define my_func():", "fun my_func():"], answer: "def my_func():"},
    {question: "How is a single-line comment written in Python?", options: ["/* comment */", "-- comment --", "# comment", "// comment"], answer: "# comment"},
    {question: "Which of the following data types is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], answer: "Tuple"},
    {question: "What does `type([])` return?", options: ["list", "dict", "tuple", "set"], answer: "list"},
    {question: "Which keyword is used to define a class in Python?", options: ["define", "class", "struct", "object"], answer: "class"},
    {question: "What is the result of `bool([])` in Python?", options: ["True", "False", "Error", "None"], answer: "False"},
    {question: "Which operator is used for exponentiation in Python?", options: ["^", "**", "%", "//"], answer: "**"},
    {question: "Which method is used to remove the last element from a list?", options: ["delete()", "pop()", "remove()", "discard()"], answer: "pop()"},
    {question: "How do you create an empty set in Python?", options: ["set()", "{}", "[]", "None"], answer: "set()"},
    {question: "What is the output of `5 // 2`?", options: ["2.5", "2", "3", "None"], answer: "2"},
    {question: "Which method adds an element to the end of a list?", options: ["insert()", "append()", "add()", "push()"], answer: "append()"},
    {question: "What is the output of `3 * 'abc'`?", options: ["abcabcabc", "Error", "abc*3", "None"], answer: "abcabcabc"},
    {question: "Which of the following loops is available in Python?", options: ["for", "do-while", "repeat-until", "foreach"], answer: "for"},
    {question: "What does `isinstance(5, int)` return?", options: ["True", "False", "Error", "None"], answer: "True"},
    {question: "How do you convert a string to lowercase in Python?", options: ["str.low()", "str.lower()", "str.downcase()", "str.toLower()"], answer: "str.lower()"},
    {question: "Which function is used to read user input?", options: ["read()", "scan()", "input()", "get()"], answer: "input()"},
    {question: "Which data type is used to store a sequence of characters in Python?", options: ["int", "string", "list", "tuple"], answer: "string"},
    {question: "What is the output of `5 % 2`?", options: ["2", "1", "0", "5"], answer: "1"},
    {question: "Which function is used to open a file in Python?", options: ["open()", "read()", "write()", "file()"], answer: "open()"},
    {question: "What is the correct file extension for Python files?", options: [".py", ".pyt", ".pt", ".python"], answer: ".py"},
    {question: "Which method is used to remove whitespace from a string?", options: ["strip()", "trim()", "clean()", "remove()"], answer: "strip()"},
    {question: "Which module is used to work with regular expressions in Python?", options: ["regex", "re", "pattern", "match"], answer: "re"},
    {question: "Which operator is used for floor division?", options: ["//", "/", "%", "**"], answer: "//"},
    {question: "What is the output of `bool(0)`?", options: ["True", "False", "Error", "None"], answer: "False"},
    {question: "Which function returns the largest item in an iterable?", options: ["max()", "top()", "largest()", "high()"], answer: "max()"},
    {question: "Which keyword is used to exit a loop prematurely?", options: ["stop", "break", "exit", "return"], answer: "break"},
    {question: "What is the output of `type({})`?", options: ["list", "dict", "set", "tuple"], answer: "dict"},
    {question: "Which function is used to convert a string to an integer?", options: ["int()", "strtoint()", "convert()", "parseInt()"], answer: "int()"},
    {question: "How do you declare a list in Python?", options: ["{}", "()", "[]", "<>"], answer: "[]"},
    {question: "Which method is used to find the index of an element in a list?", options: ["locate()", "find()", "index()", "search()"], answer: "index()"},
    {question: "Which of the following is not a valid Python keyword?", options: ["yield", "try", "switch", "def"], answer: "switch"},
    {question: "What is the output of `3 == 3.0`?", options: ["True", "False", "Error", "None"], answer: "True"},
    {question: "Which function is used to get the ASCII value of a character?", options: ["ord()", "ascii()", "char()", "asc()"], answer: "ord()"},
    {question: "What is the output of `print('Hello' + str(5))`?", options: ["Hello5", "Hello 5", "Error", "None"], answer: "Hello5"},
    {question: "Which method converts a string into a list?", options: ["split()", "toList()", "convert()", "listify()"], answer: "split()"},
    {question: "Which module is used to generate random numbers in Python?", options: ["random", "rand", "numpy", "math"], answer: "random"},
    {question: "Which symbol is used to denote comments in Python?", options: ["//", "#", "/*", "--"], answer: "#"},
    {question: "What is the output of `len('Python')`?", options: ["5", "6", "7", "Error"], answer: "6"},
    {question: "Which keyword is used to define an anonymous function?", options: ["def", "lambda", "fun", "anon"], answer: "lambda"},
    {question: "What is the result of `5 & 3` in Python?", options: ["1", "5", "3", "2"], answer: "1"},
    {question: "Which function returns the absolute value of a number?", options: ["absolute()", "abs()", "value()", "positive()"], answer: "abs()"},
    {question: "Which of the following statements is used to handle exceptions?", options: ["try-except", "catch-throw", "do-catch", "handle-error"], answer: "try-except"},
    {question: "What is the output of `10 == 10.0`?", options: ["True", "False", "Error", "None"], answer: "True"},
    {question: "How do you define a block of code in Python?", options: ["{}", "()", "indentation", "[]"], answer: "indentation"},
    {question: "What is the output of `bool(None)`?", options: ["True", "False", "Error", "None"], answer: "False"},
    {question: "Which method is used to add elements to a set?", options: ["add()", "insert()", "push()", "append()"], answer: "add()"}
];

// Number of questions per test
const totalQuestions = 25;

// Function to shuffle and pick random 25 questions
function getRandomQuestions(allQuestions, numQuestions) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    return shuffled.slice(0, numQuestions); // Get 25 random questions
}

// Fetch 25 random questions from the question bank
let selectedQuestions = getRandomQuestions(questions, totalQuestions);

// Variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalTime = 30; // 30 seconds per question
let timeLeft = totalTime;

// DOM Elements
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const resultImage = document.getElementById('result-image');
const quizContainer = document.getElementById('quiz-container');
const timerElement = document.getElementById('time');

// Load Initial Question
function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult(); // End quiz after 25 questions
        return;
    }

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`; // Add question number
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-primary');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    resetTimer(); // Reset timer for each question
}

// Check User Answer
function checkAnswer(selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}

// Load Next Question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Show Final Result
function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    if (score >= 15) { // Pass if 15/25 or more
        resultText.innerHTML = `🎉 Well done! You scored ${score}/${totalQuestions}!`;
        resultImage.innerHTML = '<img src="https://cdn.pixabay.com/photo/2020/03/04/10/59/success-4900423_1280.png" width="100">';
    } else {
        resultText.innerHTML = `🙁 Oops! You scored ${score}/${totalQuestions}. Try again!`;
        resultImage.innerHTML = '<img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/donkey-2785423_1280.png" width="100">';
    }

    // Save score to leaderboard if user is logged in
    if (loggedInUser) {
        saveScore(loggedInUser, score);
        alert("🎉 Your score is saved! Check the leaderboard!");
    } else {
        alert("⚠️ Error: User not logged in. Score not saved.");
    }
}

// Timer Logic
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = totalTime;
    timerElement.innerText = `${timeLeft}s`;
    startTimer();
}

// Start New Test with Random 25 Questions
function startNewTest() {
    if (confirm("⚡️ Ready to start a new 25-question test?")) {
        currentQuestionIndex = 0;
        score = 0;
        selectedQuestions = getRandomQuestions(questions, totalQuestions); // Pick new random questions
        quizContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        loadQuestion(); // Load new test
    }
}

// Save score to leaderboard
function saveScore(username, score) {
    let userData = JSON.parse(localStorage.getItem(username)) || {
        gamesPlayed: 0,
        highScore: 0,
    };

    userData.gamesPlayed += 1;
    if (score > userData.highScore) {
        userData.highScore = score; // Update highest score
    }
    localStorage.setItem(username, JSON.stringify(userData));

    let leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboardData.push({ username, score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));
}

// Set expiration time in hours
const expirationTime = 24; // Example: 24 hours
const now = new Date().getTime();
localStorage.setItem("userData", JSON.stringify({ data: loggedInUser, timestamp: now }));

// Check and clear after expiration
setInterval(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData && (new Date().getTime() - savedData.timestamp > expirationTime * 60 * 60 * 1000)) {
        localStorage.removeItem("userData");
        alert("User session expired. Data cleared!");
    }
}, 1000);

// Get username after login
const loggedInUser = localStorage.getItem("loggedInUser");

// Initialize Quiz
loadQuestion();
