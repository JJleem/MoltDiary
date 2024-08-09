import { CSSProp } from "styled-components";
import { Theme } from "../assets/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
