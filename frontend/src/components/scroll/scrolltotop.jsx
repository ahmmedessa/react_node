import { Fab,  Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const Scrolltotop = () => {
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 100,
        });
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      };
    return (
        <div>
        <Zoom in={trigger}>
            <Fab
        color="primary"
        style={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleClick}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUp />
      </Fab> 
      </Zoom>
        </div>
    );
}

export default Scrolltotop;
