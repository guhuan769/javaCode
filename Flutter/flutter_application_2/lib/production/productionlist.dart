import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:dio/dio.dart' as http

Dio dio = new Dio();

class ProductionList extends StatefulWidget {
  //固定写法
  // ProductionList({Key key}) : super(key: key);
  ProductionList({required this.type});

  //类型
  final String type;
  @override
  _ProductionListState createState() {
    return new _ProductionListState();
  }
}

//有状态控件必须结合一个状态管理类，来进行实现
class _ProductionListState extends State<ProductionList> {
  //渲染当前这个 MovieList 控件得UI结构
  //默认显示第一页数据
  int page = 1;
  //每页显示的数据条数
  int pageSize = 10;
  // 数据
  var list = [];

  var total = 0;

//控件被创建的时候，会执行 initState
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getProductionList();
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Text('数据列表 ---' + widget.type);
  }

  getProductionList() {
    //js 中有模板字符串
    //偏移量计算公式 (page-1)* pageSize
    int offset = (page - 1) * pageSize;
    //
    var response = dio.post(
        'https://localhost:44332/api/LoginLoginByUserNameAndPwd',
        data: {'userName': 'super', 'password': '12345678'});
    //服务器返回数据
    // var result = response.data;
    print(123);
    // print(response.data);
  }
}
