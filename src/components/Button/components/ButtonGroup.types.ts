/**
 * Defines all Bulma size values. TODO: Replace this
 */
export type Size = 'small' | 'medium' | 'large' | String;

export interface ButtonGroupProps {
  size?: Size;
  hasAddons?: boolean;
  align?: 'center' | 'right';
  className?: string;
}