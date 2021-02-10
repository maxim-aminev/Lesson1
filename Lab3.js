"use strict";

let obj = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    alert('method3');
  }
};

obj.method1().method2().method3();
