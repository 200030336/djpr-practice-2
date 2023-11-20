<script lang="ts">
    import { Button, Input } from 'flowbite-svelte';
    import { usersStore } from '../lib/store';

    let username: string = "";
    let firstName: string = "";
    let lastName: string = "";

    function isDuplicateUsername(newUsername: string): boolean {
        let isDuplicate = false;
        $usersStore.forEach(user => {
            if (user.username === newUsername) {
                isDuplicate = true;
            }
        });
        return isDuplicate;
    }

    function addUser() {
        if (username.trim() === '' || firstName.trim() === '' || lastName.trim() === '') {
            alert('All fields are required.');
            return;
        }

        if (isDuplicateUsername(username)) {
            alert('Username already exists. Please choose another.');
            return;
        }

        usersStore.update(currentUsers => {
            return [...currentUsers, { username, firstName, lastName }];
        });

        // Clearing the fields after adding the user
        username = '';
        firstName = '';
        lastName = '';
    }

</script>

<div>
    <form on:submit|preventDefault={addUser}>
        <Input type="text" placeholder="Username" bind:value={username}/>
        <Input type="text" placeholder="First Name" bind:value={firstName}/>
        <Input type="text" placeholder="Last Name" bind:value={lastName}/>
        <Button type="submit">Add User</Button>
    </form>
</div>