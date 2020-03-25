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
    export default {
      data() {
        return {
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
          filterText: ''
        }
      },
      computed: {
        filetredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          });
        }
      }
    }
</script>

<style>

</style>
