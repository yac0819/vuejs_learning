<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filetredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin'

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('Inside list created Hook');
        }
        // data() {
        //     return {
        //     fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        //     filterText: ''
        //     }
        // },
        // computed: {
        //     filetredFruits() {
        //     return this.fruits.filter((element) => {
        //         return element.match(this.filterText);
        //     });
        //     }
        // }
    }
</script>

<style>

</style>
