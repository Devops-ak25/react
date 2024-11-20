// @inferEffectDependencies
import {useEffect} from 'react';
import {print} from 'shared-runtime';

function ReactiveMemberExprMerge({propVal}) {
  const obj = {a: {b: propVal}};
  useEffect(() => print(obj.a, obj.a.b));
}

// Not implementing fixture as auto-deps means that this effect needs to fire
// (and print) multiple times
