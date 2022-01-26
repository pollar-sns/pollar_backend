package com.ssafy.pollar.controller;

import com.ssafy.pollar.model.dto.CategoryDto;
import com.ssafy.pollar.model.service.CategoryService;
import com.sun.org.apache.regexp.internal.RE;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@CrossOrigin
public class CategoryController {

    private final CategoryService categoryService;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @ApiOperation(value="모든 카테고리리스트")
    @GetMapping
    public ResponseEntity<List<CategoryDto> > getAllCategories () throws Exception{
        logger.info("getcates");
        List<CategoryDto> list = categoryService.getAllCategories();
        return new ResponseEntity<List<CategoryDto> >(list, HttpStatus.OK);
    }



}
