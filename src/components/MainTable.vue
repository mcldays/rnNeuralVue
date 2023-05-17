<template>
<div>
    <DataTable :value="tableData" showGridlines paginator  :rows="10" >
        <template #header>   
            <Menubar :model="menuItems">
            </Menubar>
        </template>
        <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" ></Column>
    </DataTable>
</div>
</template>

<script setup>
import {
    ref,
    onMounted,
    defineProps,
    defineEmits
    
} from 'vue';

const props = defineProps({
    tableData : {},
    columns : {},
})

const emits = defineEmits(['addModel'])

onMounted(() => {
    
});

const menuItems = [
    {
        label: 'Добавить',
        icon: 'pi pi-fw pi-file',
        key : "add",
        command : ()=>{
            emitAdd()
        }
       
    },
    {
        label: 'Удалить',
        icon: 'pi pi-fw pi-pencil',
    },
]

function emitAdd(){
    emits('addModel')
}
</script>
<style>
.table{
    width: 100%;
}

</style>
