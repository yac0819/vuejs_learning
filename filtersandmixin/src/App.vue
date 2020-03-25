<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppecase | to-lowercase}}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filetredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
            
        </div>
    </div>
</template>

<script>
    import List from './List'
    export default {
      data() {
        return {
          text: 'Hello there!',
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
          filterText: ''
        }
      },
      filters: {
        toUppecase(value) {
          return value.toUpperCase();
        }
      },
      computed: {
        filetredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          });
        }
      },
      components: {
        appList: List,
      }
    }
</script>

<style>

</style>
