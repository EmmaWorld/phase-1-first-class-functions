  function receivesAFunction(callback) {
    const spy = prompt('this is a callback function');
    callback(spy);
  }

  function returnsANamedFunction (name) { 
    function fn() {
    } 
    fn.displayName = name;
    return fn;
    }

    function returnsAnAnonymousFunction() {
      return function(){
      }
    }
