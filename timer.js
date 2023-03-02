  

import React, {Component} from 'react';

import { Platform, StyleSheet, Text,ProgressBarAndroid,View, 
  ProgressViewIOS } from 'react-native';
//  import { ProgressBar } from '@react-native-community/progress-bar-android'



class Mytimer extends Component
{
  constructor()
  {
    super();

    this.state = { 
      
      Progress_Value: 0.00
    }
  }

  componentWillUnmount=()=>
{ this.Stop_Progress1(); 

} 




  componentDidMount=()=>{
    
  

   this.props.run?
   this.props.Changed?this.Clear_Progress()
   :this.Stop_Progress():null
    
    
  
  }


 Stop_Progress= () =>
  {


    this.value = setInterval( () => {
      
      if(this.state.Progress_Value <= 1)
      
      {
   this.setState({Progress_Value: this.state.Progress_Value + .025})
  
      }

      else{
     
        this.props.setdoneIndex(this.props.doneIndex+1)

        if(this.props.count!=this.props.currentContinue)
        {
        this.props.inc()
      
       
        this.Stop_Progress1()
        }
        else{

        
         this.props.ChangeChild(this.props.datakey)
         this.Stop_Progress1(); 
        }
      }
      
    
    }, 100,)   
    
    

  }

  Stop_Progress1 = () =>{

   clearInterval(this.value);

  }

   Clear_Progress =()=>{

     this.setState({Progress_Value : 0.0})
  }

  render()
  {
    return(



<View  style = {!this.props.show?styles.MainContainer:styles.none }>
   
  
        {
            ( Platform.OS === 'android' )
            ?
              ( <ProgressBarAndroid
                
                style={{color:'white',width:this.props.LoaderWidth,borderRadius:5,margin:1}}
                styleAttr = "Horizontal" progress = { 
                  
                  this.props.fill==100?100:
                  this.state.Progress_Value } indeterminate = { false } />
          
                 )
            :
              ( <ProgressViewIOS progress = { this.state.Progress_Value } /> )
        }
    

      </View>
    );
  }
}

const styles = StyleSheet.create(
{none:{
height:0,
width:0
},
  MainContainer:
  {
    flex: 1/99,
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    margin: -2
  },

  button: {
  
  backgroundColor: 'white',
  borderRadius:5,
  padding: 10,
  marginTop: 10,

},

TextStyle:{
    color:'#fff',
    textAlign:'center',
}
});


export default Mytimer