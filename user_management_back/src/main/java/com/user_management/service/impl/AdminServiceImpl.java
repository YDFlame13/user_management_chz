package com.user_management.service.impl;

import com.user_management.mapper.AdminMapper;
import com.user_management.mapper.AdminTokenMapper;
import com.user_management.model.Admin;
import com.user_management.model.AdminToken;
import com.user_management.service.AdminService;
import com.user_management.utils.TokenCreater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

import static com.user_management.utils.Constant.EXPIREMILLS;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminMapper adminMapper;
    @Autowired
    private AdminTokenMapper adminTokenMapper;

    //根据名字查询管理员
    @Override
    public Admin selectByUsername(String username){
        return adminMapper.selectByUsername(username);
    }

    //登录
    @Override
    @Transactional
    public String login(Admin admin){
        //创建adminToken
        String tokenStr= TokenCreater.createToken(admin.getId(),admin.getUsername(),EXPIREMILLS);
        long now=new Date().getTime();
        AdminToken adminToken=new AdminToken(admin.getId(),tokenStr,now);

        //查询adminToken
        AdminToken oldAdminToken=adminTokenMapper.selectByAdminid(admin.getId());
        if(oldAdminToken==null){
            adminTokenMapper.insertSelective(adminToken);
        }else{
            adminTokenMapper.updateByAdminidSelective(adminToken);
        }
        return tokenStr;
    }

    //注册
    @Override
    @Transactional
    public String register(Admin admin){
        adminMapper.insertSelective(admin);
        admin=adminMapper.selectByUsername(admin.getUsername());
        return login(admin);
    }

    @Override
    @Transactional
    public boolean updatePassword(Admin admin){
        try {
            //修改密码
            adminMapper.updateByUsernameSelective(admin);

            //删除adminToken
            adminTokenMapper.deleteByAdminid(admin.getId());

            return true;
        }catch (Exception e){
            return false;
        }
    }
}
