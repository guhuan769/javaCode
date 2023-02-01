/*
 * @Author: Elon Snyder
 * @Date: 2023-02-01 08:49:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-02-01 09:29:37
 * @Description:
 * @FilePath: \React\myapp-dva\mock\api.js
 */
export default {
  'GET /users': { name: "POkerwin", age: 100, location: "1232321" }
  ,
  'POST /users/login': (req, res) => {
    console.log("api", req.body)
    if (req.body.username === 'elon' && req.body.username === '123') {

      res.send({
        ok: 1
      })
    }
    else{
      res.send({
        ok: 0
      })
    }
  }
}
