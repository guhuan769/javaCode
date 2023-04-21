/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-16 15:49:33
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-17 16:09:16
 * @FilePath: \hook_up_rent\lib\pages\login.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import 'package:flutter/material.dart';
import 'package:hook_up_rent/routes.dart';
import 'package:hook_up_rent/widgets/page_content.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

//有状态组件
class _LoginPageState extends State<LoginPage> {
  bool showPassword = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text('登录'),
        ),
      ),
      body: SafeArea(
        minimum: EdgeInsets.all(30),
        //超过高度可以滚动
        child: ListView(
          children: [
            Padding(padding: EdgeInsets.all(10)),
            TextField(
              decoration: InputDecoration(labelText: '用户名', hintText: '请输入用户名'),
            ),
            Padding(padding: EdgeInsets.all(10)),
            TextField(
              obscureText: !showPassword,
              decoration: InputDecoration(
                  labelText: '密码',
                  hintText: '请输入密码',
                  suffixIcon: IconButton(
                      onPressed: () {
                        setState(() {
                          showPassword = !showPassword;
                        });
                      },
                      icon: Icon(showPassword
                          ? Icons.visibility_off
                          : Icons.visibility))),
            ),
            Padding(padding: EdgeInsets.all(10)),
            Container(
              margin: EdgeInsets.all(10),
              child: ElevatedButton(
                child: Text("登录"),
                onPressed: () {
                  Navigator.pushReplacementNamed(context, Routes.home);
                },
                // style: ElevatedButton.styleFrom(padding: EdgeInsets.all(110)),
              ),
            ),
            Padding(padding: EdgeInsets.all(10)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '还没有账号,',
                ),
                TextButton(
                    onPressed: () {
                      Navigator.pushReplacementNamed(context, '/register');
                    },
                    child: Text('去注册~'))
              ],
            )
          ],
        ),
      ),
    );
  }
}
