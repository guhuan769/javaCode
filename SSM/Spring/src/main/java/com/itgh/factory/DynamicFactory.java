package com.itgh.factory;

import com.itgh.dao.Impl.UserDaoImpl;
import com.itgh.dao.UserDao;

public class DynamicFactory {
    public  UserDao getUserDao() {
        return new UserDaoImpl();
    }
}
