import React, { Component } from 'react'
import './index.css'

export class MemeGenerator extends Component {
    constructor(){
        super();
        this.state={
           
            allMemesImgs:[],
            topText:"",
            buttomText:"",
            rendomImg:"http://i.imgflip.com/1bij.jpg",
        };
        this.handleEvent=this.handleEvent.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    //Give the value 0 for both the h-shadow and v-shadow properties. Write 2px for blur-radius and give the red color.

    componentDidMount(){
         fetch (`https://api.imgflip.com/get_memes`)
        .then(res=>res.json())
        .then(res=> {
            const {memes}=res.data;
            console.log(memes[0]);
            this.setState({ allMemesImgs:memes  });
        })
        }

        handleEvent(e){
            const {name,value} =e.target;
            this.setState({[name]:value});
        }
        handleSubmit(e){
            e.preventDefault();
            const indexRandom=Math.floor(Math.random() * this.state.allMemesImgs.length);
            const randomMemeImg=this.state.allMemesImgs[indexRandom].url;
            this.setState({ rendomImg:randomMemeImg  });
        }

  render() {
    return (
      <div style={{justifyContent:'center',alignItems:'center'}}>
          <form className='meme-dataForm' onSubmit={this.handleSubmit} >
              <input  
              type='text'
              placeholder='enter top text '
              name='topText'
              value={this.state.topText}
              onChange={this.handleEvent}/>
              
             
              <input
              type='text'
              placeholder='enter buttom text '
              name='buttomText'
              value={this.state.buttomText}
              onChange={this.handleEvent}/>
            
              <button >done </button>
          </form>
          <div  className='meme-img' >
              <img src={this.state.rendomImg}/>
              <h2 className='top-text'>{this.state.topText}</h2>
              <h2 className='buttom-text'>{this.state.buttomText}</h2>
          </div>
      </div>
    )
  }
}

export default MemeGenerator