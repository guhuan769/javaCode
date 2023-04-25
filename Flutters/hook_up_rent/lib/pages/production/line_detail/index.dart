/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-24 15:35:30
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-24 15:48:10
 * @FilePath: \hook_up_rent\lib\pages\production\line_detail\index.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import 'package:flutter/material.dart';

class LineDetail extends StatefulWidget {
  final String detailId;
  const LineDetail({super.key, required this.detailId});

  @override
  State<LineDetail> createState() => _LineDetailState();
}

class _LineDetailState extends State<LineDetail> {
  @override
  void initState() {
    //初始化数据
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${widget.detailId}'),
      ),
    );
  }
}
