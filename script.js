// Task 1
// Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Возвратите массив a1_res.


let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

let a1_res = a1.map((item) => 
{
    return item * 2;
}
);

console.log(a1_res);


// Task 2
// Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.

let a2 = [2,3,4,5,10,11,12];

function t2() {
    let a2_res = a2.map((item) => 
{
    return Math.pow(item, 2);
}
);

    console.log(a2_res);
}

t2();


// Task 3
// Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a3_res куда добавьте все элементы преобразованные к числу. Возвратите a3_res. Действия должны запускаться при вызове функции t3.

let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

function t3() {
    let a3_res = a3.map((item) => 
{
    return Number(item);
}
);

    console.log(a3_res);
}

t3();


// Task 4
// Функция t4 должна с помощью filter отфильтровать массив a4 и создать новый массив a4_res, куда добавить только числа из массива a4. Функция должна возвращать a4_res.


let a4 = [4,"today", 6, 7,"hello", 34, "great", 78, 90, 11];

function t4() {
    let a4_res = a4.filter((item) => 
{
    if(item == Number(item)) {
        return item;
    }
}
);
    console.log(a4_res);
}

t4();


// Task 5
// Дан массив a5 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте a5_res, который содержит только четные числа из a5. Возвратите a5_res. Действия должны запускаться при вызове функции t5.

let a5 = [3, 14, 15, 92];

function t5() {
    let a5_res = a5.filter((item) => 
    {
        if(item % 2 == 0) {
            return item;
        }
    }
    );
    console.log(a5_res);
}

t5();



// Task 6
// Дан массив a6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив a6 и создайте массив a6_res, который содержит только числа из a6, которые больше 14. Возвратите a6_res. Действия должны запускаться при вызове функции t6. Проверьте, чтобы функция корректно работала со строками, т.е. '6' не должно попасть в результирующий массив.

let a6 = [3, 14, 15, 92, "6", "5", "hello", 32]

function t6() {
    let a6_res = a6.filter((item) => 
    {
        if(Number(item) > 14) {
            return item;
        } 
    }
    );
    console.log(a6_res);
}

t6();


// Task 7
// Дан массив a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles']. C помощью map переберите массив a7 и создайте a7_res, который содержит элементы массива a7 приведенные к нижнему регистру. Действия должны запускаться при вызове функции t7. Функция должна возвращать a7_res.

let a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles'];

function t7() {
    let a7_res = a7.map((item) => 
    {
        return item.toLowerCase();
    }
    );
    console.log(a7_res);
}

t7();


// Task 8
// Дан массив a8 = [3, 14, 15, 92, 7, 32, 59]. C помощью цикла или метода - решить самостоятельно, переберите массив a8 и добавьте в a8_res индексы четных элементов. Т.е. для данного примера по результату работы функции в a8_res должны быть [1, 3, 5]. Функция должна возвращать a8_res.

let a8 = [3, 14, 15, 92, 7, 32, 59];

function t8() {
    let a8_res = [];
    a8.filter((item, index) => 
    {
        if(item % 2 == 0) {
            a8_res.push(index);
        }
    }
    );
    return a8_res;
}

console.log(t8());


// Task 9
// Дан массив a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal']. С помощью forEach, переберите массив a9 и преобразуйте все записи в массиве в нижний регистр. Действия должны запускаться при вызове функции t9. Функция должна возвращать a9.

let a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal'];

function t9() {
    a9.forEach(function(letter, i) {
        a9[i] = letter.toLowerCase();
    }
    );
    return a9;
}

console.log(t9(a9));


// Task 10
// Дан массив a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью forEach, переберите массив a10 и элементы, которые меньше нуля замените на 0. Возвратите a10. Действия должны запускаться при вызове функции t10. Для данного примера результат должен выглядеть так: [2, 13, 14, 0, 9, 5, 0, 0, 14]

let a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14]

function t10() {
    a10.forEach(function(el, i) {
        el = 0;
        if(a10[i] <= 0) {
            a10[i] = el;
        }
    }
    );
    return a10;
}

console.log(t10(a10));


// Task 11
// Дан массив a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью filter, переберите массив a11 и создайте новый массив a11_res куда добавьте только те элементы массива ИНДЕКС которых - четный. Возвратите a11_res.

let a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

function t11() {
    let a11_res = [];
    a11.filter((index) => 
    {
        if(index % 2 == 0) {
            a11_res.push(index);
        }
    }
    );
    return a11_res;
}

console.log(t11());


// Task 12
// Данa переменная a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода Array.isArray определите является ли переменная a12 массивом. Если да - то функция возврaщает true, если нет false.

let a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

console.log(Array.isArray(a12));


// Task 13
// Дан массив a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода includes функция t13 должна определить, есть ли значение из переменной a13_num в массиве. Если да - то функция возврaщает true, если нет false.

let a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

console.log(a13.includes(9));
console.log(a13.includes(1));


// Task 14
// Дан массив a14 = ['c', 'C', 'd', 'e', 'E']. С помощью метода includes функция t14 должна определить, есть ли значение из переменной a14_sym в массиве. Если да - то функция возврaщает true, если нет false. Обратите внимание, функция должна искать независимо от регистра. Т.е. если в a14_sym будет строка 'd' то возвратить true, однако и на строку 'D' тоже возвратить true.

let a14 = ['c', 'C', 'd', 'e', 'E'];

function t14() {
    element = "E";
    if(a14.includes(element.toLowerCase()) && a14.includes(element.toUpperCase())) {
        return true;
    }
}
console.log(t14());


// Task 15
// Дан массив a15. С помощью метода filter функция t15 должна создать на его основе массив a15_res содержащий записи только тех пользователей, номер паспорта (pnum) которых не пустая строка и длина номера - 6 символов. Функция должна возвращать a15_res.

let a15 = [{
    "name" : "Gheorghe",
    "pnum" : "123456"
},
    {
    "name" : "Leontii",
    "pnum" : "789123"
},  {
    "name" : "Valentina",
    "pnum" : ""
},
    {
    "name" : "Maxim",
    "pnum" : "1011121314"
}];

function t15() {
    let a15_res = a15.filter((user) => 
    {
        if(user.pnum !== "" && user.pnum.length == 6) {
            return user;
        }
    }
    );
    console.log(a15_res);
}

t15();












// CLASSWORK

// let a = [3, 5, 8, 11, 14, 15, -5];

// let b = a.map((item, index)=> {
//     console.log(item);
//     return item * 2;
// });

// console.log(b);

// let c = a.filter((item, index) => 
// {
//     if(item % 2 == 0) {
//         return true;
//     }
// }
// );

// console.log(c);