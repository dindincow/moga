import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import About from "../page/About.vue";

/** 遊戲公告 **/
import Announcement from "../page/announcement/index.vue";
import Disclaimer from "../page/announcement/Disclaimer.vue";
import SponsorDeclar from "../page/sponsor/SponsorDeclar.vue";

/** 遊戲設定 **/
import GameSetting from "../page/gameSetting/index.vue";
import ServerSet from "../page/gameSetting/ServerSet.vue"; // 伺服器設定
import ProfessionSkill from "../page/gameSetting/ProfessionSkill.vue"; // 職業技能
import MaxHpMp from "../page/gameSetting/MaxHpMp.vue"; // 最大血魔
import Pets from "../page/gameSetting/Pets.vue"; // 抓寵

/** 遊戲特色 **/
import GameFeature from "../page/gameFeature/index.vue";
import AttributeEnchantment from "../page/gameFeature/AttributeEnchantment.vue";
import BlessingAttribute from "../page/gameFeature/BlessingAttribute.vue";
import WeaponArmorBonus from "../page/gameFeature/WeaponArmorBonus.vue";

/** 武器介紹 **/
import Weapon from "../page/weapon/index.vue";
import NormalWeapon from "../page/weapon/NormalWeapon.vue"; // 一般武器
import AncientWeapon from "../page/weapon/AncientWeapon.vue"; // 古代武器
import DarkWeapon from "../page/weapon/DarkWeapon.vue"; // 暗黑武器

/** 防具介紹 **/
import Armor from "../page/armor/index.vue";
import LuntisEarrings from "../page/armor/LuntisEarrings.vue"; // 倫提斯耳環
import PallasNecklace from "../page/armor/PallasNecklace.vue"; // 帕拉斯項鍊
import SimpleRing from "../page/armor/SimpleRing.vue"; // 一般戒指
import SnapeRing from "../page/armor/SnapeRing.vue"; // 史奈普戒指
import AncientEquipment from "../page/armor/AncientEquipment.vue"; // 古老裝備
import Tshirt from "../page/armor/Tshirt.vue"; // 古老裝備

/** 道具介紹 **/
import Object from "../page/object/index.vue";
import Doll from "../page/object/Doll.vue";
import Transform from "../page/object/Transform.vue";

import Dowload from "../page/dowload/index.vue";
import Sponsor from "../page/sponsor/index.vue";

// 公告內容
import Post1 from "../page/announcement/announcementDetail/Post1.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },

  /* 遊戲公告 */
  { path: "/announcement", component: Announcement },
  { path: "/announcement/post1", component: Post1 },

  /* 免責聲明 */
  { path: "/disclaimer", component: Disclaimer },

  /* 贊助聲明 */
  { path: "/sponsorDeclar", component: SponsorDeclar },

  /* 遊戲設定 */
  {
    path: "/gameSetting",
    component: GameSetting,
    children: [
      { path: "serverSet", component: ServerSet },
      { path: "professionSkill", component: ProfessionSkill },
      { path: "pets", component: Pets },
      { path: "maxHpMp", component: MaxHpMp },
    ],
  },

  /* 遊戲特色 */
  {
    path: "/gameFeature",
    component: GameFeature,
    children: [
      { path: "attributeEnchantment", component: AttributeEnchantment },
      { path: "blessingAttribute", component: BlessingAttribute },
      { path: "weaponArmorBonus", component: WeaponArmorBonus },
      // { path: "maxHpMp", component: MaxHpMp },
    ],
  },

  /* 武器介紹 */
  {
    path: "/weapon",
    component: Weapon,
    children: [
      { path: "normalWeapon", component: NormalWeapon },
      { path: "ancientWeapon", component: AncientWeapon },
      { path: "darkWeapon", component: DarkWeapon },
      // { path: "maxHpMp", component: MaxHpMp },
    ],
  },

  /* 防具介紹 */
  {
    path: "/armor",
    component: Armor,
    children: [
      { path: "luntisEarrings", component: LuntisEarrings },
      { path: "pallasNecklace", component: PallasNecklace },
      { path: "tshirt", component: Tshirt },
      { path: "snapeRing", component: SnapeRing },
      { path: "ancientEquipment", component: AncientEquipment },
    ],
  },

  /* 道具介紹 */
  {
    path: "/object",
    component: Object,
    children: [
      { path: "doll", component: Doll },
      { path: "transform", component: Transform },
      { path: "simpleRing", component: SimpleRing },
      { path: "snapeRing", component: SnapeRing },
      { path: "ancientEquipment", component: AncientEquipment },
    ],
  },

  { path: "/dowload", component: Dowload },
  { path: "/sponsor", component: Sponsor },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
