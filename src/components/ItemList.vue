<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        removeitem(item) {
            this.$emit('remove-item', item);
        }
    }
}
</script>

<template>
    <div class="card">
        <h1>Items</h1>
        <div v-if="items.length === 0">No work</div>
        <div else-if>
            <div class="card" v-for="item in items" v-bind:key="`item-${item.name}`">
                <h2>{{ item.name }}</h2>
                <button @click="removeitem(item)">X</button>
            </div>
        </div>
    </div>
</template>