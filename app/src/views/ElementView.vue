<script lang="ts" setup>
import AspectRatio from 'components/AspectRatio.vue'
</script>

<template>
    <h1>Button</h1>
    <button class="button">button</button>
    <a class="button" href="/#">button</a>

    <h1>Dropdown</h1>

    <div class="dropdown">
        <div class="toggle">Item 1</div>
        <div class="menu">
            <div class="item active">Item 1</div>
            <div class="item">Item 2</div>
            <div class="item">Item 3</div>
            <div class="item">Item 4</div>
        </div>
    </div>

    <div class="dropdown">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item active">Item 3</div>
        <div class="item">Item 4</div>
    </div>

    <AspectRatio height="9" width="16"/>
    <AspectRatio
        aspect-ratio="2x1"
        background-color="blue"
        background-size="contain"
        background-width="50%"
    />
</template>
