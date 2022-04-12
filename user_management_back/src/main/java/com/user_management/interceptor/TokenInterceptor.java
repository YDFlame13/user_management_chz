package com.user_management.interceptor;

import com.user_management.mapper.AdminTokenMapper;
import com.user_management.model.AdminToken;
import com.user_management.utils.Result;
import com.user_management.utils.TokenCreater;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.Date;

import static com.user_management.utils.Constant.EXCLUDEPATHS;
import static com.user_management.utils.Constant.HEADERNAME;

public class TokenInterceptor implements HandlerInterceptor {
    @Autowired
    private AdminTokenMapper adminTokenMapper;

    //提供查询
    @Override
    public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
            throws Exception {}
    @Override
    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
            throws Exception {}
    @Override
    public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2) throws Exception {
        //普通路径放行
        for(int i=0;i<EXCLUDEPATHS.length;++i){
            if(EXCLUDEPATHS[i].equals(arg0.getRequestURI()))return true;
        }

        //权限路径拦截
        arg1.setCharacterEncoding("UTF-8");
        final String headerToken=arg0.getHeader(HEADERNAME);
        //判断请求信息
        if(null==headerToken||headerToken.trim().equals("")){
            PrintWriter resultWriter=arg1.getWriter();
            Result result=new Result(0,"你没有访问权限,请先登录！",null);
            resultWriter.write(result.toString());
            return false;
        }

        //解析Token信息
        try {
            Claims claims = Jwts.parser().setSigningKey(TokenCreater.generalKey()).parseClaimsJws(headerToken).getBody();
            String tokenUserId=(String)claims.get("jti");
            int itokenUserId=Integer.parseInt(tokenUserId);
            //根据客户Token查找数据库Token
            AdminToken myToken=adminTokenMapper.selectByAdminid(itokenUserId );

            //数据库没有Token记录
            if(null==myToken) {
                PrintWriter resultWriter=arg1.getWriter();
                Result result=new Result(0,"你没有访问权限,请先登录！",null);
                resultWriter.write(result.toString());
                return false;
            }
            //数据库Token与客户Token比较
            if( !headerToken.equals(myToken.getToken()) ){
                PrintWriter resultWriter=arg1.getWriter();
                Result result=new Result(0,"你没有访问权限,请先登录！",null);
                resultWriter.write(result.toString());
                return false;
            }
            //判断Token过期
            Date tokenDate=(Date)claims.getExpiration();
            int chaoshi=(int)(new Date().getTime()-tokenDate.getTime());
            if(chaoshi>=0){
                PrintWriter resultWriter=arg1.getWriter();
                Result result=new Result(0,"访问权限过期,请重新登录！",null);
                resultWriter.write(result.toString());
                return false;
            }

        } catch (Exception e) {
            PrintWriter resultWriter=arg1.getWriter();
            e.printStackTrace();
            Result result=new Result(0,"你没有访问权限,请先登录！",null);
            resultWriter.write(result.toString());
            return false;
        }
        //最后才放行
        return true;
    }
}

