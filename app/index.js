import CanolaUI from "./lib/Canola";

const QUIZ_API_URL = "https://async-quiz.surge.sh/quiz.json";

function getSingleQuiz(callback) {
  fetch(`${QUIZ_API_URL}`)
    .then((res) => res.json())
    .then(callback);
}

getSingleQuiz(function (data) {
  console.log(123);
  console.log(data);
});
