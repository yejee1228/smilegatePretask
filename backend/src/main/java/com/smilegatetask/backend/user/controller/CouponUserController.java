package com.smilegatetask.backend.user.controller;

import com.smilegatetask.backend.user.service.CouponUserService;
import com.smilegatetask.backend.user.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class CouponUserController {
    @Autowired
    CouponUserService couponUserService;

    @PostMapping("/user")
    public Map<String, Object> instUser(@RequestBody User user) {
        return couponUserService.instUser(user);
    }
}
