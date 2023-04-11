package com.smilegatetask.backend.user.service;

import com.smilegatetask.backend.user.vo.User;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public interface CouponUserService {
    Map<String, Object> instUser(User user);
}
