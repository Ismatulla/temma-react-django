import React from 'react';
import { Typography } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import InputUnstyled from '@mui/base/InputUnstyled';
import Input from '../components/input/Input';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleQuestion, faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { fonts } from '../constants/fonts';

// redux toolkit 

import { useSelector, useDispatch } from 'react-redux'


function Clubs() {
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  const handleData = (e) => {
    e.preventDefault()
  }
  return (
    <div style={{ lineHeight: fonts.lineHeight, marginTop: "4rem" }}>
      <Typography variant="h3" style={{ fontWeight: "bold" }}>Studieverenigingen</Typography>
      <Typography variant="h5" style={{ lineHeight: '4rem' }} >The active study associations help with:</Typography>
      <List>
        <ListItem>
          <FontAwesomeIcon icon={faFileCircleQuestion} style={{ fontSize: '1.5rem', marginRight: "1rem", color: "#FD7E70" }} /><ListItemText primary="Answering study-specific or general questions about your study (time)" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCheck} style={{ fontSize: '1.5rem', marginRight: "1rem", color: "green" }} /><ListItemText primary="Keep you up to date on important new facilities, regulations and your rights & obligations as a student" />
        </ListItem>
      </List>
      <div className="input_and_sorting">
        <div className="input">
          <InputUnstyled /><FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <Input />
        <button onClick={handleData}>load data</button>
      </div>
    </div>
  );
}

export default Clubs;