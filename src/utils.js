// export function dataFormatter (obj) {
//     var pList = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
//     var temp;
//     for (var year = 2016; year <= 2020; year++) {
//         var max = 0;
//         var sum = 0;
//         temp = obj[year];
//         for (var i = 0, l = temp.length; i < l; i++) {
//             max = Math.max(max, temp[i]);
//             sum += temp[i];
//             obj[year][i] = {
//                 name: pList[i],
//                 value: temp[i]
//             };
//         }
//         obj[year + 'max'] = Math.floor(max / 100) * 100;
//         obj[year + 'sum'] = sum;
//     }
//     console.log(obj)
//     return obj;
// }

// export function demo(abc) {
//     console.log(abc)
//     return abc
// }

export default {
    demo: function (num) { 
        console.log(num)
    }
}