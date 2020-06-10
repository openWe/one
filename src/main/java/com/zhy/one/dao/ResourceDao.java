package com.zhy.one.dao;

import com.zhy.one.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ResourceDao extends JpaRepository<Resource, Integer> {
    @Query(value = "SELECT rs.resource_url FROM sys_role_resource AS rr " +
            "INNER JOIN sys_resource AS rs ON rr.resource_id = rs.id " +
            "INNER JOIN sys_role AS r ON rr.role_id = r.id " +
            "INNER JOIN sys_user AS u ON u.role_id = r.id WHERE u.id = :userid ", nativeQuery = true)
    List<String> findByUserid(@Param("userid") Integer userid);
}
