import { createStyles, Group, Text } from '@mantine/core';
import {
  AUTHOR_LINK,
  FOOTER_HEIGHT_ABOVE_NAVBAR_BREAKPOINT,
  FOOTER_HEIGHT_BELOW_NAVBAR_BREAKPOINT,
  NAVBAR_BREAKPOINT,
  NAVBAR_WIDTH,
  REPO_LINK,
} from '~/config';
import ExternalLink from './ExternalLink';

const useStyles = createStyles((theme) => {
  const shadowGradientAlpha = theme.colorScheme === 'dark' ? 0.2 : 0.015;
  return {
    root: {
      position: 'fixed',
      zIndex: -1,
      left: 0,
      right: 0,
      bottom: 0,
      height: FOOTER_HEIGHT_BELOW_NAVBAR_BREAKPOINT,
      background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
      padding: theme.spacing.sm,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.xs,
      [`@media (min-width: ${theme.breakpoints[NAVBAR_BREAKPOINT]}px)`]: {
        marginLeft: NAVBAR_WIDTH,
        height: FOOTER_HEIGHT_ABOVE_NAVBAR_BREAKPOINT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        '&::before': {
          position: 'absolute',
          content: '""',
          top: 0,
          bottom: 0,
          left: 0,
          width: theme.spacing.sm,
          background: `linear-gradient(to right, ${theme.fn.rgba(theme.black, shadowGradientAlpha)}, ${theme.fn.rgba(
            theme.black,
            0
          )}), linear-gradient(to right, ${theme.fn.rgba(theme.black, shadowGradientAlpha)}, ${theme.fn.rgba(
            theme.black,
            0
          )} 30%)`,
        },
      },
    },
  };
});

export default function AppFooter() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <ExternalLink to={`${REPO_LINK}/blob/main/LICENSE`}>
        <img src="http://img.shields.io/npm/l/mantine-datatable.svg?style=social" alt="MIT License" />
      </ExternalLink>
      <Text size="sm">
        Built by <ExternalLink to={AUTHOR_LINK}>Ionut-Cristian Florescu</ExternalLink>.
      </Text>
      <ExternalLink to={REPO_LINK}>
        <Group spacing="xs">
          <img src="https://img.shields.io/github/stars/icflorescu/mantine-datatable?style=social" alt="GitHub Stars" />
          <img src="http://img.shields.io/npm/dm/mantine-datatable.svg?style=social" alt="NPM Downloads" />
        </Group>
      </ExternalLink>
    </div>
  );
}
