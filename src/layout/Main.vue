<template>
<div>
    <div class="flex" style="width: 100%;">
        <img  alt="logo" src="../assets/ALPHABOS.svg" height="25" class="mr-3 ml-3 m-auto" />
        <TabMenu class="m-auto w-full mr-3 ml-2" :model="items" index="1">
        </TabMenu>
        <img alt="logo" src="../assets/imageNeural.png" height="55" class="mr-2 m-auto" />
    </div>

    <div>
        <HydroModelView v-if="viewStates.HydroModelView"/>
        <CalcScenario v-if="viewStates.CalcScenario"/>
    </div>
</div>
</template>

<script setup>
import HydroModelView from "./HydroModelView.vue";
import CalcScenario from "./CalcScenario.vue";
import {
    ref,
    reactive
} from "vue";

const items = ref([{
        label: 'База гидродинамических моделей',
        icon: 'pi pi-fw pi-file',
        command : ()=>{
            refresh()
            viewStates.HydroModelView = !viewStates.HydroModelView
        }

    },
    {
        label: 'Сценарий расчета',
        icon: 'pi pi-fw pi-pencil',
        command : ()=>{
            refresh()
            viewStates.CalcScenario = !viewStates.CalcScenario
        }
    },
    {
        label: 'Логирование',
        icon: 'pi pi-fw pi-user',
        command : ()=>{
            refresh()
            viewStates.Logs = !viewStates.Logs
        }
    }
]);

let viewStates = reactive({
    HydroModelView : true,
    CalcScenario : false,
    Logs : false
})

function refresh(){
    viewStates.HydroModelView = false
    viewStates.CalcScenario = false
    viewStates.Logs = false
}

function openHydro(){
    
}


</script>

<style scoped>

</style>
