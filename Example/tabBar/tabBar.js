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
