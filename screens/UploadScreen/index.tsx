import LottieView from "lottie-react-native";
import React from "react";
import { Modal } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../../config/theme";
import { Container } from "./styles";

interface UploadScreenI {
  progress: number;
  visible: boolean;
  onDone: () => void;
}

const UploadScreen = ({
  progress = 0,
  visible = false,
  onDone,
}: UploadScreenI) => {
  return (
    <Modal visible={visible}>
      {progress < 1 ? (
        <Container>
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.danger}
            borderColor={colors.danger}
          />
        </Container>
      ) : (
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require("../../assets/animations/done.json")}
        />
      )}
    </Modal>
  );
};

export default UploadScreen;
