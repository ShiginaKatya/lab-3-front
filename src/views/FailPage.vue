<template>
    <div class="font-sans mx-auto my-4 pb-4 w-3/4">
        <div class="flex justify-start gap-4 border-b-blue border-b p-2">
                <img class="w-20" src="logo.png" alt="">
                <router-link to="/tool" class=" text-sm text-black font-bold py-6" >Сбои оборудования</router-link>
                
        </div>
        <div class="flex justify-between gap-2  w-10/12 my-4 mx-auto">
            <router-link to="/addfail" class="block  text-s"><el-button  class="border-orange" type='primary' style="width: 200px" >Добавить</el-button></router-link>
        </div>
        <table class=" h-96 mx-auto w-10/12 border my-4 border-gray-600 ">
                <thead> <!-- Заголовок таблицы -->
                <tr class="text-xs"> 
                    <th class=" border  border-gray-500 p-2 w-3/12">Время начала сбоя</th>
                    <th class="border-collapse border  border-gray-500 p-2 w-3/12">Оборудование</th>
                    <th class="border-collapse border  border-gray-500 p-2 w-3/12">Причина</th>
                    <th class="border-collapse border  border-gray-500 p-2  w-3/12">Время окончания сбоя</th>
                </tr>
                </thead>
                <tbody class="text-xs"> <!-- Заполнение таблицы -->
                    <tr @click="choose(agent.url)" v-for="agent in agents" :key="agent.id" class="" :style="getStyle(agent)" >
                        <td class=" border-collapse border p-2 h-4">{{agent.first_name}}</td> <!-- Номер строки -->
                        <td class="border-collapse border  p-2">{{agent.middle_name}}</td> 
                        <td class="border-collapse border  p-2">{{agent.last_name}}</td> 
                        <td class="border-collapse border  p-2">{{agent.deal_share}}</td> 
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-start gap-5 p-12 mx-auto " >
                  <router-link to="/updatefail"><el-button  class="border-orange" style="width: 200px" >Редактировать</el-button></router-link>
                  <el-button @click="del" class="border-orange "  type="danger" style="width: 200px">Удалить</el-button>
            </div>
              
    </div>
</template>

<script>
</script>