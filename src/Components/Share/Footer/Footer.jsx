import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f1f7ff", padding: "15px 0" }}>
      <Typography variant="subtitle1" style={{ textAlign: "center" }}>
        Copyright {new Date().getFullYear()} All Rights Reserved By
        sonjoybarmon19@gmail.com
      </Typography>
    </div>
  );
};

export default Footer;
