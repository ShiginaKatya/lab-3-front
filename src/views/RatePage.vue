<template>
    <div class="font-sans mx-auto my-4 pb-4 w-3/4">
        <div class="flex justify-start gap-4 border-b-blue border-b p-2">
                <img class="w-20" src="logo.png" alt="">
                <router-link to="/tool" class=" text-sm text-black font-bold py-6" >Оценка затрат</router-link>
                
        </div>
        <table class=" h-96 mx-auto w-10/12 border my-4 border-gray-600 ">
                <thead> <!-- Заголовок таблицы -->
                <tr class="text-xs"> 
                    <th class=" border  border-gray-500 p-2 w-3/12">Артикул</th>
                    <th class="border-collapse border  border-gray-500 p-2 w-3/12">Название</th>
                    <th class="border-collapse border  border-gray-500 p-2 w-3/12">Требуемое количество</th>
                    <th class="border-collapse border  border-gray-500 p-2  w-3/12">Количество на складе</th>
                    <th class="border-collapse border  border-gray-500 p-2  w-3/12">Недостающее количество</th>
                    <th class="border-collapse border  border-gray-500 p-2  w-3/12">Закупочная цена</th>
                    <th class="border-collapse border  border-gray-500 p-2  w-3/12">Себестоимость</th>
                    <th class="border-collapse border  border-gray-500 p-2  w-3/12">Минимальное время доставки</th>
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
    
              
    </div>
</template>

<script>
</script>