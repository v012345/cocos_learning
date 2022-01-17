"use strict";
cc._RF.push(module, 'f34acng0bhCWZrucF44cu8W', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // When the distance between the star and main character is less than this value, collection of the point will be completed
    pickRadius: 0 // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPlayerDistance: function getPlayerDistance() {
    // Determine the distance according to the position of the Player node
    var playerPos = this.game.player.getPosition(); // Calculate the distance between two nodes according to their positions

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // When the stars are being collected, invoke the interface in the Game script to generate a new star
    this.game.spawnNewStar(); // Then destroy the current star's node

    this.node.destroy();
  },
  start: function start() {},
  update: function update(dt) {
    // Determine if the distance between the Star and main character is less than the collecting distance for each frame
    if (this.getPlayerDistance() < this.pickRadius) {
      // Invoke collecting behavior
      this.onPicked();
      return;
    }
  }
});

cc._RF.pop();