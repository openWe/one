package com.zhy.one.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

        /**
         * 测试视图解析器
         */
        @RequestMapping("/hello")
        public String hello(Model model) {
            String name = "zhy";
            model.addAttribute("name", name);
            return "hello";
        }
}
