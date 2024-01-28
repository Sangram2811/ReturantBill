import * as React from "react";
import {Text, StyleSheet, View, Alert} from "react-native";

const Button1 = () => {
  	
  	return (
    		<View  style={styles.button}>
      			<Text onPress={()=>{
            }} style={styles.createAnAccount}>Login to my account</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	createAnAccount: {
    		fontSize: 16,
    		letterSpacing: -0.2,
    		lineHeight: 24,
    		fontWeight: "700",
    		fontFamily: "Sk-Modernist",
    		color: "#fe554a",
    		textAlign: "center"
  	},
  	button: {
    		borderRadius: 20,
    		shadowColor: "rgba(202, 66, 17, 0.1)",
    		shadowOffset: {
      			width: 0,
      			height: 10
    		},
    		shadowRadius: 30,
    		elevation: 30,
    		shadowOpacity: 1,
    		flex: 1,
    		width: "100%",
    		flexDirection: "row",
    		justifyContent: "space-between",
    		paddingHorizontal: 20,
    		paddingVertical: 15
  	}
});

export default Button1;
