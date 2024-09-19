import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { StyleSheet, TextInput, TextInputProps, ViewStyle } from "react-native";

interface CustomInputProps {
  style?: TextInputProps["style"];
  viewStyle?: ViewStyle;
}

export interface CustomInputRef {
  setText: (txt: string) => void;
  getText: () => void;
  clear: () => void;
  setFocus: () => void;
}

const CustomInput = forwardRef<
  CustomInputRef,
  CustomInputProps & TextInputProps
>((props, ref): React.JSX.Element => {
  const { style, viewStyle, ...rest } = props;
  const [Text, setText] = useState<string>("");
  const TextInputRef = useRef<TextInput | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      setText: (txt: string) => {
        setText(txt);
      },
      getText: () => Text,
      clear: () => {
        setText("");
      },
      setFocus: () => {
        TextInputRef.current?.focus();
      },
    }),
    [Text]
  );

  return (
    <TextInput
      style={[styles.CustomInput, style]}
      {...rest}
      value={Text}
      onChangeText={setText}
      ref={TextInputRef}
    />
  );
});

const styles = StyleSheet.create({
  CustomInput: {},
});

export default memo(CustomInput);
