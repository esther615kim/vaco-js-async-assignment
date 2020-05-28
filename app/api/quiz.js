const getQuizUrl = (id) => `https://vanillacoding.surge.sh/quiz/${id}.json`;

export function getQuizIdList(callback) {
  fetch("https://vanillacoding.surge.sh/quiz/all.json")
    .then((res) => res.json())
    .then(callback);
}

export function getSingleQuiz(quizId, callback) {
  fetch(getQuizUrl(quizId))
    .then((res) => res.json())
    .then(callback);
}
