export const useStyles = theme => ({
  paymentContaienr: {
    padding: "60px 24px 32px",
  },
  reviewReqContainer: {
    "& > span": { fontWeight: "bold" },
    "& span": {
      color: theme.palette.text.darkShadedGray,
      fontSize: 14,
      lineHeight: "18px",
    },
    "& > div": {
      marginTop: 16,
      display: "flex",
      alignItems: "flex-start",
      "& p": {
        display: "flex",
        color: theme.palette.text.mediumShadeGray,
        fontFamily: "Muli",
        fontSize: 14,
        fontWeight: 300,
        lineHeight: "24px",
        "& svg": {
          marginLeft: 16,
          color: theme.palette.text.darkShadedGray,
        },
      },
      "& a": {
        color: theme.palette.text.primary,
        fontWeight: 400,
        textDecoration: "none",
      },
      "& ul": {
        margin: 0,
        padding: 0,
        listStyle: "none",
        "& li": {
          paddingBottom: 8,
          color: theme.palette.text.mediumShadeGray,
          fontFamily: "Muli",
          fontSize: 14,
          fontWeight: 300,
          lineHeight: "24px",
          "&:lastof-type": { paddingBottom: 0 },
        },
      },
    },
  },
  modelTrainFeeContainer: {
    marginTop: 50,
    "& > span": {
      color: theme.palette.text.darkShadedGray,
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: "18px",
    },
    "& > p": {
      margin: "16px 0",
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
      fontWeight: 300,
      lineHeight: "24px",
    },
  },
  tokenCount: {
    width: 166,
    padding: "24px 0",
    border: "1px solid #DAF0FF",
    borderRadius: 4,
    backgroundColor: "#E7F5FF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& span": {
      "&:first-of-type": {
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
        fontWeight: 300,
        lineHeight: "18px",
        textTransform: "capitalize",
      },
      "&:last-of-type": {
        color: theme.palette.text.darkShadedGray,
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: "25px",
      },
    },
  },
  paymentMode: {
		marginTop: 24,
    "& p": {
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
      fontWeight: 300,
      lineHeight: "18px",
    },
  },
  paymentChannelAndDetails: {
    marginTop: 35,
    display: "flex",
    "& > p": {
      width: "100%",
      margin: "0 0 0 40px",
      "@media(max-width:1280px)": { margin: "25px 0 0 0" },
    },
    "@media(max-width:767px)": { flexDirection: "column" },
    "@media(max-width:1280px)": { flexWrap: "wrap" },
  },
  paymentChannelDropDownContainer: {
    display: "flex",
    marginRight: 40,
    "& fieldset": { display: "none" },
    "@media(max-width:940px)": { marginBottom: 30 },
  },
  infoIconContainer: {
    marginRight: 10,
    alignSelf: "center",
    color: theme.palette.text.lightShadedGray,
    fontSize: 18,
  },
  paymentChannelDropDown: {
    width: 278,
    padding: "0 10px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(25,25,25,0.32)",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& .MuiFormControl-root": { width: "90%" },
    "& .MuiSelect-outlined": { padding: "15px 14px" },
    "& .MuiSelect-icon": { color: theme.palette.text.darkShadedGray },
    "@media(min-width: 768px) and (max-width: 960px)": { width: 178 },
  },
  dropDownTitle: {
    padding: "0 5px",
    position: "absolute",
    top: -11,
    left: 10,
    backgroundColor: theme.palette.text.white,
    color: theme.palette.text.dialogTitle,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  walletIcon: { color: theme.palette.text.lightShadedGray },
  btnContainer: { textAlign: 'center' }
});
