import CanolaUI from "../lib/Canola";

const SpinnerUI = CanolaUI.create({
  template: function () {
    return `
      <div class="spinner">
        <div class="overlay"></div>
        <i class="fas fa-spinner"></i>
      </div>
    `;
  },
});

export default SpinnerUI;
