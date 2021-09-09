import { SvgIcon } from '@medly-components/icons';
import { styled, WithThemeProp } from '@medly-components/utils';
import Button from '../Button';
import { ToastProps } from './types';

const fillColor = ({ theme, variant }: ToastProps & WithThemeProp) => theme.toast.fillColor[variant];

export const Toast = styled('div')<ToastProps>`
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: stretch;
    box-shadow: 0 0.8rem 3.2rem ${({ theme }) => theme.toast.boxShadow};
    border-radius: 0.4rem;
    border-left: 0.4rem solid ${fillColor};
    min-width: ${({ fullWidth }) => (fullWidth ? '100%' : '25rem')};

    @media (min-width: 768px) and (max-width: 1439px) {
        max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '72%')};
    }

    @media (min-width: 1440px) {
        max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '103.6rem')};
    }

    & > div {
        ${({ theme, variant }) => theme.toast.boxBgColor && `background-color: ${theme.toast.boxBgColor[variant]};`}
    }
    ${({ theme, variant }) => theme.toast.boxBgColor && `border-left-color: ${theme.toast.boxBgColor[variant]};`}
`;

export const IconWrapper = styled('div')<ToastProps>`
    display: flex;
    background-color: ${({ theme, variant }) => theme.toast.bgColor[variant]};
    align-items: ${({ theme }) => theme.toast.icon.align};

    ${SvgIcon} {
        padding: 1.2rem;
        * {
            fill: ${fillColor};
        }
    }
`;

export const ContentWrapper = styled('div')`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.3rem 1.6rem;
    color: ${({ theme }) => theme.toast.textColor};
`;

export const ActionWrapper = styled('div')`
    display: flex;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem 0.8rem 0 0;

    ${Button.Style} {
        padding-top: 0.5rem;
    }
    ${SvgIcon} {
        transition: all 100ms ease-out;
        background-color: transparent;
        * {
            fill: ${({ theme }) => theme.colors.black};
        }

        &:hover {
            background-color: ${({ theme }) => theme.colors.grey[100]};
        }
    }
`;
