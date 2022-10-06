# Svelte Partial Stores

## Trigger Stores
The store will only fire an update when the fields specified by the trigger are changed. For performance, only fields specified by the trigger are stored and compared.
```javascript
import { triggered } from 'svelte-partial-stores';

const user = writable({
    name: {
        first: 'Jacob',
        last: 'Zwang'
    },
    id: 'id'
});

// will only fire an update when `id` and/or `name.last` is changed
const user2 = triggered(store, {
    id: true,
    name: {
        last: true
    }
});
```