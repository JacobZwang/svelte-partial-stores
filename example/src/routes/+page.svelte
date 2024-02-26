<script lang="ts">
    import { triggered } from '../../../src/index';
    import { type Writable, writable } from 'svelte/store';

    const store: Writable<
        | {
              name: {
                  first: string;
                  last: string;
              };
              id: string;
          }
        | undefined
    > = writable({
        name: {
            first: 'Jacob',
            last: 'Zwang'
        },
        id: 'id'
    });

    interface Test {
        name: {
            last: boolean;
        };
        id: boolean;
    }

    const test = triggered();

    $: console.log($test);
</script>

<!-- 
<label>
    first name
    <input type="text" bind:value={$store.name.first} />
</label>

<label>
    last name
    <input type="text" bind:value={$store.name.last} />
</label>

<label>
    id
    <input type="text" bind:value={$store.id} />
</label> -->
