<template lang="">
<div>
    <MainTable :columns=columns :tableData=tableData />
</div>
</template>

<script setup>
import MainTable from '../components/MainTable.vue';
import {
    ref,
    onMounted,

} from 'vue';
import {
    ProductService
} from '../controllers/ProductService';
const columns = [{
        field: 'name',
        header: 'Название'
    },
    {
        field: 'oilnumber',
        header: 'Число скважин'
    },
    {
        field: 'modelname',
        header: 'Название модели'
    },
    {
        field: 'npv',
        header: 'Оценочный NPV, млн.руб.'
    },
    {
        field: 'progress',
        header: 'Прогресс расчета, %'
    },
    {
        field: 'status',
        header: 'Статус'
    },

];

let tableData = ref([])

onMounted(() => {
    let result = ProductService.getOilsData()
    tableData.value = result

});

</script>

<style scoped>

</style>
