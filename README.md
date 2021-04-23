> 🚨과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.

# Async JavaScript Card Quiz Project

지난 번에 만들어보았던 Card Quiz 형식의 UI와 유사한 웹이 구현되어 있습니다. 다만, 제가 그만 Git을 잘못 사용하여 비동기 관련 로직 몇 가지가 삭제되었습니다.

여러분이 부족한 부분을 채워주세요! 🎖

- **반드시 아래 Setup과 Development 부분을 읽어보세요.**
- 과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.
- 상세 요구 사항은 아래 TODO 파트를 참고하세요.

## Setup (사전 설치)

Install dependencies

```sh
$ npm install
```

## Development (작업 방법)

```sh
$ npm run dev
# Visit http://localhost:1234 from your browser (Chrome)
```

ℹ️ [npm custom script](https://stackoverflow.com/questions/36433461/how-do-i-add-a-custom-script-to-my-package-json-file-that-runs-a-javascript-file)

- HTML: 수정금지
- JS: 아래 TODO 지시 사항 외 수정금지
- CSS: 수정금지
- Images: 수정금지

## TODO

- ⛔️ `Promise`, `async`, `await`은 사용 불가입니다. ⛔️
- ⛔️ 이번 과제에 한해 여러분께서 작성하는 코드의 모든 변수 선언은 `var`를 이용해야만 합니다. ⛔️
- ⛔️ 이번 과제에 한해 Array.prototype.forEach는 사용할 수 없습니다. ⛔️
- ⛔️ 이번 과제 해결을 위해 `sort` 메소드와 `setTimeout`은 사용할 필요가 없습니다. ⛔️

`npm run dev`를 실행해보시면 브라우저(`http://localhost:1234`)에 카드 퀴즈 UI와 테스트 결과가 나타납니다. 하지만 카드 퀴즈는 현재 저의 불찰로 망가진 상태입니다.

- [ ] `/spec/01_parallel.spec.js`를 참고하여 `/app/lib/async/01_parallel.js`의 parallel 함수의 내용을 완성해주세요.
- [ ] `/spec/02_waterfall.spec.js`를 참고하여 `/app/lib/async/02_waterfall.js`의 waterfall 함수의 내용을 완성해주세요.

성공적으로 완성된다면, 카드 퀴즈가 다시 잘 작동할 것입니다!

### Advanced

- [ ] `app/index.js`의 내용을 보고 비동기 작업의 흐름을 이해해보도록 하세요.
