
## react-native-scrollable-tabs-hybrid

![](https://img.shields.io/npm/v/react-native-scrollable-tabs-hybrid)
![](https://img.shields.io/npm/l/react-native-scrollable-tabs-hybrid)

This is a fork of [React Native Scrollable Tab View](https://github.com/ptomasroos/react-native-scrollable-tab-view), which also allows displaying both icon and label on the tabs.

## Demo

![GIF](/Example/tabBar/tabBar.gif)

## Installation

1. Run either
```
npm install react-native-scrollable-tabs-hybrid --save
yarn add react-native-scrollable-tabs-hybrid
```
2. `var ScrollableTabView = require('react-native-scrollable-tab-view');`


## Basic Usage

```javascript
var ScrollableTabView = require('react-native-scrollable-tab-view');

var App = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
});
```

## Text Only tabBar

```javascript
<ScrollableTabView
      renderTabBar={() => <DefaultTabBar tabStyle={s.tabBar} />}
      tabBarTextStyle={s.tabBarText}
      tabBarUnderlineStyle={s.tabBarUnderline}
      tabBarActiveTextColor={'#eeeeee'}
      tabBarInactiveTextColor={'#666666'}
      tabBarBackgroundColor={'#111111'}>
      <Recent tabLabel="Recent" />
      <Archived tabLabel="Archived" />
    </ScrollableTabView>
```

## Icon + Label tabBar

```javascript
var ScrollableTabView = require('react-native-scrollable-tab-view');

var App = React.createClass({
  render() {
    return <ScrollableTabView
      renderTabBar={() => <TabBar />}
      tabBarPosition={"bottom"}>
      <Home tabLabel={"Book"} icon="ios-create" />
      <History tabLabel={"History"} icon="ios-albums" />
      <Profile tabLabel={"Settings"} icon="ios-construct" />
    </ScrollableTabView>
  }
});
```

## Custom tabBar

You can add your own custom [tabBar](/Example/tabBar). Here's an example:

```javascript
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import s from './tabBar.scss';
import gs from '../../app.scss';

class TabBar extends React.Component {
  icons = [];

  constructor(props) {
    super(props);
    this.icons = [];
  }

  render() {
    let {tabs, goToPage, activeTab, style, icons} = this.props;

    return <View style={[s.tabs, style]}>
      {tabs.map((tab, i) => {
        return <TouchableOpacity key={tab}
                                 onPress={() => goToPage(i)}
                                 style={s.tab}>
          <Icon
            name={icons[i]}
            size={25}
            color={activeTab === i ? '#5e92f3' : '#999999'}
            ref={(icon) => { this.icons[i] = icon; }}
          />
          {
            activeTab === i && tab &&
            <Text style={[gs.buttonText, s.tabCaption]}> { tab } </Text>
          }
        </TouchableOpacity>;
      })}
    </View>;
  }
}

export default TabBar;

```

## Contribution
**Issues** are welcome. Please add a screenshot, if not screencast, of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are very welcome.

1. Fork the repo
1. Create new branch with feature name as branch name
1. Check if things work with a jupyter notebook
1. Raise a pull request

## Licence

Please see attached [Licence](LICENCE)
