/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-18 13:04:19
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-20 16:50:48
 * @FilePath: \hook_up_rent\lib\pages\tab_index\index.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE1
 */
import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/home/info/index.dart';
import 'package:hook_up_rent/pages/home/tab_index/index_navigator.dart';
import 'package:hook_up_rent/widgets/search_bar/index.dart';

class TabIndex extends StatelessWidget {
  const TabIndex({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: SearchBarCustom(),
        backgroundColor: Colors.white //Container(
        //child: IconButton(onPressed: () {}, icon: Icon(Icons.add),),
        //decoration:BoxDecoration(color: Colors.red),
        //),
        // body:Text('data')
        ,
      ),
      body: ListView(
        children: [
          IndexNavigator(),
          Info(showTitle: true),
          Text('这里是内容区域'),
        ],
      ),
    );
  }
}
