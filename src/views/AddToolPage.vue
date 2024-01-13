<template>  
    <div class="font-sans mx-auto my-8 pb-4 w-2/4">
        <img class="w-20 block mx-auto" src="logo.png" alt="">
        <van-form class="p-2" @submit="submit">
        <van-cell-group inset class="">
             <div class="text-sm flex justify-between gap-8 m-4 border-b">
                <p>Наименование</p>
                <input type="text" v-model="name" class="w-10/12 h-8 " >
            </div>
             <van-field style=""
            v-model="description"
            name="description"
            label="Описание"
            placeholder=""
            />
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                <p>Тип</p>
                <select class="w-10/12 h-8 " v-model="selected_type">
                    <option v-for="type in types " :key="type.id">
                        {{type.name}}
                     </option>
                </select>
            </div>
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                    <p>Степень износа</p>
                    <select class="w-10/12 h-8 " v-model="selected_stepen">
                    <option v-for="stepen in stepens " :key="stepen.id">
                        {{stepen.name}}
                        </option>
                    </select>
                </div>
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                    <p>Поставщик</p>
                    <select class="w-10/12 h-8 " v-model="selected_provider">
                    <option v-for="provider in providers " :key="provider.id">
                        {{provider.name}}
                        </option>
                    </select>
                </div>
             <div class="text-sm flex justify-between  gap-2 m-4 ">
                <p>Дата приобретения</p>
                <el-date-picker 
                class="border-blue"
                v-model="date"
                type="date"
                placeholder=""
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD"
                />

            </div> 
            <van-field style=""
            v-model="count"
            type="number"
            name="count"
            label="Количество"
            placeholder=""
            />
        </van-cell-group>
        <div class="flex justify-center gap-5 m-6" >
            <router-link to='/tool'><el-button @click="submit" style="width: 200px" >Сохранить</el-button></router-link>
            <router-link to='/tool'><el-button style="width: 200px;background-color:#F56C6C" type="danger" >Отменить</el-button></router-link>
        </div>

        </van-form>

 </div>
</template>

<script>
</script>