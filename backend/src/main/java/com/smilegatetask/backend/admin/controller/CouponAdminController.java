package com.smilegatetask.backend.admin.controller;

import com.smilegatetask.backend.admin.service.CouponAdminService;
import com.smilegatetask.backend.user.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CouponAdminController {

    @Autowired
    CouponAdminService couponAdminService;

    @GetMapping("/admin/coupon/list")
    public List<User> getCouponList(@RequestParam(required = false) String userName, @RequestParam(required = false) String userPhone) {
        if(userName != null){
            return couponAdminService.getCouponListByUserName(userName);
        } else if(userPhone != null){
            return couponAdminService.getCouponListByUserPhone(userPhone);
        }else{
            return couponAdminService.getCouponList();
        }
    }
}
