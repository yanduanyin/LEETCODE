/** 
 * 最近最少使用原则
 * @param capacity:number  容量
*/
var LRUCache = function(capacity){
    this.capacity = capacity;//空间的上限
    this.arr = [];//数据结构
    this.obj = {};//3 , 3
    // 使用的空间  arr.length  push 
    //get
};
LRUCache.prototype.get = function(key) {
    // 调整优先级

    return -1;
}
LRUCache.prototype.set = function() {

}
new LRUCache(2);

// []  
// [1]  push 
// [2]  push 
// [1, 2] 在哪端是最近最常用？  push
// get(1) 读操作
// 1. 找到所在的位置， 从原来的数组移除， push到队尾  不会带来空间使用量的增加
// [2,1]
// put(3)  带来空间的分配  回收空间？ 最近最少使用的(length >= 容量  shift )     push(3) 
//

