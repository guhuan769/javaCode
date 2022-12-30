package com.itgh.test;

import com.itgh.dao.UserDao;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/*
 * Spring测试 需要引用 junit包
 * */


public class SpringTest {
    @Test
    //测试scope属性
    public void test1()
    {
        //获取到配置得Spring .xml文件
        //ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");

        //使用自己接收可以使用close方法 。
        ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //拿到applicationContext.xml得bean Id "UserDao"
        UserDao u1 = (UserDao)app.getBean("UserDao");
        //那我要测试这个对象一个还是多个在容器当中
        //此处输出的地址如果不一样就自己去设置applicationContext.xml中的bean scope属性来决定到底是多实例还是单例
        System.out.println(u1);
        //app.close();
    }
}
