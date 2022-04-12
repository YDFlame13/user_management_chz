package com.user_management.config;

import com.user_management.interceptor.TokenInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static com.user_management.utils.Constant.EXCLUDEPATHS;

@Configuration
public class TokenConfiguration implements WebMvcConfigurer {
    @Bean
    public TokenInterceptor tokenInterceptor(){
        return new TokenInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry ){
        registry.addInterceptor(tokenInterceptor()).addPathPatterns("/**").excludePathPatterns(EXCLUDEPATHS);
        //配置生成器：添加一个拦截器，拦截路径为API以后的路径
    }
}

