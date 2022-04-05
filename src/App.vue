<script setup>
import Grid from './components/Grid.vue'
import Draggable from './components/Draggable.vue'
import Container from './components/Container.vue'
import Tabs from './components/Tabs.vue'
import Project from './components/Project.vue'
import Home from './components/Home.vue'
import TabBox from './components/TabBox.vue'
import GridOrder from './components/GridOrder.vue'
import Gladiator from './components/Gladiator.vue'
</script>

<template>
    <div class="container mx-auto py-12">
        <Grid />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f3f3f3;
}
</style>
