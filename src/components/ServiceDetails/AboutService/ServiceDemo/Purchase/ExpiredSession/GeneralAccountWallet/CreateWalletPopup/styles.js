export const useStyles = theme => ({
  card: {
    width: 628,
    margin: "50px auto 0",
  },
  CardHeader: {
    padding: "5px 20px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#eee",
    color: theme.palette.text.black1,
    fontSize: 24,
    "& .MuiCardHeader-title": {
      fontFamily: theme.typography.primary.main,
    },
  },
  CardContent: {
    paddingTop: 25,
    "& > div": {
      paddingTop: 0,
      paddingBottom: 25,
      "& ul": {
        justifyContent: "center",
        "& li": {
          "&:before": {
            width: 40,
            margin: "0 10px",
          },
        },
      },
    },
  },
});
