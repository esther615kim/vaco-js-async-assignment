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
            callback(2);
          }, 300);
        },
        function (callback) {
          setTimeout(function () {
            order.push(3);
            callback(3);
          }, 10);
        },
      ],
      function (results) {
        expect(order).to.eql([3, 1, 2]);
        expect(results).to.eql([1, 2, 3]);
        done();
      }
    );
  });

  it("작업 내용이 없을 경우 또한 대응해야 한다.", function (done) {
    window.async.parallel([], function (results) {
      expect(results).to.eql([]);
      done();
    });
  });
});
