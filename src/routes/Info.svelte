<script lang="ts">
    import { Heading } from "flowbite-svelte";
    import ProductInfo from "./ProductInfo.svelte";
    import UserInfo from "./UserInfo.svelte";

    import type { Writable } from 'svelte/store';
    import type { User } from "$lib/user";
    import type { Product } from "$lib/product";

    export let usersStore: Writable<User[]>;
    export let productsStore: Writable<Product[]>;
    
</script>

<div class="flex flex-col w-full">
    <div class="flex flex-row w-full">
        <ProductInfo/>
        <br>
        <hr>
        <br>
        <UserInfo/>
    </div>
</div>