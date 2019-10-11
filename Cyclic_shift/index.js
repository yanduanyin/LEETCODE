// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释:
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。

// 基础解法1 不管时间复杂度和空间复杂度

// let arr = ['a','b','c','d','e','f','g','h'],k = 2
// function RShift(list, k) {
//   let copy = [...list]
//   let n = copy.length

//   if (k % n === 0) return

//   for (let i = 0; i < n; i++) {
//     list[i] = copy[(k + i) % n] 
//     // 1 [c, b, c, d...]
//     // 2 [c, d, c, d, e,f...]
//     // 3 [c, d, e, d, e, f...]
//     // 4 [c, d, e, f, e, f...]
//     // 5 [c, d, e,f, g, f, g, h]
//     // 6 [c, d, e, f, g, h, g, h]
//     // 7 [c, d, e, f, g, h, a, h]
//     // 8 [c, d, e, f, g, h, a, b]
//   }
//   return list
// }

// RShift(arr, k)

// // 解法2 降低空间复杂度 不管时间复杂度

// let arr = ['a','b','c','d','e','f','g','h'],k = 2
// function RShift(list, k) {

//   let n = list.length

//   if (k % n === 0) return

//   let cnt = Math.abs(k > 0 ? k % n: n + (k % n))
//   let t = null

//   while (cnt--) {
//     t = list[n - 1]
//     // 右移一位
//     for (let i = n-1; i > 0; i--) {
//       list[i] = list[i -1]
//     }
//     list[0] = t
//   }
//   return list
// }

// RShift(arr, k)

// 解法3 降低空间复杂度，也尽量减小时间复杂度

// let arr = ['a','b','c','d','e','f','g','h'],k = 2
// function RShift(list, k) {

//   let n = list.length

//   if (k % n === 0) return

//   let i = Math.abs(k > 0 ? k % n: n + (k % n))

//   return list.concat([...list]).slice(n - i, 2 * n -i)
// }

// console.log(RShift(arr, k))

// 解法4   符合题意的答案
let arr = ['a','b','c','d','e','f','g','h'],k = 2
// 先把[0, n - k - 1]翻转

// 然后把[n - k, n - 1]翻转

// 最后把[0, n - 1]翻转
function reverse(list, start, end) {
  let t = null
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start++
    end--
  }
}

function RShift(list, k) {

  let n = list.length

  if (k % n === 0) return
  reverse(list, 0, n - k - 1) // [f, e, d, c, b, a, g, h]
  reverse(list, n - k, n- 1)  // [f, e, d, c, b, a, h, g]
  reverse(list, 0, n - 1)     // [g, h, a, b, c, d, e, f]
  return list
}

console.log(RShift(arr, k))
