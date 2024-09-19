import React, { ReactNode, memo } from "react";
import { StyleSheet, Text, TextProps, View } from "react-native";

interface CustomTextProps extends TextProps {
  children: ReactNode;
}

export const Text400: React.FC<CustomTextProps> = memo((props) => {
  return (
    <Text style={[styles.Text, props.style]} {...props}>
      {props.children}
    </Text>
  );
});

const styles = StyleSheet.create({
  Text400: { fontFamily: "", color: "#000000" },
});
