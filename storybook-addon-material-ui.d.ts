import {DecoratorFunction} from "@storybook/addons";
import {Theme} from "@mui/material";

export declare function muiTheme<T = {}>(arg?: Array<Theme>): DecoratorFunction<T>;
