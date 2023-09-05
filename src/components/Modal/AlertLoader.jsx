import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Color } from "../../utils/Color";

const AlertLoader = () => {
  return (
    <SkeletonPlaceholder
      speed={1350}
      borderRadius={scale(20)}
      highlightColor={Color.Main}
      backgroundColor={Color.Ash}
    >
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item
          width={"90%"}
          height={verticalScale(70)}
          marginLeft={20}
          marginRight={0}
          margin={5}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default AlertLoader;
