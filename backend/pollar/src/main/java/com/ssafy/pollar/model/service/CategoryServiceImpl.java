package com.ssafy.pollar.model.service;

import com.ssafy.pollar.domain.entity.Category;
import com.ssafy.pollar.model.dto.CategoryDto;
import com.ssafy.pollar.model.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;

    @Override
    public List<CategoryDto> getAllCategories() throws Exception {
        List<Category> clist = categoryRepository.findAll();

        List<CategoryDto> list = new ArrayList<>();
        for (Category cate: clist) {
            CategoryDto temp= new CategoryDto(cate);
            list.add(temp);
        }

        return list;
    }
}
