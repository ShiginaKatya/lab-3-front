<template>  
    <div class="font-sans mx-auto my-8 pb-4 w-2/4">
        <img class="w-20 block mx-auto" src="logo.png" alt="">
        <van-form class="p-2" @submit="submit">
        <van-cell-group inset class="">
             <van-field style=""
            v-model="articul"
            name="articul"
            label="Артикул"
            placeholder=""
            />
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                <p>Наименование</p>
                <input type="text" v-model="name" class="w-10/12 h-8 " >
            </div>
             <van-field style=""
            v-model="count"
            name="count"
            type="number"
            label="Количество"
            placeholder=""
            />
            <van-field style=""
            v-model="measure"
            name="measure"
            label="Единица измерения"
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
                    <p>Поставщик</p>
                    <select class="w-10/12 h-8 " v-model="selected_provider">
                    <option v-for="provider in providers " :key="provider.id">
                        {{provider.name}}
                        </option>
                    </select> 
            </div>
            <div class="text-sm flex justify-between gap-8 m-4 border-b">
                    <p>Фото</p>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
            <van-field style=""
            v-model="price"
            name="price"
            label="Закупочная цена"
            placeholder=""
            />
            <van-field style=""
            v-model="gost"
            name="gost"
            label="ГОСТ"
            placeholder=""
            />
            <van-field style=""
            v-model="fas"
            name="fas"
            label="Фасовка"
            placeholder=""
            />
            <van-field style=""
            v-model="description"
            name="description"
            label="Характеристика"
            placeholder=""
            />
        </van-cell-group>
        <div class="flex justify-center gap-5 m-6" >
            <router-link to='/ingredient'><el-button @click="submit" style="width: 200px" >Сохранить</el-button></router-link>
            <router-link to='/ingredient'><el-button style="width: 200px;background-color:#F56C6C" type="danger" >Отменить</el-button></router-link>
        </div>

        </van-form>

 </div>
</template>

<script>
</script>