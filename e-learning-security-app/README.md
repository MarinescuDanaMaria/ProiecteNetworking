E-Learning Security App 
A comprehensive mobile application built with React Native and Expo that provides interactive cybersecurity education through structured courses, practice exercises, and AI-powered learning tools. 
 
Technologies: JavaScript, React Native, Expo, Firebase, OpenAI API 

Key Features: 
Cross-platform mobile app (iOS/Android)
Structured cybersecurity courses with chapters and subsections
Interactive learning tools (flashcards, quizzes, practice exercises) 
AI-powered virtual tutor for personalized explanations 
Progress tracking and achievement badges
Leaderboard system for competitive learning

biblioteci necesare pentru a rula aplicatia: 

npm install

npm install firebase

npx expo install @react-native-async-storage/async-storage

npm install react-native-progress

npm install react-native-flip-card

npm install react-native-vector-icons

npm install react-native-markdown-display

npm install openai

PENTRU A ADAUGA/ ACTUALIZA CURSURILE : modif fisierul CoursesData.js , dupa rulam

node seedCourses.js

------------------ FUNCTIONALITATI NOI ------------------

- alerta ca ai trecut la urm nivel - HOME
- harta
- simulator
  clasament cu toti utilizatorii
- insigne - PROFILE

------------------ IDEI AI - de continuat ( 4 ) ------------------

- **Adaptive Learning**

  - Identificarea punctelor slabe și generarea de conținut suplimentar ( exerciții personalizate )

  - **Tutor Virtual**
  - Explicații personalizate pentru concepte
    (
    un chatbox in care eu introduc termenii pe care nu i am inteles, si el imi face o analogie, o schema sau un desen, sa retin mai usor
    )

- **Asistent de Creare a Cursurilor**

  - optiunea de a genera un rezumat al cursului ( pentru ca am cursurile destul de lungi )

- **Integrare cu Asistenți Vocali**
  - Citirea conținutului ( pentru cand esti plecat - ca un fel de audiobook )


// api openAi cheie :

sk-proj-jeFBuQk4c284kIrSaPt\_\_E4wKaRkFzipJPTUsL2xlSJoj21TOaC3KdOHRGk7Lb21wIYGZZ6aoGT3BlbkFJsgvkr-TtrFbpPcAIZYKteGeEjR4sxEktOtL2asEA09fTiNAxHTCqdHLoFpqeI5Eni4UBELZ0IA

// link uri utile reinoire abonament chei api

https://platform.openai.com/settings/organization/billing/overview

https://platform.openai.com/usage

https://platform.openai.com/api-keys


// git

git add .
git commit -m "Tema 2 proiect"
git push -u origin main


