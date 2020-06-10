package com.zhy.one.entity;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "sys_resource")
@Data
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "resource_name")
    private String resourceName;

    @Column(name = "resource_url")
    private String resourceUrl;
}
