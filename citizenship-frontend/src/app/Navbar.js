import React from 'react'
import {Link} from 'react-router-dom'
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };    

    return(
        <nav>
            <h2 className='nav-heading'>Citizenship Test Prep: Questions, Answers, Quizzes</h2>
            <div className="dropdown">
                <button className="dropbtn">Menu</button>
                <div className="dropdown-content">
                    <Link className='nav-link-text' to='/'>Home Page</Link>
                    <Link className='nav-link-text' to='/questions-one'>Quiz One Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-one'>Quiz One</Link>
                    <Link className='nav-link-text' to='/questions-two'>Quiz Two Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-two'>Quiz Two</Link>
                    <Link className='nav-link-text' to='/questions-three'>Quiz Three Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-three'>Quiz Three</Link>
                    <Link className='nav-link-text' to='/questions-four'>Quiz Four Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-four'>Quiz Four</Link>
                    <Link className='nav-link-text' to='/questions-five'>Quiz Five Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-five'>Quiz Five</Link>
                    <Link className='nav-link-text' to='/questions-six'>Quiz Six Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-six'>Quiz Six</Link>
                    <Link className='nav-link-text' to='/questions-seven'>Quiz Seven Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-seven'>Quiz Seven</Link>
                    <Link className='nav-link-text' to='/questions-eight'>Quiz Eight Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-eight'>Quiz Eight</Link>
                    <Link className='nav-link-text' to='/questions-nine'>Quiz Nine Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-nine'>Quiz Nine</Link>
                    <Link className='nav-link-text' to='/remaining-questions'>Remaining Questions</Link>
                </div>
            </div>
        </nav>
    // <div>
    //     <h2 className='nav-heading'>Citizenship Test Prep: Questions, Answers, Quizzes</h2>
    //     <Button
    //         id="basic-button"
    //         aria-controls={open ? 'basic-menu' : undefined}
    //         aria-haspopup="true"
    //         aria-expanded={open ? 'true' : undefined}
    //         onClick={handleClick}
    //     >
    //         Dashboard
    //     </Button>
    //     <Menu
    //         id="basic-menu"
    //         anchorEl={anchorEl}
    //         open={open}
    //         onClose={handleClose}
    //         MenuListProps={{
    //         'aria-labelledby': 'basic-button',
    //         }}
    //     >
    //         <MenuItem sx={{minWidth: 170}} onClick={handleClose}><Link className='nav-link-text' to='/'>Home Page</Link></MenuItem>
    //         <MenuItem sx={{minWidth: 170}} onClick={handleClose}><Link className='nav-link-text' to='/questions-one' >Quiz One Q&A</Link></MenuItem>
    //         <MenuItem sx={{minWidth: 170}} onClick={handleClose}><Link className='nav-link-text' to='/quiz-one'>Quiz One</Link></MenuItem>
    //         {/* <MenuItem onClick={handleClose}>My account</MenuItem>
    //         <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    //     </Menu>
    // </div>    
    )

}

export default Navbar