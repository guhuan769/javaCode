/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-05-20 09:07:59
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-05-20 14:06:19
 * @FilePath: \hook_up_rent\lib\pages\production\line_detail_control\line_process_management.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/home/info/data.dart';
import 'package:hook_up_rent/pages/production/line_detail_control/entity/ProcessManagementByCodeResponse.dart';
import 'package:hook_up_rent/pages/utils/common_toast.dart';
import 'package:hook_up_rent/pages/utils/dio_http.dart';
import 'package:hook_up_rent/pages/utils/store.dart';

var textStyle = const TextStyle(
  color: Colors.white,
);

class LineProcessManagement extends StatefulWidget {
  final String detailId;
  const LineProcessManagement({super.key, required this.detailId});

  @override
  State<LineProcessManagement> createState() => _LineProcessManagementState();
}

class _LineProcessManagementState extends State<LineProcessManagement> {
  // List tabs = ["步骤1", "步骤2", "步骤3"];
  List<ProcessManagementByCodeResponse> tabs = [];
  bool IsShow = false;
  int i = 0;
  late Timer _timer;
  @override
  void initState() {
    // TODO: implement initState
    _onLoading();
    _timer = Timer.periodic(const Duration(seconds: 3), (timer) async {
      // CommonToast.showToast("msg");
      i = 0;
      _onLoading();
    });
    // Future.delayed(Duration(seconds: 2), () => _onLoading());
    super.initState();
  }

  void _onLoading() async {
    Store store = await Store.getInstance();
    var token = await store.getString(StoreKeys.token);
    const url = '/api/LineProcessManagementByCode'; //查询工序步骤
    var params = {'key': widget.detailId};
    var res = await DioHttp.of(context).putFormData(url, params, token);
    var resMap = json.decode(res.toString());
    setState(() {
      tabs = [];
      for (var json in resMap["data"]) {
        tabs.add(ProcessManagementByCodeResponse.fromJson(json));
        var jsonResMap = json["pubProcessManagements"];
        for (var jsonentity in jsonResMap) {
          var entity = CustomPubProcessManagementForm.fromJson(jsonentity);
          tabs[i].pubProcessManagements.add(entity);
        }
        i++;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.all(8),
        // decoration: BoxDecoration(color: Colors.red),
        height: 300,
        child: Center(
          child: MaterialApp(
            home: DefaultTabController(
              length: tabs.length,
              initialIndex: 0,
              child: Scaffold(
                appBar: AppBar(
                  backgroundColor: Colors.green,
                  title: const Text("工序管理"),
                  bottom: TabBar(
                      indicatorColor: Colors.white,
                      tabs: tabs
                          .map((e) => Tab(
                                text: e.tName,
                              ))
                          .toList()),
                ),
                body: Container(
                  child: TabBarView(
                    children: tabs
                        .map(
                          (e) => Scrollbar(
                            child: SingleChildScrollView(
                                child: Container(
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: e.pubProcessManagements
                                    .map(
                                      (e) => Container(
                                        decoration: BoxDecoration(
                                            color: Colors.green,
                                            borderRadius:
                                                BorderRadius.circular(5)),
                                        margin: const EdgeInsets.all(8),
                                        padding: const EdgeInsets.only(
                                            left: 3, right: 3),
                                        height: 30,
                                        child: Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            Text('${e.tName} ',
                                                style: textStyle),
                                            Text('${e.runtstatusName}',
                                                style: textStyle),
                                          ],
                                        ),
                                      ),
                                    )
                                    .toList(),
                              ),
                            )),
                          ),
                        )
                        .toList(),
                  ),
                ),
              ),
            ),
          ),
        ));
  }

  @override
  void dispose() {
    // TODO: implement dispose
    _timer.cancel();
    super.dispose();
  }
}
