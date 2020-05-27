"use strict";

import componentFactory from "./Component";
import CanolaError from "./CanolaError";

function validateOptions({ template }) {
  if (!template) {
    throw new CanolaError("'template'은 필수 옵션입니다.");
  }

  if (typeof template !== "function") {
    throw new CanolaError(
      "'template' 옵션은 해당 컴포넌트의 HTML 마크업을 문자열로 반환하는 함수여야 합니다."
    );
  }
}

const CanolaUI = {
  create(options) {
    validateOptions(options);

    return componentFactory(options.template);
  },
};

export default CanolaUI;
