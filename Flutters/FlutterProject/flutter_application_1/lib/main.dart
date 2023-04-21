/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-15 09:44:39
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-15 13:17:52
 * @FilePath: \flutter_application_1\lib\main.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//导入相关的控件
import 'package:flutter/material.dart';

//入口函数
void main() {
  runApp(const MainApp());
}

//无状态控件  | 有状态控件
class MainApp extends StatelessWidget {
  const MainApp({super.key});

//无状态控件必须有build
  @override
  Widget build(BuildContext context) {
    //每个项目最外层，必须有 MaterialApp
    return const MaterialApp(
      title: "Flutter Demo1111",
      theme: ThemeData(
        primaryrSwatch: Colors.red
        ),
      home: Scaffold(
        body: Center(
          child: Text('Hello12 Word'),
        ),
      ),
    );
  }
}
