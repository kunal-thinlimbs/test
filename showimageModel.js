
import React,{Component} from 'react';
import {Text,View, Image, 
PanResponder,
TouchableOpacity,
  StyleSheet  } from 'react-native';
  import { Dimensions } from 'react-native';

import Mytimer from './timer'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



// const ShowImageMOdel=(props)=>{

//   var {closeOn,inc,name,ChangeChild,handlepress,handlepressContinue,getRecentStories,datakey,currentContinue}=props
//   return(
  
//   )
// }

// export default ShowImageMOdel;




export default class Project extends Component {
    constructor() {
      super();
      //initialize state
      this.panResponder;
      this.state = {
        doneIndex:0,
        locationX: 0,
        locationY: 0,
      };


      
      //panResponder initialization
      this.panResponder = PanResponder.create({
    
        onStartShouldSetPanResponder: () => {
            alert('clicked')
            return true
          },
        // onStartShouldSetPanResponder: (event, gestureState) => true,
        onStartShouldSetPanResponderCapture: (event, gestureState) => true,
        onMoveShouldSetPanResponder: (event, gestureState) => false,
        onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
        onPanResponderGrant: (event, gestureState) => false,
        onPanResponderMove: (event, gestureState) => false,
        onPanResponderRelease: async(event, gestureState) => {
      await    this.setState({
            
            locationX: event.nativeEvent.locationX.toFixed(2),
            locationY: event.nativeEvent.locationY.toFixed(2),
          })
          if(this.state.locationX!=0)
          {
    
            this.call()
          }

        },
      });
    }



    
     call= async()=>{
       
        if (this.state.locationX>199)
        {
       this.props.setdoneIndex(this.props.doneIndex+1)
        }
        else{
            this.props.setdoneIndex(this.props.doneIndex-1)
        }
        await this.props.setBackContinue(this.state.locationX)




    this.props.handlepressContinue(this.props.lastOpenstroy)
    
    }
    render() {
        var {closeOn,inc,name,
lastOpenstroy,ch,
          ChangeChild,handlepress,handlepressContinue,getRecentStories,datakey,currentContinue}=this.props
     
console.log("jjjjjiii",getRecentStories[7].heading,"jj"


)


// this.props.ch.length>0?getRecentStories=this.props.ch:getRecentStories=getRecentStories

 // getRecentStories.push(getRecentStories.splice(datakey, 1)[0]);
      return (





       
                      
      <View style={styles.parti} >
   
   <TouchableOpacity  
   
   
   onPress={closeOn} > 
  <Text style={{textAlign: 'right',color:'white'}} >close
      </Text></TouchableOpacity>
  
  
   
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin   : 20}}>
  <TouchableOpacity
  

  
  
  
  onPress={()=>handlepressContinue(lastOpenstroy)}>
  
   <View 
   
   
   style={{flex: 1/9099, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
        
  
    {getRecentStories[lastOpenstroy].images.map((items,index)=>{return( <View
    key={items.id}
    style={{width:`${100/getRecentStories[lastOpenstroy].images.length}%`  , height: 0}}>
      
  
  
    { getRecentStories[lastOpenstroy].images.length!=1 &&   index!=currentContinue? 
    <Mytimer inc={inc} run={false} 
    key={items.id}
    fill={this.props.doneIndex>index?100:0}
  
    setdoneIndex={this.props.setdoneIndex}
doneIndex={this.props.doneIndex}
  
    LoaderWidth={`90%`} />:<Mytimer 
     currentContinue={currentContinue}
     inc={inc}
     show={true} 
     color={"redff"}
      run={false} 
    
      doneIndex={this.state.doneIndex}
       key={items.id}
     callupdate={handlepressContinue}
     closeOn={closeOn}
      datakey={lastOpenstroy}
      ChangeChild={ChangeChild}
      count={getRecentStories[lastOpenstroy].images.length-1}
        index={index } LoaderWidth={`90%`} />}
    
    {getRecentStories[lastOpenstroy].images.length!=1 && index===currentContinue  &&  <Mytimer 
  run={true}
  closeOn={closeOn}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
  color={'red'}
  setdoneIndex={this.props.setdoneIndex}
doneIndex={this.props.doneIndex}

     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`90%`} />}
           
           { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==index && 
           index===currentContinue  &&  <Mytimer 
  run={true}
  closeOn={closeOn}
  color={"white"}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}

  
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==1 && index===currentContinue  &&  <Mytimer 
  run={true}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
  closeOn={closeOn}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==2 && index===currentContinue  &&  <Mytimer 
  run={true}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     closeOn={closeOn}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  
  
  
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==10 && index===currentContinue  &&  <Mytimer 
  run={true}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     closeOn={closeOn}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==9 && index===currentContinue  &&  <Mytimer 
  run={true}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     ref="child"
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==8 && index===currentContinue  &&  <Mytimer 
  run={true}
  setdoneIndex={this.props.setdoneIndex}
doneIndex={this.props.doneIndex}

     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==7 && index===currentContinue  &&  <Mytimer 
  run={true}
  closeOn={closeOn}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     setdoneIndex={this.props.setdoneIndex}
     doneIndex={this.props.doneIndex}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==6 && index===currentContinue  &&  <Mytimer 
  run={true}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     closeOn={closeOn}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     setdoneIndex={this.props.setdoneIndex}
     doneIndex={this.props.doneIndex}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==5 && index===currentContinue  &&  <Mytimer 
  run={true}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     setdoneIndex={this.props.setdoneIndex}
     doneIndex={this.props.doneIndex}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==4
   && index===currentContinue  &&  <Mytimer 
  run={true}

  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />}
  { getRecentStories[lastOpenstroy].images.length==1 && lastOpenstroy==3 && index===currentContinue  &&  <Mytimer 
  run={true}
  setdoneIndex={this.props.setdoneIndex}
  doneIndex={this.props.doneIndex}
  
     callupdate={handlepressContinue}
    currentContinue={currentContinue}
     inc={inc}
     datakey={lastOpenstroy}
     ChangeChild={ChangeChild}
     count={getRecentStories[lastOpenstroy].images.length-1}
       index={index }
     LoaderWidth={`100%`} />} 
  
  
     </View>)
  })
  }
        </View>
    
        {getRecentStories[lastOpenstroy].images.map((items,index)=>{ 
            
            return(
   <View   
   
   {...this.panResponder.panHandlers}
   key={items.id}>{index==currentContinue && <Image
   key={items.id}
    style={styles.partiCukarImage}
   
  
  source={{uri:items.img     }}
    />
   
   
   }
   </View>
        )
          }
        )
  }
   
      </TouchableOpacity>
   
   </View>    
          
          <Text style={{color:'white',marginLeft:15}}>{name}</Text>
   
  
  
      </View>
          
      );
    }
  }
  
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 40 : 40,
    },
    childView: {
      flex: 1,
      overflow: 'hidden',
    },
    point: {
      height: 22,
      width: 22,
      marginTop: 5,
      position: 'absolute',
      borderRadius: 14,
      backgroundColor: '#00FF30',
    },
    parti: {
        flex: 1,
       backgroundColor: 'black',
   
     },
   partiCukarImage:{
       flex:1, width: null, height: null,
   
    resizeMode: 'cover'
   
   }
   ,
     partimg:{
     padding:10,
       height:windowHeight-40,
       width:windowWidth,
       resizeMode:'cover'
     }
     ,
     container: {
       paddingTop: 50,
     },
     tinyLogo: {
       width: 150,
       height: 250,
       
       borderWidth: 1,
    borderColor: 'grey',
       margin:5,
       borderRadius:15
     },
     logo: {
       width: 66,
       height: 58,
   
   
     },


  });
  