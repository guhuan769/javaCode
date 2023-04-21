/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-20 16:33:54
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-20 18:12:47
 * @FilePath: \hook_up_rent\lib\widgets\search_bar\index.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEs
 */
import 'package:flutter/material.dart';
import 'package:hook_up_rent/widgets/common_image.dart';

class SearchBarCustom extends StatefulWidget {
  final bool showLoaction; //展示位置按钮
  final Function? goBackCallback; //回退按钮函数
  final String? inputValue; //搜索框输入值
  final String? defaultInputValue; //搜索框默认值
  final Function? onChancel; //取消按钮、
  final bool? showMap; //展示地图按钮
  final Function? onSearch; //用户点击搜索框触发
  final ValueChanged<String>? onSearchSubmit; //用户输入关键词后点击

  const SearchBarCustom(
      {super.key,
      this.showLoaction = false,
      this.goBackCallback,
      this.inputValue,
      this.defaultInputValue,
      this.onChancel,
      this.showMap,
      this.onSearch,
      this.onSearchSubmit}); //用户输入上搜索词后，点击

  @override
  State<SearchBarCustom> createState() => _SearchBarState();
}

class _SearchBarState extends State<SearchBarCustom> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        children: [
          if (widget.showLoaction != null ||
              true) //widget.showLoaction != null ||
            Padding(
              padding: const EdgeInsets.only(right: 10),
              child: GestureDetector(
                onTap: () {},
                child: Row(
                  children: [
                    Icon(
                      Icons.room,
                      color: Colors.green,
                      size: 16,
                    ),
                    Text(
                      '123',
                      style: TextStyle(color: Colors.black, fontSize: 16),
                    )
                  ],
                ),
              ),
            ),
          if (widget.goBackCallback != null || true)
            Padding(
              padding: const EdgeInsets.only(right: 10),
              child: GestureDetector(
                onTap: () {
                  widget.goBackCallback;
                },
                child: Icon(
                  Icons.chevron_left,
                  color: Colors.black87,
                ),
              ),
            ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.only(right: 10),
              child: TextField(
                textInputAction: TextInputAction.search,
                style: TextStyle(fontSize: 14),
                textAlign: TextAlign.start,
                decoration: InputDecoration(hintText: '请输入搜索词'),
              ),
            ),
          ),
          if (widget.onChancel != null || true)
            GestureDetector(
              onTap: () {
                widget.onChancel;
              },
              child: Padding(
                padding: const EdgeInsets.only(right: 10),
                child: Text(
                  '取消',
                  style: TextStyle(color: Colors.black, fontSize: 16),
                ),
              ),
            ),
          if (widget.showMap != null || true)
            CommonImage(
              'static/images/地图灰色.png',
              width: 16,
              height: 16,
            )
        ],
      ),
    );
  }
}
