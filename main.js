// 1
// for(let i = 1; i < 51; i++){
//     console.log(i);
// }

// let i = 1;
// while(i < 51){
//     console.log(i++);
// }

// 2
// const a = [1, 2, 3, 4, 5];
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// let i = 0;
// while(i < a.length){
//     console.log(a[i++]);
// }

// for(let el of a){
//     console.log(el);
// }


// 3
// const a = [2, 3, 4, 5];
// let res = 1;
// for(let i = 0; i < a.length; i++){
//     res*=a[i];
// }
// console.log(res)

// let i = 0
// while(i < a.length){
//     res*=[a[i++]];
// }
// console.log(res)

// for(let el of a){
//     res*=el;
// }
// console.log(res)


// 4
// let a = [];
// let i = 11;
// while(i < 34){
//     a.push(i++);
// }
// console.log(a)


// 5
// let a = [];
// for(let i = 0; i < 101; i+=2){
//     a.push(i);
// }
// console.log(a);

// 6
// const a = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let el of a){
//     sum+=el;
// }
// console.log(sum)


// 7
// const a = [2, 5, 9, 15, 0, 4];
// let b = []
// for(let el of a){
//     if(el % 3 == 0){
//         b.push(el)
//     }
// }
// console.log(b)

// 8
// const a = ["apple", 3, "orange", 2];
// let b = []
// for(let i = 0; i < a.length; i++){
//     if(!isNaN(a[i])){
//         b.push(a[i])
//     }
// }
// console.log(b)

// 9
// const a = [2, 5, 9, 15, 0, 4];
// let b = []
// let i = 0
// while(i < a.length){
//     i++;
//     if(a[i] % 5 == 0 | a[i] % 3 == 0)
//         b.push(a[i])
// }
// console.log(b)

// 10
// const a =  [-1, 2, 3, -4, 5];
// let sum = 0;
// for(let el of a){
//     if(el > 0){
//         sum += el
//     }
// }
// console.log(sum)

// 11
// const a = [1, 2, 2, 3, 4, 4, 3, 4, 5];
// let b = [];
// for(let i = 0; i < a.length; i++){
//     if(!b.includes(a[i]))
//         b.push(a[i])
// }
// console.log(b)

// 12
// const a = [10, 20, 30, 50, 235, 3000];
// let b = [];
// for(let i = 0; i < a.length; i++){
//     if(a[i].toString()[0] == '1' | a[i].toString()[0] == '2' | a[i].toString()[0] == '5')
//         b.push(a[i])
// }
// console.log(b)

// 13
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '-'
// for(let i = 0; i < a.length; i++){
//     str += a[i] + '-'
// }
// console.log(str)

// 14
// b = []
// for(let i = 1; i < 101; i++){
//     if(i % 7 == 0)
//         b.push(i)
// }
// console.log(b)

// 15
// const a = "Привет";
// const b = 3;
// let res = ''
// for(let i = 1; i <= b; i++){
//     res += a + ' ';
// }
// console.log(res.trim())

// 16
// let a = String(55639217).split('');
// let result = '';
// for(let i = 0; i < a.length; i++){
//     if(a[i] % 2 == 1 & a[i+1] % 2 == 1)
//         result+= a[i] + ':' + a[i+1];
//     if(a[i - 1] & a[i] % 2 == 1 & a[i - 1] % 2 == 1)
//         continue;
//     if(a[i] % 2 == 0){
//         result+= a[i];
//     }
// }
// console.log(result)


// 17
// let i = 0
// let result = 0;
// while(i < 100){
//     i++;
//     result+=i;
// }
// console.log(result)