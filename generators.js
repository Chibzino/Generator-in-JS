/* function* generate ()
{
  i=0;
  yield 'BMW';
  yield 'Benz';
  yield 'Honda';
}

let gen = generate();
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
*/

function* func()
{
  var arr = ['BMW', 'Benz', 'Audi']
  for(let i=0; i<arr.length; i++)
  {
    yield arr[i]
  }
}

let fun = func();
console.log(fun.next().value);
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
