import 'dart:math';
import 'package:flutter/material.dart';
// 导入数据统计页面
import 'production/productionlist.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Elon Snyder',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.purple),
        useMaterial3: true,
      ),
      //通过 Home 指定首页
      home: MyHome(),
      //const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //在Flutter中，每个控件，都是一个类
    return DefaultTabController(
        length: 3,
        child: Scaffold(
          //导航栏
          appBar: AppBar(
            title: Text("列表"),
            centerTitle: true,
            actions: <Widget>[
              IconButton(
                  icon: Icon(Icons.search),
                  onPressed: () {
                    log(1);
                  })
            ],
          ),
          //侧边栏
          drawer: Drawer(
            child: ListView(padding: EdgeInsets.all(0), children: <Widget>[
              UserAccountsDrawerHeader(
                accountName: Text('Elon Snyder'),
                accountEmail: Text('abc@qq.com'),
                currentAccountPicture: CircleAvatar(
                  backgroundImage:
                      AssetImage('assets/images/bj.jpg'), //NetworkImage
                ),
                // 美化当前控件的, 该属性每个控件应该都有
                decoration: const BoxDecoration(
                  //背景图片
                  image: DecorationImage(
                    image: AssetImage('assets/images/bj.jpg'),
                    fit: BoxFit.cover, //填充
                  ),
                ),
              ),
              ListTile(
                title: Text('用户反馈'),
                trailing: Icon(Icons.feedback),
              ),
              ListTile(
                title: Text('系统设置'),
                trailing: Icon(Icons.settings),
              ),
              ListTile(
                title: Text('我要发布'),
                trailing: Icon(Icons.send),
              ),
              //分割线控件
              Divider(
                  // color: Colors.red,
                  ),
              ListTile(
                title: Text('注销'),
                trailing: Icon(Icons.exit_to_app),
              ),
            ]),
          ),
          //底部tabBar
          bottomNavigationBar: Container(
            //美化当前得Container盒子
            decoration: BoxDecoration(color: Colors.black),
            //一般在手机上高度都是50
            height: 50,
            child: TabBar(
              labelStyle: TextStyle(height: 0, fontSize: 10),
              tabs: <Widget>[
                Tab(
                  // icon: Icon(Icons.movie_filter),
                  // text: '正在热映',
                  icon: Icon(Icons.data_thresholding_rounded),
                  text: '数据统计',
                ),
                Tab(
                  icon: Icon(Icons.movie_creation),
                  text: '222',
                ),
                Tab(
                  icon: Icon(Icons.local_movies),
                  text: '333',
                )
              ],
            ),
          ),
          body: TabBarView(children: <Widget>[
            ProductionList(
              type: '1',
            ),
            ProductionList(
              type: '3',
            ),
            ProductionList(
              type: '4',
            ),
          ]),
        ));
  }
}
