// @inferEffectDependencies
import {useEffect, useRef} from 'react';
import {print} from 'shared-runtime';

function NonReactiveRefInEffect() {
  const ref = useRef('initial value');
  useEffect(() => print(ref.current));
}

// Not implementing fixture as auto-deps means that this effect needs to fire
// (and print) multiple times
