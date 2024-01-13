<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
        <div class="flex justify-between border-blue border-b py-2 px-4" style="border-color #f79420;">
            <p class="text-sm text-black font-bold" >Регистрация</p>
            <router-link to="/" class="py-1"><img src="close.svg" alt=""></router-link>
        </div> 
        <div class="" >
            <img class="block mx-auto p-5 w-32" src="logo.png" alt="">
        </div>
         <van-form class="p-2 max-w-lg mx-auto">
            <van-cell-group inset class="w-xl">
                <van-field style=""
                v-model="login"
                name="login"
                label="Логин"
                placeholder=""
                :rules="[{ required: true, message: 'Login is required' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="Password"
                label="Пароль"
                placeholder=""
                :rules="[{ required: true, message: 'Password is required' }]"
                />
                <div class="text-sm flex justify-between gap-8 m-4 border-b">
                    <p>Роль</p>
                    <select class="w-10/12 h-8 " v-model="selected_role">
                    <option v-for="role in roles " :key="role.id">
                        {{role.name}}
                        </option>
                    </select>
                </div>
                <van-field style=""
                v-model="fio"
                name="fio"
                label="ФИО"
                placeholder=""
                />
                <div class="text-sm flex justify-between gap-8 m-4 border-b">
                    <p>Фото</p>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
            </van-cell-group>
            <div class="flex justify-center gap-5 m-6" >
                <router-link   to="/"><el-button  style="width: 200px" >Зарегистрироваться</el-button></router-link>
                <router-link  to="/"><el-button  style="width: 200px" type="danger" >Отмена</el-button></router-link>
            </div>
        </van-form>
    </div>
</template>
<script>



</script>
