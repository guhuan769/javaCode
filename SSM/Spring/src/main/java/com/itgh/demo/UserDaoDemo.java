package com.itgh.demo;

import com.itgh.dao.UserDao;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserDaoDemo {
    public static void main(String[] args) {
        //获取到配置得Spring .xml文件
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //拿到applicationContext.xml得bean Id "UserDao"
        UserDao u = (UserDao)app.getBean("UserDao");
        u.save();
    }
}
