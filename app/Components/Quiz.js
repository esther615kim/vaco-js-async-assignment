import CanolaUI from "../lib/Canola";

const QuizUI = CanolaUI.create({
  template: function () {
    return `
      <li class="quiz">
        ${
          this.quiz.code
            ? `<pre>
              <code class="language-javascript">${this.quiz.code}</code>
            </pre>`
            : ""
        }
        <p>[#${this.quiz.id}] ${this.quiz.question}</p>
        ${this.quiz.choices
          .map(function (option) {
            return `
                <input type="radio" id="${option}" value="${option}" />
                <label for="${option}">${option}</label><br />
              `;
          })
          .join("")}
      </li>
    `;
  },
});

export default QuizUI;
