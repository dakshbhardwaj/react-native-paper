import * as React from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';

import color from 'color';

import { useTheme } from '../../core/theming';
import type { Theme } from '../../types';
import Text from '../Typography/Text';

export type Props = React.ComponentProps<typeof Text> & {
  /**
   * @optional
   */
  theme?: Theme;
  /**
   * Style that is passed to Text element.
   */
  style?: StyleProp<TextStyle>;
};

/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
const ListSubheader = ({ style, theme: overrideTheme, ...rest }: Props) => {
  const theme = useTheme(overrideTheme);

  const textColor = theme.isV3
    ? theme.colors.onSurfaceVariant
    : color(theme.colors.text).alpha(0.54).rgb().string();

  const font = theme.isV3 ? theme.fonts.bodyMedium : theme.fonts.medium;

  return (
    <Text
      variant="bodyMedium"
      numberOfLines={1}
      {...rest}
      style={[
        styles.container,
        {
          color: textColor,
          ...font,
        },
        style,
      ]}
    />
  );
};

ListSubheader.displayName = 'List.Subheader';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
});

export default ListSubheader;
