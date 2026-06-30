import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const AnimacionLista = () => {
    const [Animacion1] = useState(new Animated.Value(0));
    const [Animacion2] = useState(new Animated.Value(-50));

    useEffect(()=>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(Animacion2,{
                    toValue:-30,
                    duration:500
                }),
                Animated.timing(Animacion1,{
                    toValue:60,
                    duration:500
                }),
                Animated.timing(Animacion2,{
                    toValue:30,
                    duration:500
                }),
                Animated.timing(Animacion1,{
                    toValue:0,
                    duration:500
                }),
            ])
        ).start();
    },[])

    const estiloAnimacion = {
        transform:[
            {translateY: Animacion1},
            {translatex: Animacion2}
        ]
    }


  return (
    <View>
      <Animated.View style = {[styles.contenedor, estiloAnimacion]}>

      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        width:10,
        height:10,
        backgroundColor:'cornflowerblue'
    }
})
export default AnimacionLista