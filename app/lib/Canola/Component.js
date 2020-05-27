import CanolaError from "./CanolaError";
import { guidGenerator, extend } from "./utils";

function createNode(html) {
  const tempNode = document.createElement("template");
  tempNode.innerHTML = html;

  return tempNode.content.firstChild;
}

export default function componentFactory(generateTemplate) {
  function Component(options) {
    if (typeof options.root !== "string") {
      throw new CanolaError(
        "'root' 옵션은 필수이며, 해당 컴포넌트가 추가될 부모 요소의 CSS 선택자를 나타내는 문자열이어야 합니다."
      );
    }

    extend(this, options);

    delete this.root;

    // underscore means this property is private use only.
    this._id = guidGenerator();
    this.$parent = document.querySelector(options.root);
    this.$el = null;

    if (this.$parent === null) {
      throw new CanolaError(`'${options.root}' 존재하지 않는 엘레먼트입니다.`);
    }
  }

  Component.prototype.render = function () {
    const html = generateTemplate.call(this).trim();
    const node = createNode(html);

    if (!this.$el) {
      this.$el = node;
      this.$el.dataset.id = this._id;
      this.$parent.appendChild(this.$el);
    } else {
      this.$el.innerHTML = node.innerHTML;
    }

    return this;
  };

  Component.prototype.destroy = function () {
    if (!this.$el) {
      throw new CanolaError(`존재하지 않는 엘레먼트입니다. ID: '${this._id}'`);
    }

    this.$el.remove();
  };

  return Component;
}
