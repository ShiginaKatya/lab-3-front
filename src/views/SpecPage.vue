<template>
    <div class="font-sans mx-auto my-4 pb-4 w-3/4">
        <div class="flex justify-start gap-4 border-b-blue border-b p-2">
                <img class="w-20" src="logo.png" alt="">
                <router-link to="/tool" class=" text-sm text-black font-bold py-6" >Спецификация</router-link>
                
        </div>
        <div class="flex justify-between gap-2  w-10/12 my-4 mx-auto">
            <router-link to="/addfail" class="block  text-s"><el-button  class="border-orange" type='primary' style="width: 200px" >Добавить</el-button></router-link>
        </div>
        <ul>
            <li>
                <p>Фото образца</p>
            </li>
            <li>
                <p>Замеры</p>
            </li>
            <li>
                <p>Список ингредиентов</p>
            </li>
            <li>
                <p>Список украшений</p>
            </li>
            <li>
                <p>Список полуфабрикатов</p>
            </li>
            <li>
                <p>Список последовательных операций</p>
            </li>
            <li>
                <p>Описание выполнения операций</p>
            </li>
        </ul>
            <div class="flex justify-start gap-5 p-12 mx-auto " >
                  <router-link to="/updatefail"><el-button  class="border-orange" style="width: 200px" >Редактировать</el-button></router-link>
                  <el-button @click="del" class="border-orange "  type="danger" style="width: 200px">Удалить</el-button>
            </div>
              
    </div>
</template>

<script>
</script>