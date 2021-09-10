/*
 * 🥇첫 번째 퀘스트에 오신 것을 환영합니다.
 *
 * parallel은 비동기 작업의 병렬 처리를 도와주는 유틸 함수입니다.
 *
 * 예를 들어, 회사 전산 시스템에서 직원들의 인사 정보를 불러오는 상황을 생각해보세요.
 * 총 직원 수는 1000명이며, 직원 한명의 정보를 불러오는데 10초의 시간이 소요됩니다.
 * 각 직원 정보 간에는 아무런 의존성이 없습니다.
 *
 * 그렇다면 이런 경우, 직렬 방식으로 처리한다면 10초씩 1000명.. 즉 10000초가 소요될 것입니다.
 * 하지만 병렬로 처리한다면, 10초의 시간이면 충분합니다.
 *
 * 우리가 만들 함수는 이런 병렬 처리를 도와주는 조력자 역할을 할 수 있습니다.
 *
 * < 함수 소개 >
 *
 * parallel 함수는 2개의 인자를 받습니다.
 *
 * 첫 번째 인자는 `tasks`라고 부르는 배열, 두 번째 인자는 `finalCallback`이라고 부르는 함수입니다.
 *
 * `tasks` 배열에는 비동기 작업을 수행하는 함수들이 담겨있고, 갯수에는 제한이 없습니다.
 * `tasks`에 담긴 함수(편의상 foo라고 칭함)들은 각각 비동기 작업이 완료되었을때,
 * 각 foo 함수에 인자로 주어진 함수를 호출하여 비동기 작업이 완료되었음을 알려줍니다.
 *
 * 여러분은 `tasks` 배열에 담긴 함수들이 병렬적으로 실행되도록 해주고,
 * 모든 `tasks`가 완료되었을때 `finalCallback`을 호출해주셔야 합니다.
 *
 * 자세한 내용은 `/spec/parallel.spec.js`를 참고하세요!
 *
 * Piece 👍🏻
 */
//방법1 :수정중
export default function parallel(tasks, finalCallback) {
    var finalResults = [];

    tasks.length || finalCallback(tasks);

    tasks.map((func) => {
        function callback(data) {
            finalResults.push(data);
            finalResults.length === Object.keys(tasks).length &&
                finalCallback(finalResults);

            return data;
        }
        func(callback);
    });
}
