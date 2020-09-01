import  * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import {firebase} from "./FirebaseConfig";
import myStyle from "./src/style/Style";
import Login from "./src/screen/Login";



var getFirebase = firebase.database().ref("product"); 


export default class App extends React.Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state ={
      getCount : "1"
    }

    
  }


  render() {
    


    return (
      <View style= {[myStyle.container]}>
        <Login></Login>
      </View>
    );
  }
}

type Props = {};
type state ={
  getCount : string;
}
