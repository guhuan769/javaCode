import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/production/line_detail/line_detail_entity.dart';
import 'package:hook_up_rent/pages/production/line_detail_control/line_detail_control_item/index.dart';

class LineDetailControl extends StatelessWidget {
  final bool showTitle;
  final List<LineDetailEntity>? dataList;
  LineDetailControl({super.key, required this.showTitle, this.dataList});

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
                '设备列表',
                style:
                    TextStyle(color: Colors.black, fontWeight: FontWeight.w600),
              ),
            ),
          Column(
            children: [
              if (dataList!.length == 0) Text('没有相关信息'),
            ],
          ),
          Column(
            children: dataList!
                .map((e) => LineDetailControlItem(
                      data: e,
                    ))
                .toList(),
          )
        ],
      ),
    );
  }
}
