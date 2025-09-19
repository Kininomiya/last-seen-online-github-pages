
            const loadQueue = [];

function Load(path) {
  // Load path into an <img> that is hidden in the background:
  let img;

  const handled = () => {
    if (img.parentNode === document.body) {
      document.body.removeChild(img);
    }

    if (loadQueue.length > 0) {
      Load(loadQueue.shift());
    }
  };

  if (path.endsWith(".mp3") || path.endsWith(".wav")) {
    // return path;
    if (typeof Audio === "undefined") {
      return;
    }
    img = new Audio();
    img.addEventListener("loadeddata", handled);
  } else if (path.endsWith(".mp4")) {
    img = document.createElement("video");
    img.addEventListener("canplay", handled);
  } else {
    img = new Image();
    // Delete img once the image has loaded:
    img.onload = handled;
    // Also handle when img doesn't successfully load:
    img.onerror = handled;
  }
  img.style.display = "none";
  document.body.appendChild(img);

  img.src = path;
}

let loaded = 0;
function QueueToLoad(path) {
  if (loaded < 5) {
    Load(path);
    loaded++;
  } else {
    loadQueue.push(path);
  }
}

            QueueToLoad("./assets/bubble.f2df5515d875bfb422b0.gif");
QueueToLoad("./assets/loseamp.5b7d327e9fdbfbaaeb73.gif");
QueueToLoad("./assets/otherworlds.aba358b4131fa3282fc2.gif");
QueueToLoad("./assets/folder.9605776671c9b7a6d97f.gif");
QueueToLoad("./assets/photo.35907fa6d5c1cafcde93.gif");
QueueToLoad("./assets/notepad.e9430243fd32543de900.gif");
QueueToLoad("./assets/gear.100ad850915b524e939e.png");
QueueToLoad("./assets/fake_camera.c39352704197279ab4b5.png");
QueueToLoad("./assets/fullscreen.2759113d3a7b7b217822.png");
QueueToLoad("./assets/house.8fc649925cc3934f39cc.gif");
QueueToLoad("./assets/hints.b93459d8966ee762de33.png");
QueueToLoad("./assets/birthday_wallpaper.aa1805df5a118859174a.gif");
QueueToLoad("./assets/liz_em_desktop.c855514e7ee467183c63.gif");
QueueToLoad("./assets/typing.3badeee93e2a04861940.png");
QueueToLoad("./assets/move.c924d2db82500e505747.png");
QueueToLoad("./assets/arrow2x.952d3842b6daaeba0fa1.png");
QueueToLoad("./assets/pointer2x.693569d19d5e22ee6c90.png");
QueueToLoad("./assets/busy.6258b3802062858ef3ed.png");
QueueToLoad("./assets/pc_horror.1bda71cfb53864b6869b.png");
QueueToLoad("./assets/check.48fc8a62e22e73b8f888.png");
QueueToLoad("./assets/slider.bd31e3920e4570144a8a.png");
QueueToLoad("./assets/back_up_arrow.b9b9daff7a5c825a47d3.png");
QueueToLoad("./assets/folder2.4f0f84ec5e1e148efff8.gif");
QueueToLoad("./assets/play.2af606f73448cf66a8c5.gif");
QueueToLoad("./assets/mic.59a43b7d043b583f43f3.png");
QueueToLoad("./assets/liz_em_desktop_cropped.0dc544973dfb61d5b411.gif");
QueueToLoad("./assets/lawson.5c7c51295dbe9c6df814.gif");
QueueToLoad("./assets/liz.f65d8fd109076025b69d.gif");
QueueToLoad("./assets/creepyvid2.092a95f7cf9119f35a6f.mp4");
QueueToLoad("./assets/ritual1.8e898b84d94cea0b4ca1.gif");
QueueToLoad("./assets/ritual2.05fa0ba27fb3275ea2c2.gif");
QueueToLoad("./assets/ritual3.d847ca0945b2d19f4f5e.gif");
QueueToLoad("./assets/ritual4.70db979383efee5f65ad.gif");
QueueToLoad("./assets/song_1_2.3b90a68a619108bb039a.mp3");
QueueToLoad("./assets/game_2_hands.a77ed87a719732f95d2e.mp3");
QueueToLoad("./assets/song_3_2.24e69a7bbe413a038296.mp3");
QueueToLoad("./assets/song_6_2.1007506e15a79c4fd496.mp3");
QueueToLoad("./assets/song_7.86c1088b3d344f8166bd.mp3");
QueueToLoad("./assets/song_5_2.ddb7bbd3f6e8ce57e0ce.mp3");
QueueToLoad("./assets/song_4.63b5339e8119e0953078.mp3");
QueueToLoad("./assets/song_8.fa59cad655ea848c31ea.mp3");
QueueToLoad("./assets/tutorial.31ef9df7126f50d48b7d.mp3");
QueueToLoad("./assets/login.88c6eeca1696e7b5aeef.mp3");
QueueToLoad("./assets/house1_wind.5da5ef7366266d79f650.mp3");
QueueToLoad("./assets/house_statue.69204d437f21ff9aed2f.mp3");
QueueToLoad("./assets/dialup.8f9c0e3cfa94ec55c6d1.mp3");
QueueToLoad("./assets/beep.7a4a1c1d3557631de9e1.mp3");
QueueToLoad("./assets/tribute_2.b7f1d5c5c936b17d08cc.mp3");
QueueToLoad("./assets/phonecall.242121f1a5a73ca823b4.mp3");
QueueToLoad("./assets/fountain.929b5a2b891ff542f514.mp3");
QueueToLoad("./assets/ending2.aa9fd0bc15a18011d5f5.mp3");
QueueToLoad("./assets/receive.539ffeffa285ee3c891b.mp3");
QueueToLoad("./assets/credits.0562cf1b60c4047cfa48.mp3");
QueueToLoad("./assets/send.7d3772040d3d41cbfc23.mp3");
QueueToLoad("./assets/disco.e7b5f5ac3d421255c6ce.mp3");
QueueToLoad("./assets/retribution.7e00a40b60eee610b6f9.mp3");
QueueToLoad("./assets/buddylist.c023b5a07a8e4efac4c9.gif");
QueueToLoad("./assets/corruption.9a4e57e6cfeed77e28db.gif");
QueueToLoad("./assets/im_receive_echo.3bdb2dbe14906554b402.mp3");
QueueToLoad("./assets/mousedown.fa4b9d00f42e7f87cb06.mp3");
QueueToLoad("./assets/mouseup.607540a207ea846c8f94.mp3");
QueueToLoad("./assets/key1_down.79dc7bae09bb40fab84d.mp3");
QueueToLoad("./assets/phone.5a5bfe648bd7114b47b2.mp3");
QueueToLoad("./assets/key1_up.ad18c0c35729ce7442ad.mp3");
QueueToLoad("./assets/key2_down.8467945cc1a9d588115e.mp3");
QueueToLoad("./assets/key2_up.b81cea993623b167eb24.mp3");
QueueToLoad("./assets/key3_down.b495db48293cc4d2b774.mp3");
QueueToLoad("./assets/key3_up.c31437b1fc27019cc43a.mp3");
QueueToLoad("./assets/key4_down.92ef32709433cac5477f.mp3");
QueueToLoad("./assets/key4_up.265e8ebb473011a1c9c7.mp3");
QueueToLoad("./assets/key5_down.c609fc9b2914d815e061.mp3");
QueueToLoad("./assets/key5_up.86af276c8bcfb07e1e3f.mp3");
QueueToLoad("./assets/knock.0f3cffd09f93a807fd7e.mp3");
QueueToLoad("./assets/knock_echo.bf975f73e0962288d1d7.mp3");
QueueToLoad("./assets/door_open.7cd515a9d3e724377560.mp3");
QueueToLoad("./assets/candle.c4966b0ef4dc62170eec.mp3");
QueueToLoad("./assets/rumble.130199303805ec1b2d45.mp3");
QueueToLoad("./assets/stonebutton.a88aac145bf921c34a30.mp3");
QueueToLoad("./assets/door_close_buddylist.e96ebe75b7a75392dec2.mp3");
QueueToLoad("./assets/aum_single.c4b54d3cfbc3d62444fb.mp3");
QueueToLoad("./assets/twinkle2.d0c7c551ee38253d34cf.mp3");
QueueToLoad("./assets/twinkle1.b4aadeba26be0be6e256.mp3");
QueueToLoad("./assets/Plaster.ac645ff9a50fd50604c7.png");
QueueToLoad("./assets/congratulations.0904d14b4b7a5177496c.gif");
QueueToLoad("./assets/clap.d7d8efc7a9b388706497.gif");
QueueToLoad("./assets/bts1.ce40cd10a1f712599bff.gif");
QueueToLoad("./assets/bts2.fd0eb63cef543a4effa5.gif");
QueueToLoad("./assets/bts6.e262c98119540c490cd1.gif");
QueueToLoad("./assets/bts3.74689715832191efe6f3.gif");
QueueToLoad("./assets/bts5.3a0adc41fe97498b2aac.gif");
QueueToLoad("./assets/bts4.499a1f8aec8b99efc99f.gif");
QueueToLoad("./assets/bts_jenna.d6d6effa553725752b52.gif");
QueueToLoad("./assets/bts_isabel.47f25eb0f77f9d6f4f93.gif");
QueueToLoad("./assets/bts_fountain.1726bd287ddc63118135.gif");
QueueToLoad("./assets/bts_bg.b3dba07844835a5841c5.gif");
QueueToLoad("./assets/desk.4ba0a6cf4962289e7f17.gif");
QueueToLoad("./assets/scan1.a640186201451a3ad717.gif");
QueueToLoad("./assets/en.9cb3933bb4f16634b766.jsonc");
QueueToLoad("./assets/fr.e6665df5aada37acff64.jsonc");
QueueToLoad("./assets/it.54d9ca131acf04041b06.jsonc");
QueueToLoad("./assets/id.c648ac5f9b773700ebe2.jsonc");
QueueToLoad("./assets/ru.4ecffbcdb417d1b52653.jsonc");
QueueToLoad("./assets/jp.f06f812944b9b3315c0f.jsonc");
QueueToLoad("./assets/cz.0ea25e9620918415e2b1.jsonc");
QueueToLoad("./assets/cn_simplified.8661b534eb181e97e35e.jsonc");
QueueToLoad("./assets/es.e6a78f6a6d82aab7977b.jsonc");
QueueToLoad("./assets/eo.8b806132758cf815bdfb.jsonc");
QueueToLoad("./assets/ua-uk.a2f2e42159f846ad59fc.jsonc");
QueueToLoad("./assets/pl.ad0459f81d48a34adb7a.jsonc");
QueueToLoad("./assets/kr.7cac458a4f03cda084ed.jsonc");
QueueToLoad("./assets/pt.64f8e91dcffb11d3cdbf.jsonc");
QueueToLoad("./assets/tr.2fc07abe241f1e7308c8.jsonc");
QueueToLoad("./assets/sign_customworld.c546bd3a4a4a225a7a07.gif");
QueueToLoad("./assets/sign_house.8fbb21cf59f27bc26b34.gif");
QueueToLoad("./assets/playername.ee76661cc774c092cd31.png");
QueueToLoad("./assets/discofloor.d7ee881105827ea6cf4e.gif");
QueueToLoad("./assets/clock.c493085c7eba368eec45.png");
QueueToLoad("./assets/clock_hand1.b99c9875a12dd66cc17e.png");
QueueToLoad("./assets/clock_hand2.b280b3375fd515afb2e9.png");
QueueToLoad("./assets/Grass.7a69caabfea1d587e104.png");
QueueToLoad("./assets/disco.90ce591eba585e4dc9c1.png");
QueueToLoad("./assets/noise_black_transparent.3768f6eac4994843ded6.png");
QueueToLoad("./assets/disco_statue.f6932c356402f4dae092.gif");
QueueToLoad("./assets/liz_glow.f74bdb2d248de8d20b1c.png");
QueueToLoad("./assets/PIXEARG_.dcb6c402987977c07259.ttf");
QueueToLoad("./assets/PIXEAB__.e1d1622c832a3e2c218f.ttf");
QueueToLoad("./assets/fusion-pixel-12px-proportional-latin.fe619a1165b50ea8c935.otf");
QueueToLoad("./assets/fusion-pixel-12px-proportional-ja.48cd791b1bdd3fa4fb31.otf");
QueueToLoad("./assets/fusion-pixel-12px-proportional-ko.90a080428337f4b294ae.otf");
QueueToLoad("./assets/fusion-pixel-12px-proportional-zh_hans.70f66c6222d0398a7e23.otf");
QueueToLoad("./assets/fusion-pixel-12px-proportional-zh_hant.2335a4ad1ef1a99d19fe.otf");
QueueToLoad("./assets/PixeloidSans.e3def220c35436048cae.otf");
QueueToLoad("./assets/vignette.6c28c88519d612695303.png");
QueueToLoad("./assets/login.fd3cf57a2e572662a236.png");
QueueToLoad("./assets/password_help.28d96b38f282d6ce7e42.png");
QueueToLoad("./assets/comic-sans-ms-pixel-rus-eng.31dba021cca18d2274fc.otf");
QueueToLoad("./assets/PixeloidSans-Bold.ea46f15498a98fe48461.otf");
QueueToLoad("./assets/arrow.f9c19299d94dac69842d.png");
QueueToLoad("./assets/wood.f1522b05e430b453f1de.gif");
QueueToLoad("./assets/brick2.a23d35a9c380dec75ade.gif");
QueueToLoad("./assets/brick.a23d35a9c380dec75ade.gif");
QueueToLoad("./assets/glow.1c2e09dd97e7367350e9.png");
QueueToLoad("./assets/bookglow.bbc0b0b286859ad8f9d3.png");
QueueToLoad("./assets/skybox.eea96d9c2e969855370e.png");
QueueToLoad("./assets/candle.2bf72b1cd4796816726b.png");
QueueToLoad("./assets/candle_unlit.3c510550ed0ba2d2691c.png");
QueueToLoad("./assets/door_knocker_1.d16f767413dc8eed0331.gif");
QueueToLoad("./assets/door_knocker_2.a4eb782a1f0962554a21.gif");
QueueToLoad("./assets/goat.755952c87a44ec614854.gif");
QueueToLoad("./assets/cow.a0c361f84e5634b7dd1d.gif");
QueueToLoad("./assets/flag.7b2971fdc66b08c50b2f.gif");
QueueToLoad("./assets/glow_question.2bf3ddbf0c344e201ac6.png");
QueueToLoad("./assets/glow_cow.c13d8d3123b7be36bf48.png");
QueueToLoad("./assets/eagle.9498a502e499c4acafdf.gif");
QueueToLoad("./assets/glow_lion.f36658b3b9142bbf0ffd.png");
QueueToLoad("./assets/glow_goat.59c697b9a036f3c958b5.png");
QueueToLoad("./assets/lion.c2e14f51fb4987861bd3.gif");
QueueToLoad("./assets/glow_eagle.f177a802bd2cec64e28d.png");
QueueToLoad("./assets/portrait1.18ebb488b3b8a1649bd1.gif");
QueueToLoad("./assets/portrait3.d3e313123d676125bd1f.gif");
QueueToLoad("./assets/portrait2.3e4ef710257cabce5953.gif");
QueueToLoad("./assets/portrait4.d1f273b21dca4c385ebd.gif");
QueueToLoad("./assets/fountain_loop.99d50b403f96c8251e28.mp3");
QueueToLoad("./assets/fountain.74ed50d29d28d583b979.gif");
QueueToLoad("./assets/shape3.ccf3b8ca527241ab9639.png");
QueueToLoad("./assets/shape2.3074d490271211a54a19.png");
QueueToLoad("./assets/shape1.b3d6cb32cc5e572d4144.png");
QueueToLoad("./assets/letter_button.972965872516f47ffc74.png");
QueueToLoad("./assets/f.a2a0c9b89a499cba12de.png");
QueueToLoad("./assets/e.c41658b82eebb47840f0.png");
QueueToLoad("./assets/v.712d912e7e70d9c600c3.png");
QueueToLoad("./assets/r.8b9ab9bbb06723305a4f.png");
QueueToLoad("./assets/d.e7855cb18738c1637945.png");
QueueToLoad("./assets/a.8be027d5deade1bfb6a4.png");
QueueToLoad("./assets/m.03c377cc5ab352f0ab2a.png");
QueueToLoad("./assets/o.a919d582b9baf4b440f2.png");
QueueToLoad("./assets/s.fb755407630154efb268.png");
QueueToLoad("./assets/i.8cc8916c474230d404d6.png");
QueueToLoad("./assets/u.2d4a919d67cd8087e81c.png");
QueueToLoad("./assets/l.2662616cc12340143b11.png");
QueueToLoad("./assets/t.60c1e40509c5334705de.png");
QueueToLoad("./assets/n.fe9b28ecff3a79efbb1b.png");
QueueToLoad("./assets/b.e6466061cedc8c6dd6c6.png");
QueueToLoad("./assets/h.30a9b642fcbf7b4ac950.png");
QueueToLoad("./assets/question.e3639fc3624a0cf82de0.png");
QueueToLoad("./assets/frame1.beffaa66435c1dc6bd50.png");
QueueToLoad("./assets/frame2.ca0f3a8b21518d509313.png");
QueueToLoad("./assets/frame3.629699bb9c682302d116.png");
QueueToLoad("./assets/profile.e8be6395147fcd4c13a0.gif");
QueueToLoad("./assets/liz_j.9d7f25ccbb2325b419c8.png");
QueueToLoad("./assets/symbol1.23372ff7a94ed7740080.png");
QueueToLoad("./assets/symbol2.9001fa94441e0b6519e7.png");
QueueToLoad("./assets/symbol3.6697a74da418cd7d2843.png");
QueueToLoad("./assets/symbol4.73149023c034fd9a0d3e.png");
QueueToLoad("./assets/symbol5.a358c3557a1bea8ee3f0.png");
QueueToLoad("./assets/symbol6.5778b960cd2a2230d1c6.png");
QueueToLoad("./assets/lock.dc4bd63f43fbbcc77691.png");
QueueToLoad("./assets/train.6dbf0ab72bca15ac5d2d.gif");
QueueToLoad("./assets/rain.276da54aa3e0f0ceff6c.gif");
QueueToLoad("./assets/bird.7635e44300fa76ce493f.gif");
QueueToLoad("./assets/run.6ba21f64e9fcd4325ed1.gif");
QueueToLoad("./assets/hell.808adc8e76c2f976ab93.png");
QueueToLoad("./assets/scrollbar_up.a2169395a19a06752f56.png");
QueueToLoad("./assets/scrollbar_down.1cc3f92fbb786fe2f4da.png");
QueueToLoad("./assets/scrollbar_sandie.d21a12b3ea3e2a39039e.png");
          