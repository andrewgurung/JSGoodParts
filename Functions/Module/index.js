// 1. Module pattern can eliminate global variables
//    Promotes application encapsulation
//    Structure
//    var module = function() {
//        private_var1..
//        private_var2..
//        private_function..

//        return privileged_function() {
//            getter: function(){},
//            setter: function(){}
//        }
//    }

// 2. Serial Maker
var serial_maker = function() {
  var prefix = '';
  var seq = 0;
  return {
    set_prefix: function(pre) {
      prefix = String(pre);
    },
    set_seq: function(s) {
      seq = s;
    },
    genSym: function(){
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  }
};

var seqer = serial_maker();
seqer.set_prefix('A');
seqer.set_seq(1000);
var unique = seqer.genSym();
console.log(unique);
