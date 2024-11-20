
## Input

```javascript
// @inferEffectDependencies
import {useIdentity, mutate, makeObject} from 'shared-runtime';

/**
 * When a semantically non-reactive value has a pruned scope (i.e. the object
 * identity becomes reactive, but the underlying value it represents should be
 * constant), the compiler can choose to either
 * - add it as a dependency (and rerun the effect)
 * - not add it as a dependency
 *
 * Effects are a bit of a special case. We only keep non-reactive values in
 * memo block dependencies to avoid versioning invariants e.g. `x !==
 * y.aliasedX`
 */
function PrunedNonReactive() {
  const obj = makeObject();
  useIdentity(null);
  mutate(obj);

  useEffect(() => print(obj.value));
}

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime"; // @inferEffectDependencies
import { useIdentity, mutate, makeObject } from "shared-runtime";

/**
 * When a semantically non-reactive value has a pruned scope (i.e. the object
 * identity becomes reactive, but the underlying value it represents should be
 * constant), the compiler can choose to either
 * - add it as a dependency (and rerun the effect)
 * - not add it as a dependency
 *
 * Effects are a bit of a special case. We only keep non-reactive values in
 * memo block dependencies to avoid versioning invariants e.g. `x !==
 * y.aliasedX`
 */
function PrunedNonReactive() {
  const $ = _c(2);
  const obj = makeObject();
  useIdentity(null);
  mutate(obj);
  let t0;
  if ($[0] !== obj.value) {
    t0 = () => print(obj.value);
    $[0] = obj.value;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  useEffect(t0, []);
}

```
      
### Eval output
(kind: exception) Fixture not implemented