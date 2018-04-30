import { css } from 'styled-components';

export const extraSmallUp = css`(min-width: ${props => props.theme.flexboxgrid.breakpoints.xs}em)`;
export const smallUp = css`(min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em)`;
export const mediumUp = css`(min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em)`;
export const largeUp = css`(min-width: ${props => props.theme.flexboxgrid.breakpoints.lg}em)`;
