import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { render } from '@testing-library/react-native'
import React from 'react'

import DrawerOptions from '.'

describe('DrawerOptions', () => {
  it('renders correctly', () => {
    const mockedProps: DrawerContentComponentProps = {
      state: {
        index: 0,
        key: 'key',
        routeNames: ['routeNames'],
        routes: [{ key: 'key', name: 'name' }],
        stale: false,
        type: 'drawer',
        default: 'closed',
        history: [],
      },
      navigation: {
        closeDrawer: jest.fn(),
        dispatch: jest.fn(),
        goBack: jest.fn(),
        isFocused: jest.fn(),
        jumpTo: jest.fn(),
        navigate: jest.fn(),
        openDrawer: jest.fn(),
        reset: jest.fn(),
        toggleDrawer: jest.fn(),
        canGoBack: jest.fn(),
        getId: jest.fn(),
        getState: jest.fn(),
        getParent: jest.fn(),
        emit: jest.fn(),
        setParams: jest.fn(),
      },
      descriptors: {
        key: {
          route: {
            key: 'key',
            name: 'name',
            params: {},
          },

          navigation: {
            closeDrawer: jest.fn(),
            dispatch: jest.fn(),
            goBack: jest.fn(),
            isFocused: jest.fn(),
            jumpTo: jest.fn(),
            navigate: jest.fn(),
            openDrawer: jest.fn(),
            reset: jest.fn(),
            setOptions: jest.fn(),
            toggleDrawer: jest.fn(),
            canGoBack: jest.fn(),
            getId: jest.fn(),
            getState: jest.fn(),
            getParent: jest.fn(),
            setParams: jest.fn(),
            addListener: jest.fn(),
            removeListener: jest.fn(),
          },
          options: {
            drawerIcon: jest.fn(),
            drawerLabel: jest.fn(),
            drawerPosition: 'left',
            drawerType: 'back',
            header: jest.fn(),
            headerShown: false,
            title: '',
          },
          render: jest.fn(),
        },
      },
    }
    const { toJSON } = render(<DrawerOptions {...mockedProps} />)

    expect(toJSON()).toMatchSnapshot()
  })
})
