<template>
    <div v-for="(task, index) in tasks" :key="index">
        <Task :task="task"/>
    </div>
</template>


<script>
import Task from './Task'
export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>