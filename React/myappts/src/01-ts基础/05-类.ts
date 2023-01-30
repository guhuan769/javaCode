/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 11:23:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 11:43:34
 * @Description: 
 * @FilePath: \React\myappts\src\01-ts基础\05-类.ts
 */
class Bus {
    //私有属性 只能通过方法进行访问
   private list: any = []
    subscribe(cb: any) {
        this.list.push(cb)
    }
    dispatch() {
        this.list.forEach((cb: any) => {
            cb && cb()
        });
    }
}
var obj = new Bus()

obj.subscribe(()=>{
    
})

class Child extends Bus{

}

export default {}

