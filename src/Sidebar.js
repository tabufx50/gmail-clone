import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return <div className='sidebar'>
    <Button startIcon={<AddIcon fontSize="large"  />}
    className='sidebar__compose'>Compose</Button>

    <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
    <SidebarOption Icon={StarIcon} title="Starred" number={54} />
    <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
    <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
    <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
    <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
    <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
  </div>;
}

export default Sidebar;
