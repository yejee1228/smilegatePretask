package com.smilegatetask.backend.admin.service;

import com.smilegatetask.backend.admin.repository.CouponAdminRepository;
import com.smilegatetask.backend.user.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CouponAdminServiceImpl implements CouponAdminService{

    @Autowired
    CouponAdminRepository couponAdminRepository;
    @Override
    public List<User> getCouponList() {
        return (List<User>)couponAdminRepository.findAll();
    }

    @Override
    public List<User> getCouponListByUserName(String userName) {
        return couponAdminRepository.findAllByUserNameLike("%"+userName+"%");
    }

    @Override
    public List<User> getCouponListByUserPhone(String userPhone) {
        return couponAdminRepository.findAllByUserPhoneLike("%"+userPhone+"%");
    }


}
