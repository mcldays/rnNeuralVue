<template lang="">
<div class=" mt-5 mainContain">
    <div>
        <div>
            <MainTable @addModel="openAddDialog" :columns=columns :tableData=tableData :menuItems=menuItems>

            </MainTable>
        </div>
    </div>

    <Dialog v-model:visible="visibleAddDialog" maximizable modal header="Добавить модель" :style="{ width: '70vw' }">
        <div>
            <div>
                <div class=" w-full">
                    <FileUpload name="demo[]" chooseLabel="Выбрать" uploadLabel="Загрузить" cancelLabel="Отменить" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
                        <template #empty>
                            <p>Перетащите файл или добавьте модель в это окно</p>
                        </template>
                    </FileUpload>
                </div>
                <div class="mt-5">
                    <div class="flex flex-wrap justify-content-center mt-5">
                        <div class="flex flex-column gap-2 mr-2 w-20rem mt-auto">
                            <label class="text-sm" for="username">Коэффициент компенсации д.ед</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                          
                        </div>
                        <div class="flex flex-column gap-2 mr-2 w-20rem mt-auto">
                            <label  class="text-sm" for="username">Контроль забойного давления для добывающих скважин в атм.</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                           
                        </div>
                        <div class="flex flex-column gap-2  mr-2 w-20rem mt-auto">
                            <label  class="text-sm" for="username">Контроль забойного давления для нагнетательных скважин в атм.</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                          
                        </div>
                        <div class="flex flex-column gap-2 mr-2 w-20rem mt-auto ">
                            <label class="text-sm" for="username">Расстояние выключения нагнетательных скважин по оси I, ячеек</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                          
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-content-center mt-5">
                        <div class="flex flex-column gap-2 mr-2 w-20rem mt-auto">
                            <label class="text-sm" for="username">Ограничение на добычу жидкости скважины, м3</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                           
                        </div>
                        <div class="flex flex-column gap-2  mr-2 w-20rem mt-auto">
                            <label  class="text-sm" for="username">Ограничение на закачку воды для скважины, м3</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                            
                        </div>
                        <div class="flex flex-column gap-2  mr-2 w-20rem mt-auto">
                            <label  class="text-sm" for="username">Ограничение на добычу нефти для скважин, м3</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                           
                        </div>
                        <div class="flex flex-column gap-2 w-20rem mt-auto">
                            <label class="text-sm" for="username">Расстояние выключения нагнетательных скважин по оси J, ячеек</label>
                            <InputText id="username" v-model="value" aria-describedby="username-help" />
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Dialog>
</div>
</template>

<script setup>
import MainTable from '../components/MainTable.vue';
import {
    ProductService
} from '../controllers/ProductService';
import {
    ref,
    onMounted,
    defineProps

} from 'vue';
const columns = [{
        field: 'id',
        header: 'ID'
    },
    {
        field: 'name',
        header: 'Название'
    },
    {
        field: 'status',
        header: 'Статус'
    },

];

let visibleAddDialog = ref(false)

const tableData = ref([])

onMounted(() => {
    let result = ProductService.getProductsData()
    tableData.value = result

});

function openAddDialog() {
    visibleAddDialog.value = true
}
</script>

<style scoped>
.mainContain {}
</style>
