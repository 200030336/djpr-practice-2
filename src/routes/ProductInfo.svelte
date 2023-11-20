<script lang="ts">
    import { productsStore } from '$lib/store'; 
    import type { Product } from '$lib/product';
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { CloseCircleSolid } from "flowbite-svelte-icons";
    $: products = $productsStore;

    function deleteClickHandler(productToDelete: Product) {
        productsStore.update(currentProducts => {
            return currentProducts.filter(product => product.productId !== productToDelete.id);
        });
    }
</script>

<div class="p-5 w-full border-solid border-2"> 
    <Heading tag='h3'>Products</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Id</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each products as product (product.productId)}
            <TableBodyRow>
                <TableBodyCell>{product.productId}</TableBodyCell>
                <TableBodyCell>{product.productName}</TableBodyCell>     
                <TableBodyCell>{product.productQty}</TableBodyCell>
                <TableBodyCell>{product.productPrice}</TableBodyCell>
                <TableBodyCell>
                    <CloseCircleSolid on:click={() => deleteClickHandler(product)}></CloseCircleSolid>
                </TableBodyCell>
            </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>
