// console.log('Hello');

// const timer = () => {
//     console.log('Timer Done');
// }

// setTimeout (timer, 2000)

// console.log('JavaScript');

//==========

// const func = (name, text) => {
//     console.log(`${name} : ${text}`);
// }

// // func ('Nikita', 'Zhukov')

// const name = prompt ('Name')
// let timer = setTimeout (() => {
//     func (name, 'hello all')
// }, 2000)

// if (name == 'Nikita') {
//     clearTimeout(timer)    
// }

//=====Interval=====

// setInterval (() => {
//     console.log(1);
// }, 1000)

// let i = 0

// let timer = setInterval (() => {
// console.log(i);
// i++
// if (i > 5) {
//     clearInterval (timer)
// }

// i > 5 ? clearInterval (timer) : null
// i > 5 && clearInterval (timer)
// }, 1000)

//=================

// const btn = document.querySelector('#btn')

// let i = 0

// let timer = setInterval (() => {
//     console.log(i);
//     i++
//     i > 5 && clearInterval (timer)
// }, 1000)


// btn.addEventListener ('click', btn )


// const btn = document.querySelector('#btn')
// let i = 0
// let timer 
// const logger = () => {
//     console.log(i);
//     i++
//     i > 5 && clearInterval (timer)

// }


// const cube = document.querySelector('#cube')
// const btnStart = document.querySelector('#btnStart')
// const btnStop = document.querySelector('#btnStop')

// let i = 0
// let ctop = 0
// let cleft = 0
// let iter = 0

// const animCuber = () => {
//     iter = setInterval(() => {
//         if (ctop <= 900 && ctop > 0 && cleft == 0) {
//             cube.style.top = ctop + 'px'
//             ctop -= 10            
//         }else if (cleft <= 900 && cleft >= 0 && ctop == 900) {
//             cube.style.left = cleft + 'px'
//             cleft -= 10
//         } else if (ctop >= 0 && ctop <= 900 && cleft == 900) {
//             cube.style.top = ctop + 'px'
//             ctop += 10
//         } else if (cleft >= 0 && ctop == 0 && cleft <= 900) {
//             cube.style.left = cleft + 'px'
//             cleft += 10
//         }
//     }, 10)

    
// }

// // animCuber()

// btnStart.addEventListener ('click', () => {
//     i == 0 && animCuber()
//     i++
// })


// btnStop.addEventListener ('click', () => {
//     clearInterval (iter)
//     i = 0
// })


//==============Объект Date================

// let now = new Date() //показывает текущие дату и время

// ==================Методы get===================

// console.log(now.getFullYear());
// console.log(now.getMonth() +1);
// console.log(now.getDate());  //число месяца
// console.log(now.getDay()); //дни недели
// console.log(now.getHours());  
// console.log(now.getMinutes());
// console.log(now.getUTCHours()); //часы по Гринвичу
// console.log(now.getTimezoneOffset()); //разница в минутах от Лондона
// console.log(now.getTime());   //Количество миллисекунд, прошедших с 1970 года 1 января  6 часов утра


//==================Методы set====================

// now.setHours(0)
// console.log(now);

//=============================================

let deadline = '2024-01-01 00:00:00'
let timer

const getTime = (endTime) => {
    // console.log(Date.parse(endTime));
    // console.log(Date.parse(new Date()));
    const total = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const hours = Math.floor (total / (1000 * 60 *60) % 24)
    const minutes = Math.floor (total / (1000 * 60) % 60)
    const seconds = Math.floor (total / 1000 % 60)

    // console.log(total);
    // console.log(hours);
    // console.log(days);
    // console.log(minutes);
    // console.log(seconds);
    // console.log(days, hours, minutes,seconds);

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    }
}



const result = () => {
    const {total, days, hours, minutes, seconds} = getTime(deadline)

    document.querySelector ('.timer_total').innerHTML = deadline 
    document.querySelector ('.timer_days').innerHTML = days + ' DAYS'
    document.querySelector ('.timer_hours').innerHTML = hours + ' HOURS'
    document.querySelector ('.timer_minutes').innerHTML = minutes + ' MINUTES'
    document.querySelector ('.timer_seconds').innerHTML = seconds + ' SECONDS'

    if (total <= 0) { 
        clearInterval(timer); 
        alert('Happy New 2024 Year!'); 
    } 
}

timer = setInterval (result, 1000)













