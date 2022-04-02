<template>
    <draggable
        class="py-auto container mx-auto flex w-[50%] flex-row flex-wrap gap-4 space-x-4 rounded-md px-4"
        tag="transition-group"
        :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
        }"
        v-model="data"
        v-bind="{
            animation: 300,
            group: 'description',
            disabled: false,
            ghostClass: 'ghost',
        }"
        @start="drag = true"
        @end="drag = false"
        item-key="order"
    >
        <template #item="{ element }">
            <div class="rounded-md bg-indigo-300 px-4 py-3">
                {{ element.name }}
                <component :is="Twitter" class="twitter" />
            </div>
        </template>
    </draggable>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import draggable from 'vuedraggable'
import Twitter from './Twitter.vue'

const drag = ref(false)
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

<style>
.button {
    margin-top: 35px;
}

.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.list-group {
    min-height: 20px;
}

.list-group-item {
    cursor: move;
}

.list-group-item i {
    cursor: pointer;
}
</style>
