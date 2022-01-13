import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { AppRegistry } from "react-native";
import MaterialIconsFont from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
import FontAwesomeFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
import config from "../app.json";
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  @font-face {
    src: url(${MaterialIconsFont});
    font-family: MaterialIcons;
  }
  @font-face {
    src: url(${FontAwesomeFont});
    font-family: FontAwesome;
  }
`;

export default class MyDocument extends Document {
    static async getInitialProps({ renderPage }) {
        AppRegistry.registerComponent(config.name, () => Main);
        const { getStyleElement } = AppRegistry.getApplication(config.name);
        const page = await renderPage();
        const styles = [
            // eslint-disable-next-line react/jsx-key
            <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
            getStyleElement(),
        ];
        return { ...page, styles: Children.toArray(styles) };
    }

    render() {
        return (
            <Html style={{ height: "100%" }}>
                <Head />
                <body style={{ height: "100%", overflow: "hidden" }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}