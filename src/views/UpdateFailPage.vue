<template>  
    <div class="font-sans mx-auto my-8 pb-4 w-2/4">
        <img class="w-20 block mx-auto" src="logo.png" alt="">
        <van-form class="p-2" @submit="submit">
        <van-cell-group inset class="">
             <van-field style=""
            v-model="start_time"
            name="start_time"
            label="Начало сбоя"
            placeholder=""
            />
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                <p>Оборудование</p>
                <select class="w-10/12 h-8 " v-model="selected_type">
                    <option v-for="type in types " :key="type.id">
                        {{type.name}}
                     </option>
                </select>
            </div>
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                    <p>Причина</p>
                    <select class="w-10/12 h-8 " v-model="selected_provider">
                    <option v-for="provider in providers " :key="provider.id">
                        {{provider.name}}
                        </option>
                    </select> 
            </div>
             <van-field style=""
            v-model="fix_time"
            name="fix_time"
            label="Завершение"
            placeholder=""
            />
            
        </van-cell-group>
        <div class="flex justify-center gap-5 m-6" >
            <router-link to='/fail'><el-button @click="submit" style="width: 200px" >Сохранить</el-button></router-link>
            <router-link to='/fail'><el-button style="width: 200px;background-color:#F56C6C" type="danger" >Отменить</el-button></router-link>
        </div>

        </van-form>

 </div>
</template>

<script>
</script>