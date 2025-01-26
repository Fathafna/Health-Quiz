let currentQuestionIndex = 0; // Track the current question index
const questions = [
    {
        text: "1. How many hours of sleep do you get on average?",
        options: [
            { value: 3, label: "Less than 5" },
            { value: 5, label: "5-6 hours" },
            { value: 7, label: "7+ hours" }
        ]
    },
    {
        text: "2. Do you feel tired in the morning?",
        options: [
            { value: 1, label: "Not at all" },
            { value: 3, label: "Sometimes" },
            { value: 5, label: "Very tired" }
        ]
    },
    {
        text: "3. How would you rate your energy levels?",
        options: [
            { value: 1, label: "Low" },
            { value: 3, label: "Moderate" },
            { value: 5, label: "High" }
        ]
    },
    {
        text: "4. How often do you eat fruits and vegetables?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Daily" }
        ]
    },
    {
        text: "5. How many liters of water do you drink per day?",
        options: [
            { value: 3, label: "Less than 1L" },
            { value: 5, label: "1-2L" },
            { value: 7, label: "More than 2L" }
        ]
    },
    {
        text: "6. How often do you feel stressed?",
        options: [
            { value: 7, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 3, label: "Frequently" }
        ]
    },
    {
        text: "7. How often do you consume sugary or junk food?",
        options: [
            { value: 3, label: "Daily" },
            { value: 5, label: "Occasionally" },
            { value: 7, label: "Rarely" }
        ]
    },
    {
        text: "8. How often do you get a medical check-up?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Once a year" },
            { value: 7, label: "Twice or more a year" }
        ]
    },
    {
        text: "9. How often do you smoke or consume alcohol?",
        options: [
            { value: 7, label: "Never" },
            { value: 5, label: "Occasionally" },
            { value: 3, label: "Regularly" }
        ]
    },
    {
        text: "10. How often do you engage in relaxation activities like meditation?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Occasionally" },
            { value: 7, label: "Regularly" }
        ]
    },
    // Additional Questions
    {
        text: "11. How often do you exercise each week?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "1-2 times" },
            { value: 7, label: "3+ times" }
        ]
    },
    {
        text: "12. How would you rate your overall diet?",
        options: [
            { value: 1, label: "Poor" },
            { value: 3, label: "Fair" },
            { value: 5, label: "Good" },
            { value: 7, label: "Excellent" }
        ]
    },
    {
        text: "13. How often do you feel anxious or worried?",
        options: [
            { value: 7, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 3, label: "Often" }
        ]
    },
    {
        text: "14. How many hours do you spend on screens (TV, computer, phone) daily?",
        options: [
            { value: 3, label: "More than 6 hours" },
            { value: 5, label: "3-6 hours" },
            { value: 7, label: "Less than 3 hours" }
        ]
    },
    {
        text: "15. How often do you take breaks during work or study?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Always" }
        ]
    },
    {
        text: "16. How often do you feel motivated to exercise?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Always" }
        ]
    },
    {
        text: "17. How often do you eat breakfast?",
        options: [
            { value: 3, label: "Never" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Always" }
        ]
    },
    {
        text: "18. How often do you feel you have a good work-life balance?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Always" }
        ]
    },
    {
        text: "19. How often do you engage in social activities with friends or family?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Often" }
        ]
    },
    {
        text: "20. How often do you feel satisfied with your life?",
        options: [
            { value: 3, label: "Rarely" },
            { value: 5, label: "Sometimes" },
            { value: 7, label: "Always" }
        ]
    }
];

let score = 0; // Initialize score

const suggestions = {
    1: {
        3: "Consider improving your sleep hygiene by establishing a regular sleep schedule and creating a relaxing bedtime routine.",
        5: "Aim for 7-8 hours of sleep for optimal health.",
        7: "Great! Continue to prioritize your sleep for better health."
    },
    2: {
        1: "Keep up the good work! A well-rested body is essential for health.",
        3: "Try to identify stressors that may be affecting your sleep quality.",
        5: "Consider evaluating your sleep environment for improvements."
    },
    3: {
        1: "Low energy levels can be improved with better nutrition and regular exercise.",
        3: "Consider incorporating more physical activity into your daily routine.",
        5: "Great! Maintain your energy levels with a balanced diet and regular exercise."
    },
    4: {
        3: "Try to include at least 5 servings of fruits and vegetables in your daily diet.",
        5: "Good! Keep aiming for a colorful plate filled with various fruits and vegetables.",
        7: "Excellent! Continue to enjoy a variety of fruits and vegetables for optimal health."
    },
    5: {
        3: "Consider setting a goal to drink at least 2 liters of water daily.",
        5: "Good job! Staying hydrated is crucial for overall health.",
        7: "Fantastic! Keep up the hydration for better health."
    },
    6: {
        7: "Great! Continue to manage stress effectively.",
        5: "Consider incorporating relaxation techniques like yoga or meditation.",
        3: "Try to identify stressors and develop coping strategies."
    },
    7: {
        3: "Consider reducing your intake of sugary and processed foods for better health.",
        5: "Good! Moderation is key when it comes to treats.",
        7: "Excellent! Keep making healthy food choices."
    },
    8: {
        3: "Regular check-ups can help catch potential health issues early.",
        5: "Good! Aim for at least one check-up a year.",
        7: "Fantastic! Regular check-ups are essential for maintaining health."
    },
    9: {
        7: "Great! Avoiding smoking and excessive alcohol is beneficial for your health.",
        5: "Consider reducing your intake for better health.",
        3: "Try to quit smoking and limit alcohol consumption for improved health."
    },
    10: {
        3: "Consider setting aside time for relaxation and mindfulness.",
        5: "Good! Try to incorporate relaxation techniques into your routine.",
        7: "Excellent! Regular relaxation can improve your overall well-being."
    },
    // Add similar suggestions for questions 11-20
};

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user details
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Calculate BMI
    const bmi = weight / (height * height);
    let bmiCategory;

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    // Hide user info form and show quiz section
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';

    // Display BMI category to the user
    document.getElementById('result').innerHTML = `
        <h2>Your BMI: ${bmi.toFixed(2)} (${bmiCategory})</h2>
    `;

    // Show the first question
    showQuestion(currentQuestionIndex);
});

// Function to show the current question
function showQuestion(index) {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = ''; // Clear previous question

    if (index < questions.length) {
        const question = questions[index];
        const questionText = document.createElement('h2');
        questionText.innerText = question.text;
        questionContainer.appendChild(questionText);

        const optionsContainer = document.createElement('div'); // Create a container for options
        optionsContainer.style.display = 'flex'; // Use flexbox for alignment
        optionsContainer.style.justifyContent = 'space-around'; // Space options evenly

        question.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="q${index + 1}" value="${option.value}"> ${option.label}`;
            optionsContainer.appendChild(label); // Append label to options container
        });

        questionContainer.appendChild(optionsContainer); // Append options container to question container

        const messageContainer = document.createElement('div');
        messageContainer.id = 'messageContainer';
        messageContainer.style.color = 'red'; // Set message color
        questionContainer.appendChild(messageContainer);

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.onclick = function() {
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                score += parseInt(selectedOption.value); // Add the value of the selected answer
                currentQuestionIndex++;
                messageContainer.innerText = ''; // Clear any previous messages
                showQuestion(currentQuestionIndex); // Show the next question
            } else {
                messageContainer.innerText = 'Please select an option before proceeding.'; // Display message
            }
        };
        questionContainer.appendChild(nextButton);
    } else {
        // All questions answered, show results
        showResults();
    }
}

// Function to show results
function showResults() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = ''; // Clear previous questions

    const averageScore = score / questions.length; // Calculate average score

    // Display result based on average score
    let resultMessage;
    let healthAdvice = '';

    if (averageScore >= 6) {
        resultMessage = "Great job! You have a healthy lifestyle.";
        healthAdvice = "Keep up the good work! Here are some tips to maintain your health:<br>" +
                       "- Continue to eat a balanced diet rich in fruits and vegetables.<br>" +
                       "- Stay active with regular exercise.<br>" +
                       "- Ensure you get enough sleep each night.";
    } else if (averageScore >= 4) {
        resultMessage = "Good effort! Consider making some healthier choices.";
        healthAdvice = "Here are some suggestions to improve your health:<br>" +
                       "- Aim to include more whole foods in your diet, such as whole grains and lean proteins.<br>" +
                       "- Try to reduce your intake of processed foods and sugars.<br>" +
                       "- Incorporate at least 30 minutes of physical activity into your daily routine.";
    } else {
        resultMessage = "It looks like you could improve your health habits.";
        healthAdvice = "Here are some actionable steps to get started:<br>" +
                       "- Focus on getting at least 7-8 hours of sleep each night.<br>" +
                       "- Consider meal prepping to ensure you have healthy options available.<br>" +
                       "- Start with small changes, like taking short walks or choosing healthier snacks.<br>" +
                       "- Consult with a healthcare professional for personalized advice.";
    }

    // Additional advice based on specific questions
    if (score < 50) {
        healthAdvice += "<br>- If you often feel stressed, consider practicing mindfulness or meditation.<br>" +
                        "- Engage in social activities to improve your mental well-being.";
    }

    questionContainer.innerHTML = `
        <h2>Your Score: ${score} out of ${questions.length * 7}</h2>
        <p>${resultMessage}</p>
        <p>${healthAdvice}</p>
    `;
}

