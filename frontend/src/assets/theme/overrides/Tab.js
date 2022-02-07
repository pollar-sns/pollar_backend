export default function Tab(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flex: '1 1 auto',
          textAlign: 'center',
          maxWidth: 'unset !important',
          minWidth: 'unset !important',
          minHeight: 'unset !important',
          fontSize: theme.typography.h4,
          fontWeight: theme.typography.fontWeightMedium,
          textTransform: 'none',
          lineHeight: 'inherit',
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadiusMd,
          // color: `${theme.palette.text.secondary} !important`,
          opacity: '1 !important',

          '& .material-icons, .material-icons-round': {
            marginBottom: '0 !important',
            marginRight: theme.spacing(6),
          },

          '& svg': {
            marginBottom: '0 !important',
            marginRight: theme.spacing(6),
          },

          '& i.MuiTab-iconWrapper': {
            marginBottom: 0,
          },
        },

        labelIcon: {
          paddingTop: theme.spacing(4),
        },
      },
    },
  };
}
