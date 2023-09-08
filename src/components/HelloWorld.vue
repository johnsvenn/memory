<template>
  <div class="hello">
    <h1>Hello</h1>

    <ItemList :items="items" @remove-item="removeitem" />

    <div class="card">
      <form>
        <div>
          <label>Name: <input v-model="item.name" type="text" /></label>
        </div>
        <button @click.prevent="addItem">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import ItemList from './ItemList.vue';

export default {
  components: {
    ItemList,
  },
  name: 'HelloWorld',
  data: () => ({
    item: {
      name: null,
    },
    items: [],
  }),
  props: {
    msg: String
  },
  methods: {
    addItem() {
      const item = {
        name: this.item.name,
      }

      this.items.push(item)

      this.item.name = null

    },
    removeitem(item) {
      console.log(item);
      this.items = this.items.filter((e) => {
        return e.name != item.name;
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card {
  text-align: left;
  border: 1px solid #cccccc;
  padding: 10px;
  margin: 10px;


}

label {
  width: 100px;
  display: inline-block;
}
</style>
