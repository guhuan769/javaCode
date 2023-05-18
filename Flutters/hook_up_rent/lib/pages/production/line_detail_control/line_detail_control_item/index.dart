/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-25 14:14:37
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-05-18 13:35:18
 * @FilePath: \hook_up_rent\lib\pages\production\line_detail_control\line_detail_control_item\index.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/charts/horizontal_bar_label_chart.dart';
import 'package:hook_up_rent/pages/production/line_detail/line_detail_entity.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:hook_up_rent/pages/production/line_detail_control/line_detail_control_item/control_Item_item.dart';

var textStyle = TextStyle(color: Colors.white);

class LineDetailControlItem extends StatefulWidget {
  final LineDetailEntity data;

  const LineDetailControlItem({super.key, required this.data});

  @override
  State<LineDetailControlItem> createState() => _LineDetailControlItemState();
}

class _LineDetailControlItemState extends State<LineDetailControlItem> {
  // late TabController _tabController;
  List tabs = ["步骤1", "步骤2", "步骤3"];
  bool IsShow = false;
  late Timer _timer;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      // Your code here
    });
  }

  //根据线路ID 查询相关信息
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        padding: EdgeInsets.only(left: 8, right: 8, bottom: 15, top: 0),
        decoration: BoxDecoration(color: Colors.green),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                    child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Text(
                          '设备名称 ',
                          style: textStyle,
                        ),
                        Text(
                          '${widget.data.deviceName}',
                          style: textStyle,
                        ),
                        // Expanded(
                        //   child: Text("123321"),
                        // ),
                        Expanded(
                            child: Container(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              Row(
                                children: [
                                  // Text('更多 ', style: textStyle),
                                  TextButton(
                                    child: Text('更多', style: textStyle),
                                    onPressed: () {
                                      setState(() {
                                        IsShow = !IsShow;
                                      });
                                    },
                                  ),
                                ],
                              )
                            ],
                          ),
                        ))
                      ],
                    ),
                    Row(
                      children: [
                        Text(
                          '设备状态 ',
                          style: textStyle,
                        ),
                        Text(
                          '${widget.data.runState}',
                          style: textStyle,
                        ),
                      ],
                    ),
                    if (IsShow)
                      Container(
                          margin: EdgeInsets.only(top: 5),
                          // decoration: BoxDecoration(color: Colors.red),
                          height: 400,
                          child: Center(
                            child: MaterialApp(
                              home: DefaultTabController(
                                length: tabs.length,
                                initialIndex: 0,
                                child: Scaffold(
                                  appBar: AppBar(
                                    backgroundColor: Colors.green,
                                    // toolbarHeight: 20,
                                    title: Text("工序管理"),
                                    bottom: TabBar(
                                        tabs: tabs
                                            .map((e) => Tab(
                                                  text: e,
                                                ))
                                            .toList()),
                                  ),
                                  body: Container(
                                    child: TabBarView(
                                      children: tabs
                                          .map((e) => Tab(
                                                text: e,
                                              ))
                                          .toList(),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ))
                  ],
                )),
              ],
            )
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    // TODO: implement dispose
    _timer.cancel();
    super.dispose();
  }
}
