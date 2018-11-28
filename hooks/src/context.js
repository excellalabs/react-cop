import React from 'react';

export const LocaleContext = React.createContext('en');

class LocaleProvider extends React.Component {
    constructor(props) {
      super(props);
  
      this.changeLocale = () => {
        this.setState(state => {
          const newLocale = state.locale === 'sp' ? 'fr' : 'sp';
          return {
            locale: newLocale
          };
        });
      };
  
      this.state = {
        locale: 'sp',
        changeLocale: this.changeLocale
      };
    }
  
    render() {
      return (
        <LocaleContext.Provider value={this.state}>
          {this.props.children}
        </LocaleContext.Provider>
      );
    }
  }
  
  export default LocaleProvider;