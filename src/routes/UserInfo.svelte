<script lang="ts">
    import { usersStore } from '$lib/store'; // Import the users store
    import type { User } from '$lib/user';
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';

    // Reactive subscription to the users store
    $: users = $usersStore;

    function deleteClickHandler(userToDelete: User) {
        // Logic to delete the user from the store
        usersStore.update(currentUsers => {
            return currentUsers.filter(user => user.username !== userToDelete.username);
        });
    }
</script>

<div class="p-5 w-full border-solid border-2"> 
    <Heading tag='h3'>Users</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Username</TableHeadCell>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each users as user (user.username)}
                <TableBodyRow>
                    <TableBodyCell>{user.username}</TableBodyCell>
                    <TableBodyCell>{user.firstName}</TableBodyCell>     
                    <TableBodyCell>{user.lastName}</TableBodyCell>
                    <TableBodyCell>
                        <CloseCircleSolid on:click={() => deleteClickHandler(user)}></CloseCircleSolid>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>
