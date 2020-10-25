<template>
  <div >
    <Hijo :tareas="tareas" @enviarTarea="agregarTarea" @quitarTarea="eliminarTarea"/>
  </div>
</template>

<script>
import Hijo from './components/Hijo.vue'

export default {
  name: 'Padre',
  components: {
    Hijo
  },
  data() {
    return {
      tareas: []
    }
  },
  methods: {
    agregarTarea(task){
      this.tareas.push(task);
    },
    eliminarTarea(i){
      this.tareas.splice(i,1);
    }
  },
}
</script>

<style>

</style>
