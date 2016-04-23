"use strict";

const maping = {
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
      href: "/users/active"
    }, {
      title: "日新增用户数",
      href: "/users/reg"
    }],
  },
  retention: {
    title: "留存分析",
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
    }, ],
  },
  video: {
    title: "直播数据",
    icon: "fa-video-camera",
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
    }, ],
  },
  channel: {
    title: "渠道分析",
    icon: "fa-sitemap",
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
    }, ],
  },
  product: {
    title: "产品功能",
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
    }, ],
  },
  mobile: {
    title: "终端属性",
    icon: "fa-mobile",
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
    }, ],
  },
  errors: {
    title: "错误分析",
    icon: "fa-tags",
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
    }, ],
  },
};

module.exports = function(role) {
  /*
    dashboard:  核心数据
    users:      用户分析
    retention:  留存分析
    video:      直播数据
    channel:    渠道分析
    product:    产品功能
    mobile:     终端属性
    errors:     错误分析
   */
  switch (role) {
    case 'XXX':
      return buildMap(['dashboard', 'users']);
      break;
    default:
      return buildMap();
  }
}

// 通过传入的key值取出对应的菜单项 参数为空则表示全部
function buildMap (obj) {
  var map = {};
  if (!obj) {
    for (let key in maping) {
      map[key] = maping[key];
    }
  } else {
    for (let key of obj) {
      let item = maping[key];
      if (item) {
        map[key] = maping[key];
      }
    }
  }
  return map;
}