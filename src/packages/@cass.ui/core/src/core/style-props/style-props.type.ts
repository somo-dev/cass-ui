import {
  CassBreakpoint,
  CassColor,
  CassFontSize,
  CassLineHeight,
  CassSpacing,
} from "../cass-provider/theme.types";

export type StyleProp<Value> = Value | Partial<Record<CassBreakpoint, Value>>;

export interface CassStyleProps {
  /** Margin, theme key: theme.spacing */
  m?: StyleProp<CassSpacing>;
  /** MarginBlock, theme key: theme.spacing */
  my?: StyleProp<CassSpacing>;
  /** MarginInline, theme key: theme.spacing */
  mx?: StyleProp<CassSpacing>;
  /** MarginTop, theme key: theme.spacing */
  mt?: StyleProp<CassSpacing>;
  /** MarginBottom, theme key: theme.spacing */
  mb?: StyleProp<CassSpacing>;
  /** MarginInlineStart, theme key: theme.spacing */
  ms?: StyleProp<CassSpacing>;
  /** MarginInlineEnd, theme key: theme.spacing */
  me?: StyleProp<CassSpacing>;
  /** MarginLeft, theme key: theme.spacing */
  ml?: StyleProp<CassSpacing>;
  /** MarginRight, theme key: theme.spacing */
  mr?: StyleProp<CassSpacing>;
  /** Padding, theme key: theme.spacing */
  p?: StyleProp<CassSpacing>;
  /** PaddingBlock, theme key: theme.spacing */
  py?: StyleProp<CassSpacing>;
  /** PaddingInline, theme key: theme.spacing */
  px?: StyleProp<CassSpacing>;
  /** PaddingTop, theme key: theme.spacing */
  pt?: StyleProp<CassSpacing>;
  /** PaddingBottom, theme key: theme.spacing */
  pb?: StyleProp<CassSpacing>;
  /** PaddingInlineStart, theme key: theme.spacing */
  ps?: StyleProp<CassSpacing>;
  /** PaddingInlineEnd, theme key: theme.spacing */
  pe?: StyleProp<CassSpacing>;
  /** PaddingLeft, theme key: theme.spacing */
  pl?: StyleProp<CassSpacing>;
  /** PaddingRight, theme key: theme.spacing */
  pr?: StyleProp<CassSpacing>;

  /** Border */
  bd?: StyleProp<React.CSSProperties["border"]>;
  /** Background, theme key: theme.colors */
  bg?: StyleProp<CassColor>;
  /** Color */
  c?: StyleProp<CassColor>;
  opacity?: StyleProp<React.CSSProperties["opacity"]>;

  /** FontFamily */
  ff?: StyleProp<"monospace" | "text" | "heading" | (string & {})>;
  /** FontSize, theme key: theme.fontSizes */
  fz?: StyleProp<
    CassFontSize | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})
  >;
  /** FontWeight */
  fw?: StyleProp<React.CSSProperties["fontWeight"]>;
  /** LetterSpacing */
  lts?: StyleProp<React.CSSProperties["letterSpacing"]>;
  /** TextAlign */
  ta?: StyleProp<React.CSSProperties["textAlign"]>;
  /** LineHeight, theme key: lineHeights */
  lh?: StyleProp<
    CassLineHeight | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})
  >;
  /** FontStyle */
  fs?: StyleProp<React.CSSProperties["fontStyle"]>;
  /** TextTransform */
  tt?: StyleProp<React.CSSProperties["textTransform"]>;
  /** TextDecoration */
  td?: StyleProp<React.CSSProperties["textDecoration"]>;

  /** Width, theme key: theme.spacing */
  w?: StyleProp<React.CSSProperties["width"]>;
  /** MinWidth, theme key: theme.spacing*/
  miw?: StyleProp<React.CSSProperties["minWidth"]>;
  /** MaxWidth, theme key: theme.spacing */
  maw?: StyleProp<React.CSSProperties["maxWidth"]>;
  /** Height, theme key: theme.spacing */
  h?: StyleProp<React.CSSProperties["height"]>;
  /** MinHeight, theme key: theme.spacing */
  mih?: StyleProp<React.CSSProperties["minHeight"]>;
  /** MaxHeight, theme key: theme.spacing */
  mah?: StyleProp<React.CSSProperties["maxHeight"]>;

  /** BackgroundSize */
  bgsz?: StyleProp<React.CSSProperties["backgroundSize"]>;
  /** BackgroundPosition */
  bgp?: StyleProp<React.CSSProperties["backgroundPosition"]>;
  /** BackgroundRepeat */
  bgr?: StyleProp<React.CSSProperties["backgroundRepeat"]>;
  /** BackgroundAttachment */
  bga?: StyleProp<React.CSSProperties["backgroundAttachment"]>;

  /** Position */
  pos?: StyleProp<React.CSSProperties["position"]>;
  top?: StyleProp<React.CSSProperties["top"]>;
  left?: StyleProp<React.CSSProperties["left"]>;
  bottom?: StyleProp<React.CSSProperties["bottom"]>;
  right?: StyleProp<React.CSSProperties["right"]>;
  inset?: StyleProp<React.CSSProperties["inset"]>;

  display?: StyleProp<React.CSSProperties["display"]>;
  flex?: StyleProp<React.CSSProperties["flex"]>;
}
