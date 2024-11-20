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
