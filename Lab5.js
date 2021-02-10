"use strict";
function my(a,b) {
    if (a > b) {
      return 1;
    }
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  }


  let array = [45, 78, 10, 3];
array.sort(my).map(item => {
         let temp = item.toString();
         let sum = 0;

         for (let key in temp) {
             sum += Number(temp[key]);
         }

         return sum;
     });