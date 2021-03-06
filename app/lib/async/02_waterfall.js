/*
 * 🥇두 번째 퀘스트에 오신 것을 환영합니다.
 *
 * waterfall은 비동기 작업의 직렬 처리를 도와주는 유틸 함수입니다.
 *
 * 예를 들어, 여러분이 대한민국에서 외국인등록증을 발급받아야 한다고 생각해보세요.
 * 절차는 다음과 같습니다.
 *
 * 1. ATM 현금 출금
 * 2. 수입인지 구매
 * 3. 외국인등록증 신청
 *
 * 위에 나열된 각 단계는 순서가 중요하며, 2번보다 1번을 먼저 수행할 수 없습니다.
 * 또한 1번 단계의 결과물(현금)을 2번 단계에서 필요로 합니다.
 *
 * 각 단계가 20초씩 소요된다면, 위 과정은 총 60초 소요될 수 밖에 없습니다.
 * 병렬적으로 처리할 수는 없는 상황입니다.
 *
 * 이렇게 때에 따라 병렬이 아닌 직렬 방식으로 비동기 작업을 수행해야 하는 경우도 있습니다.
 * 우리가 이번에 만들 함수는 이런 직렬 방식의 작업을 도와주는 조력자입니다.
 *
 * < 함수 소개 >
 *
 * waterfall 함수는 2개의 인자를 받습니다.
 *
 * 첫 번째 인자는 `tasks`라고 부르는 배열, 두 번째 인자는 `finalCallback`이라고 부르는 함수입니다.
 *
 * `tasks` 배열에는 비동기 작업을 수행하는 함수들이 담겨있고, 갯수에는 제한이 없습니다.
 * `tasks`에 담긴 함수(편의상 foo라고 칭함)들은 각각 비동기 작업이 완료되었을때,
 * 각 foo 함수에 인자로 주어진 함수를 호출하여 비동기 작업이 완료되었음을 알려줍니다.
 *
 * 여러분은 `tasks` 배열에 담긴 함수들이 직렬적으로 실행되도록 해주고,
 * 각 task의 결과가 존재한다면 그 결과를 foo함수에 함께 넘겨줄 수 있도록 해야 합니다.
 * 그리고 최종적으로 모든 `tasks`가 완료되었을때 `finalCallback`을 호출해주셔야 합니다.
 *
 * 자세한 내용은 `/spec/waterfall.spec.js`를 참고하세요!
 *
 * Piece 👍🏻
 */

export default function waterfall(tasks, finalCallback) {
    var taskIndex = 0;

    // tasks.length || finalCallback(); 이렇게 생각했다가(테스터는 통과합니다) 아래처럼 고쳤습니다. 
    //early리턴이 아닌 것 같아서요 의견부탁드립니다.
    if (!tasks.length) return finalCallback();

    function callback(data) {
        taskIndex++;

        if (taskIndex === tasks.length)
            return finalCallback();

        tasks[taskIndex](data, callback);
    }
    tasks[taskIndex](callback);
}
