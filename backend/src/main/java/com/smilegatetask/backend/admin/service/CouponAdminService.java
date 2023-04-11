package com.smilegatetask.backend.admin.service;

import com.smilegatetask.backend.user.vo.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CouponAdminService {
    List<User> getCouponList();
}
