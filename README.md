Online MCQ Test Platform

A simple, responsive, and interactive Multiple Choice Quiz Application built using HTML, CSS, and JavaScript.
The platform randomly selects questions from a question bank, tracks time, saves user responses, and displays detailed results at the end.

🚀 Features
🎯 Quiz Functionality

15 random questions selected from a bank of 30.

Four-option MCQs with automatic answer saving when navigating.

Previous and Next navigation buttons.

Manual and automatic (timer-based) submission.

⏳ Timer System

15-minute countdown timer.

Auto-submit when time reaches zero.

Time shown dynamically on screen.

📊 Result Summary

Displays:

Total questions

Attempted questions

Correct answers

Wrong answers

Percentage score

Test completion message

🎨 Modern UI / UX

Styled using Bootstrap 5 and custom CSS:

Clean card-based interface

Hover effects

Gradient backgrounds

Responsive layout

📁 Project Structure
📦 Online-MCQ-Test
 ┣ 📜 priyanshu.html     → Main quiz interface (screens + structure)
 ┣ 📜 priyanshu.css      → Custom UI styling for cards, buttons, options
 ┗ 📜 priyanshu.js       → Quiz logic, timer, results, navigation system

🧩 How It Works
1️⃣ Start Screen

Explains instructions and begins the quiz when Start Test is clicked.
(From: priyanshu.html ➝ Start Screen section) 

priyanshu

2️⃣ Quiz Screen

Shows:

Current question text

Four options

Navigation buttons

Live timer
(From: priyanshu.html ➝ Quiz Screen section) 

priyanshu

Question details are loaded from QUESTION_BANK in priyanshu.js 

priyanshu

.

3️⃣ Result Screen

After submitting, users see:

Attempted

Correct

Wrong

Percentage
(From: priyanshu.html ➝ Result Screen section) 

priyanshu

🧠 JavaScript Logic Overview

The core functionality is implemented in priyanshu.js:

shuffleArray() → randomizes question selection

startQuiz() → initializes the test

showQuestion() → displays each question

saveSelectedAnswer() → stores user choices

startTimer() → manages countdown

submitQuiz() → evaluates results

retakeQuiz() → resets screens

(From: priyanshu.js logic & event listeners) 

priyanshu

🎨 CSS Highlights

Custom design from priyanshu.css includes:

Gradient backgrounds

Card shadows and hover effects

Styled buttons with animation

Option highlight on selection
(From: quiz-card, .option-label, #btnStart, etc.) 

priyanshu

▶️ How to Run

Download all three files:

priyanshu.html

priyanshu.css

priyanshu.js

Place them together in the same folder.

Open priyanshu.html in any modern browser.

Start the test!

🛠️ Technologies Used

HTML5

CSS3

Bootstrap 5.3

Vanilla JavaScript
