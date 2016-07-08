"use strict";

const mapping = {
  dashboard: {
    title: "核心数据",
    icon: "fa-home",
    child_menu: [{
      title: "Dashboard",
      href: "/dashboard/index"
    }],
  },
  users: {
    title: "用户分析",
    icon: "fa-user",
    child_menu: [{
      title: "日活用户数",
      href: "/users/daily_active"
    }, {
      title: "日新增用户数",
      href: "/users/daily_reg"
    }, {
      title: "周活用户数",
      href: "/users/weekly_active"
    }, {
      title: "周新增用户数",
      href: "/users/weekly_reg"
    }, {
      title: "月活用户数",
      href: "/users/monthly_active"
    }, {
      title: "月新增用户数",
      href: "/users/monthly_reg"
    } ],
  },
  abroad: {
    title: "海外用户",
    icon: "fa-user",
    child_menu: [{
      title: "活跃用户数",
      href: "/abroad/active"
    }, {
      title: "新增用户数",
      href: "/abroad/reg"
    }, {
      title: "留存用户数",
      href: "/abroad/retention"
    } ],
  },
  retention: {
    title: "用户留存",
    icon: "fa-area-chart",
    child_menu: [{
      title: "日留存",
      href: "/retention/daily"
    }, {
      title: "周留存",
      href: "/retention/weekly"
    }, {
      title: "月留存",
      href: "/retention/monthly"
    } ],
  },
  video: {
    title: "直播数据",
    icon: "fa-video-camera",
    child_menu: [{
      title: "日 消费/收入",
      href: "/video/daily"
    }, {
      title: "周 消费/收入",
      href: "/video/weekly"
    }, {
      title: "总 消费/收入",
      href: "/video/total"
    } ],
  },
  advert: {
    title: "广告流量统计",
    icon: "fa-table",
    child_menu: [{
      title: "日 广告流量",
      href: "/advert/daily"
    }, {
      title: "日 广告流量（新）",
      href: "/advert/newdaily"
    }, {
      title: "广告数据展示",
      href: "/advert/report"
    } ],
  },
  channel: {
    title: "渠道分布(待开发)",
    icon: "fa-sitemap",
    child_menu: [{
      title: "渠道列表",
      href: "/channel/list"
    }, {
      title: "活跃用户数",
      href: "/channel/active"
    }, {
      title: "新增用户数",
      href: "/channel/reg"
    }, {
      title: "留存用户数",
      href: "/channel/retention"
    } ],
  },
  product: {
    title: "产品功能(待开发)",
    icon: "fa-cogs",
    child_menu: [{
      title: "S1",
      href: "javascript:;"
    }, {
      title: "S2",
      href: "javascript:;"
    }, {
      title: "S3",
      href: "javascript:;"
    }, {
      title: "S4",
      href: "javascript:;"
    } ],
  },
  // mobile: {
  //   title: "终端属性(待开发)",
  //   icon: "fa-mobile",
  //   child_menu: [{
  //     title: "S1",
  //     href: "javascript:;"
  //   }, {
  //     title: "S2",
  //     href: "javascript:;"
  //   }, {
  //     title: "S3",
  //     href: "javascript:;"
  //   }, {
  //     title: "S4",
  //     href: "javascript:;"
  //   },],
  // },
  // errors: {
  //   title: "错误分析(待开发)",
  //   icon: "fa-tags",
  //   child_menu: [{
  //     title: "S1",
  //     href: "javascript:;"
  //   }, {
  //     title: "S2",
  //     href: "javascript:;"
  //   }, {
  //     title: "S3",
  //     href: "javascript:;"
  //   }, {
  //     title: "S4",
  //     href: "javascript:;"
  //   },],
  // },
  settings: {
    title: "平台设置",
    icon: "fa-cog",
    child_menu: [{
      title: "成员管理",
      href: "/settings"
    }, {
      title: "添加新成员",
      href: "/settings/new"
    }, ],
  },
};

module.exports = buildMap;
// function(role) {
//   /*
//     dashboard:  核心数据
//     users:      用户分析
//     retention:  留存分析
//     video:      直播数据
//     channel:    渠道分析
//     product:    产品功能
//     mobile:     终端属性
//     errors:     错误分析
//    */
//   switch (role) {
//     case 'XXX':
//       return buildMap(['dashboard', 'users']);
//       break;
//     default:
//       return buildMap();
//   }
// }

// 通过传入的key值取出对应的菜单项 参数为空则表示全部
function buildMap(obj) {
  let map = {};
  if (!obj) {
    for (let key in mapping) {
      map[key] = mapping[key];
    }
  } else {
    for (let key of obj) {
      let item = mapping[key];
      if (item) {
        map[key] = mapping[key];
      }
    }
  }
  Object.assign(map, {
    settings: mapping['settings']
  })
  return map;
}
