
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96a03zjKb5J8ogoVH9QHQVq', 'Game');
// scripts/Game.js

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
    // This property quotes the PreFab resource of stars
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // The random scale of disappearing time for stars
    maxStarDuration: 0,
    minStarDuration: 0,
    // Ground node for confirming the height of the generated star's position
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player node for obtaining the jump height of the main character and controlling the movement switch of the main character
    player: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Obtain the anchor point of ground level on the y axis
    this.groundY = this.ground.y + this.ground.height / 2; // "this.ground.top" may also work
    // Generate a new star

    this.spawnNewStar();
  },
  spawnNewStar: function spawnNewStar() {
    // Generate a new node in the scene with a preset template
    var newStar = cc.instantiate(this.starPrefab); // Put the newly added node under the Canvas node

    this.node.addChild(newStar); // Set up a random position for the star

    newStar.setPosition(this.getNewStarPosition());
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // According to the position of the ground level and the main character's jump height, randomly obtain an anchor point of the star on the y axis

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // According to the width of the screen, randomly obtain an anchor point of star on the x axis

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // Return to the anchor point of the star

    return cc.v2(randX, randY);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0Iiwic3Bhd25OZXdTdGFyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJyYW5kWCIsInJhbmRZIiwiTWF0aCIsInJhbmRvbSIsImdldENvbXBvbmVudCIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBRko7QUFPUjtBQUNBQyxJQUFBQSxlQUFlLEVBQUUsQ0FSVDtBQVNSQyxJQUFBQSxlQUFlLEVBQUUsQ0FUVDtBQVdSO0FBQ0FDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkwsS0FaQTtBQWlCUjtBQUNBQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpOLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZMO0FBbEJBLEdBSFA7QUEyQkw7QUFFQUUsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtKLE1BQUwsQ0FBWUssQ0FBWixHQUFnQixLQUFLTCxNQUFMLENBQVlNLE1BQVosR0FBcUIsQ0FBcEQsQ0FGZ0IsQ0FFdUM7QUFDdkQ7O0FBQ0EsU0FBS0MsWUFBTDtBQUNILEdBbENJO0FBb0NMQSxFQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDdEI7QUFDQSxRQUFJQyxPQUFPLEdBQUdqQixFQUFFLENBQUNrQixXQUFILENBQWUsS0FBS2QsVUFBcEIsQ0FBZCxDQUZzQixDQUd0Qjs7QUFDQSxTQUFLZSxJQUFMLENBQVVDLFFBQVYsQ0FBbUJILE9BQW5CLEVBSnNCLENBS3RCOztBQUNBQSxJQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0IsS0FBS0Msa0JBQUwsRUFBcEI7QUFDSCxHQTNDSTtBQTZDTEEsRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVk7QUFDNUIsUUFBSUMsS0FBSyxHQUFHLENBQVosQ0FENEIsQ0FFNUI7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtYLE9BQUwsR0FBZVksSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtmLE1BQUwsQ0FBWWdCLFlBQVosQ0FBeUIsUUFBekIsRUFBbUNDLFVBQWxFLEdBQStFLEVBQTNGLENBSDRCLENBSTVCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLVixJQUFMLENBQVVXLEtBQVYsR0FBa0IsQ0FBN0I7QUFDQVAsSUFBQUEsS0FBSyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUF4QixHQUE0QkcsSUFBcEMsQ0FONEIsQ0FPNUI7O0FBQ0EsV0FBTzdCLEVBQUUsQ0FBQytCLEVBQUgsQ0FBTVIsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSCxHQXRESTtBQXdETFEsRUFBQUEsS0F4REssbUJBd0RHLENBRVAsQ0ExREksQ0E0REw7O0FBNURLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IHF1b3RlcyB0aGUgUHJlRmFiIHJlc291cmNlIG9mIHN0YXJzXHJcbiAgICAgICAgc3RhclByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBUaGUgcmFuZG9tIHNjYWxlIG9mIGRpc2FwcGVhcmluZyB0aW1lIGZvciBzdGFyc1xyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcblxyXG4gICAgICAgIC8vIEdyb3VuZCBub2RlIGZvciBjb25maXJtaW5nIHRoZSBoZWlnaHQgb2YgdGhlIGdlbmVyYXRlZCBzdGFyJ3MgcG9zaXRpb25cclxuICAgICAgICBncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFBsYXllciBub2RlIGZvciBvYnRhaW5pbmcgdGhlIGp1bXAgaGVpZ2h0IG9mIHRoZSBtYWluIGNoYXJhY3RlciBhbmQgY29udHJvbGxpbmcgdGhlIG1vdmVtZW50IHN3aXRjaCBvZiB0aGUgbWFpbiBjaGFyYWN0ZXJcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gT2J0YWluIHRoZSBhbmNob3IgcG9pbnQgb2YgZ3JvdW5kIGxldmVsIG9uIHRoZSB5IGF4aXNcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjsgLy8gXCJ0aGlzLmdyb3VuZC50b3BcIiBtYXkgYWxzbyB3b3JrXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgc3RhclxyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHNjZW5lIHdpdGggYSBwcmVzZXQgdGVtcGxhdGVcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8gUHV0IHRoZSBuZXdseSBhZGRlZCBub2RlIHVuZGVyIHRoZSBDYW52YXMgbm9kZVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvLyBTZXQgdXAgYSByYW5kb20gcG9zaXRpb24gZm9yIHRoZSBzdGFyXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBncm91bmQgbGV2ZWwgYW5kIHRoZSBtYWluIGNoYXJhY3RlcidzIGp1bXAgaGVpZ2h0LCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHRoZSBzdGFyIG9uIHRoZSB5IGF4aXNcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuLCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHN0YXIgb24gdGhlIHggYXhpc1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgIC8vIFJldHVybiB0byB0aGUgYW5jaG9yIHBvaW50IG9mIHRoZSBzdGFyXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=