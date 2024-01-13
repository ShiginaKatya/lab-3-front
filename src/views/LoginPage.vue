<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
        <div class="flex justify-between border-blue border-b p-2 mx-2" style="border-color #f79420;">
            <p class="text-sm text-black font-bold" >Вход в систему</p>
            <router-link to="/register"><p class="text-sm text-black underline" >Регистрация</p></router-link>
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
                placeholder="Логин"
                :rules="[{ required: true, message: 'Login is required' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="Password"
                label="Пароль"
                placeholder="Пароль"
                :rules="[{ required: true, message: 'Password is required' }]"
                />
            </van-cell-group>
            <div class="flex justify-center gap-5 m-6" >
                <router-link   to="/"><el-button  style="width: 200px" >Войти</el-button></router-link>
                <router-link  to="/"><el-button  style="width: 200px" type="danger" >Отмена</el-button></router-link>
            </div>
        </van-form>
    </div>
</template>
<script>



</script>
