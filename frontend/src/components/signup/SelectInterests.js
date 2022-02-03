import { useEffect, useState } from 'react';
import { getAllCategories } from '../../services/api/CategoryApi';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function SelectInterests() {
  const [categoryList, setCategoryList] = useState([]);

  // const getList = async () => {
  //   const list = await getAllCategories();
  //   console.log(list);
  //   setCategoryList(list);
  // };
  // useEffect(() => {
  //   getList();
  // }, []);

  // todo
  const selectCategory = () => {
    console.log('선택');
  };
  return (
    <>
      {/* <ListItem key={data.key}>
        <Chip
          icon={icon}
          label={data.label}
          onDelete={data.label === 'React' ? undefined : handleDelete(data)}
        />
      </ListItem> */}
      {categoryList.map((category) => {
        <Chip label={category} onClick={selectCategory} />;
      })}
    </>
  );
}
