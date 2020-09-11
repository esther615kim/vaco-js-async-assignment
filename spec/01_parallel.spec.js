describe("Parallel", function () {
  it("병렬적으로 비동기 작업을 진행해야 한다.", function (done) {
    const order = [];

    window.async.parallel(
      [
        function (callback) {
          setTimeout(function () {
            order.push(1);
            callback(1);
          }, 150);
        },
        function (callback) {
          setTimeout(function () {
            order.push(2);
            callback("2");
          }, 300);
        },
        function (callback) {
          setTimeout(function () {
            order.push(3);
            callback({ data: 3 });
          }, 10);
        },
      ],
      function (results) {
        try {
          expect(order).to.eql([3, 1, 2]);
          // KEN: result는 10, 16, 22번 줄 callback에서 넘겨준 자료의 자료형이나 그 "내용"에 관계없이 포함하여야 합니다.
          expect(results).to.eql([1, "2", { data: 3 }]);
        } catch (e) {
          return done(e);
        }

        done();
      }
    );
  });

  it("작업 내용이 없을 경우 또한 대응해야 한다.", function (done) {
    window.async.parallel([], function (results) {
      try {
        expect(results).to.eql([]);
      } catch (e) {
        return done(e);
      }

      done();
    });
  });
});
