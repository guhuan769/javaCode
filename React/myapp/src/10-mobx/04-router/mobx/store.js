import axios from 'axios'
import { observable , configure, action, runInAction } from 'mobx'

configure({
    enforceActions: "always"//always 严格模式  //never 
})

//老写法
// const store = observable({
//     isTabbarShow: true,
//     list: [],
//     cityName: "北京",
//     changeShow() {
//         this.isTabbarShow = true
//     },
//     changeHide() {
//         this.isTabbarShow = false
//     }
// }, {
//     changeHide: action,
//     changeShow: action//标记两个方法是action 专门修改可观测2得value
// })

//新写法

class Store {
    //es7 @xxx装饰器得语法 @属于增强

    @observable isTabbarShow = true
    @observable list = []
    @observable cityName = ""

    @action changeShow() {
        this.isTabbarShow = true
    }

    @action changeHide() {
        this.isTabbarShow = false
    }

    @action async getList() {
        console.log("getList")
        var list = await axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            //打印Log
            console.log("getCinemaListActionData", res.data.data.cinemas)
            // runInAction(() => {
            //     this.list = 
            // })
            return res.data.data.cinemas
        })

        runInAction(()=>{
            this.list = list
        })
    }
}

const store = new Store()

export default store 