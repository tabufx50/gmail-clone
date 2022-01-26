
import { Checkbox, IconButton } from '@material-ui/core';
import './EmailRow.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';


function EmailRow({ id, title, subject, description, time}) {
    const history = useHistory();

// const navigate = useNavigate();
const dispatch = useDispatch();

const openMail = () => {
    dispatch(selectMail({
        id, title, subject, description, time,
    })
    );
    history.push("/mail")
};


// return <div onClick={() => navigate("/mail")} className='emailRow'></div>
// return <div onClick={() => history.push('/mail')} 

  return <div onClick={openMail} className='emailRow'>
    <div className="emailRow__options">
        <Checkbox />
        <IconButton>
            <StarBorderIcon />
        </IconButton>
        <IconButton>
            <LabelImportantIcon />
        </IconButton>

    </div>

    <h3 className="emailRow__title">
        {title}
    </h3>

    <div className="emailRow__message">
        <h4>{subject} {" "}
       <span className="emailRow__description">-
           {description}
       </span></h4>
    </div>

    <p className="emailRow__time">
        {time}
    </p>
  </div>;
}

export default EmailRow;
