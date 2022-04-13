package com.user_management.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.user_management.mapper.StudentMapper;
import com.user_management.model.Student;
import com.user_management.service.StudentService;
import com.user_management.utils.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentMapper studentMapper;

    //添加学生
    @Override
    public boolean studentAdd(Student student){
        if(studentMapper.insertSelective(student)==1){
            return true;
        }
        return false;
    }

    //删除学生
    @Override
    public boolean studentDelete(Integer id){
        if(studentMapper.deleteByPrimaryKey(id)==1){
            return true;
        }
        return false;
    }

    //修改学生信息
    @Override
    public boolean studentUpdate(Student student){
        if(studentMapper.updateByPrimaryKeySelective(student)==1){
            return true;
        }
        return false;
    }

    //按姓名模糊查询学生
    @Override
    public PageInfo<Student> studentFind(Entity entity){
        if(entity.getPage()!=null){
            PageHelper.startPage(entity.getPage(),entity.getLimit());
        }
        PageInfo<Student> students=new PageInfo(studentMapper.selectByKeyword(entity.getKeyword()));
        return students;
    }

    //遍历学生
    @Override
    public PageInfo<Student> studentAll(Entity entity){
        if(entity.getPage()!=null){
            PageHelper.startPage(entity.getPage(),entity.getLimit());
        }
        PageInfo<Student> students=new PageInfo(studentMapper.selectAll());
        return students;
    }
}
