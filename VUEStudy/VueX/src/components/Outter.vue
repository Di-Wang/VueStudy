<template>
    <div>
        槛外人{{ getCount }}
        <button @click="add">加加</button>
    </div>
</template>
<script>

export default {
    name: 'outer',
    data() {
        return {
            
        }
    },
    computed: {
        getCount() {
            // return this.$store.state.count
            return this.$store.getters.getState;
        }
    },
    methods: {
        add() {
            // this.$store.commit('increment');
            this.$store.dispatch('increment');
        }
    }
}

</script>
<style>

</style>