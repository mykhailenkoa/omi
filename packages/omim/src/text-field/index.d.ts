import { WeElement } from 'omi';
import { MDCTextField } from '@material/textfield/index';
import '../icon';
interface Props {
    fullWidth: boolean;
    textarea: boolean;
    outlined: boolean;
    noLabel: boolean;
    showHelper: boolean;
    helperText: string;
    iconRight: boolean;
    counter: boolean;
    label: string;
    required: boolean;
    pattern: string;
    minLength: number;
    maxLength: number;
    min: number;
    max: number;
    step: number;
    rows: number;
    cols: number;
    value: string;
    disabled: boolean;
    useNativeValidation: boolean;
    valid: boolean;
    helperTextContent: string;
    leadingIconAriaLabel: string;
    trailingIconAriaLabel: string;
    leadingIconContent: string;
    trailingIconContent: string;
}
interface Data {
}
export default class TextField extends WeElement<Props, Data> {
    static defaultProps: {
        showHelper: boolean;
    };
    static propTypes: {
        fullWidth: BooleanConstructor;
        textarea: BooleanConstructor;
        outlined: BooleanConstructor;
        noLabel: BooleanConstructor;
        showHelper: BooleanConstructor;
        helperText: StringConstructor;
        iconRight: BooleanConstructor;
        counter: BooleanConstructor;
        label: StringConstructor;
        required: BooleanConstructor;
        pattern: StringConstructor;
        minLength: NumberConstructor;
        maxLength: NumberConstructor;
        min: NumberConstructor;
        max: NumberConstructor;
        step: NumberConstructor;
        rows: NumberConstructor;
        cols: NumberConstructor;
        value: StringConstructor;
        disabled: BooleanConstructor;
        useNativeValidation: BooleanConstructor;
        valid: BooleanConstructor;
        helperTextContent: StringConstructor;
        leadingIconAriaLabel: StringConstructor;
        trailingIconAriaLabel: StringConstructor;
        leadingIconContent: StringConstructor;
        trailingIconContent: StringConstructor;
    };
    static css: any;
    mdc: MDCTextField;
    root: HTMLElement;
    installed(): void;
    focus: () => void;
    layout: () => void;
    uninstall(): void;
    refIt: (e: any) => void;
    render(props: any): JSX.Element[];
}
export {};
