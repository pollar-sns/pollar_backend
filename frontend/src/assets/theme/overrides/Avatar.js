export default function Avatar(theme) {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          transition: 'all 200ms ease-in-out',
        },

        rounded: {
          borderRadius: theme.shape.borderRadiusMd,
        },

        img: {
          height: 'auto',
        },
      },
    },
  };
}
