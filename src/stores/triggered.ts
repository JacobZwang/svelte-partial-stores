import { derived, type Readable, type Writable } from 'svelte/store';
import { DeepPartial, IntoBooleans } from '../types.js';
import isObject from '../utils/isObject.js';

export function triggered<T extends Record<string, unknown>>(
    store: Readable<T> | Writable<T>,
    trigger: boolean | DeepPartial<IntoBooleans<T>>
): Readable<T> {
    const last: Record<string, unknown> = {};

    return derived(store, (value, set) => {
        let wasUpdated = false;

        (function detectChange(
            trigger: Record<string, unknown | boolean> | boolean,
            current: Record<string, unknown>,
            last: Record<string, unknown>
        ) {
            for (const [k, v] of Object.entries(trigger)) {
                if (
                    v === true &&
                    !isObject(current[k]) &&
                    current[k] !== last[k]
                ) {
                    last[k] = current[k];

                    if (!wasUpdated) {
                        set(value);
                        wasUpdated = true;
                    }
                }

                if (v) {
                    last[k] ??= {};
                    //@ts-expect-error: TODO
                    detectChange(v, current[k], last[k]);
                }
            }
        })(trigger, value, last);
    });
}
