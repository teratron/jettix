<script lang="ts" setup>
import BaseLayout from 'layouts/BaseLayout.vue'
//import GridLayout from 'layouts/GridLayout.vue'
//import DashboardLayout from 'layouts/DashboardLayout.vue'
//import BlankLayout from 'layouts/BlankLayout.vue'
</script>

<template>
    <base-layout>
        <slot/>
    </base-layout>
    <!--<GridLayout>
            <slot name="grid-layout"/>
        </GridLayout> name="layout"-->
    <!--<BlankLayout :v-else-if="true"/>-->
    <!--<DashboardLayout name="dashboard-layout"/> name="base-layout"-->
</template>
