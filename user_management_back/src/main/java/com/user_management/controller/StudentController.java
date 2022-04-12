package com.user_management.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.user_management.model.Student;
import com.user_management.service.StudentService;
import com.user_management.utils.Entity;
import com.user_management.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    //添加学生
    @PostMapping("/student_add")
    public Object studentAdd(@RequestBody Student student){
        if(studentService.studentAdd(student)){
            Result result=new Result(200,"添加成功！",null);
            return result;
        }else{
            Result result=new Result(500,"服务器错误，请稍后重试！",null);
            return result;
        }
    }

    //删除学生
    @PostMapping("/student_delete")
    public Object studentDelete(@RequestBody Integer id){
        if(studentService.studentDelete(id)){
            Result result=new Result(200,"删除成功！",null);
            return result;
        }else{
            Result result=new Result(500,"服务器错误，请稍后重试！",null);
            return result;
        }
    }

    //修改学生信息
    @PostMapping("/student_update")
    public Object studentUpdate(@RequestBody Student student){
        if(studentService.studentUpdate(student)){
            Result result=new Result(200,"删除成功！",null);
            return result;
        }else{
            Result result=new Result(500,"服务器错误，请稍后重试！",null);
            return result;
        }
    }

    //按姓名模糊查询学生
    @PostMapping("/student_find")
    public Object studentFind(@RequestBody Entity entity){
        PageInfo<Student> students=studentService.studentFind(entity);
        if(students==null){
            Result result=new Result(500,"服务器错误，请稍后重试！",null);
            return result;
        }else{
            Result result=new Result(200,"搜索成功！",students);
            return result;
        }
    }

    //遍历学生
    @PostMapping("/student_all")
    public Object studentAll(Entity entity){
        PageInfo<Student> students=studentService.studentAll(entity);
        if(students==null){
            Result result=new Result(500,"服务器错误，请稍后重试！",null);
            return result;
        }else{
            Result result=new Result(200,"成功！",students);
            return result;
        }
    }
}
