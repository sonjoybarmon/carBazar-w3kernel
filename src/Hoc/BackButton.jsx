import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const BackButton = ({ style }) => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleBack}
        className="backBtnAuth"
        style={style}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </div>
  );
};

export default BackButton;
