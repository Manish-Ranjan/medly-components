import { SvgIconProps } from '@medly-components/icons';
import { TabsTheme } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { TabBackground, TabSize, Variant } from '../types';
import type { FC } from 'react';

export type StyledTabProps = HTMLProps<HTMLButtonElement> &
    WithThemeProp &
    TabsTheme & {
        active?: boolean;
        fraction?: number;
        tabSize: TabSize;
        tabBackground: TabBackground;
        variant: Variant;
        totalTabs: number;
    };

export interface TabProps extends HTMLProps<HTMLButtonElement> {
    /** To be used to render tab as any html tag */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Id of tab */
    id: any;
    /** Label of the tab */
    label: string;
    /** Helper text for the tab */
    helperText?: string;
    /** To Display count in tab */
    count?: number;
    /** To be used to hide the tab (cannot be used with the `solid` Tabs variant) */
    hide?: boolean;
    /** Icon to be shown */
    icon?: FC<SvgIconProps>;
    /** Disabled State */
    disabled?: boolean;
    /** This will be handled internally */
    active?: boolean;
    /** Provide the fraction of the of the total width of the parent (cannot be used with the `solid` Tabs variant) */
    fraction?: number;
    /** Disabled label text (only visible for the `solid` Tabs variant) */
    disabledLabel?: string;
}
