import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";

import Hello from "@components/Hello";
import utilities from "./tailwind.json";
import { ImagePickerExample } from "@/common/components/ImagePicker/ImagePicker";
import { WebViewComponent } from "@/common/components/WebView/Webview";
import { Weather } from "@/screens/Weather";

const App = () => {

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
          <Weather />
        </SafeAreaView>
    </TailwindProvider>
  );
}

export default App;