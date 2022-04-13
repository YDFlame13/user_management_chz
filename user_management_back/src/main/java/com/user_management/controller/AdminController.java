package com.user_management.controller;

import com.user_management.model.Admin;
import com.user_management.service.AdminService;
import com.user_management.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    //登录
    @PostMapping("/login")
    public Object login(@RequestBody Admin admin){
//        System.out.println("/login");

        Admin realAdmin=adminService.selectByUsername(admin.getUsername());
        if(realAdmin==null){
            Result result=new Result(400,"用户名或密码错误，登录失败！",null);
            return result;
        }else {
            if(realAdmin.getPassword().equals(admin.getPassword())){
                String token=adminService.login(realAdmin);
                if(token==null){
                    Result result=new Result(500,"服务器错误，请稍后重试",null);
                    return result;
                }else{
                    Result.LoginBody body=new Result.LoginBody(token);
                    Result result=new Result(200,"登录成功！",body);
                    return result;
                }
            }else {
                Result result=new Result(400,"用户名或密码错误，登录失败！",null);
                return result;
            }
        }
    }

    //注册
    @PostMapping("/register")
    public Object register(@RequestBody Admin admin){
//        System.out.println("/register");

        Admin tempAdmin=adminService.selectByUsername(admin.getUsername());
        if(tempAdmin==null){
            String token=adminService.register(admin);
            if(token==null){
                Result result=new Result(500,"服务器错误，请稍后重试",null);
                return result;
            }else{
                Result.LoginBody body=new Result.LoginBody(token);
                Result result=new Result(200,"登录成功！",body);
                return result;
            }
        }else{
            Result result=new Result(400,"用户名已存在，换一个试试！",null);
            return result;
        }
    }

    //修改密码
    @PostMapping("/update")
    public Object update(@RequestBody Admin admin){
//        System.out.println("/update");

        boolean res=adminService.updatePassword(admin);
        if(res){
            Result result=new Result(200,"修改成功，请重新登录！",null);
            return result;
        }else {
            Result result=new Result(500,"服务器错误，请稍后重试",null);
            return result;
        }
    }

//    @GetMapping("/test")
//    public Object test1(){
//        System.out.println("/test");
//
//        Result result=new Result(1,"awdawdlyvajbwdyafwd",null);
//        return result;
//    }
}
