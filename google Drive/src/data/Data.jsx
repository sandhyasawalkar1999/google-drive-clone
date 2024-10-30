import React from 'react'
import './data.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Data = () => {
    return (
        <div className='data'>
            <div className='data_header'>
                <div className='data_left'>
                    <p>My Drive</p>
                    <ArrowDropDownIcon />
                </div>
                <div className='data_right'>
                    <FormatListBulletedIcon />
                    <InfoIcon />
                </div>
            </div>

            <div className='data_content'>
                <div className='data_grid'>
                    <div className='data_file'>
                        <InsertDriveFileIcon />
                        <p> File Name</p>
                    </div>
                    <div className='data_file'>
                        <InsertDriveFileIcon />
                        <p> File Name</p>
                    </div>
                    <div className='data_file'>
                        <InsertDriveFileIcon />
                        <p> File Name</p>
                    </div>
                </div>
                <div className='data_list'>
                    <div className='detailRow'>
                        <p><b>Name <ArrowDownwardIcon /> </b></p>
                        <p><b>Owner</b></p>
                        <p><b>Last Modification</b></p>
                        <p><b>File Size</b></p>
                    </div>

                    <div className='detailRow'>
                        <p> <InsertDriveFileIcon /> Name</p>
                        <p>Me</p>
                        <p>yesterday</p>
                        <p>1GB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data



