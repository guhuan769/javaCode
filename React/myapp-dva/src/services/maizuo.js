/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 20:00:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 20:06:53
 * @Description:
 * @FilePath: \React\myapp-dva\src\services\maizuo.js
 */

import request from '../utils/request'

export function getCinemaListService() {
  return request("https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3792010",
    {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }
  )
}
