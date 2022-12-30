package com.itgh.demo;

import com.itgh.service.UserService;
import com.itgh.service.impl.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class UserController {
    public static void main(String[] args) {
      /*  UserService userService = new UserServiceImpl();
        userService.save();*/
      /*  ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService u = (UserService) applicationContext.getBean("UserService");
        u.save();*/

       /* ApplicationContext applicationContext = new FileSystemXmlApplicationContext("D:\\Code\\javaCode\\SSM\\Spring\\src\\main\\resources\\applicationContext.xml");
        UserService u = (UserService) applicationContext.getBean(   "UserService");
        u.save();*/

        ApplicationContext applicationContext = new FileSystemXmlApplicationContext("D:\\Code\\javaCode\\SSM\\Spring\\src\\main\\resources\\applicationContext.xml");
        /*在application.xml中如果出现多个类型一样并且id不一样 这种情况不建议使用此方法
        *推荐使用根据ID找 UserService u = (UserService) applicationContext.getBean("UserService");
        * */
        UserService u = applicationContext.getBean(UserService.class);
        u.save();

       /* UserService userService = new UserServiceImpl();
        userService.save();*/
    }
}
