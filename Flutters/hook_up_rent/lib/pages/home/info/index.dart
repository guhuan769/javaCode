import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/home/info/data.dart';
import 'package:hook_up_rent/pages/home/info/item_widget.dart';

class Info extends StatelessWidget {
  final bool showTitle;
  final List<infoItem> dataList;
  const Info({super.key, this.showTitle = false, this.dataList = infoData});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          if (showTitle)
            Container(
              alignment: Alignment.centerLeft,
              padding: EdgeInsets.all(10.0),
              child: Text(
                '列表',
                style:
                    TextStyle(color: Colors.black, fontWeight: FontWeight.w600),
              ),
            ),
          Column(
            children: dataList
                .map((item) => ItemWidget(
                          data: item,
                        )
                    // Container(
                    //       height: 100,
                    //       margin: EdgeInsets.only(bottom: 10.0),
                    //       decoration: BoxDecoration(color: Colors.red),
                    // )
                    )
                .toList(),
          )
        ],
      ),
    );
  }
}
