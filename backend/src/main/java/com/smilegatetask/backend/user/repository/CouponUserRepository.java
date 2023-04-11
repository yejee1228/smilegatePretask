package com.smilegatetask.backend.user.repository;

import com.smilegatetask.backend.user.vo.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponUserRepository extends CrudRepository<User, Long> {
    User findByCouponCode(String couponCode);
    User findByUserPhone(String userPhone);
}
