package com.itgh.factory;

import com.itgh.dao.Impl.UserDaoImpl;
import com.itgh.dao.UserDao;

/*
 * 工厂**静态**方法实例化
 * */
public class StaticFactory {
    public static UserDao getUserDao() {
        return new UserDaoImpl();
    }
}
