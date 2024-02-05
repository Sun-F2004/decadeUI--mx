app.import(function (lib, game, ui, get, ai, _status, app) {

  lib.arenaReady.push(function () {
    //更新轮次
    var originUpdateRoundNumber = game.updateRoundNumber;
    game.updateRoundNumber = function () {
      originUpdateRoundNumber.apply(this, arguments);
      if (ui.cardRoundTime) ui.cardRoundTime.updateRoundCard();
    };
    if (lib.config.mode == 'identity' || lib.config.mode == 'doudizhu' || lib.config.mode == 'guozhan' || lib.config.mode == 'versus') {
      if (lib.config.mode == 'doudizhu') {
        var jiaojia = ui.create.node('div');
        jiaojia.innerHTML = "<span style='letter-spacing:-1px;font-weight:400;'>城主出兵️</span>" + "<br>" + (num = ['100', '200', '300', '600', '900']).randomGet(1);
        jiaojia.style.cssText = "display: line;position: absolute;top: 55px;color: #523a29;left: 137px;font-size:15px;font-family:yuanli; z-index:1; text-shadow: #000 0 0 0.3px,#000 0 0 0.3px,#000 0 0 0.3px;-webkit-text-stroke:none;font-weight:400;"
        document.body.appendChild(jiaojia);

        var head = ui.create.node('img');
        head.src = lib.assetURL + "extension/十周年UI/shoushaUI/lbtn/images/uibutton/chubing.png"
        head.style.cssText = "display: block; --w: 103px;--h: calc(var(--w) * 1/2);width: var(--w);height: var(--h);position: absolute;top: 48px;left:120px;background-color: transparent;z-index:-1"
        document.body.appendChild(head);
        var head = ui.create.node('img');
        head.src = lib.assetURL + "extension/十周年UI/shoushaUI/lbtn/images/uibutton/shoupai.png"
        head.style.cssText = "display: block; --w: 60px;--h: 40px;width: var(--w);height: var(--h);position: absolute;top: 5px;left:120px;background-color: transparent;z-index:-1"
        document.body.appendChild(head);
      }
    }

    if (lib.config.mode == 'identity' || lib.config.mode == 'doudizhu' || lib.config.mode == 'guozhan' || lib.config.mode == 'versus' || lib.config.mode == 'single' || lib.config.mode == 'martial') {
      var wenhao = ui.create.node('img');
      wenhao.src = lib.assetURL + "extension/十周年UI/shoushaUI/lbtn/images/CD/wenhao.png"
      wenhao.style.cssText = "display: block;width: 40px;height: 29px;position: absolute;bottom: calc(100% - 55px);left: calc(100% - 159.5px);background-color: transparent;z-index:3"

      //--------------//	
      if (lib.config.mode == 'identity' || lib.config.mode == 'doudizhu' || lib.config.mode == 'versus' || lib.config.mode == 'guozhan') {
        wenhao.onclick = function () {
          var popuperContainer = ui.create.div('.popup-container', ui.window);
          game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/SSCD/label.mp3');

          if (lib.config.mode == 'identity') {
            if (game.me.identity == 'zhu') {
              ui.create.div('.Tipzhugong', popuperContainer);
            }
            else if (game.me.identity == 'zhong') {
              ui.create.div('.Tipzhongchen', popuperContainer);
            }
            else if (game.me.identity == 'fan') {
              ui.create.div('.Tipfanzei', popuperContainer);
            }
            else if (game.me.identity == 'nei') {
              ui.create.div('.Tipneijian', popuperContainer);
            }
          }
          if (lib.config.mode == 'doudizhu') {
            if (game.me.identity == 'zhu') {
              ui.create.div('.Tipdizhu', popuperContainer);
            }
            else if (game.me.identity == 'fan') {
              ui.create.div('.Tipnongmin', popuperContainer);
            }
          }

          if (lib.config.mode == 'versus') {
            ui.create.div('.Tiphu', popuperContainer);
          }

          if (lib.config.mode == 'guozhan') {
            if (game.me.group == 'unknown' || game.me.group == 'undefined') {
              //未选择身份势力
              ui.create.div('.Tipundefined', popuperContainer);
            }
            else if (game.me.group == 'wei') {
              ui.create.div('.Tipweiguo', popuperContainer);
            }
            else if (game.me.group == 'shu') {
              ui.create.div('.Tipshuguo', popuperContainer);
            }
            else if (game.me.group == 'wu') {
              ui.create.div('.Tipwuguo', popuperContainer);
            }
            else if (game.me.group == 'qun') {
              ui.create.div('.Tipqunxiong', popuperContainer);
            }
            else if (game.me.group == 'jin') {
              ui.create.div('.Tipjinguo', popuperContainer);
            }
            else if (game.me.group == 'ye') {
              ui.create.div('.Tipyexinjia', popuperContainer);
            }
            //容错选项
            else { ui.create.div('.Tipweizhi', popuperContainer); }
          }
          popuperContainer.addEventListener('click', event => {
            game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/SSCD/caidan.mp3');
            popuperContainer.delete(200);
          });
        };
      }
      document.body.appendChild(wenhao);
    }
  });


  var head = ui.create.node('img');
  head.src = lib.assetURL + "extension/十周年UI/shoushaUI/lbtn/images/uibutton/yinying.png"
  head.style.cssText = "display: block;width: 100%;height: 30%;position: absolute;bottom: 0px;background-color: transparent;z-index:-4"
  document.body.appendChild(head);

  var head = ui.create.node('img');
  head.src = lib.assetURL + "extension/十周年UI/shoushaUI/lbtn/images/CD/button3.png"
  head.style.cssText = "display: block;--w: 56px;--h: calc(var(--w) * 74/71);width: var(--w);height: var(--h);position: absolute;bottom: calc(100% - 69px);left: calc(100% - 112.5px);background-color: transparent;z-index:1"
  head.onclick = function () {

    head.style.transform = 'scale(0.95)';

  }
  document.body.appendChild(head);

  var head = ui.create.node('div');
  head.style.cssText = "display: block;--w: 56px;--h: calc(var(--w) * 74/71);width: var(--w);height: var(--h);position: absolute;bottom: calc(100% - 69px);left: calc(100% - 112.5px);background-color: transparent;z-index:1"
  head.onclick = function () {
    game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/click.mp3');
    var popuperContainer = ui.create.div('.popup-container', { background: "rgb(0,0,0,0)" }, ui.window);
    popuperContainer.addEventListener('click', event => {
      game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/back.mp3');

      event.stopPropagation();
      popuperContainer.delete(200);
    });
    var HOME = ui.create.div('.HOME', popuperContainer);
    var SZ = ui.create.div('.SZ', popuperContainer);
    SZ.addEventListener('click', event => {
      game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/button.mp3');

      if (!ui.click.configMenu) return;
      game.closePopped();
      game.pause2();
      ui.click.configMenu();
      ui.system1.classList.remove('shown');
      ui.system2.classList.remove('shown');
    });
    var LK = ui.create.div('.LK', popuperContainer);
    LK.addEventListener('click', event => {
      game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/button.mp3');

      window.location.reload();
    });
    var BJ = ui.create.div('.BJ', popuperContainer);
    BJ.addEventListener('click', event => {
      game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/button.mp3');

      //换背景          
      var Backgrounds = ["人间安乐", "兵临城下", "兵荒马乱", "三国开黑节", "华灯初上", "天书乱斗", "朝堂之上", "校园行", "桃园风格", "汉室当兴", "游卡桌游", "十周年"];

      ui.background.setBackgroundImage("extension/十周年UI/shoushaUI/lbtn/images/background/" + Backgrounds.randomGet() + ".jpg");

    });
    var TX = ui.create.div('.TX', popuperContainer);
    TX.addEventListener('click', event => {
      game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/button.mp3');

      game.over();
    });
    var TG = ui.create.div('.TG', popuperContainer);
    TG.addEventListener('click', event => {
      game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/button.mp3');

      ui.click.auto();
    });

  }
  document.body.appendChild(head);



  var head = ui.create.node('img');
  head.src = lib.assetURL + "extension/十周年UI/shoushaUI/lbtn/images/uibutton/zhengli.png"
  head.style.cssText = "display: block;--w: 88px;--h: calc(var(--w) * 81/247);width: var(--w);height: var(--h);position: absolute;top: calc(100% - 33px);left: calc(100% - 376.2px);background-color: transparent;z-index:7"
  head.onclick = function () {
    //head.onclick=ui.click.sortCard;
    var cards = game.me.getCards("hs");
    var sort2 = function (b, a) {
      if (a.name != b.name) return lib.sort.card(a.name, b.name);
      else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
      else return a.number - b.number;
    };
    if (cards.length > 1) {
      cards.sort(sort2);
      cards.forEach(function (i, j) {
        game.me.node.handcards1.insertBefore(cards[j], game.me.node.handcards1.firstChild);
      });
      dui.queueNextFrameTick(dui.layoutHand, dui);
    }
  }
  document.body.appendChild(head);

  var plugin = {
    name: 'lbtn',
    filter: function () {
      return !['chess', 'tafang'].includes(get.mode());
    },
    content: function (next) {
      lib.skill._uicardupdate = {
        trigger: { player: 'phaseJieshuBegin' },
        forced: true,
        unique: true,
        popup: false,
        silent: true,
        noLose: true,
        noGain: true,
        noDeprive: true,
        priority: -Infinity,
        filter: function (event, player) {
          return player == game.me
        },
        content: function () {
          if (ui.updateSkillControl) ui.updateSkillControl(game.me, true);
        }
      }
    },
    precontent: function () {
      Object.assign(game.videoContent, {
        createCardRoundTime: function () {
          ui.cardRoundTime = plugin.create.cardRoundTime();
        },
        createhandcardNumber: function () {
          ui.handcardNumber = plugin.create.handcardNumber();
        },
        updateCardRoundTime: function (opts) {
          if (!ui.cardRoundTime) return;
          ui.cardRoundTime.node.roundNumber.innerHTML = '<span>第' + game.roundNumber + '轮</span>';
          ui.cardRoundTime.setNumberAnimation(opts.cardNumber);
        },
        updateCardnumber: function (opts) {
          if (!ui.handcardNumber) return;
          // ui.handcardNumber.setNumberAnimation(opts.cardNumber);
        },
      });
      app.reWriteFunction(ui.create, {
        me: [function () {
          plugin.create.control();
        }, null],
        arena: [null, function () {
          if (ui.time3) {
            clearInterval(ui.time3.interval);
            ui.time3.delete();
          }
          if (ui.cardPileNumber) ui.cardPileNumber.delete();
          ui.cardRoundTime = plugin.create.cardRoundTime();
          ui.handcardNumber = plugin.create.handcardNumber();
        }],
        cards: [null, function () {
          if (ui.cardRoundTime) {
            ui.cardRoundTime.updateRoundCard();
          }
        }],
      });
      app.reWriteFunction(lib.configMenu.appearence.config, {
        update: [null, function (res, config, map) {
          map.control_style.hide();
          map.custom_button.hide();
          map.custom_button_system_top.hide();
          map.custom_button_system_bottom.hide();
          map.custom_button_control_top.hide();
          map.custom_button_control_bottom.hide();
          map.radius_size.hide();
        }],
      });


      ui.create.confirm = function (str, func) {
        var confirm = ui.confirm;
        if (!confirm) {
          confirm = ui.confirm = plugin.create.confirm();
        }
        confirm.node.ok.classList.add('disabled');
        confirm.node.cancel.classList.add('disabled');
        if (_status.event.endButton) {
          ui.confirm.node.cancel.classList.remove('disabled');
        }
        if (str) {
          if (str.indexOf('o') !== -1) {
            confirm.node.ok.classList.remove('disabled');
          }
          if (str.indexOf('c') !== -1) {
            confirm.node.cancel.classList.remove('disabled');
          }
          confirm.str = str;
        }

        if (func) {
          confirm.custom = func;
        }
        ui.updatec();
        confirm.update();
      };
    },
    create: {
      control: function () {

      },
      confirm: function () {

        var confirm = ui.create.control('<span>确定</span>', 'cancel');
        confirm.classList.add('lbtn-confirm');
        confirm.node = {
          ok: confirm.firstChild,
          cancel: confirm.lastChild,
        };
        if (_status.event.endButton) {
          _status.event.endButton.close();
          //	delete event.endButton;		
        }
        confirm.node.ok.link = 'ok';
        confirm.node.ok.classList.add('primary');
        confirm.node.cancel.classList.add('primary2');
        confirm.custom = plugin.click.confirm;
        app.reWriteFunction(confirm, {
          close: [function () {
            this.classList.add('closing');
          }],
        });
        for (var k in confirm.node) {
          confirm.node[k].classList.add('disabled');
          confirm.node[k].removeEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.control);
          confirm.node[k].addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function (e) {
            e.stopPropagation();
            if (this.classList.contains('disabled')) {
              if (this.link === 'cancel' && this.dataset.type === 'endButton' && _status.event.endButton) {

                _status.event.endButton.custom();
                ui.confirm.close();
                //  ui.updatec();
              }
              return;
            }

            if (this.parentNode.custom) {
              this.parentNode.custom(this.link, this);
            }
          });
        }

        if (ui.skills2 && ui.skills2.skills.length) {
          var skills = ui.skills2.skills;
          confirm.skills2 = [];
          for (var i = 0; i < skills.length; i++) {
            var item = document.createElement('div');
            item.link = skills[i];
            item.innerHTML = get.translation(skills[i]);
            item.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function (e) {
              e.stopPropagation();
              ui.click.skill(this.link);
            });

            item.dataset.type = 'skill2';
            if (ui.updateSkillControl) ui.updateSkillControl(game.me, true);/*
            confirm.insertBefore(item, confirm.firstChild);*/
          }
        }

        confirm.update = function () {
          if (confirm.skills2) {
            if (_status.event.skill && _status.event.skill !== confirm.dataset.skill) {
              confirm.dataset.skill = _status.event.skill;
              confirm.skills2.forEach(function (item) {
                item.remove();
              });
              ui.updatec();
            } else if (!_status.event.skill && confirm.dataset.skill) {
              delete confirm.dataset.skill;
              confirm.skills2.forEach(function (item) {
                confirm.insertBefore(item, confirm.firstChild);
              });
              ui.updatec();
            }
          }
          if (ui.updateSkillControl) ui.updateSkillControl(game.me, true);
        };
        return confirm;
      },


      handcardNumber: function () {
        var node3 = ui.create.div('.settingButton', ui.arena, plugin.click.setting);

        /*ui.create.div('.lbtn-controls', ui.arena);*/
        //-------原版---------//
        if (lib.config.extension_十周年UI_XPJ == "on") {
          var node5 = ui.create.div('.huanfuButton', ui.arena, plugin.click.huanfu);
          var node2 = ui.create.div('.jiluButton', ui.arena, ui.click.pause);
          //-------------------//
        } else {
          //-------新版----------//
          var node6 = ui.create.div('.huanfuButton_new', ui.arena, plugin.click.huanfu);
          var node7 = ui.create.div('.jiluButton_new', ui.arena, ui.click.pause);
          var node8 = ui.create.div('.meiguiButton_new', ui.arena);
          var node9 = ui.create.div('.xiaolianButton_new', ui.arena);
          //---------------------//
        }
        var node4 = ui.create.div('.tuoguanButton', ui.arena, ui.click.auto);
        var node = ui.create.div('.handcardNumber', ui.arena).hide();
        node.node = {
          cardPicture: ui.create.div('.cardPicture', node),
          cardNumber: ui.create.div('.cardNumber', node),

        };
        node.updateCardnumber = function () {
          if (!game.me) return;

          var cardNumber2 = game.me.countCards('h') || 0;
          var cardNumber = game.me.getHandcardLimit() || 0;
          var numbercolor = 'white';
          if (cardNumber2 > cardNumber) numbercolor = 'red';
          if (cardNumber == Infinity) cardNumber = '∞'
          this.node.cardNumber.innerHTML = '<span>' + '<font color=' + numbercolor + ' > ' + cardNumber2 + '</font>' + '<sp style="font-size:20px; font-family:yuanli; color:#FFFCF5;">' + ' / ' + '</sp>' + cardNumber + '</span>';/*手牌数参数*/
          //      this.setNumberAnimation(cardNumber);
          this.show();

          game.addVideo('updateCardnumber', null, {
            cardNumber: cardNumber,
          });
        };
        node.node.cardNumber.interval = setInterval(function () {
          ui.handcardNumber.updateCardnumber()
        }, 1000);
        //    game.addVideo('createCardRoundTime');
        game.addVideo('createhandcardNumber');
        return node;
      },
      cardRoundTime: function () {
        var node = ui.create.div('.cardRoundNumber', ui.arena).hide();
        node.node = {
          cardPileNumber: ui.create.div('.cardPileNumber', node),
          roundNumber: ui.create.div('.roundNumber', node),
          time: ui.create.div('.time', node),
        };

        node.updateRoundCard = function () {
          var cardNumber = ui.cardPile.childNodes.length || 0;
          var roundNumber = game.roundNumber || 0;
          this.node.roundNumber.innerHTML = '<span>第' + game.roundNumber + '轮</span>';
          this.setNumberAnimation(cardNumber);
          this.show();
          game.addVideo('updateCardRoundTime', null, {
            cardNumber: cardNumber,
            roundNumber: roundNumber,
          });
        };

        node.setNumberAnimation = function (num, step) {
          var item = this.node.cardPileNumber;
          clearTimeout(item.interval);
          if (!item._num) {
            item.innerHTML = '<span>' + num + '</span>';
            item._num = num;
          } else {
            if (item._num !== num) {
              if (!step) step = 500 / Math.abs(item._num - num);
              if (item._num > num) item._num--;
              else item._num++;
              item.innerHTML = '<span>' + item._num + '</span>';
              if (item._num !== num) {
                item.interval = setTimeout(function () {
                  node.setNumberAnimation(num, step);
                }, step);
              }
            }
          }
        };

        ui.time4 = node.node.time;
        ui.time4.starttime = get.utc();
        ui.time4.interval = setInterval(function () {
          var num = Math.round((get.utc() - ui.time4.starttime) / 1000);
          if (num >= 3600) {
            var num1 = Math.floor(num / 3600);
            var num2 = Math.floor((num - num1 * 3600) / 60);
            var num3 = num - num1 * 3600 - parseInt(num2) * 60;
            if (num1 < 10) {
              num1 = '0' + num1.toString();
            }
            if (num2 < 10) {
              num2 = '0' + num2.toString();
            }
            if (num3 < 10) {
              num3 = '0' + num3.toString();
            }
            ui.time4.innerHTML = '<span>' + num1 + ':' + num2 + ':' + num3 + '</span>';
          }
          else {
            var num1 = Math.floor(num / 60);
            var num2 = num - num1 * 60;
            if (num1 < 10) {
              num1 = '0' + num1.toString();
            }
            if (num2 < 10) {
              num2 = '0' + num2.toString();
            }
            ui.time4.innerHTML = '<span>' + num1 + ':' + num2 + '</span>';
          }
        }, 1000);
        game.addVideo('createCardRoundTime');
        return node;
      },
    },
    click: {
      huanfu: function () {
        game.playAudio('../extension/十周年UI/shoushaUI/lbtn/images/CD/huanfu.mp3');
        window.zyile_charactercard ? window.zyile_charactercard(player, false) : ui.click.charactercard(game.me.name, game.zhu, lib.config.mode == 'mode_guozhan' ? 'guozhan' : true);
      },
      confirm: function (link, target) {
        if (link === 'ok') {
          ui.click.ok(target);
        } else if (link === 'cancel') {
          ui.click.cancel(target);
        } else if (target.custom) {
          target.custom(link);
        }
      },
    },
    compare: {
      type: function (a, b) {
        if (a === b) return 0;
        var types = ['basic', 'trick', 'delay', 'equip'].addArray([a, b]);
        return types.indexOf(a) - types.indexOf(b);
      },
      name: function (a, b) {
        if (a === b) return 0;
        return a > b ? 1 : -1;
      },
      nature: function (a, b) {
        if (a === b) return 0;
        var nature = [undefined, 'fire', 'thunder'].addArray([a, b]);
        return nature.indexOf(a) - nature.indexOf(b);
      },
      suit: function (a, b) {
        if (a === b) return 0;
        var suit = ['diamond', 'heart', 'club', 'spade'].addArray([a, b]);
        return suit.indexOf(a) - suit.indexOf(b);
      },
      number: function (a, b) {
        return a - b;
      },
    },
  };
  return plugin;
});
