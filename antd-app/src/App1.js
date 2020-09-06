import React from 'react'
import {
    ConfigProvider,
    Pagination,
    Radio,
  } from 'antd';
  import enUS from 'antd/es/locale/en_US';
  import zhCN from 'antd/es/locale/zh_CN';
  import moment from 'moment';
  import 'moment/locale/zh-cn';
  import './App1.css'
  moment.locale('en');
  
  class Page extends React.Component {
    state = {
      visible: false,
    };
    render() {
      return (
        <div className="locale-components">
          <div className="example">
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
          </div>
        </div>
      );
    }
  }
  
 export default  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        locale: enUS,
      };
    }
  
    changeLocale = e => {
      const localeValue = e.target.value;
      this.setState({ locale: localeValue });
      if (!localeValue) {
        console.log('    moment.locale(en); ')
        moment.locale('en');
      } else {
        console.log('    moment.locale(zh-cn); ')
        moment.locale('zh-cn');
      }
    };
  
 

    render() {
      const { locale } = this.state;
      console.log('render:',locale,)
      return (
        <div>
          <div className="change-locale">
            <span style={{ marginRight: 16 }}>Change locale of components: </span>
            <Radio.Group value={locale} onChange={this.changeLocale}>
              <Radio.Button key="en" value={enUS}>
                English
              </Radio.Button>
              <Radio.Button key="cn" value={zhCN}>
                中文
              </Radio.Button>
            </Radio.Group>
          </div>
          <ConfigProvider locale={locale}>
            <Page  />
          </ConfigProvider>
        </div>
      );
    }
  }