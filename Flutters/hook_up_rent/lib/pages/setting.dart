/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-19 16:39:00
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-21 13:18:58
 * @FilePath: \hook_up_rent\lib\pages\setting.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/utils/common_toast.dart';
import 'package:hook_up_rent/routes.dart';

//无状态组件
class SettingPage extends StatelessWidget {
  const SettingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('设置')),
      body: ListView(
        padding: EdgeInsets.only(top: 10.0),
        children: [
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: ElevatedButton(
              child: Text("退出登录"),
              onPressed: () {
                CommonToast.showToast('已经退出登录');
                // Navigator.of(context).pushReplacementNamed('login');
                // Navigator.pushNamed(context, Routes.login);
                // Navigator.of(context).popUntil(ModalRoute.withName('login'));
                Navigator.of(context).pushNamedAndRemoveUntil(
                    "/login", ModalRoute.withName("/login"));
                // Navigator.
              },
            ),
          )
        ],
      ),
    );
  }
}
