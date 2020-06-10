-- 初始化
DROP TABLE sys_user;
DROP TABLE sys_role;
DROP TABLE sys_resource;
DROP TABLE sys_role_resource;

-- 用户信息表
CREATE TABLE sys_user
(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '用户编号',
    username VARCHAR(10) NOT NULL COMMENT '用户名称',
    password VARCHAR(10) NOT NULL COMMENT '用户密码',
    role_id INT NOT NULL COMMENT '角色编号'
);

INSERT INTO sys_user VALUES(NULL, 'admin', '123', 1), (NULL, 'leader', '456', 2), (NULL, 'employee', '789', 3);

SELECT * FROM sys_user;

-- 角色信息表
CREATE TABLE sys_role
(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '角色编号',
    role_name VARCHAR(10) NOT NULL COMMENT '角色名称'
);

INSERT INTO sys_role VALUES(NULL, '管理员'), (NULL, '领导'), (NULL, '员工');

SELECT * FROM sys_role;

-- 资源信息表
CREATE TABLE sys_resource
(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '资源编号',
    resource_name VARCHAR(10) NOT NULL COMMENT '资源名称',
    resource_url VARCHAR(50) NOT NULL COMMENT '资源URL'
);

INSERT INTO sys_resource VALUES
(NULL, '公共模块', 'publicModule'),
(NULL, '领导模块', 'leaderModule'),
(NULL, '管理员模块', 'adminModule');

SELECT * FROM sys_resource;

-- 角色资源关联表
CREATE TABLE sys_role_resource
(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '关联编号',
    role_id INT NOT NULL COMMENT '角色编号',
    resource_id INT NOT NULL COMMENT '资源编号'
);

INSERT INTO sys_role_resource VALUES
(NULL, 1, 1), (NULL, 1, 2), (NULL, 1, 3),
(NULL, 2, 1), (NULL, 2, 2),
(NULL, 3, 1);

SELECT * FROM sys_role_resource;

-- 获取用户能访问的资源URL
SELECT u.id, rs.resource_url
FROM sys_role_resource AS rr
INNER JOIN sys_resource AS rs ON rr.resource_id = rs.id
INNER JOIN sys_role AS r ON rr.role_id = r.id
INNER JOIN sys_user AS u ON u.role_id = r.id
WHERE u.id = 1;