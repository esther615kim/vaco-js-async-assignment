/*
 *
 * ⛔️ DO NOT MODIFY THIS FILE ⛔️
 *
 */

import QuizUI from "./Components/Quiz";
import SpinnerUI from "./Components/Spinner";
import { getQuizIdList, getSingleQuiz } from "./api/quiz";
import { waterfall, parallel } from "./lib/async";

const appSpinner = new SpinnerUI({ root: "#root" });

/*
 * 🚨헛, 여기까지 찾아오셨군요.
 *
 * parallel과 waterfall을 아직 구현하지 않으셨다면,
 * aysnc/ 디렉토리 내의 비동기 유틸 함수 parallel과 waterfall을 먼저 작업하신 후 돌아오세요!
 *
 * parallel과 waterfall을 성공적으로 구현하셨다면,
 * 아래 코드의 비동기 흐름을 이해해보도록 하세요!
 */
waterfall(
  [
    function preventPageScroll(callback) {
      document.body.style.overflow = "hidden";
      appSpinner.render();
      callback();
    },
    function getAllQuizList(callback) {
      getQuizIdList(callback);
    },
    function getQuizDetails(quizIdList, callback) {
      const allTasks = quizIdList.map(function (id) {
        return function (callback) {
          getSingleQuiz(id, callback);
        };
      });
      parallel(allTasks, callback);
    },
    function renderAllQuiz(allQuiz, callback) {
      allQuiz.forEach(function (quiz) {
        const quizUI = new QuizUI({ quiz, root: ".quiz-list" });
        quizUI.render();
      });

      callback();
    },
  ],
  function final() {
    hljs.configure({ useBR: false });

    document.querySelectorAll("pre code").forEach(function (block) {
      hljs.highlightBlock(block);
    });

    document.body.style.overflow = "auto";
    appSpinner.destroy();
  }
);
