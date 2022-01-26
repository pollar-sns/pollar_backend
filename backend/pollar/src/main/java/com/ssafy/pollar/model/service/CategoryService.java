package com.ssafy.pollar.model.service;

import com.ssafy.pollar.model.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
    List<CategoryDto> getAllCategories()throws Exception;
}
