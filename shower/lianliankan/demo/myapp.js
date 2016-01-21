var guiData = {
    "type": "ui-device",
    "name": "PC-Portrait",
    "w": 520,
    "h": 800,
    "x": 393,
    "y": 39,
    "text": "",
    "xAttr": 0,
    "yAttr": 0,
    "widthAttr": 0,
    "heightAttr": 0,
    "isUIDevice": true,
    "isUIElement": true,
    "hasChildren": true,
    "xParam": 1,
    "yParam": 1,
    "widthParam": 1,
    "heightParam": 1,
    "style": {
        "lineWidth": 2,
        "lineColor": "Green",
        "fillColor": "Black",
        "textColor": "White",
        "fontSize": 24,
        "fontFamily": "serif"
    },
    "events": {
        "onClick": "console.log(\"onClick was triggered\")"
    },
    "images": {
        "display": 2,
        "default_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/pc-460x740.png"
    },
    "config": {
        "name": "PC-Portrait",
        "bg": "http://gameui.duapp.com/demos/animal-link/\/drawapp8\/images\/pc-460x740.png",
        "platform": "android",
        "version": "4",
        "lcdDensity": "hdpi",
        "width": 520,
        "height": 800,
        "screenX": 31,
        "screenY": 29,
        "screenW": 460,
        "screenH": 740,
        "hasMenuBar": false
    },
    "children": [
        {
            "type": "ui-screen",
            "name": "ui-screen",
            "w": 460,
            "h": 740,
            "x": 31,
            "y": 29,
            "text": "",
            "xAttr": 0,
            "yAttr": 0,
            "widthAttr": 0,
            "heightAttr": 0,
            "xParam": 1,
            "yParam": 1,
            "widthParam": 1,
            "heightParam": 1,
            "hasStatusBar": true,
            "yStatusBar": 0,
            "hStatusBar": 40,
            "fixedX": 65,
            "fixedY": 265,
            "isUIScreen": true,
            "isUIElement": true,
            "hasChildren": true,
            "style": {
                "lineWidth": 2,
                "lineColor": "Green",
                "fillColor": "white",
                "textColor": "Black",
                "fontSize": 24,
                "fontFamily": "serif"
            },
            "events": {
                "onClick": "console.log(\"onClick was triggered\")"
            },
            "images": {
                "display": 2
            },
            "children": [
                {
                    "type": "ui-window-manager",
                    "name": "window-manager",
                    "w": 460,
                    "h": 740,
                    "x": 0,
                    "y": 0,
                    "text": "",
                    "xAttr": 0,
                    "yAttr": 0,
                    "widthAttr": 2,
                    "heightAttr": 0,
                    "current": 3,
                    "showLoadingProgress": true,
                    "progressBarBorderColor": "White",
                    "progressBarFillColor": "Gold",
                    "progressTextColor": "Green",
                    "loadingTextColor": "White",
                    "loadingBgColor": "Black",
                    "xParam": 1,
                    "yParam": 1,
                    "widthParam": 1,
                    "heightParam": 1,
                    "isUIWindowManager": true,
                    "isUIFrames": true,
                    "isUIElement": true,
                    "hasChildren": true,
                    "showHignlight": true,
                    "style": {
                        "lineWidth": 2,
                        "lineColor": "Green",
                        "fillColor": "white",
                        "textColor": "Black",
                        "fontSize": 24,
                        "fontFamily": "serif"
                    },
                    "events": {
                        "onClick": "console.log(\"onClick was triggered\")",
                        "onChanged": null
                    },
                    "images": {
                        "display": 2
                    },
                    "children": [
                        {
                            "type": "ui-window",
                            "name": "win_llk",
                            "w": 460,
                            "h": 740,
                            "x": 0,
                            "y": 0,
                            "text": "",
                            "xAttr": 0,
                            "yAttr": 0,
                            "widthAttr": 2,
                            "heightAttr": 2,
                            "animHint": "default",
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 1,
                            "heightParam": 1,
                            "isUINormalWindow": true,
                            "isUIWindow": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Green",
                                "fillColor": "#dcdcdc",
                                "textColor": "Black",
                                "fontSize": 12,
                                "fontFamily": "serif"
                            },
                            "events": {
                                "onClick": "",
                                "onLoad": null,
                                "onUnload": null,
                                "onOpen": "",
                                "onBeforeOpen": "onBeforeMainWinOpen(this);",
                                "onClose": "console.log(\"onClose was triggered\")",
                                "onSwitchToBack": null,
                                "onSwitchToFront": null,
                                "onGesture": null,
                                "onKeyDown": null,
                                "onKeyUp": null,
                                "onSwithToBack": null,
                                "onSwithToFront": null
                            },
                            "images": {
                                "display": 3,
                                "default_bg": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/bg.jpg"
                            },
                            "children": [
                                {
                                    "type": "ui-toolbar",
                                    "name": "ui-toolbar",
                                    "w": 460,
                                    "h": 80,
                                    "x": 0,
                                    "y": 0,
                                    "text": "",
                                    "xAttr": 0,
                                    "yAttr": 4,
                                    "widthAttr": 2,
                                    "heightAttr": 0,
                                    "wMin": 100,
                                    "wMax": 2000,
                                    "hMin": 40,
                                    "hMax": 200,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 1,
                                    "heightParam": 1,
                                    "isUIToolBar": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Green",
                                        "fillColor": "#7ecce9",
                                        "textColor": "Black",
                                        "fontSize": 15,
                                        "fontFamily": "serif"
                                    },
                                    "events": {
                                        "onClick": "console.log(\"onClick was triggered\")"
                                    },
                                    "images": {
                                        "display": 2
                                    },
                                    "children": [
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 72,
                                            "h": 80,
                                            "x": 0,
                                            "y": 0,
                                            "text": "",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 4,
                                            "yAttr": 0,
                                            "widthAttr": 1,
                                            "heightAttr": 2,
                                            "wMin": 50,
                                            "hMin": 50,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.15652173913043,
                                            "heightParam": 1,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 50,
                                            "widthScaleMax": 200,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Red",
                                                "fillColor": "#358de7",
                                                "textColor": "#E0E0E0",
                                                "fontSize": 21,
                                                "fontFamily": "serif",
                                                "textB": true
                                            },
                                            "events": {
                                                "onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-image",
                                                    "name": "ui-image",
                                                    "w": 63,
                                                    "h": 70,
                                                    "x": 5,
                                                    "y": 5,
                                                    "text": "",
                                                    "xAttr": 3,
                                                    "yAttr": 3,
                                                    "widthAttr": 1,
                                                    "heightAttr": 1,
                                                    "clickable": false,
                                                    "clickedStyleParam": 0.8,
                                                    "clickedStyleType": 2,
                                                    "imageRotation": 0,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 0.875,
                                                    "heightParam": 0.875,
                                                    "isUIImage": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "widthScaleMin": 44,
                                                    "widthScaleMax": 176,
                                                    "heightScaleMin": 42,
                                                    "heightScaleMax": 170,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Red",
                                                        "fillColor": "#C8C8C8",
                                                        "textColor": "Black",
                                                        "fontSize": 15,
                                                        "fontFamily": "serif"
                                                    },
                                                    "events": {
                                                        "onClick": null,
                                                        "onOnUpdateTransform": null
                                                    },
                                                    "images": {
                                                        "display": 0,   // 这个是返回的按钮
                                                        "default_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/action_bar_back.png"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 124,
                                            "h": 80,
                                            "x": 336,
                                            "y": 0,
                                            "text": "Replay",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 5,
                                            "yAttr": 0,
                                            "widthAttr": 1,
                                            "heightAttr": 2,
                                            "wMin": 50,
                                            "hMin": 50,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.2695652173913,
                                            "heightParam": 1,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 50,
                                            "widthScaleMax": 200,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Red",
                                                "fillColor": "#358de7",
                                                "textColor": "#dcdcdc",
                                                "fontSize": 21,
                                                "fontFamily": "serif",
                                                "textB": true
                                            },
                                            "events": {
                                                "onClick": "var grid = this.getWindow().findChildByName(\"ui-grid\", true);\ngrid.replay();\n",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 2
                                            }
                                        },
                                        {
                                            "type": "ui-label",
                                            "name": "ui-label-time",
                                            "w": 186,
                                            "h": 80,
                                            "x": 137,
                                            "y": 0,
                                            "text": "0",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 3,
                                            "yAttr": 3,
                                            "widthAttr": 1,
                                            "heightAttr": 2,
                                            "autoAdjustHeight": false,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.40434782608696,
                                            "heightParam": 1,
                                            "isUILabel": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "ANIM_OLD_OUT": 1,
                                            "ANIM_NEW_IN": 3,
                                            "textInMiddle": true,
                                            "widthScaleMin": 80,
                                            "widthScaleMax": 300,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Red",
                                                "fillColor": "trans",
                                                "textColor": "#880000",
                                                "fontSize": 32,
                                                "fontFamily": "serif",
                                                "textB": true
                                            },
                                            "events": {
                                                "onClick": null,
                                                "onChanged": null,
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 2
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "ui-grid",
                                    "name": "ui-grid",
                                    "w": 460,
                                    "h": 660,
                                    "x": 0,
                                    "y": 80,
                                    "text": "",
                                    "hMargin": 5,
                                    "vMargin": 5,
                                    "xAttr": 0,
                                    "yAttr": 6,
                                    "widthAttr": 2,
                                    "heightAttr": 3,
                                    "spacer": 0,
                                    "offset": 0,
                                    "wMin": 160,
                                    "wMax": 2000,
                                    "hMin": 160,
                                    "hMax": 2000,
                                    "itemSize": 150,
                                    "itemWidth": 6,
                                    "itemHeight": 8,
                                    "itemWidthType": 1,
                                    "itemHeightType": 1,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 1,
                                    "heightParam": 1,
                                    "isUIGrid": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "cols": 6,
                                    "rows": 8,
                                    "isUILayout": true,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Orange",
                                        "fillColor": "White",
                                        "textColor": "Blue",
                                        "fontSize": 15,
                                        "fontFamily": "serif"
                                    },
                                    "events": {
                                        "onClick": null,
                                        "onChildDragged": null,
                                        "onChildDragging": null,
                                        "onInit": null
                                    },
                                    "images": {
                                        "display": 2
                                    },
                                    "children": [
                                        {
                                            "type": "ui-image",
                                            "name": "ui-image",
                                            "w": 75,
                                            "h": 81,
                                            "x": 5,
                                            "y": 5,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 0,
                                            "widthAttr": 0,
                                            "heightAttr": 0,
                                            "clickable": true,
                                            "clickedStyleParam": 0.8,
                                            "clickedStyleType": 2,
                                            "imageRotation": 0,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "isUIImage": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "red",    // 点击的边框颜色
                                                "fillColor": "White",
                                                "textColor": "Black",
                                                "fontSize": 15,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": "this.getParent().onChildClicked(this) ",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 4,   // 这些是连连看所需的图片
                                                "default_bg": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f00.png",
                                                "option_image_0": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f01.png",
                                                "option_image_1": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f02.png",
                                                "option_image_2": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f03.png",
                                                "option_image_3": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f04.png",
                                                "option_image_4": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f05.png",
                                                "option_image_5": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f06.png",
                                                "option_image_6": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f07.png",
                                                "option_image_7": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f08.png",
                                                "option_image_8": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f09.png",
                                                "option_image_9": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f10.png",
                                                "option_image_10": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f11.png",
                                                "option_image_11": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f12.png",
                                                "option_image_12": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f13.png",
                                                "option_image_13": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f14.png",
                                                "option_image_14": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/f15.png"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ui-dialog",
                            "name": "win_done",
                            "w": 460,
                            "h": 260,
                            "x": 0,
                            "y": 240,
                            "text": "",
                            "hMargin": 8,
                            "vMargin": 8,
                            "xAttr": 3,
                            "yAttr": 3,
                            "widthAttr": 2,
                            "heightAttr": 0,
                            "animHint": "scale",
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 1,
                            "heightParam": 1,
                            "isUIDialog": true,
                            "isUIPopupWindow": true,
                            "isUIWindow": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Green",
                                "fillColor": "white",
                                "textColor": "Black",
                                "fontSize": 8,
                                "fontFamily": "serif",
                                "enableGradient": true
                            },
                            "events": {
                                "onClick": "",
                                "onLoad": null,
                                "onUnload": null,
                                "onOpen": "if(initData) {\n    var label = this.findChildByName(\"ui-label\", true);\n\tlabel.setText(initData);\n}",
                                "onBeforeOpen": null,
                                "onClose": "console.log(\"onClose was triggered\")",
                                "onSwitchToBack": null,
                                "onSwitchToFront": null,
                                "onGesture": "console.log(\"onGesture was triggered\")",
                                "onKeyDown": null,
                                "onKeyUp": null,
                                "onSwithToBack": null,
                                "onSwithToFront": null
                            },
                            "images": {
                                "display": 2,
                                "default_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/dialog_bg_light.9.png"
                            },
                            "children": [
                                {
                                    "type": "ui-group",
                                    "name": "ui-group",
                                    "w": 406,
                                    "h": 104,
                                    "x": 27,
                                    "y": 148,
                                    "text": "",
                                    "xAttr": 3,
                                    "yAttr": 5,
                                    "widthAttr": 1,
                                    "heightAttr": 1,
                                    "roundRadius": 5,
                                    "wMin": 424,
                                    "hMin": 66,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 0.91441441441441,
                                    "heightParam": 0.42622950819672,
                                    "isUIGroup": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "widthScaleMin": 212,
                                    "widthScaleMax": 848,
                                    "heightScaleMin": 39,
                                    "heightScaleMax": 156,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "rgba(0,0,0,0)",
                                        "fillColor": "rgba(0,0,0,0)",
                                        "textColor": "Blue",
                                        "fontSize": 16,
                                        "fontFamily": "serif"
                                    },
                                    "events": {
                                        "onClick": null,
                                        "onInit": null
                                    },
                                    "images": {
                                        "display": 2
                                    },
                                    "children": [
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 123,
                                            "h": 70,
                                            "x": 0,
                                            "y": 17,
                                            "text": "Back",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 4,
                                            "yAttr": 3,
                                            "widthAttr": 1,
                                            "heightAttr": 0,
                                            "wMin": 50,
                                            "hMin": 36.571428571429,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.30295566502463,
                                            "heightParam": 1,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 80,
                                            "widthScaleMax": 200,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Green",
                                                "fillColor": "#dcdcdc",
                                                "textColor": "#383838",
                                                "fontSize": 21,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 2
                                            }
                                        },
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 123,
                                            "h": 70,
                                            "x": 283,
                                            "y": 17,
                                            "text": "Replay",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 5,
                                            "yAttr": 3,
                                            "widthAttr": 1,
                                            "heightAttr": 0,
                                            "wMin": 50,
                                            "hMin": 36.571428571429,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.30295566502463,
                                            "heightParam": 1,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 80,
                                            "widthScaleMax": 200,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Green",
                                                "fillColor": "#dcdcdc",
                                                "textColor": "#383838",
                                                "fontSize": 22,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": "var retCode = 1;\nthis.closeWindow(retCode);\n",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 2
                                            }
                                        },
                                        {
                                            "type": "ui-color-bar",
                                            "name": "ui-color-bar",
                                            "w": 23,
                                            "h": 43,
                                            "x": 192,
                                            "y": 31,
                                            "text": "",
                                            "xAttr": 3,
                                            "yAttr": 3,
                                            "widthAttr": 0,
                                            "heightAttr": 0,
                                            "barPosition": 0,
                                            "barDierction": 0,
                                            "position": 0,
                                            "strColors": "#cccccc,#cccccc,#f5f5f5,#f5f5f5",
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "isUIColorBar": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "isUIButton": false,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Orange",
                                                "fillColor": "#C0C0C0",
                                                "textColor": "Blue",
                                                "fontSize": 8,
                                                "fontFamily": "serif",
                                                "enableGradient": true
                                            },
                                            "events": {
                                                "onClick": null
                                            },
                                            "images": {
                                                "display": 2
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "ui-label",
                                    "name": "ui-label",
                                    "w": 444,
                                    "h": 41,
                                    "x": 8,
                                    "y": 73,
                                    "text": "Well Done!",
                                    "vTextAlign": "middle",
                                    "hTextAlign": "center",
                                    "xAttr": 3,
                                    "yAttr": 2,
                                    "widthAttr": 2,
                                    "heightAttr": 0,
                                    "autoAdjustHeight": false,
                                    "xParam": 1,
                                    "yParam": 0.29918032786885,
                                    "widthParam": 1,
                                    "heightParam": 1,
                                    "isUILabel": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "ANIM_OLD_OUT": 1,
                                    "ANIM_NEW_IN": 3,
                                    "textInMiddle": true,
                                    "enableAutoScaleFontSize": true,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Green",
                                        "fillColor": "#383838",
                                        "textColor": "Orange",
                                        "fontSize": 22,
                                        "fontFamily": "serif"
                                    },
                                    "events": {
                                        "onClick": null,
                                        "onChanged": null,
                                        "onOnUpdateTransform": null
                                    },
                                    "images": {
                                        "display": 2
                                    }
                                },
                                {
                                    "type": "ui-color-bar",
                                    "name": "ui-color-bar",
                                    "w": 368,
                                    "h": 26,
                                    "x": 46,
                                    "y": 114,
                                    "text": "",
                                    "xAttr": 3,
                                    "yAttr": 6,
                                    "widthAttr": 1,
                                    "heightAttr": 0,
                                    "barPosition": 0,
                                    "barDierction": 0,
                                    "position": 0,
                                    "strColors": "#cccccc,#cccccc,#f5f5f5,#f5f5f5",
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 0.82882882882883,
                                    "heightParam": 1,
                                    "isUIColorBar": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "isUIButton": false,
                                    "widthScaleMin": 200,
                                    "widthScaleMax": 600,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Orange",
                                        "fillColor": "#C0C0C0",
                                        "textColor": "Blue",
                                        "fontSize": 8,
                                        "fontFamily": "serif",
                                        "enableGradient": true
                                    },
                                    "events": {
                                        "onClick": null
                                    },
                                    "images": {
                                        "display": 2
                                    }
                                }
                            ]
                        },
                        {
                            "type": "ui-window",
                            "name": "win_high_scores",
                            "w": 460,
                            "h": 740,
                            "x": 0,
                            "y": 0,
                            "text": "",
                            "xAttr": 0,
                            "yAttr": 0,
                            "widthAttr": 2,
                            "heightAttr": 2,
                            "animHint": "scale",
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 1,
                            "heightParam": 1,
                            "isUINormalWindow": true,
                            "isUIWindow": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Green",
                                "fillColor": "#dcdcdc",
                                "textColor": "Black",
                                "fontSize": 10,
                                "fontFamily": "serif"
                            },
                            "events": {
                                "onClick": "",
                                "onLoad": null,
                                "onUnload": null,
                                "onOpen": "console.log(\"onOpen was triggered\")",
                                "onBeforeOpen": "var win = this;\n\nwin.bindDataToList = function(list, scores) {\n    var data = {children:[]};\n    for(var i = 0; i < scores.length; i++) {\n\t\tvar item = {children:[]};\n\t\tvar value = scores[i].score + \" \" + HighScores.unit;\n\t\titem.children.push({text: value});\n\n\t\tdata.children.push(item);\n\t}\n\n\tlist.bindData(data, null, true);\n\n\treturn;\n}\n\nvar list = null;\nvar scores = null;\n\nlist = win.findChildByName(\"ui-list-view-easy\", true);\nscores = HighScores.query(\"easy\");\nwin.bindDataToList(list, scores);\n\nlist = win.findChildByName(\"ui-list-view-medium\", true);\nscores = HighScores.query(\"medium\");\nwin.bindDataToList(list, scores);\n\nlist = win.findChildByName(\"ui-list-view-hard\", true);\nscores = HighScores.query(\"hard\");\nwin.bindDataToList(list, scores);\n\n",
                                "onClose": "console.log(\"onClose was triggered\")",
                                "onSwitchToBack": null,
                                "onSwitchToFront": null,
                                "onGesture": null,
                                "onKeyDown": null,
                                "onKeyUp": null,
                                "onSwithToBack": null,
                                "onSwithToFront": null
                            },
                            "images": {
                                "display": 2
                            },
                            "children": [
                                {
                                    "type": "ui-toolbar",
                                    "name": "ui-toolbar",
                                    "w": 460,
                                    "h": 80,
                                    "x": 0,
                                    "y": 0,
                                    "text": "",
                                    "xAttr": 0,
                                    "yAttr": 4,
                                    "widthAttr": 2,
                                    "heightAttr": 0,
                                    "wMin": 100,
                                    "wMax": 2000,
                                    "hMin": 40,
                                    "hMax": 200,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 1,
                                    "heightParam": 1,
                                    "isUIToolBar": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Green",
                                        "fillColor": "#7ecce9",
                                        "textColor": "Black",
                                        "fontSize": 10,
                                        "fontFamily": "serif"
                                    },
                                    "events": {
                                        "onClick": "console.log(\"onClick was triggered\")"
                                    },
                                    "images": {
                                        "display": 2
                                    },
                                    "children": [
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 73,
                                            "h": 80,
                                            "x": 387,
                                            "y": 0,
                                            "text": "",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 5,
                                            "yAttr": 3,
                                            "widthAttr": 1,
                                            "heightAttr": 2,
                                            "wMin": 50,
                                            "hMin": 50,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.15869565217391,
                                            "heightParam": 1,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 50,
                                            "widthScaleMax": 200,
                                            "heightScaleMin": 42,
                                            "heightScaleMax": 170,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Red",
                                                "fillColor": "#358de7",
                                                "textColor": "#E0E0E0",
                                                "fontSize": 19,
                                                "fontFamily": "serif",
                                                "textB": true
                                            },
                                            "events": {
                                                "onClick": null,
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 0
                                            }
                                        },
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 57,
                                            "h": 80,
                                            "x": 0,
                                            "y": 0,
                                            "text": "",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 4,
                                            "yAttr": 3,
                                            "widthAttr": 1,
                                            "heightAttr": 2,
                                            "wMin": 50,
                                            "hMin": 50,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.12391304347826,
                                            "heightParam": 1,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 50,
                                            "widthScaleMax": 200,
                                            "heightScaleMin": 42,
                                            "heightScaleMax": 170,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Red",
                                                "fillColor": "#358de7",
                                                "textColor": "#E0E0E0",
                                                "fontSize": 20,
                                                "fontFamily": "serif",
                                                "textB": true
                                            },
                                            "events": {
                                                "onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 0
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-image",
                                                    "name": "ui-image",
                                                    "w": 37,
                                                    "h": 33,
                                                    "x": 10,
                                                    "y": 24,
                                                    "text": "",
                                                    "xAttr": 3,
                                                    "yAttr": 3,
                                                    "widthAttr": 0,
                                                    "heightAttr": 0,
                                                    "clickable": false,
                                                    "clickedStyleParam": 0.8,
                                                    "clickedStyleType": 2,
                                                    "imageRotation": 0,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 1,
                                                    "heightParam": 1,
                                                    "isUIImage": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Red",
                                                        "fillColor": "#65b6fe",
                                                        "textColor": "Black",
                                                        "fontSize": 10,
                                                        "fontFamily": "serif"
                                                    },
                                                    "events": {
                                                        "onClick": null,
                                                        "onOnUpdateTransform": null
                                                    },
                                                    "images": {
                                                        "display": 0,   // 这个是关闭按钮的图片
                                                        "default_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/cancel.png"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui-button",
                                            "name": "ui-button",
                                            "w": 124,
                                            "h": 77,
                                            "x": 336,
                                            "y": 2,
                                            "text": "Clear",
                                            "vTextAlign": "middle",
                                            "hTextAlign": "center",
                                            "xAttr": 5,
                                            "yAttr": 3,
                                            "widthAttr": 1,
                                            "heightAttr": 1,
                                            "wMin": 50,
                                            "hMin": 38.4,
                                            "enableAutoScaleFontSize": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 0.2695652173913,
                                            "heightParam": 0.9625,
                                            "isUIButton": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "widthScaleMin": 50,
                                            "widthScaleMax": 200,
                                            "heightScaleMin": 40,
                                            "heightScaleMax": 100,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Red",
                                                "fillColor": "#358de7",
                                                "textColor": "#D80000",
                                                "fontSize": 22,
                                                "fontFamily": "serif",
                                                "textB": true
                                            },
                                            "events": {
                                                "onClick": "\n\nvar list = null;\nvar scores = [];\nvar win = this.getWindow();\nvar viewPager =win.findChildByName(\"ui-view-pager\", true);\nvar pageIndex = viewPager.getCurrent();\n\nswitch(pageIndex) {\n    case 0: {\n    \tlist = win.findChildByName(\"ui-list-view-easy\", true);\n\t\tHighScores.clear(\"easy\");\n\t\tbreak;\n\t}\n\tcase 1: {\n\t\tlist = win.findChildByName(\"ui-list-view-medium\", true);\n\t\tHighScores.clear(\"medium\");\n\t\tbreak;\n\t}\n\tcase 2: {\n\t\tlist = win.findChildByName(\"ui-list-view-hard\", true);\n\t\tHighScores.clear(\"hard\");\n\t\tbreak;\n\t}\n\tdefault: {\n\t\treturn;\n\t}\n}\n\nwin.bindDataToList(list, scores);",
                                                "onOnUpdateTransform": null
                                            },
                                            "images": {
                                                "display": 0
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "ui-page-indicator-normal",
                                    "name": "ui-page-indicator-normal",
                                    "w": 460,
                                    "h": 70,
                                    "x": 0,
                                    "y": 80,
                                    "text": "",
                                    "hMargin": 5,
                                    "vMargin": 5,
                                    "xAttr": 0,
                                    "yAttr": 6,
                                    "widthAttr": 2,
                                    "heightAttr": 0,
                                    "offset": 0,
                                    "scrollBarOpacity": 0,
                                    "wMin": 100,
                                    "wMax": 2000,
                                    "hMin": 40,
                                    "hMax": 2000,
                                    "scrollable": "always",
                                    "imagePosition": "top",
                                    "alwaysOnTop": false,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 1,
                                    "heightParam": 1,
                                    "isUIPageIndicatorNormal": true,
                                    "isUIPageIndicator": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "strItemImages": "",
                                    "strItemImagesOfCurrent": "",
                                    "strItemTexts": "Easy\nMedium\nHard",
                                    "enableAnimatePage": false,
                                    "isUIHScrollView": true,
                                    "isUIScrollView": true,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Orange",
                                        "fillColor": "#C0C0C0",
                                        "textColor": "Black",
                                        "fontSize": 20,
                                        "fontFamily": "serif",
                                        "enableGradient": true
                                    },
                                    "events": {
                                        "onClick": ""
                                    },
                                    "images": {
                                        "display": 3,   // 不知道干嘛使得
                                        "item_bg_normal": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/tab_item_1_bg_normal.png",
                                        "item_bg_active": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/tab_item_1_bg_active.png",
                                        "item_bg_current_active": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/tab_item_1_bg_current_active.png",
                                        "item_bg_current": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/tab_item_1_bg_current_normal.png"
                                    }
                                },
                                {
                                    "type": "ui-view-pager",
                                    "name": "ui-view-pager",
                                    "w": 460,
                                    "h": 590,
                                    "x": 0,
                                    "y": 150,
                                    "text": "",
                                    "xAttr": 0,
                                    "yAttr": 6,
                                    "widthAttr": 2,
                                    "heightAttr": 3,
                                    "current": 2,
                                    "showIndicator": false,
                                    "isUIViewPager": true,
                                    "isUIPageManager": true,
                                    "isUIFrames": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 1,
                                    "heightParam": 1,
                                    "heightScaleMin": 505,
                                    "heightScaleMax": 2022,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Orange",
                                        "fillColor": "#efefef",
                                        "textColor": "Blue",
                                        "fontSize": 10,
                                        "fontFamily": "serif",
                                        "enableGradient": true
                                    },
                                    "events": {
                                        "onClick": null,
                                        "onChanged": null
                                    },
                                    "images": {
                                        "display": 2
                                    },
                                    "children": [
                                        {
                                            "type": "ui-page",
                                            "name": "ui-page",
                                            "w": 460,
                                            "h": 590,
                                            "x": 0,
                                            "y": 0,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 6,
                                            "widthAttr": 2,
                                            "heightAttr": 3,
                                            "isUIPage": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "trans",
                                                "fillColor": "White",
                                                "textColor": "Blue",
                                                "fontSize": 10,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-list-view",
                                                    "name": "ui-list-view-easy",
                                                    "w": 460,
                                                    "h": 590,
                                                    "x": 0,
                                                    "y": 0,
                                                    "text": "",
                                                    "xAttr": 0,
                                                    "yAttr": 6,
                                                    "widthAttr": 2,
                                                    "heightAttr": 3,
                                                    "wMin": 100,
                                                    "wMax": 2000,
                                                    "hMin": 100,
                                                    "hMax": 2000,
                                                    "itemHeight": 70,
                                                    "itemHeightVariable": false,
                                                    "offset": 0,
                                                    "scrollBarOpacity": 0,
                                                    "scrollable": "always",
                                                    "updateStatus": 0,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 1,
                                                    "heightParam": 1,
                                                    "isUIListView": true,
                                                    "isUIVScrollView": true,
                                                    "isUIScrollView": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "isUIList": true,
                                                    "isUILayout": true,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Orange",
                                                        "fillColor": "#f0f0f0",
                                                        "textColor": "Blue",
                                                        "fontSize": 10,
                                                        "fontFamily": "serif",
                                                        "enableShadow": true,
                                                        "shadow": {
                                                            "x": 0,
                                                            "y": 0,
                                                            "blur": 8,
                                                            "color": "Black"
                                                        }
                                                    },
                                                    "events": {
                                                        "onClick": null,
                                                        "onUpdateData": null
                                                    },
                                                    "images": {
                                                        "display": 2,   // 滚动条那个小图标
                                                        "scrollBarImg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/scrollbar.png"
                                                    },
                                                    "children": [
                                                        {
                                                            "type": "ui-list-item",
                                                            "name": "ui-list-item",
                                                            "w": 460,
                                                            "h": 70,
                                                            "x": 0,
                                                            "y": 0,
                                                            "text": "",
                                                            "xAttr": 0,
                                                            "yAttr": 0,
                                                            "widthAttr": 2,
                                                            "heightAttr": 0,
                                                            "autoAdjustHeight": false,
                                                            "xParam": 1,
                                                            "yParam": 1,
                                                            "widthParam": 1,
                                                            "heightParam": 1,
                                                            "isUIListItem": true,
                                                            "isUIElement": true,
                                                            "hasChildren": true,
                                                            "ANIM_DRAW_LINE": 1,
                                                            "isTemplate": true,
                                                            "style": {
                                                                "lineWidth": 2,
                                                                "lineColor": "#dcdcdc",
                                                                "fillColor": "#f5f5f5",
                                                                "textColor": "#f5f5f5",
                                                                "fontSize": 10,
                                                                "fontFamily": "serif"
                                                            },
                                                            "events": {
                                                                "onClick": null,
                                                                "onLongPress": null,
                                                                "onRemoved": null
                                                            },
                                                            "images": {
                                                                "display": 2,   // 带圆圈的关闭按钮
                                                                "delete_item": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/list_delete_item.png"
                                                            },
                                                            "children": [
                                                                {
                                                                    "type": "ui-label",
                                                                    "name": "ui-label",
                                                                    "w": 436,
                                                                    "h": 70,
                                                                    "x": 24,
                                                                    "y": 0,
                                                                    "text": "100.00",
                                                                    "vTextAlign": "middle",
                                                                    "hTextAlign": "left",
                                                                    "xAttr": 0,
                                                                    "yAttr": 3,
                                                                    "widthAttr": 3,
                                                                    "heightAttr": 2,
                                                                    "autoAdjustHeight": false,
                                                                    "xParam": 1,
                                                                    "yParam": 1,
                                                                    "widthParam": 1,
                                                                    "heightParam": 1,
                                                                    "isUILabel": true,
                                                                    "isUIElement": true,
                                                                    "hasChildren": true,
                                                                    "heightScaleMin": 19,
                                                                    "heightScaleMax": 78,
                                                                    "widthScaleMin": 240,
                                                                    "widthScaleMax": 960,
                                                                    "textInMiddle": true,
                                                                    "ANIM_OLD_OUT": 1,
                                                                    "ANIM_NEW_IN": 3,
                                                                    "style": {
                                                                        "lineWidth": 2,
                                                                        "lineColor": "Green",
                                                                        "fillColor": "white",
                                                                        "textColor": "Black",
                                                                        "fontSize": 20,
                                                                        "fontFamily": "serif"
                                                                    },
                                                                    "events": {
                                                                        "onClick": null,
                                                                        "onChanged": null,
                                                                        "onOnUpdateTransform": null
                                                                    },
                                                                    "images": {
                                                                        "display": 2
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui-page",
                                            "name": "ui-page",
                                            "w": 460,
                                            "h": 590,
                                            "x": 0,
                                            "y": 0,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 0,
                                            "widthAttr": 2,
                                            "heightAttr": 2,
                                            "isUIPage": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "Orange",
                                                "fillColor": "White",
                                                "textColor": "Blue",
                                                "fontSize": 10,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-list-view",
                                                    "name": "ui-list-view-medium",
                                                    "w": 460,
                                                    "h": 590,
                                                    "x": 0,
                                                    "y": 0,
                                                    "text": "",
                                                    "xAttr": 0,
                                                    "yAttr": 6,
                                                    "widthAttr": 2,
                                                    "heightAttr": 3,
                                                    "wMin": 100,
                                                    "wMax": 2000,
                                                    "hMin": 100,
                                                    "hMax": 2000,
                                                    "itemHeight": 70,
                                                    "itemHeightVariable": false,
                                                    "offset": 0,
                                                    "scrollBarOpacity": 0,
                                                    "scrollable": "always",
                                                    "updateStatus": 0,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 1,
                                                    "heightParam": 1,
                                                    "isUIListView": true,
                                                    "isUIVScrollView": true,
                                                    "isUIScrollView": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "isUIList": true,
                                                    "isUILayout": true,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Orange",
                                                        "fillColor": "#f0f0f0",
                                                        "textColor": "Blue",
                                                        "fontSize": 10,
                                                        "fontFamily": "serif",
                                                        "enableShadow": true,
                                                        "shadow": {
                                                            "x": 0,
                                                            "y": 0,
                                                            "blur": 8,
                                                            "color": "Black"
                                                        }
                                                    },
                                                    "events": {
                                                        "onClick": null,
                                                        "onUpdateData": null
                                                    },
                                                    "images": {
                                                        "display": 2,
                                                        "scrollBarImg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/scrollbar.png"
                                                    },
                                                    "children": [
                                                        {
                                                            "type": "ui-list-item",
                                                            "name": "ui-list-item",
                                                            "w": 460,
                                                            "h": 70,
                                                            "x": 0,
                                                            "y": 0,
                                                            "text": "",
                                                            "xAttr": 0,
                                                            "yAttr": 0,
                                                            "widthAttr": 2,
                                                            "heightAttr": 0,
                                                            "autoAdjustHeight": false,
                                                            "xParam": 1,
                                                            "yParam": 1,
                                                            "widthParam": 1,
                                                            "heightParam": 1,
                                                            "isUIListItem": true,
                                                            "isUIElement": true,
                                                            "hasChildren": true,
                                                            "ANIM_DRAW_LINE": 1,
                                                            "isTemplate": true,
                                                            "style": {
                                                                "lineWidth": 2,
                                                                "lineColor": "#dcdcdc",
                                                                "fillColor": "#f5f5f5",
                                                                "textColor": "#f5f5f5",
                                                                "fontSize": 10,
                                                                "fontFamily": "serif"
                                                            },
                                                            "events": {
                                                                "onClick": null,
                                                                "onLongPress": null,
                                                                "onRemoved": null
                                                            },
                                                            "images": {
                                                                "display": 2,
                                                                "delete_item": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/list_delete_item.png"
                                                            },
                                                            "children": [
                                                                {
                                                                    "type": "ui-label",
                                                                    "name": "ui-label",
                                                                    "w": 436,
                                                                    "h": 70,
                                                                    "x": 24,
                                                                    "y": 0,
                                                                    "text": "100.00",
                                                                    "vTextAlign": "middle",
                                                                    "hTextAlign": "left",
                                                                    "xAttr": 0,
                                                                    "yAttr": 3,
                                                                    "widthAttr": 3,
                                                                    "heightAttr": 2,
                                                                    "autoAdjustHeight": false,
                                                                    "xParam": 1,
                                                                    "yParam": 1,
                                                                    "widthParam": 1,
                                                                    "heightParam": 1,
                                                                    "isUILabel": true,
                                                                    "isUIElement": true,
                                                                    "hasChildren": true,
                                                                    "heightScaleMin": 19,
                                                                    "heightScaleMax": 78,
                                                                    "widthScaleMin": 240,
                                                                    "widthScaleMax": 960,
                                                                    "textInMiddle": true,
                                                                    "ANIM_OLD_OUT": 1,
                                                                    "ANIM_NEW_IN": 3,
                                                                    "style": {
                                                                        "lineWidth": 2,
                                                                        "lineColor": "Green",
                                                                        "fillColor": "white",
                                                                        "textColor": "Black",
                                                                        "fontSize": 20,
                                                                        "fontFamily": "serif"
                                                                    },
                                                                    "events": {
                                                                        "onClick": null,
                                                                        "onChanged": null,
                                                                        "onOnUpdateTransform": null
                                                                    },
                                                                    "images": {
                                                                        "display": 2
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui-page",
                                            "name": "ui-page",
                                            "w": 460,
                                            "h": 590,
                                            "x": 0,
                                            "y": 0,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 0,
                                            "widthAttr": 2,
                                            "heightAttr": 2,
                                            "isUIPage": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "trans",
                                                "fillColor": "White",
                                                "textColor": "Blue",
                                                "fontSize": 10,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-list-view",
                                                    "name": "ui-list-view-hard",
                                                    "w": 460,
                                                    "h": 590,
                                                    "x": 0,
                                                    "y": 0,
                                                    "text": "",
                                                    "xAttr": 0,
                                                    "yAttr": 6,
                                                    "widthAttr": 2,
                                                    "heightAttr": 3,
                                                    "wMin": 100,
                                                    "wMax": 2000,
                                                    "hMin": 100,
                                                    "hMax": 2000,
                                                    "itemHeight": 70,
                                                    "itemHeightVariable": false,
                                                    "offset": 0,
                                                    "scrollBarOpacity": 0,
                                                    "scrollable": "always",
                                                    "updateStatus": 0,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 1,
                                                    "heightParam": 1,
                                                    "isUIListView": true,
                                                    "isUIVScrollView": true,
                                                    "isUIScrollView": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "isUIList": true,
                                                    "isUILayout": true,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Orange",
                                                        "fillColor": "#f0f0f0",
                                                        "textColor": "Blue",
                                                        "fontSize": 10,
                                                        "fontFamily": "serif",
                                                        "enableShadow": true,
                                                        "shadow": {
                                                            "x": 0,
                                                            "y": 0,
                                                            "blur": 8,
                                                            "color": "Black"
                                                        }
                                                    },
                                                    "events": {
                                                        "onClick": null,
                                                        "onUpdateData": null
                                                    },
                                                    "images": {
                                                        "display": 2,
                                                        "scrollBarImg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/scrollbar.png"
                                                    },
                                                    "children": [
                                                        {
                                                            "type": "ui-list-item",
                                                            "name": "ui-list-item",
                                                            "w": 460,
                                                            "h": 70,
                                                            "x": 0,
                                                            "y": 0,
                                                            "text": "",
                                                            "xAttr": 0,
                                                            "yAttr": 0,
                                                            "widthAttr": 2,
                                                            "heightAttr": 0,
                                                            "autoAdjustHeight": false,
                                                            "xParam": 1,
                                                            "yParam": 1,
                                                            "widthParam": 1,
                                                            "heightParam": 1,
                                                            "isUIListItem": true,
                                                            "isUIElement": true,
                                                            "hasChildren": true,
                                                            "ANIM_DRAW_LINE": 1,
                                                            "isTemplate": true,
                                                            "style": {
                                                                "lineWidth": 2,
                                                                "lineColor": "#dcdcdc",
                                                                "fillColor": "#f5f5f5",
                                                                "textColor": "#f5f5f5",
                                                                "fontSize": 10,
                                                                "fontFamily": "serif"
                                                            },
                                                            "events": {
                                                                "onClick": null,
                                                                "onLongPress": null,
                                                                "onRemoved": null
                                                            },
                                                            "images": {
                                                                "display": 2,
                                                                "delete_item": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/list_delete_item.png"
                                                            },
                                                            "children": [
                                                                {
                                                                    "type": "ui-label",
                                                                    "name": "ui-label",
                                                                    "w": 436,
                                                                    "h": 70,
                                                                    "x": 24,
                                                                    "y": 0,
                                                                    "text": "100.00",
                                                                    "vTextAlign": "middle",
                                                                    "hTextAlign": "left",
                                                                    "xAttr": 0,
                                                                    "yAttr": 3,
                                                                    "widthAttr": 3,
                                                                    "heightAttr": 2,
                                                                    "autoAdjustHeight": false,
                                                                    "xParam": 1,
                                                                    "yParam": 1,
                                                                    "widthParam": 1,
                                                                    "heightParam": 1,
                                                                    "isUILabel": true,
                                                                    "isUIElement": true,
                                                                    "hasChildren": true,
                                                                    "heightScaleMin": 19,
                                                                    "heightScaleMax": 78,
                                                                    "widthScaleMin": 240,
                                                                    "widthScaleMax": 960,
                                                                    "textInMiddle": true,
                                                                    "ANIM_OLD_OUT": 1,
                                                                    "ANIM_NEW_IN": 3,
                                                                    "style": {
                                                                        "lineWidth": 2,
                                                                        "lineColor": "Green",
                                                                        "fillColor": "white",
                                                                        "textColor": "Black",
                                                                        "fontSize": 20,
                                                                        "fontFamily": "serif"
                                                                    },
                                                                    "events": {
                                                                        "onClick": null,
                                                                        "onChanged": null,
                                                                        "onOnUpdateTransform": null
                                                                    },
                                                                    "images": {
                                                                        "display": 2
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ui-window",
                            "name": "win-main",
                            "w": 460,
                            "h": 740,
                            "x": 0,
                            "y": 0,
                            "text": "",
                            "xAttr": 0,
                            "yAttr": 0,
                            "widthAttr": 2,
                            "heightAttr": 2,
                            "animHint": "htranslate",
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 1,
                            "heightParam": 1,
                            "isUINormalWindow": true,
                            "isUIWindow": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "windowType": "main",
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Green",
                                "fillColor": "#7ecce9",
                                "textColor": "Black",
                                "fontSize": 13,
                                "fontFamily": "serif"
                            },
                            "events": {
                                "onClick": "console.log(\"onClick was triggered\")",
                                "onLoad": "console.log(\"onLoad was triggered\")",
                                "onUnload": "console.log(\"onUnload was triggered\")",
                                "onOpen": "HighScores.setGameName(\"llk\");\nHighScores.setUnit(\"seconds\");\nHighScores.setSortInc(true);\n",
                                "onBeforeOpen": null,
                                "onClose": null,
                                "onSwitchToBack": null,
                                "onSwitchToFront": null,
                                "onGesture": "console.log(\"onGesture was triggered\")",
                                "onKeyDown": null,
                                "onKeyUp": null,
                                "onSwithToBack": null,
                                "onSwithToFront": null
                            },
                            "images": {
                                "display": 3,   // 背景图
                                "default_bg": "http://gameui.duapp.com/demos/animal-link/apps\/llk\/images\/bg.jpg"
                            },
                            "children": [
                                {
                                    "type": "ui-list",
                                    "name": "ui-list",
                                    "w": 345,
                                    "h": 581,
                                    "x": 58,
                                    "y": 80,
                                    "text": "",
                                    "vTextAlign": "middle",
                                    "hTextAlign": "center",
                                    "hMargin": 5,
                                    "vMargin": 5,
                                    "xAttr": 3,
                                    "yAttr": 3,
                                    "widthAttr": 1,
                                    "heightAttr": 1,
                                    "wMin": 100,
                                    "wMax": 1000,
                                    "hMin": 100,
                                    "hMax": 1000,
                                    "itemHeight": 80,
                                    "itemHeightVariable": false,
                                    "xParam": 1,
                                    "yParam": 1,
                                    "widthParam": 0.75,
                                    "heightParam": 0.78513513513514,
                                    "isUIList": true,
                                    "isUIElement": true,
                                    "hasChildren": true,
                                    "widthScaleMin": 300,
                                    "widthScaleMax": 800,
                                    "heightScaleMin": 300,
                                    "heightScaleMax": 800,
                                    "isUILayout": true,
                                    "style": {
                                        "lineWidth": 2,
                                        "lineColor": "Green",
                                        "fillColor": "Orange",
                                        "textColor": "Black",
                                        "fontSize": 10,
                                        "fontFamily": "serif"
                                    },
                                    "events": {
                                        "onClick": null,
                                        "onInit": null
                                    },
                                    "images": {
                                        "display": 2
                                    },
                                    "children": [
                                        {
                                            "type": "ui-list-item",
                                            "name": "ui-list-item",
                                            "w": 335,
                                            "h": 80,
                                            "x": 5,
                                            "y": 5,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 0,
                                            "widthAttr": 2,
                                            "heightAttr": 0,
                                            "autoAdjustHeight": false,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "isUIListItem": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "ANIM_DRAW_LINE": 1,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "rgba(0,0,0,0)",
                                                "fillColor": "rgba(0,0,0,0)",
                                                "textColor": "rgba(0,0,0,0)",
                                                "fontSize": 10,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": null,
                                                "onLongPress": null,
                                                "onRemoved": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-button",
                                                    "name": "ui-button",
                                                    "w": 174,
                                                    "h": 65,
                                                    "x": 81,
                                                    "y": 8,
                                                    "text": "Easy",
                                                    "vTextAlign": "middle",
                                                    "hTextAlign": "center",
                                                    "xAttr": 3,
                                                    "yAttr": 3,
                                                    "widthAttr": 1,
                                                    "heightAttr": 1,
                                                    "wMin": 50,
                                                    "hMin": 40,
                                                    "enableAutoScaleFontSize": true,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 0.51940298507463,
                                                    "heightParam": 0.8125,
                                                    "isUIButton": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "widthScaleMin": 100,
                                                    "widthScaleMax": 600,
                                                    "heightScaleMin": 40,
                                                    "heightScaleMax": 156,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Red",
                                                        "fillColor": "White",
                                                        "textColor": "#E0E0E0",
                                                        "fontSize": 22,
                                                        "fontFamily": "serif",
                                                        "textB": true,
                                                        "enableGradient": true
                                                    },
                                                    "events": {
                                                        "onClick": "window.gameLevel = \"easy\";\nthis.openWindow(\"win_llk\", \n    function (retCode) {console.log(\"window closed.\");}, false);",
                                                        "onOnUpdateTransform": null
                                                    },
                                                    "images": {
                                                        "display": 2,   // 初级的按钮
                                                        "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_4.9.png",
                                                        "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_4_pressed.9.png",
                                                        "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_4.9.png",
                                                        "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_4.9.png"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui-list-item",
                                            "name": "ui-list-item",
                                            "w": 335,
                                            "h": 80,
                                            "x": 5,
                                            "y": 85,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 0,
                                            "widthAttr": 2,
                                            "heightAttr": 0,
                                            "autoAdjustHeight": false,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "isUIListItem": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "ANIM_DRAW_LINE": 1,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "rgba(0,0,0,0)",
                                                "fillColor": "rgba(0,0,0,0)",
                                                "textColor": "rgba(0,0,0,0)",
                                                "fontSize": 10,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": null,
                                                "onLongPress": null,
                                                "onRemoved": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-button",
                                                    "name": "ui-button",
                                                    "w": 211,
                                                    "h": 63,
                                                    "x": 62,
                                                    "y": 9,
                                                    "text": "Medium",
                                                    "vTextAlign": "middle",
                                                    "hTextAlign": "center",
                                                    "xAttr": 3,
                                                    "yAttr": 3,
                                                    "widthAttr": 1,
                                                    "heightAttr": 1,
                                                    "wMin": 50,
                                                    "hMin": 40,
                                                    "enableAutoScaleFontSize": true,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 0.62985074626866,
                                                    "heightParam": 0.7875,
                                                    "isUIButton": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "widthScaleMin": 100,
                                                    "widthScaleMax": 600,
                                                    "heightScaleMin": 40,
                                                    "heightScaleMax": 156,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Red",
                                                        "fillColor": "White",
                                                        "textColor": "#E0E0E0",
                                                        "fontSize": 22,
                                                        "fontFamily": "serif",
                                                        "textB": true,
                                                        "enableGradient": true
                                                    },
                                                    "events": {
                                                        "onClick": "window.gameLevel = \"medium\";\nthis.openWindow(\"win_llk\", \n    function (retCode) {console.log(\"window closed.\");}, false);\n",
                                                        "onOnUpdateTransform": null
                                                    },
                                                    "images": {
                                                        "display": 2,   // 中级的按钮
                                                        "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/button_blue.9.png",
                                                        "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/button_blue_active.9.png",
                                                        "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/button_blue.9.png",
                                                        "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/button_blue.9.png"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui-list-item",
                                            "name": "ui-list-item",
                                            "w": 335,
                                            "h": 80,
                                            "x": 5,
                                            "y": 165,
                                            "text": "",
                                            "xAttr": 0,
                                            "yAttr": 0,
                                            "widthAttr": 2,
                                            "heightAttr": 0,
                                            "autoAdjustHeight": false,
                                            "xParam": 1,
                                            "yParam": 1,
                                            "widthParam": 1,
                                            "heightParam": 1,
                                            "isUIListItem": true,
                                            "isUIElement": true,
                                            "hasChildren": true,
                                            "ANIM_DRAW_LINE": 1,
                                            "style": {
                                                "lineWidth": 2,
                                                "lineColor": "rgba(0,0,0,0)",
                                                "fillColor": "rgba(0,0,0,0)",
                                                "textColor": "rgba(0,0,0,0)",
                                                "fontSize": 10,
                                                "fontFamily": "serif"
                                            },
                                            "events": {
                                                "onClick": null,
                                                "onLongPress": null,
                                                "onRemoved": null
                                            },
                                            "images": {
                                                "display": 2
                                            },
                                            "children": [
                                                {
                                                    "type": "ui-button",
                                                    "name": "ui-button",
                                                    "w": 254,
                                                    "h": 75,
                                                    "x": 41,
                                                    "y": 3,
                                                    "text": "Hard",
                                                    "vTextAlign": "middle",
                                                    "hTextAlign": "center",
                                                    "xAttr": 3,
                                                    "yAttr": 3,
                                                    "widthAttr": 1,
                                                    "heightAttr": 1,
                                                    "wMin": 50,
                                                    "hMin": 40,
                                                    "enableAutoScaleFontSize": true,
                                                    "xParam": 1,
                                                    "yParam": 1,
                                                    "widthParam": 0.75820895522388,
                                                    "heightParam": 0.9375,
                                                    "isUIButton": true,
                                                    "isUIElement": true,
                                                    "hasChildren": true,
                                                    "widthScaleMin": 100,
                                                    "widthScaleMax": 600,
                                                    "heightScaleMin": 40,
                                                    "heightScaleMax": 156,
                                                    "style": {
                                                        "lineWidth": 2,
                                                        "lineColor": "Red",
                                                        "fillColor": "White",
                                                        "textColor": "#E0E0E0",
                                                        "fontSize": 22,
                                                        "fontFamily": "serif",
                                                        "textB": true,
                                                        "enableGradient": true
                                                    },
                                                    "events": {
                                                        "onClick": "window.gameLevel = \"hard\";\nthis.openWindow(\"win_llk\", \n    function (retCode) {console.log(\"window closed.\");}, false);\n",
                                                        "onOnUpdateTransform": null
                                                    },
                                                    "images": {
                                                        "display": 2,   // 高级的按钮
                                                        "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_3.9.png",
                                                        "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_3_pressed.9.png",
                                                        "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_3.9.png",
                                                        "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/common\/icons\/hdpi\/btn_3.9.png"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "ui-menu-bar",
                    "name": "ui-menu-bar",
                    "w": 460,
                    "h": 96,
                    "x": 0,
                    "y": 0,
                    "text": "",
                    "enable": false,
                    "visible": false,
                    "xAttr": 0,
                    "yAttr": 0,
                    "widthAttr": 2,
                    "heightAttr": 0,
                    "xParam": 1,
                    "yParam": 1,
                    "widthParam": 1,
                    "heightParam": 1,
                    "isUIStatusBar": true,
                    "isUIElement": true,
                    "hasChildren": true,
                    "hideSelectMark": true,
                    "style": {
                        "lineWidth": 2,
                        "lineColor": "Orange",
                        "fillColor": "White",
                        "textColor": "Blue",
                        "fontSize": 24,
                        "fontFamily": "serif"
                    },
                    "events": {
                        "onClick": "console.log(\"onClick was triggered\")"
                    },
                    "images": {
                        "display": 3,
                        "default_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar.png"
                    },
                    "children": [
                        {
                            "type": "ui-button",
                            "name": "ui-button",
                            "w": 100,
                            "h": 60,
                            "x": 0,
                            "y": 18,
                            "text": "",
                            "xAttr": 4,
                            "yAttr": 3,
                            "widthAttr": 1,
                            "heightAttr": 1,
                            "wMin": 50,
                            "hMin": 50,
                            "enableAutoScaleFontSize": true,
                            "hideSelectMark": true,
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 0.21739130434783,
                            "heightParam": 0.625,
                            "isUIButton": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Red",
                                "fillColor": "White",
                                "textColor": "Black",
                                "fontSize": 24,
                                "fontFamily": "serif"
                            },
                            "events": {
                                "onClick": "var device = this.getDevice();\nif(device) {\n    var wm = device.getWindowManager();\n    if(wm) {\n        wm.closeCurrentWindow(null);\n    }\n}",
                                "onOnUpdateTransform": null
                            },
                            "images": {
                                "display": 0,
                                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_return.png",
                                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_return_active.png",
                                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_return.png",
                                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_return.png"
                            }
                        },
                        {
                            "type": "ui-button",
                            "name": "ui-button",
                            "w": 100,
                            "h": 60,
                            "x": 270,
                            "y": 18,
                            "text": "",
                            "xAttr": 3,
                            "yAttr": 3,
                            "widthAttr": 1,
                            "heightAttr": 1,
                            "wMin": 50,
                            "hMin": 50,
                            "enableAutoScaleFontSize": true,
                            "hideSelectMark": true,
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 0.21739130434783,
                            "heightParam": 0.625,
                            "isUIButton": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Red",
                                "fillColor": "White",
                                "textColor": "Black",
                                "fontSize": 24,
                                "fontFamily": "serif"
                            },
                            "events": {
                                "onClick": "console.log(\"onClick was triggered\")",
                                "onOnUpdateTransform": null
                            },
                            "images": {
                                "display": 0,
                                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_home.png",
                                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_home.png",
                                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_home.png",
                                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_home.png"
                            }
                        },
                        {
                            "type": "ui-button",
                            "name": "ui-button",
                            "w": 100,
                            "h": 57,
                            "x": 540,
                            "y": 19,
                            "text": "",
                            "xAttr": 5,
                            "yAttr": 3,
                            "widthAttr": 1,
                            "heightAttr": 1,
                            "wMin": 50,
                            "hMin": 50,
                            "enableAutoScaleFontSize": true,
                            "hideSelectMark": true,
                            "xParam": 1,
                            "yParam": 1,
                            "widthParam": 0.21739130434783,
                            "heightParam": 0.59375,
                            "isUIButton": true,
                            "isUIElement": true,
                            "hasChildren": true,
                            "style": {
                                "lineWidth": 2,
                                "lineColor": "Red",
                                "fillColor": "White",
                                "textColor": "Black",
                                "fontSize": 24,
                                "fontFamily": "serif"
                            },
                            "events": {
                                "onClick": "console.log(\"onClick was triggered\")",
                                "onOnUpdateTransform": null
                            },
                            "images": {
                                "display": 0,
                                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_apps.png",
                                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_apps.png",
                                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_apps.png",
                                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/theme\/default\/android\/menu_bar_apps.png"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "ui-button",
            "name": "button-prev",
            "w": 115,
            "h": 54,
            "x": 31,
            "y": 0,
            "text": "\u524d\u4e00\u7a97\u53e3",
            "vTextAlign": "middle",
            "hTextAlign": "center",
            "xAttr": 0,
            "yAttr": 0,
            "widthAttr": 0,
            "heightAttr": 0,
            "wMin": 50,
            "hMin": 50,
            "enableAutoScaleFontSize": true,
            "xParam": 1,
            "yParam": 1,
            "widthParam": 1,
            "heightParam": 1,
            "fixedX": 65,
            "fixedY": 206,
            "isUIButton": true,
            "isUIElement": true,
            "hasChildren": true,
            "style": {
                "lineWidth": 2,
                "lineColor": "Green",
                "fillColor": "",
                "textColor": "Black",
                "fontSize": 16,
                "fontFamily": "serif"
            },
            "events": {
                "onClick": "console.log(\"onClick was triggered\")",
                "onOnUpdateTransform": null
            },
            "images": {
                "display": 2,
                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_focused.9.png",
                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_active.9.png",
                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png",
                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png"
            }
        },
        {
            "type": "ui-button",
            "name": "button-next",
            "w": 115,
            "h": 54,
            "x": 146,
            "y": 0,
            "text": "\u4e0b\u4e00\u7a97\u53e3",
            "vTextAlign": "middle",
            "hTextAlign": "center",
            "xAttr": 0,
            "yAttr": 0,
            "widthAttr": 0,
            "heightAttr": 0,
            "wMin": 50,
            "hMin": 50,
            "enableAutoScaleFontSize": true,
            "xParam": 1,
            "yParam": 1,
            "widthParam": 1,
            "heightParam": 1,
            "fixedX": 278.33333333333,
            "fixedY": 206,
            "isUIButton": true,
            "isUIElement": true,
            "hasChildren": true,
            "style": {
                "lineWidth": 2,
                "lineColor": "Green",
                "fillColor": "",
                "textColor": "Black",
                "fontSize": 16,
                "fontFamily": "serif"
            },
            "events": {
                "onClick": "console.log(\"onClick was triggered\")",
                "onOnUpdateTransform": null
            },
            "images": {
                "display": 2,
                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_focused.9.png",
                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_active.9.png",
                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png",
                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png"
            }
        },
        {
            "type": "ui-button",
            "name": "button-direction",
            "w": 115,
            "h": 54,
            "x": 261,
            "y": 0,
            "text": "\u6a2a\u5c4f",
            "vTextAlign": "middle",
            "hTextAlign": "center",
            "xAttr": 0,
            "yAttr": 0,
            "widthAttr": 0,
            "heightAttr": 0,
            "wMin": 50,
            "hMin": 50,
            "enableAutoScaleFontSize": true,
            "xParam": 1,
            "yParam": 1,
            "widthParam": 1,
            "heightParam": 1,
            "fixedX": 278,
            "fixedY": 179,
            "isUIButton": true,
            "isUIElement": true,
            "hasChildren": true,
            "style": {
                "lineWidth": 2,
                "lineColor": "Green",
                "fillColor": "",
                "textColor": "Black",
                "fontSize": 16,
                "fontFamily": "serif"
            },
            "events": {
                "onClick": "console.log(\"onClick was triggered\")",
                "onOnUpdateTransform": null
            },
            "images": {
                "display": 2,
                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_focused.9.png",
                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_active.9.png",
                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png",
                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png"
            }
        },
        {
            "type": "ui-button",
            "name": "button-status",
            "w": 230,
            "h": 40,
            "x": 146,
            "y": -61,
            "text": "win_llk(1\/5)",
            "vTextAlign": "middle",
            "hTextAlign": "center",
            "xAttr": 0,
            "yAttr": 0,
            "widthAttr": 0,
            "heightAttr": 0,
            "wMin": 50,
            "hMin": 50,
            "enableAutoScaleFontSize": true,
            "xParam": 1,
            "yParam": 1,
            "widthParam": 1,
            "heightParam": 1,
            "fixedX": 225,
            "fixedY": 175,
            "isUIButton": true,
            "isUIElement": true,
            "hasChildren": true,
            "style": {
                "lineWidth": 2,
                "lineColor": "Green",
                "fillColor": "",
                "textColor": "Orange",
                "fontSize": 18,
                "fontFamily": "serif"
            },
            "events": {
                "onClick": "console.log(\"onClick was triggered\")",
                "onOnUpdateTransform": null
            },
            "images": {
                "display": 2
            }
        },
        {
            "type": "ui-button",
            "name": "button-preview",
            "w": 115,
            "h": 54,
            "x": 376,
            "y": 0,
            "text": "\u9884\u89c8",
            "vTextAlign": "middle",
            "hTextAlign": "center",
            "xAttr": 0,
            "yAttr": 0,
            "widthAttr": 0,
            "heightAttr": 0,
            "wMin": 50,
            "hMin": 50,
            "enableAutoScaleFontSize": true,
            "xParam": 1,
            "yParam": 1,
            "widthParam": 1,
            "heightParam": 1,
            "isPreview": false,
            "fixedX": 491.66666666667,
            "fixedY": 206,
            "isUIButton": true,
            "isUIElement": true,
            "hasChildren": true,
            "style": {
                "lineWidth": 2,
                "lineColor": "Green",
                "fillColor": "",
                "textColor": "Black",
                "fontSize": 16,
                "fontFamily": "serif"
            },
            "events": {
                "onClick": "console.log(\"onClick was triggered\")",
                "onOnUpdateTransform": null
            },
            "images": {
                "display": 2,
                "focused_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_focused.9.png",
                "active_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_active.9.png",
                "normal_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png",
                "disable_bg": "http://gameui.duapp.com/demos/animal-link/drawapp8\/images\/design_button_normal.9.png"
            }
        }
    ],
    "meta": {
        "general": {
            "appid": "com.drawapp8.llk",
            "appversion": "1.0.0",
            "appname": "Image Linker",
            "appdesc": "Image Linker",
            "icon": "http:\/\/www.drawapp8.com\/drawapp8\/images\/common\/appicons\/32.png",
            "splash": "http:\/\/www.drawapp8.com\/drawapp8\/images\/common\/appsplash\/splash.png",
            "gapversion": "",
            "orientation": "portrait",
            "targetdevice": "universal",
            "fullscreen": false,
            "battery": false,
            "camera": false,
            "contacts": false,
            "file": true,
            "geolocation": false,
            "media": true,
            "network": true,
            "notification": true,
            "device": true
        },
        "ios": {
            "statusbarstyle": "default",
            "webviewbounce": false,
            "prerenderedicon": true,
            "stayinwebview": false,
            "detectdatatypes": false,
            "exitonsuspend": true,
            "showsplashscreenspinner": true,
            "autohidesplashscreen": true,
            "l_splashipad": "",
            "p_splashipad": "",
            "l_splashiphone5": "",
            "p_splashiphone5": "",
            "l_splashretina": "",
            "p_splashretina": "",
            "l_splashclassic": "",
            "p_splashclassic": "",
            "iconclassic": "http://gameui.duapp.com/demos/animal-link/icons\/ios\/icon.png",
            "iconretina": "http://gameui.duapp.com/demos/animal-link/icons\/ios\/icon_at_2x.png",
            "iconipad": "http:\/\/www.drawapp8.com\/drawapp8\/images\/common\/appicons\/114.png"
        },
        "webos": {
            "icondefault": "http://gameui.duapp.com/demos/animal-link/icons\/webos\/icon.png",
            "iconmini": "http://gameui.duapp.com/demos/animal-link/icons\/webos\/miniicon.png"
        },
        "firefoxos": {
            "icon30": "http://gameui.duapp.com/demos/animal-link/icons\/firefoxos\/icon30.png",
            "icon60": "http://gameui.duapp.com/demos/animal-link/icons\/firefoxos\/icon60.png",
            "icon128": "http://gameui.duapp.com/demos/animal-link/icons\/firefoxos\/icon128.png",
            "author_name": "drawapp8",
            "author_home_page": "http:\/\/www.drawapp8.com",
            "launch_path": "\/apps\/",
            "app_type": "web",
            "extra": ""
        },
        "android": {
            "installlocation": "auto",
            "iconldpi": "http://gameui.duapp.com/demos/animal-link/icons\/android\/ldpi.png",
            "iconmdpi": "http://gameui.duapp.com/demos/animal-link/icons\/android\/mdpi.png",
            "iconhdpi": "http://gameui.duapp.com/demos/animal-link/icons\/android\/hdpi.png",
            "iconxhdpi": "http://gameui.duapp.com/demos/animal-link/icons\/android\/xhdpi.png",
            "splashldpi": "",
            "splashmdpi": "",
            "splashhdpi": "",
            "splashxhdpi": ""
        },
        "blackberry": {
            "disablecursor": true,
            "iconhover": "http://gameui.duapp.com/demos/animal-link/icons\/bb\/icon_hover.png",
            "iconnhover": "http://gameui.duapp.com/demos/animal-link/icons\/bb\/icon.png",
            "splash": ""
        },
        "winphone": {
            "iconregular": "http://gameui.duapp.com/demos/animal-link/icons\/winphone\/icon.png",
            "icontile": "http://gameui.duapp.com/demos/animal-link/icons\/winphone\/tileicon.png",
            "splash": ""
        },
        "extlibs": [
            "apps\/common\/js\/high_scores.js",
            "apps\/common\/js\/games-locale.js",
            "apps\/llk\/js\/main.js"
        ]
    }
};