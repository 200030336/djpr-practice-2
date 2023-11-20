<script lang="ts">
    import ProductInput from "./ProductInput.svelte";
    import UserInput from "./UserInput.svelte";

    import type { Writable } from 'svelte/store';
    import type { User } from "$lib/user";
    import type { Product } from "$lib/product";

    export let usersStore: Writable<User[]>;
    export let productsStore: Writable<Product[]>;

</script>

<div class="flex flex-col w-10/12">
    <ProductInput/>
    <br>
    <hr>
    <br>
    <UserInput/>
</div>