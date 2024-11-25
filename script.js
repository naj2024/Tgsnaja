function showAlert() {
    alert("Welcome to EduLearn! Dive into exciting topics.");
}

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const feedback = document.getElementById('feedback');
    if (answer == 4) {
        feedback.textContent = "Correct! Great job.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Oops! Try again.";
        feedback.style.color = "red";
    }
}

// Simulated data for topics
consttopicData = {
    Mathematics: "Mathematics involves the study of numbers, quantities, shapes, and patterns. It is a fundamental part of science and technology.",
    Science: "Science is the systematic study of the natural world through observation and experimentation.",
    History: "History explores past events and civilizations, providing insight into how the world evolved.",
    Technology: "Technology focuses on the development and application of tools, machines, and systems to solve problems."
};

// Show topic details
function showTopicDetails(topic) {
    const detailsSection = document.getElementById('topic-details');
    const topicTitle = document.getElementById('topic-title');
    const topicDescription = document.getElementById('topic-description');
    const topicContainer = document.querySelector('.topic-container');

    topicTitle.textContent = topic;
    topicDescription.textContent = topicData[topic];
    detailsSection.style.display = 'block';
    topicContainer.style.display = 'none';
}

// Go back to topic list
function goBack() {
    const detailsSection = document.getElementById('topic-details');
    const topicContainer = document.querySelector('.topic-container');

    detailsSection.style.display = 'none';
    topicContainer.style.display = 'flex';
}

// Simulated data for topics with articles
const topicData = {
    Mathematics: {
        description: "Mathematics involves the study of numbers, quantities, shapes, and patterns. It is a fundamental part of science and technology.",
        article: `
            <h3>Why Mathematics Matters</h3>
            <p>Mathematics is not just about numbers; it teaches us how to think logically and solve problems. From calculating the area of a circle to designing algorithms, math is everywhere.</p>
            <h3>Applications of Mathematics</h3>
            <ul>
                <li>Engineering and Architecture</li>
                <li>Finance and Banking</li>
                <li>Artificial Intelligence</li>
            </ul>
        `
    },
    Science: {
        description: "Science is the systematic study of the natural world through observation and experimentation.",
        article: `
            <h3>The Importance of Science</h3>
            <p>Science helps us understand the universe. It drives innovation, cures diseases, and shapes our future. Every breakthrough starts with curiosity.</p>
            <h3>Fields of Science</h3>
            <ul>
                <li>Physics: Understanding forces and motion</li>
                <li>Chemistry: Studying matter and its reactions</li>
                <li>Biology: Exploring living organisms</li>
            </ul>
        `
    },
    History: {
        description: "History explores past events and civilizations, providing insight into how the world evolved.",
        article: `
            <h3>Why Study History?</h3>
            <p>History teaches us lessons from the past and helps us understand cultural differences. It connects us to the people and events that shaped our world.</p>
            <h3>Famous Historical Events</h3>
            <ul>
                <li>World War II</li>
                <li>The Industrial Revolution</li>
                <li>The Fall of the Berlin Wall</li>
            </ul>
        `
    },
    Technology: {
        description: "Technology focuses on the development and application of tools, machines, and systems to solve problems.",
        article: `
            <h3>The Power of Technology</h3>
            <p>Technology revolutionizes the way we live, work, and communicate. From smartphones to space exploration, it is the driving force of modern life.</p>
            <h3>Emerging Technologies</h3>
            <ul>
                <li>Artificial Intelligence</li>
                <li>Blockchain</li>
                <li>Quantum Computing</li>
            </ul>
        `
    }
};

// Show topic details and article
function showTopicDetails(topic) {
    const detailsSection = document.getElementById('topic-details');
    const topicTitle = document.getElementById('topic-title');
    const topicDescription = document.getElementById('topic-description');
    const topicArticle = document.getElementById('topic-article');
    const topicContainer = document.querySelector('.topic-container');

    // Update content
    topicTitle.textContent = topic;
    topicDescription.textContent = topicData[topic].description;
    topicArticle.innerHTML = topicData[topic].article;

    // Show details and hide topics list
    detailsSection.style.display = 'block';
    topicContainer.style.display = 'none';
}

// Go back to topic list
function goBack() {
    const detailsSection = document.getElementById('topic-details');
    const topicContainer = document.querySelector('.topic-container');

    detailsSection.style.display = 'none';
    topicContainer.style.display = 'flex';
}

// Array to store quiz questions (with additional questions)
let quizQuestions = [
    {
        text: "What is 2 + 2?",
        options: ["1", "2", "3", "4"],
        correct: 4
    },
    {
        text: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 3
    },
    {
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 2
    },
    {
        text: "What is the square root of 16?",
        options: ["2", "3", "4", "5"],
        correct: 3
    },
    {
        text: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correct: 1
    },
    {
        text: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correct: 1
    },
    {
        text: "What is the boiling point of water at sea level (in Celsius)?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        correct: 2
    },
    {
        text: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 3
    },
    {
        text: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correct: 3
    },
    {
        text: "What is 5 x 6?",
        options: ["25", "30", "35", "40"],
        correct: 2
    }
];

// Function to render quiz questions
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear existing content

    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');

        questionDiv.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${question.text}</p>
            <ol>
                ${question.options.map((option, i) => `<li>${option}</li>`).join('')}
            </ol>
            <p><strong>Correct Answer:</strong> Option ${question.correct}</p>
        `;

        quizContainer.appendChild(questionDiv);
    });
}

// Function to handle form submission
document.getElementById('add-question-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const questionText = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correct = parseInt(document.getElementById('correct').value);

    // Create a new question object
    const newQuestion = {
        text: questionText,
        options: [option1, option2, option3, option4],
        correct: correct
    };

    // Add the new question to the quizQuestions array
    quizQuestions.push(newQuestion);

    // Re-render the quiz
    renderQuiz();

    // Reset the form
    e.target.reset();
});

// Render the initial quiz questions
renderQuiz();
