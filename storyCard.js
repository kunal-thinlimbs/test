
import React,{useState,useRef,useEffect } from 'react';
import {Text, ScrollView,View, Image, 

TouchableOpacity,FlatList,
  StyleSheet  } from 'react-native';
  import { Dimensions } from 'react-native';

import Mytimer from './timer'
import ShowImageMOdel from './showimageModel'
import getRecentStories from './data1';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
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

const StoryCard = (props) => {
    var getRecentStories=props.getRecentStories
  // var scrollData=props.scrollData  
const [doneIndex,setdoneIndex]=useState(0)
const [show,setshow]=useState(false)
const [name,setname]=useState("")
const [openimage,setImage]=useState("")
const [datakey,setdatakey]=useState(0)
const [Changed,setChangedImage]=useState(false)
const [currentContinue,setCurrentContinue]=useState(0)
const [backContinue,setBackContinue]=useState(0)
const [storyData,setstoryData]=useState([])

const [scrollData,setScrollData]=useState([])
const [lastOpenstroy,setLastOpenStory]=useState()
const [chnageData,setChangeData]=useState([])

useEffect(() => {
 
 setScrollData(props.scrollData )
 setstoryData(props.getRecentStories)

})


// getRecentStories.map((item,index)=>{


  
 
//   item.images.map((items,key)=>
  
// { if(key==0)


//   scrollData.push({title:items.img,name:item.heading,key:index,id:items.id})


// }

// )

// }
// )

const changedt=()=>{
  var k=[]
  const assingdata=chnageData.length>0?chnageData:storyData
  
  console.log("89",assingdata[0].heading)
  assingdata.map((item,index)=>
   {
    //  console.log('sss',index,storyData.length)
if(index!==datakey)
{
k.push(item)



}
if(index==storyData.length-1)
{
 
  k.push(storyData[datakey])
}

  })
return k
}


const closeOn= async()=>{

 
// alert(datakey)


const k= await changedt();



 

 await setstoryData(k)

 await setChangeData(k)
 
 
 setdoneIndex(0)
  setCurrentContinue(0)
  setshow(false)
}


const handlepress=(key,index)=>{


setdatakey(key)
setLastOpenStory(index)
setname(scrollData[key].name)
  // setImage(key.title)  
  setshow(!show)
  setCurrentContinue(0)
 var c= props.scrollData.push(props.scrollData.splice(key, 1)[0]);
  // props.getRecentStories.push(props.getRecentStories.splice(key, 1)[0]);
 setScrollData(c)
 

  
}
const inc=()=>{
  


  setCurrentContinue(currentContinue+1)



}
const ChangeChild=(data)=>{
  
  //fot loader auto change

  setdoneIndex(0)
  setCurrentContinue(0)

  
  if(scrollData.length-1>data)
  {
    

    setdatakey(scrollData[data+1].key)
    
  setname(scrollData[data+1].name)
  setLastOpenStory(scrollData[data].key)
  }
  else{
   
  
    setshow(false)
  }

}

const  handlepressContinue =(data)=>
{


setChangedImage(true)

if(storyData[data].images.length >0  && storyData[data].images.length==1 )
{
  if (backContinue>199)
{
  setdoneIndex(0)
  setCurrentContinue(0)

 
  if(scrollData.length-1>data)
  {
    

    setdatakey(scrollData[data+1].key)
    
  setname(scrollData[data+1].name)
  setLastOpenStory(scrollData[data].key)
  }
}
}

if(storyData[data].images.length >0  &&
  storyData[data].images.length==currentContinue+1 )
{

  if (backContinue>199)
{
  setdoneIndex(0)
  setCurrentContinue(0)

 
  if(scrollData.length-1>data)
  {
    

    setdatakey(scrollData[data+1].key)
    
  setname(scrollData[data+1].name)
  setLastOpenStory(scrollData[data].key)
  }
}
}

//FOR ONE IMAGE ON TAP


if(storyData[data].images.length >0  && storyData[data].images.length!=1 
  &&  storyData[data].images.length!=currentContinue+1 )
{
 
 
if (backContinue>199)
{
  
 
setCurrentContinue(currentContinue+1)
}

else{
if(currentContinue!=0)
{
  setCurrentContinue(currentContinue-1)
}
else{

 
  
  if(storyData[0].images.length==1 && backContinue<199 && data==0 )
  {
    setdoneIndex(0)
    
    setshow(!show)

  }
   
    
else if(scrollData.length>data)
  { 
    
    
    setdatakey(scrollData[data-1].key)
  setname(scrollData[data-1].name)
   setLastOpenStory(scrollData[data].key)
  }
  
  

}

}

}


// if(getRecentStories[0].images.length==1 && backContinue<199 && data==0 )
// {
//   setshow(!show)
// }



  if( scrollData.length>data && currentContinue+1==storyData[data].images.length
    &&
    backContinue>199 )
  {
  
    setCurrentContinue(0)
 if(scrollData.length-1>data)
  { 
    
   
    setdoneIndex(0)
    setdatakey(scrollData[data+1].key)
  setname(scrollData[data+1].name)
  }
  else
  {


    if(storyData[storyData.length-1])
    setshow(!show)
  }
  
}
}



  return (

    <>



    {!show && <FlatList
    
    horizontal={true}
  data={scrollData}
  keyExtractor={item => item.id}

renderItem={({item, index}) => {
    
        return(

 
<TouchableOpacity   key={item.id}   onPress={()=>handlepress(index,item.key)}> 

      <Image 
       key={item.id}
    
        style={true?styles.tinyLogo:styles.container2}
        source={{
          uri: item.title}}
      />
    </TouchableOpacity>
  )} 
        }
/>
}

{show && <ShowImageMOdel handlepressContinue={handlepressContinue} 

setdoneIndex={setdoneIndex}
doneIndex={doneIndex}
datakey={datakey}
lastOpenstroy={lastOpenstroy}
ch={chnageData}
currentContinue={currentContinue}
inc={inc}
setBackContinue={setBackContinue}
name={name}
getRecentStories= { storyData}
handlepressContinue={handlepressContinue}
ChangeChild={ChangeChild}
closeOn={closeOn}
/> }
   
 </> );
}

export default StoryCard;




// const sShowImageMOdel=(props)=>{

//   var {closeOn,inc,name,ChangeChild,handlepress,handlepressContinue,getRecentStories,datakey,currentContinue}=props
//   return(
        
//       <View style={styles.parti} >
   
//     <TouchableOpacity onPress={closeOn} > 
//    <Text style={{textAlign: 'right',color:'white'}} >close
//        </Text></TouchableOpacity>
   
   
    
//        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin   : 20}}>
//    <TouchableOpacity onPress={()=>handlepressContinue(datakey)}>
   
//     <View style={{flex: 1/9099, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
         
   
//      {getRecentStories[datakey].images.map((items,index)=>{return( <View
//      key={items.id}
//      style={{width:`${100/getRecentStories[datakey].images.length}%`  , height: 0}}>
       
   
   
//      { getRecentStories[datakey].images.length!=1 &&   index!=currentContinue? 
//      <Mytimer inc={inc} run={false} 
//      key={items.id}
   
     
//      LoaderWidth={`90%`} />:<Mytimer 
//       currentContinue={currentContinue}
//       inc={inc}
//       show={true} 
//        run={false} 
//         key={items.id}
//       callupdate={handlepressContinue}
//       closeOn={closeOn}
//        datakey={datakey}
//        ChangeChild={ChangeChild}
//        count={getRecentStories[datakey].images.length-1}
//          index={index } LoaderWidth={`90%`} />}
     
//      { getRecentStories[datakey].images.length!=1 && index===currentContinue  &&  <Mytimer 
//    run={true}
//    closeOn={closeOn}
   
   
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`90%`} />}
            
//             { getRecentStories[datakey].images.length==1 && datakey==index && index===currentContinue  &&  <Mytimer 
//    run={true}
//    closeOn={closeOn}
   
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
   
//    { getRecentStories[datakey].images.length==1 && datakey==1 && index===currentContinue  &&  <Mytimer 
//    run={true}
//    closeOn={closeOn}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
   
//    { getRecentStories[datakey].images.length==1 && datakey==2 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       closeOn={closeOn}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
   
   
   
//    { getRecentStories[datakey].images.length==1 && datakey==10 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       closeOn={closeOn}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==9 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       ref="child"
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==8 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==7 && index===currentContinue  &&  <Mytimer 
//    run={true}
//    closeOn={closeOn}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==6 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       closeOn={closeOn}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==5 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==4 && index===currentContinue  &&  <Mytimer 
//    run={true}
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
      
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
//    { getRecentStories[datakey].images.length==1 && datakey==3 && index===currentContinue  &&  <Mytimer 
//    run={true}
   
//       callupdate={handlepressContinue}
//      currentContinue={currentContinue}
//       inc={inc}
//       datakey={datakey}
//       ChangeChild={ChangeChild}
//       count={getRecentStories[datakey].images.length-1}
//         index={index }
//       LoaderWidth={`100%`} />}
   
   
//       </View>)
//    })
//    }
//          </View>
     
//          {getRecentStories[datakey].images.map((items,index)=>{ 
             
//              return(
//     <View  key={items.id}>{index==currentContinue && <Image
//     key={items.id}
//      style={styles.partiCukarImage}
    
   
//    source={{uri:items.img     }}
//      />
    
    
//     }
//     </View>
//          )
//            }
//          )
//    }
    
//        </TouchableOpacity>
    
//     </View>    
           
//            <Text style={{color:'white',marginLeft:15}}>{name}</Text>
    
   
   
//        </View>
//   )
// }