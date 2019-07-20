import React from 'react';

import { connect } from 'react-redux';
import { AppStateInterface } from '@rdx/root.reducer';

import { HeaderComponent } from '@layout/header/header.component';

type HeaderContainerProps = {};

const Header = ({  }: HeaderContainerProps) => {
  return <div>Header contianer</div>;
};

const mapStateToProps = (state: AppStateInterface) => ({});

const mapDispatchToProps = {};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
