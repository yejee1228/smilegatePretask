package com.smilegatetask.backend.admin.repository;

import com.smilegatetask.backend.user.vo.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponAdminRepository extends CrudRepository<User, Long>{

}
