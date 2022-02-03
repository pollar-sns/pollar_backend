import { useEffect, useState } from 'react';
import { getAllCategories } from '../../services/api/CategoryApi';
import { Chip, List, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function SelectInterests({ signupInfo }) {
  // 전체 카테고리
  const [categoryList, setCategoryList] = useState([]);
  // 사용자 선택 관심분야
  const [interestList, setInterestList] = useState([]);

  const getList = async () => {
    const list = await getAllCategories();
    setCategoryList(list);
  };

  /* 관심분야 선택 해제 */
  const handleDelete = (categoryNameSmall) => {
    const filteredList = interestList.filter(
      (item) => item.categoryNameSmall !== categoryNameSmall
    );
    setInterestList(filteredList);
  };

  /* 관심분야 선택 추가 */
  const selectCategory = (item) => {
    if (interestList.length >= 3) {
      // todo
      alert('최대 3개 선택가능');
    } else {
      const selected = item;
      setInterestList((currentArray) => [selected, ...currentArray]);
    }
  };

  /* 관심분야 선택완료 시 */
  // todo

  useEffect(() => {
    // 관심분야 목록 API 호출
    getList();
  }, []);

  return (
    <>
      <Typography variant="body2" align="left" sx={{ color: 'text.secondary', mt: 3 }}>
        선택한 관심분야
      </Typography>
      <Stack direction="row" spacing={1}>
        {interestList.map((item, index) => (
          <Chip
            key={index * 100}
            label={item.categoryNameSmall}
            onDelete={() => handleDelete(item.categoryNameSmall)}
            color="primary"
            // onDelete={false ? undefined : handleDelete(index)}
          />
        ))}
      </Stack>
      <Typography variant="body2" align="left" sx={{ color: 'text.secondary', mt: 3 }}>
        카테고리 전체목록
      </Typography>
      <Stack direction="row" spacing={1}>
        {categoryList.map((item) => (
          <Chip
            key={item.categoryId}
            label={item.categoryNameSmall}
            onClick={() => selectCategory(item)}
          />
        ))}
      </Stack>
    </>
  );
}
