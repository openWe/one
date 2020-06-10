package com.zhy.one.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "sys_role")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "role_name")
    private String roleName;

    @ManyToMany
    @JoinTable(name = "sys_role_resource",
            joinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "none"))},
            inverseJoinColumns = {@JoinColumn(name = "resource_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "none"))})
    private Set<Resource> resources;


}
