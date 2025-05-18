/*kod za kviz znanja*/
var questions = [
    {
        question: "Kada je održan 4. multimedijski festival?" ,
        answers: ["17. travnja 2025.", "7. travnja 2025.", "7. svibnja 2025.", "27. travnja 2025."],
        correct: "7. travnja 2025."
    },
    {
        question: "Tko je autor ovogodišnjeg filmskog oskara?",
        answers: ["Vida Ružić", "učenici 7.b", "učenici 7.a", "svi učenici"],
        correct: "Vida Ružić"
    },
    {
        question: "U kojem se podneblju ružmarin najčešće uzgaja?",
        answers: ["Hladne planinske regije", "Sušna područja", "Sredozemno podneblje", "Tropske džungle"],
        correct: "Sredozemno podneblje"
    },
    {
        question: "Koje je jedno od glavnih eteričnih ulja pronađenih u ružmarinu?",
        answers: ["Mentol", "Eukaliptol", "Limonen", "Kamfor"],
        correct: "Eukaliptol"
    },
    {
        question: "Koja je tradicionalna upotreba ružmarina u medicini?",
        answers: ["Poboljšanje probave", "Liječenje astme", "Liječenje kožnih bolesti", "Snižavanje krvnog tlaka"],
        correct: "Poboljšanje probave"
    },
    {
        question: "U kojoj radionici je sudjelovalo najviše učenika, čak 63?",
        answers: ["Od ideje do prodaje", "Matematičko-računalnoj radionici", "Kulinarskoj radionici", "Folklornoj radionici"],
        correct: "Od ideje do prodaje"
    },
    {
        question: "Iz kojih razreda su učenici uključeni u projekt Ružmarin oko Ružmarinke?",
        answers: ["5. - 8.", "2. - 5.", "2. - 8.", "5. - 8."],
        correct: "2. - 8."
    },
      {
        question: "Kolko je učenika sudjelovalo u projektu Ružmarin oko Ružmarinke?",
        answers: ["83", "123", "93", "113"],
        correct: "113"
    },
    {
        question: "Na radionici „Od ideje do prodaje“ učenici su stekli vještine iz međupredmetne teme",
        answers: ["Građanski odgoj i obrazovanje", "Učiti kako učiti", "Poduzetnišvo", "Zdravlje"],
        correct: "Poduzetnišvo"
    },
    {
        question: "Koja je prednost korištenja digitalnog alata kao što je Book Creator za objavu učeničkih radova u obliku e-knjige?",
        answers: ["Omogućuje automatsku ispravku gramatičkih pogrešaka bez nadzora učitelja.", "Ograničava broj učenika koji mogu sudjelovati u projektu", "Potiče kreativnost i suradnički rad kroz jednostavno dodavanje teksta, slike, zvuka i videa.", "Služi isključivo za izradu tiskanih knjiga."],
        correct: "Potiče kreativnost i suradnički rad kroz jednostavno dodavanje teksta, slike, zvuka i videa."
    },
    {
        question: "Koji projekt istražuje mogućnost stvaranja glazbe pomoću biljaka?",
        answers: ["Zvuk šume", "Glazba biljaka", "Biljni šapat", "Zeleni tonovi"],
        correct: "Glazba biljaka"
    },
    
  // Dodaj još pitanja po želji
];

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    var questionElement = document.getElementById('question');
    var answersElement = document.getElementById('answers');
    var messageElement = document.getElementById('message');
    var progressBarElement = document.getElementById('progress');
    var resultImage = document.getElementById('result-image');
    
    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = '';
    messageElement.textContent = '';
    resultImage.style.display = 'none';
    
    let shuffledAnswers = [...questions[currentQuestion].answers];
    shuffle(shuffledAnswers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer);
        answersElement.appendChild(button);
    });

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBarElement.style.width = `${progress}%`;
    progressBarElement.textContent = `${currentQuestion + 1} / ${questions.length}`;
}

function checkAnswer(answer) {
    const messageElement = document.getElementById('message');
    const resultImage = document.getElementById('result-image');
    if (answer === questions[currentQuestion].correct) {
        messageElement.textContent = "Točno!";
        messageElement.style.color = "green";
        resultImage.src = "slike/correct.png"; // putanja do slike za točan odgovor
        correctAnswers++;
    } else {
        messageElement.textContent = "Netočno. Točan odgovor je: " + questions[currentQuestion].correct;
        messageElement.style.color = "red";
        resultImage.src = "slike/incorrect.png"; // putanja do slike za netočan odgovor
        incorrectAnswers++;
    }
    resultImage.style.display = 'block';
    updateScore();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayFinalMessage();
        currentQuestion = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        displayQuestion();
        updateScore();
    }
}

function displayFinalMessage() {
    const finalMessageElement = document.getElementById('final-message');
    finalMessageElement.textContent = `Kviz je gotov! Točnih odgovora: ${correctAnswers}, Netočnih odgovora: ${incorrectAnswers}`;
}

function updateScore() {
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('incorrect').textContent = incorrectAnswers;
}

  window.onload = displayQuestion;  