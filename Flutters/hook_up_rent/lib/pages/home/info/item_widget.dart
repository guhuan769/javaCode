/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-19 09:52:18
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-19 10:31:07
 * @FilePath: \hook_up_rent\lib\pages\home\info\item_widget.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'package:flutter/material.dart';
import 'package:hook_up_rent/pages/home/info/data.dart';
import 'package:hook_up_rent/widgets/common_image.dart';

var textStyle = TextStyle(color: Colors.black54);

class ItemWidget extends StatelessWidget {
  final infoItem data;

  const ItemWidget({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100.0,
        padding: EdgeInsets.only(left: 10.0, right: 10.0, bottom: 10.0),
        child: Row(
          children: [
            // CommonImage(
            //   data.imageUri,
            //   width: 120.0,
            //   height: 90.0,
            // ),
            Padding(padding: EdgeInsets.only(left: 10.0)),
            Expanded(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      data.title,
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        color: Colors.black,
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(data.source,style: textStyle,),
                        Text(data.time,style: textStyle,),
                      ],
                    )
                  ],
                )),
          ],
        ));
  }
}
