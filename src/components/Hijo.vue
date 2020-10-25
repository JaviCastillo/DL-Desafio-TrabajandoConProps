<template>
  <div class="centro">
    <form @submit.prevent="enviarTarea(tarea)">
      Tarea
      <input type="text" placeholder="ingresa nueva tarea" v-model="tarea">
      <button type="submit">Añade</button>
    </form>
    <ul class="lista">
      <li v-for="(valor, index) in tareas" :key="index">
        {{valor}} <button @click.prevent="quitarTarea(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hijo',
  props:{
    tareas:{
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      tarea: ''
    }
  },
  methods: {
    enviarTarea(tarea){
      if(tarea){
        this.$emit('enviarTarea', tarea)
        this.tarea = ''
      }
    },
    quitarTarea(i){
      this.$emit('quitarTarea', i)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    margin: 0;
    padding: 0;
  }

  .centro{
    text-align: center;
  }

  .lista{
    text-align: left;
    margin-left: 40vw;
  }
</style>
