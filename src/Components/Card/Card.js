import React, { Component } from "react";
import {Link} from "react-router-dom"

class Item extends Component {
  state = {
    listitems: [
      {
          category: "Killer",
          title: "Why should you play nemesis? (Detailed Guide)",
          img : "https://i.ytimg.com/vi/ItC-edWmcOI/maxresdefault.jpg",
        id: 0,
        context: "Primary",
        modifier: "list-group-item list-group-item-primary"
      },
      {
        category: "Killer",
        title: "Why should you play Cannibal? (Detailed Guide)",
        img : "https://64.media.tumblr.com/0b034ee28b4a532fdd7e0d5921d1d168/a10710ff5934fb90-2f/s640x960/646d8eaea42870dfd9033f1971cc3459d4a38086.jpg",
        id: 1,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
      },
      {
        category: "Killer",
        title: "Why should you play HillBilly? (Detailed Guide)",
        img : "https://mobile.deadbydaylight.com/wp-content/uploads/2020/04/the-hillbilly-hero-mobile-1.jpg",
        id: 2,
        context: "Success",
        modifier: "list-group-item list-group-item-success"
      },
      {
        category: "Killer",
        title: "Why should you play The Plague? (Detailed Guide)",
        img : "https://i.pinimg.com/originals/3b/6c/ff/3b6cff2b775fe4fa2ca01127888e04dc.png",
        id: 3,
        context: "Danger",
        modifier: "list-group-item list-group-item-danger"
      },
      {
        category: "Survivor",
        title: "Why should you play Yun-Jin-Lee? (Detailed Guide)",
        img : "https://pbs.twimg.com/profile_images/1420651685031067650/BVE2CR2N_400x400.jpg",
        id: 4,
        context: "Warning",
        modifier: "list-group-item list-group-item-warning"
      },
      {
        category: "Survivor",
        title: "Why should you play Yui Kimura? (Detailed Guide)",
        img : "https://mobile.deadbydaylight.com/wp-content/uploads/2020/08/YUI_K_Mobile-Header.jpg",
        id: 5,
        context5: "Warningnnnnnnn",
        modifier: "list-group-item list-group-item-warning",

      },
      { 
        category: "Survivor",
        title: "Why should you play Leon Kennedy? (Detailed Guide)",
         img : "https://64.media.tumblr.com/ed6da9f1f3e1b8379a9b0e940fa2be96/598365bd0ee6d141-d0/s1280x1920/b23efb3824e399fc821aec29515553dd1963b206.jpg",
        id: 5,
        context5: "Warningnnnnnnn",
        modifier: "list-group-item list-group-item-warning",
     
      },
      {
        category: "Survivor",
        title: "Why should you play Jill Valentine? (Detailed Guide)",
        img : "https://www.zbrushcentral.com/uploads/default/original/4X/d/3/9/d397f354526dc4da81625e3af7483f8094411885.jpeg",
        id: 5,
        context5: "Warningnnnnnnn",
        modifier: "list-group-item list-group-item-warning",
     
      }
    ]
  };

  render() {
    return (
    
      <React.Fragment>
        <div className="deneme2">
          {this.state.listitems.map(listitem => (
            <div className="deneme" key={listitem.id} style={{listStyleType:"none"}}>
            <div class="container">
  <div class="card">
    <div class="card-header">
    <img src={listitem.img} alt="rover" />

    </div>
    <div class="card-body">
      <span class="tag tag-teal">{listitem.category}</span>
      <h4>
       {listitem.title}
      </h4>
      <p>
        An exploration into the truck's polarising design
      </p>
      <div class="user">
     <img src={listitem.img} alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
          
       </div>
      </div>
    </div>
  </div>
  </div>
            </div>
          ))}
        </div>
        
      </React.Fragment>
    );
  }
}

export default Item;