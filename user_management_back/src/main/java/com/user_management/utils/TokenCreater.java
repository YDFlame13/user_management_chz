package com.user_management.utils;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.Date;

import static com.user_management.utils.Constant.KEYWORD;

public class TokenCreater {

    //生成密钥
    public static SecretKey generalKey(){
        Base64.Decoder decoder=Base64.getMimeDecoder();
        byte[] encodedKey= decoder.decode(KEYWORD);
        SecretKey key=new SecretKeySpec(encodedKey,0,encodedKey.length,"AES");
        return key;
    }

    //创建Token
    public static String createToken(final int id,final String name,final Long expireMills){

        //定义生成签名的算法
        SignatureAlgorithm algorithm=SignatureAlgorithm.HS256;
        //定义生成签名的密钥
        SecretKey key=generalKey();

        Date now=new Date();
        //借助第三方依赖组件jwt的api实现
        JwtBuilder jwtBuilder= Jwts.builder()
                //管理员id
                .setId(String.valueOf(id))
                //管理员账户名
                .setSubject(name)
                //签发者
                .setIssuer(KEYWORD)
                //签发时间
                .setIssuedAt(now)
                //签发时指定 加密算法、密钥
                .signWith(algorithm,key);
        //设定过期时间
        if(expireMills>=0){
            Long realExpire=System.currentTimeMillis()+expireMills;
            jwtBuilder.setExpiration(new Date(realExpire));
        }

        //生成token
        return jwtBuilder.compact();
    }
}