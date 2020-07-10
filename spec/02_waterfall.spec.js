describe("Waterfall", function () {
  it("순차적으로 비동기 작업을 진행하며 이전 작업의 결과를 다음 작업에 전달할 수 있어야 한다.", function (done) {
    const order = [];

    window.async.waterfall(
      [
        function taskOne(callback) {
          setTimeout(function oneDone() {
            order.push(1);
            callback(1);
          }, 250);
        },
        function taskTwo(one, callback) {
          expect(one).to.eql(1);

          setTimeout(function twoDone() {
            order.push(2);
            callback(2);
          }, 100);
        },
        function taskThree(two, callback) {
          expect(two).to.eql(2);

          setTimeout(function threeDone() {
            order.push(3);
            callback();
          }, 10);
        },
      ],
      function final() {
        try {
          expect(order).to.eql([1, 2, 3]);
        } catch (e) {
          return done(e);
        }

        done();
      }
    );
  });

  it("작업 내용이 없을 경우 또한 대응해야 한다.", function (done) {
    window.async.waterfall([], function (results) {
      try {
        expect(results).to.eql(undefined);
      } catch (e) {
        return done(e);
      }

      done();
    });
  });
});
