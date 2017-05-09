//A function to return the min and max numeber(s) in a array//
 
  'use strict'
  
  var submit = {}
  submit.findMinMax = function(num) {

    var min = 0,
        max =0,
        cur,
  -23,10 +19,8  submit.findMinMax = function(num) {
            min = cur;
          } else if (cur >max) {
            max=cur;
        }
        
      }

        } 
      }
        if (min !== max){
          minMax.push(min);
          minMax.push(max);
  -38,4 +32,5  submit.findMinMax = function(num) {
  }

module.exports = submit;