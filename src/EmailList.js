import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import './EmailList.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';

function EmailList() {
  return <div className='emailList'>
      <div className='emailList__settings'>
          <div className='emailList__settingsLeft'>
              <Checkbox />
              <IconButton>
                  <ArrowDropDown />
              </IconButton>
              <IconButton>
                  <RedoIcon />
              </IconButton>
              <IconButton>
                  <MoreVertIcon />
              </IconButton>
          </div>
          <div className='emailList__settingsRight'>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>

          </div>
      </div>
  </div>;
}

export default EmailList;
