package com.smilegatetask.backend.admin.repository;

import com.smilegatetask.backend.user.vo.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CouponAdminRepository extends CrudRepository<User, Long>{
    List<User> findAllByUserNameLike(String userName);
    List<User> findAllByUserPhoneLike(String userPhone);
}
