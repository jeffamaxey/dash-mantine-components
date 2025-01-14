import type {
    MantineGradient,
    MantineTheme,
    MantineSize,
} from "@mantine/styles";
import { InputVariant } from "@mantine/core/lib/Input";

type MantineStyleSystemProps = {
    /** margin props */
    m?: MantineSize;
    /** margin props */
    my?: MantineSize;
    /** margin props */
    mx?: MantineSize;
    /** margin props */
    mt?: MantineSize;
    /** margin props */
    mb?: MantineSize;
    /** margin props */
    ml?: MantineSize;
    /** margin props */
    mr?: MantineSize;
    /** padding props */
    p?: MantineSize;
    /** padding props */
    py?: MantineSize;
    /** padding props */
    px?: MantineSize;
    /** padding props */
    pt?: MantineSize;
    /** padding props */
    pb?: MantineSize;
    /** padding props */
    pl?: MantineSize;
    /** padding props */
    pr?: MantineSize;
};

export type DefaultProps = {
    /** Often used with CSS to style elements with common properties */
    className?: string;
    /** Inline style */
    style?: any;
};

export type DashComponentProps = {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
} & DefaultProps &
    MantineStyleSystemProps;

export type MantineColors =
    | "dark"
    | "gray"
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "teal";

export type TextProps = {
    /** Text content */
    children?: React.ReactNode;
    /** Key of theme.fontSizes or number to set font-size in px */
    size?: MantineSize;
    /** Key of theme.colors or any valid CSS color */
    color?: "dimmed" | MantineColors;
    /** Sets font-weight css property */
    weight?:
        | "normal"
        | "bold"
        | "bolder"
        | "lighter"
        | "initial"
        | "inherit"
        | number;
    /** Sets text-transform css property */
    transform?:
        | "-moz-initial"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "capitalize"
        | "full-size-kana"
        | "full-width"
        | "lowercase"
        | "uppercase";
    /** Sets text-align css property */
    align?:
        | "left"
        | "right"
        | "-moz-initial"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "center"
        | "end"
        | "start"
        | "justify"
        | "match-parent";
    /** Link or text variant */
    variant?: "text" | "link" | "gradient";
    /** CSS -webkit-line-clamp property */
    lineClamp?: number;
    /** Sets line-height to 1 for centering */
    inline?: boolean;
    /** Underline the text */
    underline?: boolean;
    /** Add strikethrough styles */
    strikethrough?: boolean;
    /** Adds font-style: italic style */
    italic?: boolean;
    /** Inherit font properties from parent element */
    inherit?: boolean;
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
    /** Shorthand for component="span" */
    span?: boolean;
};

export type LoaderProps = {
    /** Defines width of loader */
    size?: MantineSize;
    /** Loader color from theme */
    color?: MantineColors;
    /** Loader appearance */
    variant?: MantineTheme["loader"];
} & DefaultProps;

export type InputWrapperBaseProps = {
    /** Input label, displayed before input */
    label?: React.ReactNode;
    /** Input description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
    /** Adds required attribute to the input and red asterisk on the right side of label */
    required?: boolean;
    /** Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input */
    withAsterisk?: boolean;
    /** Controls order of the Input.Wrapper elements */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
};

export interface InputSharedProps {
    /** Adds icon on the left side of input */
    icon?: React.ReactNode;
    /** Width of icon section in px */
    iconWidth?: number;
    /** Right section of input, similar to icon but on the right */
    rightSection?: React.ReactNode;
    /** Width of right section, is used to calculate input padding-right */
    rightSectionWidth?: number;
    /** Sets required on input element */
    required?: boolean;
    /** Input border-radius from theme or number to set border-radius in px */
    radius?: MantineSize;
    /** Defines input appearance, defaults to default in light color scheme and filled in dark */
    variant?: InputVariant;
    /** Disabled input state */
    disabled?: boolean;
    /** Input size */
    size?: MantineSize;
}
