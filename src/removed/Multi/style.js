export default theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: theme.size / 2
  },
  tag: {
    height: theme.size
    /*
    "&:nth-last-child(2)": {
      marginRight: 0
    }
    */
  },
  input: {
    flexGrow: 1,
    height: theme.size,
    maxWidth: "100%"
  }
});
