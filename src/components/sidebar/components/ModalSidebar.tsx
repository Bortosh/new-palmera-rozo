import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Menu as MenuIcon } from '@mui/icons-material';
import SidebarList from './SidebarList'
import styles from '../styles/sidebarstyle.module.css'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
    handleClose: () => void;
    handleClickOpen: () => void;
    modalRender: boolean
}

const ModalSidebar = ({ handleClose, handleClickOpen, modalRender }: Props) => {


    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                <MenuIcon />
            </Button>
            <Dialog
                open={modalRender}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'opciones'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <ul className={styles.sidebarWrapperList}>
                            <SidebarList handleClose={handleClose} />
                        </ul>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalSidebar