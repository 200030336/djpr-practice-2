<script lang="ts">
    import { Heading } from "flowbite-svelte";
    import InputComponent from "./InputComponent.svelte";
    import type { User } from "$lib/user";
    import type { Product } from "$lib/product";
    import Info from "./Info.svelte";
    import { usersStore, productsStore } from "$lib/store";



</script>
<div class="flex flex-col items-center">
    <Heading class="text-center">Practice Exercise 2</Heading>
    <br>
    <div class="flex flex-col w-10/12 items-center border-solid border-2 p-2">
        <InputComponent {usersStore} {productsStore}/>
    </div>
    <div class="flex flex-col w-10/12 items-center border-solid border-2 p-2">
        <Info {usersStore} {productsStore}/>
    </div>
</div>