<template>
    <div
        class="container mx-auto grid w-[60%] grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
    >
        <keep-alive>
            <component
                v-for="item in data"
                :key="item.id"
                :is="Twitter"
                :block="item"
                :class="item.class"
            ></component>
        </keep-alive>
    </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import draggable from 'vuedraggable'

import Intro from './Intro.vue'
import Location from './Location.vue'
import Project from './Project.vue'
import Twitter from './Twitter.vue'
import Github from './Github.vue'
import Blog from './Blog.vue'
import Mode from './Mode.vue'
import Newsletter from './Newsletter.vue'

const data = reactive([
    {
        name: 'Intro',
        id: 0,
        class: 'col-span-2 grid place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Location',
        id: 1,
        class: 'grid aspect-1 place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Project',
        id: 2,
        class: 'row-span-2 grid place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Twitter',
        id: 3,
        class: 'grid aspect-1 place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Github',
        id: 4,
        class: 'grid aspect-1 place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Project',
        id: 5,
        class: 'row-span-2 grid place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Blog',
        id: 6,
        class: 'col-span-2 grid place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Mode',
        id: 7,
        class: 'grid aspect-1 place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Project',
        id: 8,
        class: 'grid aspect-1 place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Project',
        id: 9,
        class: 'grid aspect-1 place-content-center rounded-3xl bg-purple-500 text-white',
    },
    {
        name: 'Newsletter',
        id: 10,
        class: 'col-span-2 grid place-content-center rounded-3xl bg-purple-500 text-white',
    },
])
</script>

<style></style>
