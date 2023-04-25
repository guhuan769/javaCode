import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/production/line_detail/line_detail_entity.dart';

var textStyle = TextStyle(color: Colors.white);

class LineDetailControlItem extends StatelessWidget {
  final LineDetailEntity data;
  const LineDetailControlItem({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        height: 100,
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
                          '${data.deviceName}',
                          style: textStyle,
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        Text(
                          '设备状态 ',
                          style: textStyle,
                        ),
                        Text(
                          '${data.runState}',
                          style: textStyle,
                        ),
                      ],
                    ),
                  ],
                )),
              ],
            )
          ],
        ),
      ),
    );
  }
}
