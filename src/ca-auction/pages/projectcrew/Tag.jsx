import React, {useEffect, useContext, useState} from 'react'
import {IconButton, Button, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Context} from './ProjectCrew';

const Tag = (props) => {
  const [tagItem, setTagItem] = useState('');
  // const [tagList, setTagList] = useState(props.tageList);
  const {hashtagList, sethashagList} = useContext(Context);

  const onKeyPress = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      
      if (hashtagList.length > 9) {
        setTagItem('');
        alert("태그는 10개까지 입니다.")
      } else {
        submitTagItem();
      }
      e.preventDefault();
    }
  }

  const submitTagItem = (item) => {
    let updatedTagList = [...hashtagList];
    let temp = tagItem;

    if (temp.substring(0, 1) != "#") {
      temp = "#" + temp;
    }
    updatedTagList.push(temp);
    sethashagList(updatedTagList);
    setTagItem('');
  }

  const deleteTagItem = e => {

    let deleteTagItem = e.target.id;

    if (deleteTagItem == "") {
      deleteTagItem = e.target.parentElement.parentElement.innerText;
    }

    console.log("deleteTagItem", deleteTagItem);

    const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  }

  return (
    <div>
      <div>
        <div
          className={'flex items-center flex-wrap min-h-[40px] mt-[10px] px-2 border border-solid border-black/30 rounded-[10px] focus-within:border-red-400'}>
          {hashtagList.map((tagItem, index) => {
            return (
              <div
                className={'flex items-center justify-between m-[3px] px-2 bg-orange-500 rounded-[5px] text-white text-[14px] min-h-[30px]'}
                key={index}>
                <span className={"pr-1"}>{tagItem}</span>

                <CloseIcon
                  sx={{
                    fontSize: 15,
                    color: "red",
                    backgroundColor: "white",
                    borderRadius: 50
                  }}
                  id={tagItem}
                  onClick={deleteTagItem}
                />
              </div>
            )
          })}
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true
            }}
            sx={{
              width: 300,
              display: 'inline-flex'
            }}
            type='text'
            placeholder='Hash태그 엔터'
            tabIndex={2}
            onChange={e => setTagItem(e.target.value)}
            value={tagItem}
            onKeyPress={onKeyPress}/>
        </div>
      </div>
    </div>
  )
}


export default Tag;
