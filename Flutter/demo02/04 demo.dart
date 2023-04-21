/*
 * @Author: guhuan769 769540542@qq.com
 * @Date: 2023-04-14 16:45:56
 * @LastEditors: guhuan769 769540542@qq.com
 * @LastEditTime: 2023-04-14 17:27:54
 * @FilePath: \Flutter\demo02\04 demo.dart
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Dart的命名规则:
// 1、变量名称必须由数字、字母、下划线和美元符($)组成。
// 2.注意:标识符开头不能是数宁了
// 3.标识符不能是保留字和关键字
// 4.变量的名字是区分大小写的如: age和Age是不同的变量。在实际的运用中,也建议,不要用一个5、标识符(变量名称)一定要见名思意 : 变量名称建议用名词，方法名称建议用动词

void main() {
  var str1 = '123';
  //  var 2str = 'XXX';

  final a = new DateTime.now();

  var age = 20;
  var Age = 30;
  print(a);
  String str2 = '''
          21321321321
          132132132123
        ''';
  print(str2);
  print(str1 + str2);
  //2、第二种定义List得方式 指定类型
  var l2 = <String>["张三", "123"];
  print(l2);

  var l3 = <int>[1, 2];
  print(l3);

  //第三种定义List得方式 增加数据
  var l4 = [];

  l4.add("里斯");
  l4.add(2);
  print(l4);
  print(l4.length);
}
