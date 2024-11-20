// @inferEffectDependencies
import {useEffect} from 'react';
import {print} from 'shared-runtime';

// TODO: take optional chains as dependencies
function ReactiveMemberExpr({cond, propVal}) {
  const obj = {a: cond ? {b: propVal} : null};
  useEffect(() => print(obj.a?.b));
}

// Not implementing fixture as auto-deps means that this effect needs to fire
// (and print) multiple times
