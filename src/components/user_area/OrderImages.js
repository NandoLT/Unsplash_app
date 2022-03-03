import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const OrderImages = ({images, setMyImages}) => {
    const imagesOrder = [...images]
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const orderImages = (operation) => {
        switch (operation) {
            case 'widthAsc':
                    console.log('Order width menor mayor');
                    imagesOrder.sort((a,b) => a.width - b.width )
                    setMyImages(imagesOrder);
                break;
                case 'widthDesc':
                    console.log('Order width mayor menor');
                    imagesOrder.sort((a,b) => b.width - a.width )
                    setMyImages(imagesOrder);
                break;
            case 'heightAsc':
                    console.log('Order width mayor menor');
                    imagesOrder.sort((a,b) => a.height - b.height )
                    setMyImages(imagesOrder);
                break;
            case 'heightDesc':
                    console.log('Order width mayor menor');
                    imagesOrder.sort((a,b) => b.height - a.height )
                    setMyImages(imagesOrder);
                break;
            case 'likesAsc':
                    console.log('Order width mayor menor');
                    imagesOrder.sort((a,b) => a.likes - b.likes )
                    setMyImages(imagesOrder);
                break;
            case 'likesDesc':
                    console.log('Order width mayor menor');
                    imagesOrder.sort((a,b) => b.likes - a.likes )
                    setMyImages(imagesOrder);
                break;
        
            default:
                break;
        }
    }

    return (
        <div>
        <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
        >
            ORDER BY:
        </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <MenuItem onClick={() => orderImages('widthAsc')}><KeyboardArrowUpIcon />Width   </MenuItem>
            <MenuItem onClick={() => orderImages('widthDesc')}><KeyboardArrowDownIcon /> Width   </MenuItem>
            <MenuItem onClick={() => orderImages('heightAsc')}><KeyboardArrowUpIcon />Height  </MenuItem>
            <MenuItem onClick={() => orderImages('heightDesc')}><KeyboardArrowDownIcon /> Height  </MenuItem>
            <MenuItem onClick={() => orderImages('likesAsc')}><KeyboardArrowUpIcon />Likes   </MenuItem>
            <MenuItem onClick={() => orderImages('likesDesc')}><KeyboardArrowDownIcon /> Likes   </MenuItem>
        </Menu>
        </div>
    );
}