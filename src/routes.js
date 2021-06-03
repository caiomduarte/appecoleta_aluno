import React from 'react';

//imports para criar a navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Importar as telas ou paginas
import Home from './pages/Home';
import Pontos from './pages/Pontos';
import Detalhes from './pages/Detalhes';

const Stack = createStackNavigator();

const Routes = () => {
    return( 
       <NavigationContainer>
           <Stack.Navigator headerMode="none">    
                <Stack.Screen name="Home"   component={Home}/>
                <Stack.Screen name="Pontos" component={Pontos}/>
                <Stack.Screen name="Detalhes" component={Detalhes} />
           </Stack.Navigator>
       </NavigationContainer> 
    )
}

export default Routes;


