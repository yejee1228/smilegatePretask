package com.smilegatetask.backend.admin.controller;

import com.smilegatetask.backend.admin.service.CouponAdminService;
import com.smilegatetask.backend.user.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CouponAdminController {

    @Autowired
    CouponAdminService couponAdminService;

    @GetMapping("/admin/coupon/list")
    public List<User> getCouponList() {
        return couponAdminService.getCouponList();
    }
}
