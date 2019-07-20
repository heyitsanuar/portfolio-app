import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router';

import injectSheet from 'react-jss';

import './header.styles.css';

interface HeaderComponentProps extends RouteComponentProps {
  classes: { header: string };
}

const styles = (theme: any) => ({
  header: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const Header = ({ classes }: HeaderComponentProps) => {
  return <div>Header Component</div>;
};

const StyledHeader = injectSheet(styles)(Header);

export const HeaderComponent = withRouter(StyledHeader);
