import axios from "axios"

//redux-thunk风格
// function getCinemaListAction() {
//     return (
//         (dispatch) => {
//             axios({
//                 url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007",
//                 method: "get",
//                 headers: {
//                     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}',
//                     'X-Host': 'mall.film-ticket.cinema.list'
//                 }
//             }).then(res => {
//                 //打印Log
//                 console.log("getCinemaListActionData", res.data.data.cinemas)
//                 dispatch({
//                     type: "change-list",
//                     payload: res.data.data.cinemas
//                 })
//             }).catch(err => {
//                 console.log(err)
//             })
//         }
//     )

//     // return {
//     //     type: "change-list",
//     //     payload: res.data.data.cinemas
//     // }
// }

// //redux-promise
// function getCinemaListAction() {
//     return axios({
//         url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007",
//         method: "get",
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}',
//             'X-Host': 'mall.film-ticket.cinema.list'
//         }
//     }).then(res => {
//         //打印Log
//         console.log("getCinemaListActionData", res.data.data.cinemas)
//         return ({
//             type: "change-list",
//             payload: res.data.data.cinemas
//         })
//     }).catch(err => {
//         console.log(err)
//     })

//     // return {
//     //     type: "change-list",
//     //     payload: res.data.data.cinemas
//     // }
// }

// es6写法
async function getCinemaListAction() {
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
        return ({
            type: "change-list",
            payload: res.data.data.cinemas
        })
    }).catch(err => {
        console.log(err)
    })
    return list

    // return {
    //     type: "change-list",
    //     payload: res.data.data.cinemas
    // }
}

export default getCinemaListAction
