import 'package:flutter/material.dart';

class ProductionManager extends StatelessWidget {
  const ProductionManager({super.key});

  static const List<Tab> myTabs = <Tab>[
    Tab(text: '线路统计列表'),
    Tab(text: '设备统计列表'),
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: myTabs.length,
      initialIndex: 0,
      child: Scaffold(
        appBar: AppBar(
          bottom: const TabBar(
            tabs: myTabs,
          ),
        ),
        body: TabBarView(children: [
          ListView(
            children: [
              
            ],
          ),
        ]),
      ),
    );
  }
}
