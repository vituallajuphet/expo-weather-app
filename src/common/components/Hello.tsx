import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Hello = () => {
  const tw = useTailwind();

  return (
    <>
      <View style={tw("pt-12 items-center")}>
        <View style={tw("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tw("text-blue-800 font-semibold")}>
            Image Picker
          </Text>
        </View>
      </View>
    </>
  );
};

export default Hello;
