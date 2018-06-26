import React from 'react';
import {View, Text, ListView} from 'react-native';
import {Button} from 'antd-mobile-rn';
import { fetchCurrency } from '../../apollo/apolloClient';

export default class MainScreen extends React.Component{
    state = {
        data: ''
    }

    fetchData = async () => {
        //set a valid currency -> USD, PEN, VEF, etc
        const currency = await fetchCurrency("PEN") 
        await this.setState({data: currency.data})
    }

    render() {   
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                <Text>My first Apollo app 🚀</Text>
                { this.state.data != ''
                    ? <Text> {this.state.data.rates != null ? this.state.data.rates[0].currency : 'Currency not found'} </Text>
                    : <Text> 'Click button to get Currency' </Text>} 
                <Button onClick={this.fetchData}> Currency </Button>
            </View>
        )
      }

}