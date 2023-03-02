
import React,{useState} from 'react';

import getRecentStories from './data1'
import Mytimer from './timer'
import StoryCard from './storyCard';


const App = () => {
  
   var scrollData=[]
getRecentStories.map((item,index)=>{


  item.images.map((items,key)=>
  
{ if(key==0)
 scrollData.push({title:items.img,name:item.heading,key:index,id:items.id})
}

)
}
)
 return (<StoryCard  getRecentStories={getRecentStories} scrollData={scrollData}/>)
}

export default App;


