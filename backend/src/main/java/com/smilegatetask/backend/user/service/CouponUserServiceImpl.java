package com.smilegatetask.backend.user.service;

import com.smilegatetask.backend.user.repository.CouponUserRepository;
import com.smilegatetask.backend.user.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class CouponUserServiceImpl implements CouponUserService{

    @Autowired
    CouponUserRepository couponUserRepository;

    @Override
    public Map<String, Object> instUser(User user) {
        Map<String, Object> map = new HashMap<>();
        User savedUser = couponUserRepository.findByUserPhone(user.getUserPhone());
        if(savedUser != null){
            map.put("user", savedUser);
            map.put("saved", true);
        }else{
            String couponCode = "";
            while(couponCode == "" && couponUserRepository.findByCouponCode(couponCode) == null){
                couponCode = createCoupon(12);
            }
            user.setCouponCode(couponCode);
            user.setInstDate(LocalDateTime.now());
            couponUserRepository.save(user);
            map.put("user", user);
            map.put("saved", false);
        }
            return map;
    }

    public String createCoupon(int codeLength){
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        String newCouponCode = "";

        for (int i = 0; i < codeLength; i++) {
            int randomIndex = (int) Math.floor(Math.random() * chars.length());
            newCouponCode += chars.charAt(randomIndex);
        }
        return newCouponCode;
    }
}
