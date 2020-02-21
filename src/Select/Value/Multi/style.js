import { CONFIG } from "../../.shared/constants";

export default {
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3 - CONFIG.SPACE_BETWEEN_TAGS
  },
  tag: {
    marginBottom: CONFIG.SPACE_BETWEEN_ROWS,
    marginRight: CONFIG.SPACE_BETWEEN_TAGS,
    "&:nth-last-child(2)": {
      marginRight: 0
    }
  },
  input: {
    flexGrow: 1,
    maxWidth: "100%",
    marginBottom: CONFIG.SPACE_BETWEEN_ROWS
  }
};
