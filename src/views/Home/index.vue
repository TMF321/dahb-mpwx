<template>
  <div class="page-home">
    <!--头部，轮播图-->
    <div class="swiper">
      <div class="van-swipe">
        <div class="van-swipe-track">
          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner01.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner02.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner03.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner04.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner05.jpg" />
            </a>
          </div>
        </div>

        <div class="van-swipe-indicators">
          <i class="van-swipe-indicator--active"></i>
          <i class></i>
          <i class></i>
          <i class></i>
          <i class></i>
        </div>
      </div>
    </div>
    <!-- nav -->
    <div class="navbar">
      <div class="navbarBox">
        <a class="navbarItem" href="javascript:;">
          <i class="map01"></i>
          <span class="skin-navbar">书架</span>
        </a>
      </div>
      <div class="navbarBox">
        <a class="navbarItem" href="javascript:;">
          <i class="map02"></i>
          <span class="skin-navbar">分类</span>
        </a>
      </div>
      <div class="navbarBox">
        <a class="navbarItem" href="javascript:;">
          <i class="map03"></i>
          <span class="skin-navbar">排行</span>
        </a>
      </div>
      <div class="navbarBox">
        <a class="navbarItem" href="javascript:;">
          <i class="map04"></i>
          <span class="skin-navbar">找书</span>
        </a>
      </div>
      <div class="navbarBox">
        <a class="navbarItem" href="javascript:;">
          <i class="map05"></i>
          <span class="skin-navbar">我的</span>
        </a>
      </div>
    </div>
    <!-- week -->
    <div class="activity">
      <div class="activityHeader">
        <span class="activityName">本周排行</span>
      </div>

      <div class="activityBox">
        <div class="activityBox-track">
          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20171127/20171127_da3922a8cddf7a3b9e77a1e957e3ae34.jpg"
                />
                <p class="bookName">王者荣耀</p>
                <p>
                  <span>貂蝉</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180518/20180518_92c50f883504c8d9ef585895492cdb4d.JPEG"
                />
                <p class="bookName">逆天萌宝妖孽娘亲</p>
                <p>
                  <span>纳兰凤瑾</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180308/20180308_a82ce04707d1d8f9db739e3b14cf04c7.JPEG"
                />
                <p class="bookName">极品村医</p>
                <p>
                  <span>大地恩情</span>
                </p>
              </a>
            </div>
          </div>

          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20190107/20190107_699eabb5bb125b65ba5955f46e043ead.JPEG"
                />
                <p class="bookName">闪婚甜妻：高冷老公晚上约</p>
                <p>
                  <span>筱筱风</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180208/20180208_5cf9f250aa3b07cf981862f896c431db.JPEG"
                />
                <p class="bookName">都市最强战医</p>
                <p>
                  <span>人生几渡</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180529/20180529_66d09d51b62c01e368bbd73bb7860d80.JPEG"
                />
                <p class="bookName">皇后万万岁</p>
                <p>
                  <span>浮生如梦</span>
                </p>
              </a>
            </div>
          </div>

          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180308/20180308_225b73c5282fb0781610ed1145544145.JPEG"
                />
                <p class="bookName">蚀心总裁：爱有千千劫</p>
                <p>
                  <span>琴公子</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180208/20180208_d7e43b3280e2cf232e7f56485d904d98.JPEG"
                />
                <p class="bookName">九焰至尊</p>
                <p>
                  <span>爱吃白菜</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180529/20180529_f91debdc06e5fb44baf67ab722f86156.JPEG"
                />
                <p class="bookName">女总裁的顶级高手</p>
                <p>
                  <span>天下</span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="indicators">
          <i class="indicators-active"></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
    <div class="skin-h16"></div>
    <!-- detail -->
    <div class="activity">
      <div class="activityHeader">
        <span class="activityName">主编力荐</span>
      </div>

      <div class="activityBox">
        <div class="activityBox-track">
          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20181018/20181018_c42a89885f7f63d34959fc3433902f2f.JPEG"
                />
                <p class="bookName">最强仙尊重出都市</p>
                <p>
                  <span>非言</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20181025/20181025_e58cc6cb66f3475d56bc9ba41bb3b361.PNG"
                />
                <p class="bookName">暴力俏村姑</p>
                <p>
                  <span>风轻灵</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180903/20180903_39096d27bd471426f88dd8731de290be.JPEG"
                />
                <p class="bookName">夺嫡</p>
                <p>
                  <span>南华</span>
                </p>
              </a>
            </div>
          </div>

          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20181027/20181027_6a449c2a8aa7ac3eba3328ef3ec2bfa5.JPEG"
                />
                <p class="bookName">法医狂妃</p>
                <p>
                  <span>谁家mm</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180907/20180907_df17ccc817ccb789ac120446f7dbb415.JPEG"
                />
                <p class="bookName">邪帝狂后：废材九小姐</p>
                <p>
                  <span>醉卧天下</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180908/20180908_cba83311403553830ad9618e3bc73cd0.JPEG"
                />
                <p class="bookName">九阳天尊</p>
                <p>
                  <span>冰魄</span>
                </p>
              </a>
            </div>
          </div>

          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180710/20180710_d188bc93e4bcb342e9b7be86ac579b32.JPEG"
                />
                <p class="bookName">胜邪天下，绝世质子妃</p>
                <p>
                  <span>拂风旖旎</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20181027/20181027_df3834d2766738c3f0ad081702244987.JPEG"
                />
                <p class="bookName">天庭微博红包群</p>
                <p>
                  <span>布凡</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20181025/20181025_38f31fa5151900988e828181a15f3397.JPEG"
                />
                <p class="bookName">田园锦绣：农家小厨娘</p>
                <p>
                  <span>烟月</span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="indicators">
          <i class="indicators-active"></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
    <div class="skin-h16"></div>
    <!-- hot -->
    <div class="activity">
      <div class="activityHeader">
        <span class="activityName">热门畅销</span>
      </div>

      <div class="activityBox">
        <div class="activityBox-track">
          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180626/20180626_e4016ddebb9056870506560329d50cd1.PNG"
                />
                <p class="bookName">桃野小农民</p>
                <p>
                  <span>东北逍遥王</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180308/20180308_ead39978b4c942713e712546673f27e7.JPEG"
                />
                <p class="bookName">医妃嫁到：王爷莫嚣张</p>
                <p>
                  <span>流年</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180906/20180906_2594ee9ce76e00c665a872af6942b234.PNG"
                />
                <p class="bookName">世界以痛吻我</p>
                <p>
                  <span>玛丽那个苏</span>
                </p>
              </a>
            </div>
          </div>

          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180615/20180615_48aa025fc0f1f95748f5012634a309de.JPEG"
                />
                />
                <p class="bookName">我曾用心爱过你</p>
                <p>
                  <span>棠溪</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20171123/20171123_bc8c1e4e0eac3c8b078f65f73e0d35d4.jpg"
                />
                <p class="bookName">傅少的秘宠娇妻</p>
                <p>
                  <span>迟禾池鱼</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180907/20180907_d231477e4218f2f4a55b2becfd2e0b33.JPEG"
                />
                <p class="bookName">嫡女贵凤：重生毒妃狠角色</p>
                <p>
                  <span>路菲汐</span>
                </p>
              </a>
            </div>
          </div>

          <div class="activityBox-item">
            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180308/20180308_331c99db357fddff24f446b6b6b9fbeb.JPEG"
                />
                <p class="bookName">帝少追缉令，天才萌宝亿万妻</p>
                <p>
                  <span>猫小咪</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180502/20180502_a8f67686a7ccce62d87ab9476255cd8f.JPEG"
                />
                <p class="bookName">都市之最强狂兵</p>
                <p>
                  <span>大红大紫</span>
                </p>
              </a>
            </div>

            <div class="skectill">
              <a href="#">
                <img
                  src="http://images01.mopimg.cn/imgs/20180615/20180615_62f3ac4ac7a40fc431013ada9d43d389.JPEG"
                />
                <p class="bookName">爱你是场逃不过的劫</p>
                <p>
                  <span>悦凝兮</span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="indicators">
          <i class="indicators-active"></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
    <div class="skin-h16"></div>
    <!-- hot -->
    <div class="hotNovel">
      <p class="hotNoverName">热门小说</p>
      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20180308/20180308_fd62db345793c2dc18265218ee051455.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">绝品仙医</div>
            <div class="author">妖孽书生</div>
            <div
              class="bookDesc"
            >九品医师被害，却没想到重生在500年前的华夏。 他选择从零开始，势要复仇。 五百年后能做的事情，五百年前也能做，而且他做得更加疯狂，更加血性，他不想再次留下遗憾……</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>都市</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20180705/20180705_6dcd7d57fec976daa3af4b56c9a0a45c.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">服务员，来个总裁打包带走</div>
            <div class="author">优雅的毛毛虫</div>
            <div
              class="bookDesc"
            >沐靖颜，浅浅一笑，酒窝在脸颊若隐若现，可爱如天仙。 校园里，远远的一眼，她便爱他入骨，等他七年，无怨无悔。七年之后，如愿成了他的妻子，每天和婆婆小姑斗智斗勇，没成想，他的青梅竹马竟然回来了！为了捍卫自己的地位，“老公，我要跟你生个孩子。” 黎晟睿，长而微卷的睫毛下，幽暗深邃的冰眸子，邪魅性感。 七年之后，他认定她是此生唯一的女人，发誓要一生护她，宠她。当年的意外，他对她有所隐瞒，只好瞒着她，告诉她他不想要孩子，为妻子怒对十年的青梅竹马，“我跟你十年前发生过什么吗？” 遇见你，余生都是你。</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>总裁</span>
                <span>霸道</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20181121/20181121_1325f8c6f1c68b7f2482f6a8fd4c2e84.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">宋小宇的妖孽人生</div>
            <div class="author">简单</div>
            <div class="bookDesc">纨绔公子，游走都市，且看他如何俘获美女，演绎自己的妖孽人生······</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>现代都市</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20180409/20180409_161402f3322b05e1aef01da107606fa6.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">风情女上司</div>
            <div class="author">坐而不忘</div>
            <div class="bookDesc">刚上班就碰上了风情万种的美女上司，女上司冰冷娇媚，一向生人勿近，直到有一天，她喝醉了酒...</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>都市</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20181121/20181121_229361bc8659f0f77c5571a23024aaf9.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">来不及再轰轰烈烈</div>
            <div class="author">苏软</div>
            <div
              class="bookDesc"
            >未婚夫出轨，她酩酊大醉，却被一个神秘的男人捡走了。捡走了不要紧，失态失身又失心是怎么回事？那个男人几次三番地救她水火之中，让她灰暗的人生有了别样的光彩。她逐渐深陷，动了真心，再次踏入婚姻殿堂。可天堂与地狱只在一念之间，为什么曾经帮她念她拿命给她的男人，最后却想要她的命？</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>现代言情</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20180502/20180502_6a6544eefcab7e1b48a6ded050ad9101.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">女总裁的最强兵王</div>
            <div class="author">民王</div>
            <div
              class="bookDesc"
            >五年前，江城第一大少古缜被逼离开家乡，家族分崩离析。五年后，化身最强兵王强势归来！这一次，欠我的百倍奉还！伤我亲人者，血债，血偿！长刀所指，谁愿与我，共战天下！</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>热血</span>
                <span>特种兵</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20180706/20180706_d5f0907e6960f029f970bc8dce3b299b.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">龙武九天</div>
            <div class="author">绿柠茶</div>
            <div class="bookDesc">龙族弃子丢落人界，这个大陆叫做武神大陆，人人皆可修武，看我叶啸云如何成为一代武神！站在人界巅峰！</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>玄幻</span>
                <span>热血</span>
              </div>
              <div class="footerRight">
                <span class="skin-noOverColor">连载中</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20180409/20180409_846f119ea09ae992535ac8ea762a136c.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">特种战卫</div>
            <div class="author">冷海隐士</div>
            <div
              class="bookDesc"
            >一名中南海特卫的人生传奇。 他本来是一名放荡不羁学业无成的浪荡少年，天老大他老二。打架和泡妞是他的主业，但突然有一天，晴天一声霹雳响，他竟然被莫名其妙地特招进入了传说中的中央特卫局（化名），从此开始了他传奇般的人生。</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>都市</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->

      <div class="commonLi">
        <a href="#" class="flex">
          <div class="itemLeft">
            <img
              src="http://images01.mopimg.cn/imgs/20181121/20181121_47d7b647aff9b8768dde74f0293c955b.JPEG"
            />
          </div>
          <div class="itemRight">
            <div class="bookName">万古邪皇</div>
            <div class="author">司徒邀月</div>
            <div class="bookDesc">加入邪派合欢宗，修炼双修秘法，穆强一步步成为万古邪皇，坐拥万千美女，统帅群仙争霸。</div>
            <div class="itemFooter flex">
              <div class="footerLeft">
                <span>爽文</span>
                <span>美女</span>
              </div>
              <div class="footerRight">
                <span>已完结</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!---->
    </div>
    <div class="backTop flex animateScale">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDM2IDQ0Ij4KICA8bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PjwvbWV0YWRhdGE+CjxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMxM2NiZDc7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBpZD0i55+p5b2iXzYiIGRhdGEtbmFtZT0i55+p5b2iIDYiIGNsYXNzPSJjbHMtMSIgZD0iTTY5NSwxMTQ3LjFMNjc3LDExMjhsLTE4LDE5LjFoMTEuMjdWMTE2NmgxMy40NnYtMTguOUg2OTVabTAsME02NjIsMTEyMmgzMHYySDY2MnYtMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkgLTExMjIpIi8+Cjwvc3ZnPgo=" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex: 1;
  height: 100%;

  .swiper {
    height: 160.5px;
    width: 100%;
    .van-swipe {
      height: 100%;
      overflow: hidden;
      position: relative;

      .van-swipe-track {
        float: left;
        height: 100%;

        .van-swipe-item {
          float: left;
          height: 100%;

          .box {
            width: 375px !important;
            height: 160.5px !important;
          }
        }
      }

      .van-swipe-indicators {
        left: 50%;
        bottom: 10px;
        position: absolute;
        height: 6px;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);

        .van-swipe-indicators > i {
          border-radius: 100%;
          vertical-align: top;
          display: inline-block;
          background-color: #999;
          width: 6px;
          height: 6px;
        }

        .van-swipe-indicators > i:not(:last-child) {
          margin-right: 6px;
        }
        .van-swipe-indicator .van-swipe-indicator--active {
          background-color: #f60;
        }
      }
    }
  }

  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 69px;
    margin: 20px 20px 0 20px;
    .navbarBox {
      width: 46px;
      height: 69px;
      .navbarItem {
        display: block;
        height: 69px;
      }
    }

    .map01 {
      display: inline-block;
      width: 46px;
      height: 46px;
      margin-right: 10px;
      background: url("../../assets/icon/sj.png") no-repeat;
      background-size: cover;
    }

    .map02 {
      display: inline-block;
      width: 46px;
      height: 46px;
      margin-right: 10px;
      background: url("../../assets/icon/fl.png") no-repeat;
      background-size: cover;
    }

    .map03 {
      display: inline-block;
      width: 46px;
      height: 46px;
      margin-right: 10px;
      background: url("../../assets/icon/ph.png") no-repeat;
      background-size: cover;
    }

    .map04 {
      display: inline-block;
      width: 46px;
      height: 46px;
      margin-right: 10px;
      background: url("../../assets/icon/zs.png") no-repeat;
      background-size: cover;
    }

    .map05 {
      display: inline-block;
      width: 46px;
      height: 46px;
      margin-right: 10px;
      background: url("../../assets/icon/me.png") no-repeat;
      background-size: cover;
    }
    .skin-navbar {
      margin-left: 10px;
      color: #666;
      font-size: 14px;
    }
  }

  .activity {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    height: 223.5px;
    .activityHeader {
      display: flex;
      margin: 0 10px;
      margin-bottom: 20px;

      .activityName {
        font-size: 17px;
        color: #666;
      }
    }
    .activityBox {
      height: 180.5px;
      position: relative;
      padding-left: 375px;
      width: 1875px;
      transform: translate(-375px, 0px);
      .activityBox-track {
        float: left;
        height: 100%;
        overflow: hidden;
        .activityBox-item {
          float: left;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .skectill {
            display: flex;
            justify-content: center;
            align-content: space-around;
            position: relative;
            height: 100%;
            width: 98.5px;
            margin: 0 12px;
            img {
              width: 98.5px !important;
              height: 130.5px !important;
            }
            .bookName {
              overflow: hidden;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              color: #333;
              margin: 3px 0;
              font-size: 14px;
            }
            span {
              font-size: 12px;
              color: rgb(153, 153, 153);
            }
          }
        }
      }
      .indicators {
        position: absolute;
        top: 20px;
        left: auto;
        right: 0;
        bottom: 10px;
        height: 6px;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
        i {
          width: 7px;
          height: 3px;
          border-radius: 20%;
          background: #c9c9c9;
          margin-right: 6px;
          vertical-align: top;
          display: inline-block;
        }
        .indicators i:last-child {
          margin-right: 0;
        }
        .indicators-active {
          background-color: #13cbd7;
        }
      }
    }
  }
  .skin-h16 {
    display: flex;
    background: #f2f2f2;
    height: 8px;
    width: 100%;
  }
  .hotNovel {
    margin: 20px 15px 0;
    .hotNoverName {
      margin-bottom: 20px;
      font-size: 17px;
      color: #333;
    }
    .commonLi {
      padding-bottom: 8px;
      border-bottom: 1px solid #e7e7e7;
      margin-bottom: 8px;
      -ms-flex-pack: justify;
      justify-content: space-between;
      .flex {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .itemLeft {
          margin-right: 8px;
          position: relative;
          height: 116px;
          img {
            width: 89px;
            height: 116px;
          }
        }
        .itemRight {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          height: 116px;
          justify-content: space-between;
          width: calc(100% - 89px);
          .bookName {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            color: #333;
            font-size: 18px;
            margin-bottom: 6px;
          }
          .author {
            font-size: 12px;
            color: #999;
            margin-bottom: 4px;
          }
          .bookDesc {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            height: 40px;
            line-height: 18px;
            margin-bottom: 10px;
            color: #666;
            font-size: 14px;
          }
          .itemFooter {
            justify-content: space-between;
            margin-bottom: 2px;
            .footerLeft span {
              font-size: 12px;
              padding: 2px;
              border: 1px solid;
              border-radius: 18px;
              margin-right: 2px;
              color: #c2c2c2;
              border-color: #c2c2c2;
            }
            .footerRight span {
              color: #ff9926;
              font-size: 14px;
            }
            .footerRight .skin-noOverColor {
              color: #13cbd7;
            }
          }
        }
      }
    }
  }
  .backTop {
    transform: scale(1);
    transition: transform .3s,-webkit-transform .3s;
    position: fixed;
    right: 20px;
    bottom: 50px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #e8e8e8;
    background: #fff;
    img {
      width: 18px;
      height: 22px;
      margin: 10px 0 0 15px;
    }
 }
}
</style>
