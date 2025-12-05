// class Player {
//   constructor(game) {
//     this.game = game;
//     this.x = 0;
//     this.targetX = 0;
//     this.speed = 0.1;
//     this.y;
//     this.spriteWidth = 200;
//     this.spriteHeight = 112.5;
//     this.width;
//     this.height;
//     this.speedY = 0;
//     this.jumpSpeed = -15 * this.game.ratio;
//     this.inAir = false;
//     this.movingRight = false;
//     this.movingLeft = false;
//   }

//   draw() {
//     this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   update() {
//     this.y += this.speedY;
//     if (!this.isTouchingGround()) {
//       this.speedY += this.game.gravity;
//     }

//     //bottomBound aka ground
//     const offset = this.game.height - this.height - 25 * this.game.ratio;
//     if (this.isTouchingGround()) {
//       //   this.y = this.game.height - this.height;
//       this.y = offset;
//     }
//     //horizontal movement
//     this.x += (this.targetX - this.x + 150) * this.speed;
//   }
//   jump() {
//     console.log(this.game.ratio);
//     if (this.isTouchingGround()) {
//       this.speedY = this.jumpSpeed;
//       console.log(this.speedY);
//       this.inAir = true;
//     } else {
//       return;
//     }
//   }
//   moveRight() {
//     if (!this.isTouchingRight()) {
//       if (this.inAir) {
//         this.targetX += 25 * this.game.ratio;
//         this.inAir = false;
//       } else {
//         this.targetX += 10 * this.game.ratio;
//       }
//     }
//   }
//   moveLeft() {
//     if (!this.isTouchingLeft()) {
//       if (this.inAir) {
//         this.targetX -= 25 * this.game.ratio;
//         this.inAir = false;
//       } else {
//         this.targetX -= 10 * this.game.ratio;
//       }
//     } else {
//       return;
//     }
//   }
//   resize() {
//     this.width = this.spriteWidth * this.game.ratio;
//     this.height = this.spriteHeight * this.game.ratio;
//     this.y = 0;
//     this.speedY = -2 * this.game.ratio;
//     this.speed = 0.1 * this.game.ratio;
//   }
//   isTouchingGround() {
//     // return this.y >= this.game.height - this.height;
//     return this.y >= this.game.height - this.height - 25 * this.game.ratio;
//   }

//   isTouchingLeft() {
//     return this.x <= 0;
//   }
//   isTouchingRight() {
//     return this.x + this.width >= this.game.width;
//   }
// }

// export default Player;
