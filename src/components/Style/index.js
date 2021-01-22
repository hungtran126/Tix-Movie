import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import background from '../../img/bglogin.jpg';

const useStyle = makeStyles(theme => ({
    signin_bgLogin: {
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "757px",
        margin: "0 auto",
        position: "relative",
    },
    signin_loginContent: {
        maxWidth: "360px",
        position: "absolute",
        padding: "40px 32px 30px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundImage: "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
        boxShadow: "0 0 10px 0 rgba(0,0,0,.45)",
        textAlign: "center",
        color: "#FFF",
        borderRadius: "6px",
    },
    signin_logoImg: {
        verticalAlign: "middle",
        border: 0,
        width: "80%",
        cursor: "pointer",
        marginBottom: "66px",
    },
    signin_close: {
        position: "absolute",
        top: "-18px",
        right: "-18px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#081630",
        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, .5)",
        content: "",
        cursor: "pointer",
        paddingTop: "9px",
        color: "#7d7d7d",
        textDecoration: "none",
    },
    signin_input: {
        backgroundColor: "white",
        opacity: "0.9",
    },
    btnIMG: {
        width: "100%"
    },
    boxIMG: {
        float: "left",
        padding: "20px 10px 0"
    },
    detail_styleBlur: {
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        overflow: "hidden"
    },
    detail_posterLandscapeFilm: {
        filter: "blur(15px)",
        margin: "-11px 0 -5px -10px",
        width: "calc(100% + 5px)"
    },
    detail_styleGradient: {
        background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    detail_detailMainInfo: {
        position: "absolute",
        top: "50%",
        width: "100%",
        left: "50%",
        transform: "translate3d(-50%,-50%,0)",
        maxWidth: "870px",
        float: "none",
        margin: "auto",
        clear: "both"
    },
    detail_posterMain: {
        borderRadius: "4px",
        paddingTop: "147.90697674%",
        backgroundPosition: "center,0 0",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat,repeat-y"
    },
    detail_infoMain: {
        float: "none",
        clear: "both",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "25%",
    },
    detail_filmPosterTop: {
        paddingLeft: "0!important",
        paddingRight: "0!important",
        maxWidth: "220px"
    },
    detail_detailMainInfo2: {
        fontSize: "24px",
        fontFamily: 'SF Medium',
        position: "relative",
        color: "#e9e9e9"
    },
    detail_btnBuyTicketDetail: {
        fontSize: "16px",
        borderRadius: "4px",
        textAlign: "center",
        background: "0 0",
        padding: "7px 25px",
        transition: "all .2s",
        marginTop: "25px",
        marginBottom: "20px",
        backgroundColor: "#fb4226",
        border: "none",
        color: "#fff"
    },
    styleDatePicker: {
        overflowX: 'scroll',
        width: '2000px',
        float: 'left',
        position: 'relative',
        height: '100px',
        display: 'flex',
        marginLeft: '0px'
    },
    styleDay: {
        fontSize: '18px',
        margin: '0 10px',
        width: '80px',
    },
    styleDate: {
        font: '18px',
        textAlign: 'center',
    },
    buttonDatePickerStyle: {
        border: 'none',
        backgroundColor: 'white',
        outline: 'none',
        '&:focus': {
            border: 'none',
        }
    },
    buttonDisabled: {
        color: 'grey',
    },
    buttonTicket: {
        width: '125px',
        height: '50px',
        border: '2px solid lightGrey',
        borderRadius: '5px 5px',
        '&:focus': {
            outline: 'none',
            boxShadow: 'none',
        },
        '&:hover': {
            color: 'grey',
        }
    },
    tabs: {
        fontSize: '25px',
    },
    info: {
        color: 'white',
        '&:focus': {
            backgroundColor: 'none',
            color: '#fb4226',
        },
        '&:hover': {
            color: '#fb4226',
        }
    },
    
}));

export default useStyle;