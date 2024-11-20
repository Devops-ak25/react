// @inferEffectDependencies
import {useEffect} from 'react';
import {print} from 'shared-runtime';

function ReactiveVariable({propVal}) {
  const arr = [propVal];
  useEffect(() => print(arr));
}

// Not implementing fixture as auto-deps means that this effect needs to fire
// (and print) multiple times
