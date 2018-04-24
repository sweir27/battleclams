import * as PIXI from "pixi.js";
import { TweenLite, TweenMax, TimelineLite, TimelineMax } from "gsap";
import PixiPlugin from "gsap/PixiPlugin";
import WebFont from "webfontloader";
import { GlowFilter } from "@pixi/filter-glow"

function resize(app) {
  // const size = [1920, 1080]
  // const ratio = size[0] / size[1]

  // let w, h
  // if (window.innerWidth / window.innerHeight >= ratio) {
  //   w = window.innerHeight * ratio;
  //   h = window.innerHeight;
  // } else {
  //   w = window.innerWidth;
  //   h = window.innerWidth / ratio;
  // }
  app.view.style.width = window.innerWidth + "px";
  app.view.style.height = window.innerHeight + "px";
}

function startSprites (app) {
  window.addEventListener("resize", resize(app));

  // wait for fonts to load before loading animation
  WebFont.load({
    google: {
      families: ["Trade Winds"]
    },
    active: () => {
      loadImages()
    }
  });

  function loadImages() {
    PIXI.loader
      .add([
        "images/bg2.png",
        "images/bg-far.png",
        "images/closed-clam.png",
        "images/open-clam.png",
        "images/skyline2.png",
        "images/light-green.png",
        "images/dark-green.png",
        "images/razorclams.png",
        "images/clamclosed.png",
        "images/clam.png",
        "images/clamback.png",
        "images/clamunder.png",
        "images/logo.png",
        "images/giant-clam.png"
      ])
      .load(setup);
  }

  function setup() {
    const style = new PIXI.TextStyle({
      fontFamily: "Trade Winds",
      fontSize: 36,
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: app.screen.width / 2
    });

    const biggerStyle = new PIXI.TextStyle({
      fontFamily: "Trade Winds",
      fontSize: 50,
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: app.screen.width / 2
    });

    const biggestStyle = new PIXI.TextStyle({
      fontFamily: "Trade Winds",
      fontSize: 50,
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: app.screen.width / 2
    });


    const farTexture = PIXI.loader.resources["images/bg2.png"].texture
    const far = new PIXI.extras.TilingSprite(farTexture, app.screen.width, farTexture.height);
    far.anchor.x = 0;
    far.anchor.y = 1;
    TweenLite.set(far, {
      pixi: {
        x: 0,
        y: farTexture.height,
        tilePosition: {
          x: 0,
          y: 0
        }
      },
      alpha: 0
    });
    app.stage.addChild(far);



    const skylineAnimTextures = [];
    for (var img of ["images/skyline2-green1.png"]) {
      skylineAnimTextures.push(PIXI.Texture.fromImage(img));
    }
    const skylineAnim = new PIXI.extras.AnimatedSprite(skylineAnimTextures);
    skylineAnim.anchor.x = 0;
    skylineAnim.anchor.y = 1;
    TweenLite.set(skylineAnim, {
      pixi: { x: -60, y: app.screen.height },
      alpha: 0
    }); // TODO WEIRD
    skylineAnim.animationSpeed = 0.05;
    skylineAnim.play();
    app.stage.addChild(skylineAnim);

    const skylineTexture = PIXI.loader.resources["images/skyline2.png"].texture;
    const skyline = new PIXI.extras.TilingSprite(skylineTexture, skylineTexture.width, skylineTexture.height);
    skyline.anchor.x = 0;
    skyline.anchor.y = 1;
    TweenLite.set(skyline, {
      pixi: {
        x: -60, // TODO WEIRD
        y: app.screen.height
      },
      alpha: 0
    });
    app.stage.addChild(skyline);

    const richText = new PIXI.Text("The year is 2023.", style);
    TweenLite.set(richText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 2,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(richText);

    const worldAboveText = new PIXI.Text("The world above has been devastated by a nuclear catastrophe.", style);
    TweenLite.set(worldAboveText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(worldAboveText);

    const worldBelowText = new PIXI.Text("The world below is dominated by...", style);
    TweenLite.set(worldBelowText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 2,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(worldBelowText);

    const clamsText = new PIXI.Text("CLAMS", biggerStyle);
    TweenLite.set(clamsText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 2,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(clamsText);




    const battleText = new PIXI.Text("Will you survive the melee and conquer the ocean?", style);
    TweenLite.set(battleText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(battleText);


    // CLAMS
    let textureArray = [];
    for (var img of ["images/closed-clam.png", "images/open-clam.png"]) {
      let texture = PIXI.Texture.fromImage(img);
      textureArray.push(texture);
    }

    let textureArray2 = [];
    for (var clamImg of ["images/clam.png", "images/clamclosed.png"]) {
      const blah = PIXI.Texture.fromImage(clamImg);
      textureArray2.push(blah);
    }

    const spriteOptions = [
      { spriteSource: textureArray, scale: 0.1, anim: true },
      { spriteSource: textureArray, scale: 0.1, anim: true },
      { spriteSource: textureArray, scale: 0.1, anim: true },
      { spriteSource: textureArray2, scale: 0.5, anim: true },
      { spriteSource: textureArray2, scale: 0.5, anim: true },
      { spriteSource: textureArray2, scale: 0.5, anim: true },
      { spriteSource: PIXI.loader.resources["images/giant-clam.png"].texture, scale: 1, anim: false },
      { spriteSource: PIXI.loader.resources["images/razorclams.png"].texture, scale: 0.1, anim: false }
    ];

    const animSpeeds = [0.01, 0.02, 0.03, 0.04, 0.05, 0.06]
    const staggeredHeight = [2, 2.5, 3]
    const clams = []
    const clamTimeline = new TimelineLite()
    const clamOutlineTimeline = new TimelineLite();
    const clamDisappearTimeline = new TimelineLite();
    const outlineFilterRed = new GlowFilter(15, 2, 1, 0xff9999, 0.5);

    for (let i = 0; i < 16; i++) {
      const spriteObj = spriteOptions[Math.floor(Math.random() * spriteOptions.length)];
      let sprite;
      if (spriteObj.anim == true) {
        sprite = new PIXI.extras.AnimatedSprite(spriteObj.spriteSource);
        const speed = animSpeeds[Math.floor(Math.random() * animSpeeds.length)];
        sprite.animationSpeed = speed;
        sprite.play()
      } else {
        sprite = new PIXI.Sprite(spriteObj.spriteSource);
      }

      sprite.scale.set(spriteObj.scale)

      const minX = sprite.width / 2
      const maxX = app.screen.width - sprite.width;

      const heightMargin = staggeredHeight[Math.floor(Math.random() * staggeredHeight.length)];
      const minY = app.screen.height - app.screen.height / heightMargin;
      const maxY = app.screen.height - sprite.height;

      TweenLite.set(sprite, {
        pixi: {
          x: Math.floor(Math.random() * (maxX - minX + 1) + minX),
          y: Math.floor(Math.random() * (maxY - minY + 1) + minY)
        },
        alpha: 0
      });

      const duration = Math.floor(Math.random() * 3) + 1;
      clams.push(sprite)
      app.stage.addChild(sprite);
      clamTimeline.to(sprite, duration, { alpha: 1 }, "clams")
      clamOutlineTimeline.to(sprite, 2, { pixi: { filters: [outlineFilterRed] } }, "clamsOutline");
    }

    const thisText = new PIXI.Text("THIS", biggestStyle);
    TweenLite.set(thisText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(thisText);

    const isText = new PIXI.Text("IS", biggestStyle);
    TweenLite.set(isText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(isText);

    const battleclamsText = new PIXI.Text("BATTLECLAMS", biggestStyle);
    TweenLite.set(battleclamsText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(battleclamsText);

    const battleclamsLogo = new PIXI.Sprite(PIXI.loader.resources["images/logo.png"].texture)
    battleclamsLogo.anchor.set(0.5);
    TweenLite.set(battleclamsLogo, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 2 + 20,
        scale: 0.1
      },
      alpha: 0
    });
    app.stage.addChild(battleclamsLogo);

    document.addEventListener('click',function(e){
      if(e.target && e.target.id== 'skip') {
        tl.play('battleInfoAppears')
      }
    })

    const tl = new TimelineMax()
      .to(richText, 2, { alpha: 1 })
      .to(richText, 2, { alpha: 0 })
      .addLabel("skylinesAppear")
      .to(worldAboveText, 3, { alpha: 1 }, "skylinesAppear")
      .to(skyline, 1, { alpha: 1 }, "skylinesAppear")
      .to(skylineAnim, 3, { alpha: 1 }, "skylinesAppear")
      .to(worldAboveText, 2, { alpha: 0 })
      .addLabel("skylinesDisappear")
      .to(skylineAnim, 5, { pixi: { y: 0 } }, "skylinesDisappear")
      .to(skyline, 5, { pixi: { y: 0 } }, "skylinesDisappear")
      // .to(skylineAnim, 3, { alpha: 0 }, "skylinesDisappear")
      // .to(skyline, 0, { alpha: 0 })
      // .to(worldAboveText, 3, { alpha: 0 }, "skylinesDisappear")
      .to(worldBelowText, 2, { alpha: 1 }, "-=1")
      .to(worldBelowText, 2, { alpha: 0 })
      .to(far, 4, { alpha: 1, pixi: { y: app.screen.height } })

      .to(clamsText, 1, { alpha: 1 }, "-=1")
      .addLabel("clams")
      .to(clamsText, 1, { alpha: 0 })
      .add(clamTimeline)
      .to(battleText, 2, { alpha: 1 })
      .to(battleText, 1, { alpha: 0 })
      .addLabel("clamsOutline")
      .add(clamOutlineTimeline)
      .to(thisText, 2, { alpha: 1 })
      .to(thisText, 1, { alpha: 0 })
      .addLabel("clamsAfterOutline")
      .to(isText, 2, { alpha: 1 }, "clamsAfterOutline")
      .to(isText, 1, { alpha: 0 })
      .staggerTo(clams, 0.5, { alpha: 0 }, 0.5, "clamsAfterOutline")
      // .add(clamDisappearTimeline, "clamsDisappear")

      .addLabel("battleInfoAppears")
      .to("#skip", 0, { visibility: "hidden" })
      .to(battleclamsText, 2, { alpha: 1 })
      .to(battleclamsLogo, 2, { alpha: 1, pixi: { scale: 0.5 } }, "battleInfoAppears")
      .to("#which-battleclam", 0, {
        top: `${battleclamsLogo.position.y + 150}px`
      })
      .to("#which-battleclam", 2, { alpha: 1, visibility: "visible" });
  }
}

export default startSprites;
