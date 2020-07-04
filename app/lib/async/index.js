/*
 *
 * ⛔️ DO NOT MODIFY THIS FILE ⛔️
 *
 */
import parallel from "./01_parallel";
import waterfall from "./02_waterfall";

// Expose to global object for testing purpose.
window.async = {
  waterfall,
  parallel,
};

export {
  parallel,
  waterfall
};
