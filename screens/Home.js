import React, { Component } from "react";
//import CustomRow from './screens/CustomCell/CustomRow'
import CustomRow from './CustomCell/CustomRow'

import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    Dimensions,
    ScrollView
} from "react-native";

class Home extends Component {

    getData() {
        return [
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
        ]
    }



    render() {

        let screenWidth = Dimensions.get('window').width
        let screenheight = Dimensions.get('window').height

        return (
            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                width: screenWidth,
                height: screenheight,
            }}>


                <View style={{
                    backgroundColor: '#5f9bc0',
                    marginTop: 10,
                    width: screenWidth,
                    height: 5,
                }} />

                <ScrollView horizontal={true} bounces={false} pagingEnabled={true}>
                    <FlatList
                        style={{
                            backgroundColor: '#5f9bc0',
                            flex: 1,
                            marginTop: 100,
                            width: screenWidth,
                            height: screenheight,
                        }}
                        data={this.getData()}
                        renderItem={({ item }) => <CustomRow
                            title={item.title}
                            description={item.description}
                            image_url={item.image_url}
                        />}
                    />

                    <View style={{
                        backgroundColor: '#5f9000',
                        flex: 1,
                        marginTop: 20,
                        width: screenWidth,
                        height: screenheight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});