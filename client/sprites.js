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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
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

  const clamImages = [
    "images/clams/atlantic-surf-clam.png",
    "images/clams/blood-clam.png",
    "images/clams/blue-mussel.png",
    "images/clams/common-cockle.png",
    "images/clams/maxima-clam.png",
    "images/clams/great-scallop.png",
    "images/clams/grooved-carpet-shell.png",
    "images/clams/hard-clam.png",
    "images/clams/pacific-oyster.png",
    "images/clams/pearl-oyster.png",
    "images/clams/perna-viridis.png",
    "images/clams/pinna-nobilis.png",
    "images/clams/razor-clam.png",
    "images/clams/tuatua.png",
    "images/clams/warty-venus.png"
  ]

  const animationImages = [
    "images/bgfade.png",
    "images/bgfade-mobile.png",
    "images/skyline2.png",
    "images/skyline2-green1.png",
    "images/skyline2-mobile.png",
    "images/skyline2-mobile-green.png",
    "images/logo.png"
  ]

  function loadImages() {
    PIXI.loader
      .add(animationImages.concat(clamImages))
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

    const styleMobile = new PIXI.TextStyle({
      fontFamily: "Trade Winds",
      fontSize: 24,
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: app.screen.width / 2
    });

    const isMobile = app.screen.width <= 450
    const bigTextStyle = isMobile ? styleMobile : biggerStyle
    const normalTextStyle = isMobile ? styleMobile : style;

    const farTexture = isMobile ? PIXI.loader.resources["images/bgfade-mobile.png"].texture : PIXI.loader.resources["images/bgfade.png"].texture
    const far = new PIXI.extras.TilingSprite(farTexture, app.screen.width, app.screen.height);
    far.anchor.x = 0;
    far.anchor.y = 0;
    TweenLite.set(far, {
      pixi: {
        x: 0,
        y: app.screen.height,
        tilePosition: {
          x: 0,
          y: 0
        }
      },
      alpha: 0
    });
    app.stage.addChild(far);

    const skylineBackgroundTexture = isMobile ? PIXI.loader.resources["images/skyline2-mobile-green.png"].texture : PIXI.loader.resources["images/skyline2-green1.png"].texture;
    const skylineBackground = new PIXI.extras.TilingSprite(skylineBackgroundTexture, skylineBackgroundTexture.width, skylineBackgroundTexture.height);
    skylineBackground.anchor.x = 0;
    skylineBackground.anchor.y = 1;
    TweenLite.set(skylineBackground, {
      pixi: {
        x: -60, // TODO WEIRD
        y: app.screen.height
      },
      alpha: 0
    });
    app.stage.addChild(skylineBackground);

    const skylineTexture = isMobile ? PIXI.loader.resources["images/skyline2-mobile.png"].texture : PIXI.loader.resources["images/skyline2.png"].texture;
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

    const richText = new PIXI.Text("The year is 2023.", normalTextStyle);
    TweenLite.set(richText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 2,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(richText);

    const worldAboveText = new PIXI.Text("The world above has been devastated by a nuclear catastrophe.", normalTextStyle);
    TweenLite.set(worldAboveText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(worldAboveText);

    const worldBelowText = new PIXI.Text("The world below is dominated by...", normalTextStyle);
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

    const battleText = new PIXI.Text("Will you survive the melee and conquer the ocean?", normalTextStyle);
    TweenLite.set(battleText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(battleText);

    const staggeredHeight = [2, 2.5, 3]
    const clams = []
    const clamTimeline = new TimelineLite()
    const clamOutlineTimeline = new TimelineLite();
    const outlineFilterRed = new GlowFilter(15, 2, 1, 0xff9999, 0.5);
    const numClams = isMobile ? 3 : 7

    const preClamOrder = Array.from(Array(clamImages.length).keys());
    const shuffledOrder = shuffleArray(preClamOrder);
    const clamChoices = shuffledOrder.slice(0, numClams);

    for (let i = 0; i < numClams; i++) {
      const spriteSource = clamImages[clamChoices[i]];
      let sprite;
      sprite = new PIXI.Sprite(PIXI.loader.resources[spriteSource].texture);

      if (isMobile) {
        sprite.scale.set(0.2);
      } else {
        sprite.scale.set(0.4)
      }

      const pixelDiff = (app.screen.width - sprite.width) / numClams
      const x = (pixelDiff * i + 1) + sprite.width / 2

      const heightMargin = staggeredHeight[Math.floor(Math.random() * staggeredHeight.length)];
      const minY = app.screen.height - app.screen.height / heightMargin;
      const maxY = app.screen.height - sprite.height;

      TweenLite.set(sprite, {
        pixi: {
          x: x,
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

    const thisText = new PIXI.Text("THIS", biggerStyle);
    TweenLite.set(thisText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(thisText);

    const isText = new PIXI.Text("IS", biggerStyle);
    TweenLite.set(isText, {
      pixi: {
        x: app.screen.width / 2,
        y: app.screen.height / 4,
        anchor: 0.5
      },
      alpha: 0
    });
    app.stage.addChild(isText);

    const battleclamsText = new PIXI.Text("BATTLECLAMS", bigTextStyle);
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
      .to(richText, 1, { alpha: 1 })
      .to(richText, 2, { alpha: 0 })
      .addLabel("skylinesAppear")
      .to(worldAboveText, 1, { alpha: 1 }, "skylinesAppear")
      .to(skyline, 1, { alpha: 1 }, "skylinesAppear")
      .to(skylineBackground, 3, { alpha: 1 }, "-=1")
      .to(worldAboveText, 2, { alpha: 0 })
      .addLabel("skylinesDisappear")
      .to(skylineBackground, 5, { pixi: { y: 0 } }, "skylinesDisappear")
      .to(skyline, 5, { pixi: { y: 0 } }, "skylinesDisappear")
      .to(worldBelowText, 1, { alpha: 1 }, "-=1")
      .to(worldBelowText, 2, { alpha: 0 })
      .to(far, 3, { alpha: 1, pixi: { y: 0 } })
      .to(clamsText, 1, { alpha: 1 }, "-=1")
      .addLabel("clams")
      .to(clamsText, 2, { alpha: 0 })
      .add(clamTimeline)
      .to(battleText, 1, { alpha: 1 })
      .to(battleText, 2, { alpha: 0 })
      .addLabel("clamsOutline")
      .add(clamOutlineTimeline)
      .to(thisText, 1, { alpha: 1 })
      .to(thisText, 2, { alpha: 0 })
      .addLabel("clamsAfterOutline")
      .to(isText, 1, { alpha: 1 }, "clamsAfterOutline")
      .to(isText, 2, { alpha: 0 })
      .staggerTo(clams, 0.5, { alpha: 0 }, 0.5, "clamsAfterOutline")
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
