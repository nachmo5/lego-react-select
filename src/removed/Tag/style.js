export default theme => ({
  root: {
    display: "flex",
    height: "100%",
    // border
    border: "1px solid " + theme.GRAY,
    borderRadius: "4px",
    // padding
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 4,
    paddingBottom: 2,
    // Remove selection
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none"
  },
  label: {
    marginRight: 5
  },
  closeIcon: {}
});
