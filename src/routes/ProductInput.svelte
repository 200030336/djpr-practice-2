<script lang="ts">
    import { Button, Input } from 'flowbite-svelte';
    import { productsStore } from '$lib/store';

    let productId: number = 0;
    let productName: string = "";
    let productQty: number = 0;
    let productPrice: number = 0.00;

    function isDuplicateProductId(newProductId: number): boolean {
        let isDuplicate = false;
        $productsStore.forEach(product => {
            if (product.productId === newProductId) {
                isDuplicate = true;
            }
        });
        return isDuplicate;
    }

    function addProduct() {
        // Check for required fields
        if (productId <= 0 || !productName.trim() || productQty <= 0 || productPrice <= 0) {
            alert('All fields are required and must be valid numbers.');
            return;
        }

        // Check for duplicate product ID
        if (isDuplicateProductId(productId)) {
            alert('Product ID already exists. Please use a different ID.');
            return;
        }

        // Add product to the store
        productsStore.update(currentProducts => {
            return [...currentProducts, { productId, productName, productQty, productPrice }];
        });

        // Clearing the fields after adding the product
        productId = 0;
        productName = '';
        productQty = 0;
        productPrice = 0.00;
    }
</script>

<div>
    <form on:submit|preventDefault={addProduct}>
        <Input type="number" placeholder="Product ID" bind:value={productId}/>
        <Input type="text" placeholder="Product Name" bind:value={productName}/>
        <Input type="number" placeholder="Product Quantity" bind:value={productQty}/>
        <Input type="number" placeholder="Product Price" bind:value={productPrice}/>
        <Button type="submit">Add Product</Button>
    </form>
</div>
