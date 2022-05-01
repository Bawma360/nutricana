(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","borderSize":0,"minHeight":20,"shadow":false,"scrollBarColor":"#000000","gap":10,"mobileMipmappingEnabled":false,"borderRadius":0,"width":"100%","paddingTop":0,"id":"rootPlayer","paddingBottom":0,"scrollBarVisible":"rollOver","propagateClick":false,"paddingLeft":0,"horizontalAlign":"left","desktopMipmappingEnabled":false,"downloadEnabled":true,"overflow":"hidden","children":["this.MainViewer","this.SplitViewer_7797E0CD_7C0C_D32C_41DA_74556CC8E145"],"verticalAlign":"top","paddingRight":0,"scripts":{"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getKey":TDV.Tour.Script.getKey,"shareSocial":TDV.Tour.Script.shareSocial,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"registerKey":TDV.Tour.Script.registerKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"init":TDV.Tour.Script.init,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"existsKey":TDV.Tour.Script.existsKey,"setValue":TDV.Tour.Script.setValue,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"mixObject":TDV.Tour.Script.mixObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showWindow":TDV.Tour.Script.showWindow,"quizShowScore":TDV.Tour.Script.quizShowScore,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playAudioList":TDV.Tour.Script.playAudioList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizStart":TDV.Tour.Script.quizStart,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPixels":TDV.Tour.Script.getPixels,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setLocale":TDV.Tour.Script.setLocale,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"quizFinish":TDV.Tour.Script.quizFinish,"downloadFile":TDV.Tour.Script.downloadFile,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeJS":TDV.Tour.Script.executeJS,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"isPanorama":TDV.Tour.Script.isPanorama,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios},"backgroundPreloadEnabled":true,"mouseWheelEnabled":true,"height":"100%","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"mediaActivationMode":"window","definitions": [{"initialSequence":"this.sequence_763F12E4_7C0C_571C_41DD_A828F1462F64","automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_76449483_7C0C_B314_41CF_21B6EA54723A_camera"},{"hfov":360,"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_76449483_7C0C_B314_41CF_21B6EA54723A_t.jpg","pitch":0,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_76449483_7C0C_B314_41CF_21B6EA54723A_t.jpg","cube":{"levels":[{"width":9216,"url":"media/panorama_76449483_7C0C_B314_41CF_21B6EA54723A_0/{face}/0/{row}_{column}.jpg","height":1536,"colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_76449483_7C0C_B314_41CF_21B6EA54723A_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_76449483_7C0C_B314_41CF_21B6EA54723A_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":9216,"url":"media/panorama_76449483_7C0C_B314_41CF_21B6EA54723A_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1}],"class":"ImageResource"}}],"label":trans('panorama_76449483_7C0C_B314_41CF_21B6EA54723A.label'),"id":"panorama_76449483_7C0C_B314_41CF_21B6EA54723A","class":"Panorama","partial":false,"data":{"label":"foto 1"},"hfovMax":130},{"class":"PlayList","items":["this.PanoramaPlayListItem_719E1757_7D03_4357_41C4_D6AA773F4AEA"],"id":"playList_7198F6AF_7D03_45F7_418E_BE47DE107CD1"},{"class":"PlayList","items":["this.PanoramaPlayListItem_719E5757_7D03_4357_41CA_02A11F2C75C3"],"id":"playList_7198C6AF_7D03_45F7_41C8_88B7412AA2CB"},{"aaEnabled":true,"viewerArea":"this.ViewerAreaLabeled_77FB9D07_7C0C_4D1C_41CE_5C2B152AE136","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","zoomEnabled":true,"id":"ViewerAreaLabeled_77FB9D07_7C0C_4D1C_41CE_5C2B152AE136PanoramaPlayer"},{"borderSize":0,"propagateClick":false,"shadow":false,"scrollBarColor":"#000000","gap":10,"data":{"name":"Separator"},"borderRadius":0,"width":"6%","paddingTop":0,"id":"Container_7009AD31_7C0C_4D74_41D3_7732BA874AD7","children":["this.Container_70091D33_7C0C_4D74_41BC_1FB4C9D8E9F8"],"paddingBottom":0,"scrollBarVisible":"rollOver","cursor":"hand","paddingLeft":0,"horizontalAlign":"left","top":0,"verticalAlign":"top","paddingRight":0,"overflow":"scroll","bottom":0,"scrollBarMargin":2,"backgroundColor":[],"layout":"absolute","scrollBarWidth":10,"backgroundColorRatios":[],"scrollBarOpacity":0.5,"backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","class":"Container","left":"47%","contentOpaque":true,"backgroundColorDirection":"vertical","minHeight":20,"minWidth":20},{"class":"PlayList","items":[{"camera":"this.panorama_76449483_7C0C_B314_41CF_21B6EA54723A_camera","media":"this.panorama_76449483_7C0C_B314_41CF_21B6EA54723A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_camera","media":"this.panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hfov":360,"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_t.jpg","pitch":0,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_t.jpg","cube":{"levels":[{"width":9216,"url":"media/panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_0/{face}/0/{row}_{column}.jpg","height":1536,"colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":9216,"url":"media/panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1}],"class":"ImageResource"}}],"label":trans('panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F.label'),"id":"panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F","class":"Panorama","partial":false,"data":{"label":"foto 2"},"hfovMax":130},{"borderSize":0,"propagateClick":true,"shadow":true,"scrollBarColor":"#000000","gap":10,"data":{"name":"SeparatorVisible"},"borderRadius":0,"width":"8%","paddingTop":0,"id":"Container_70091D33_7C0C_4D74_41BC_1FB4C9D8E9F8","shadowColor":"#000000","horizontalAlign":"left","paddingBottom":0,"cursor":"hand","paddingLeft":0,"top":0,"scrollBarVisible":"rollOver","verticalAlign":"top","paddingRight":0,"overflow":"scroll","shadowHorizontalLength":0,"scrollBarMargin":2,"bottom":0,"layout":"absolute","scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"backgroundOpacity":1,"backgroundColorRatios":[0],"shadowVerticalLength":0,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","maxWidth":6,"class":"Container","shadowOpacity":0.3,"left":"46%","shadowSpread":1,"contentOpaque":false,"backgroundColorDirection":"vertical","minHeight":20,"minWidth":2,"shadowBlurRadius":10},{"subtitlesGap":0,"toolTipShadowOpacity":1,"borderSize":0,"minHeight":50,"progressRight":0,"borderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesVerticalAlign":"bottom","progressOpacity":1,"toolTipShadowSpread":0,"progressBarBorderColor":"#000000","toolTipFontColor":"#606060","progressBarBackgroundColorDirection":"vertical","id":"ViewerAreaLabeled_77FA6D04_7C0C_4D1C_41B1_AF1E795BAD7D","toolTipTextShadowColor":"#000000","minWidth":100,"playbackBarProgressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"subtitlesBorderSize":0,"playbackBarHeadBorderSize":0,"subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColor":["#3399FF"],"subtitlesHorizontalAlign":"center","progressBottom":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadOpacity":1,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","translationTransitionDuration":1000,"progressBarBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressHeight":10,"surfaceReticleColor":"#FFFFFF","toolTipShadowVerticalLength":0,"height":"100%","surfaceReticleOpacity":0.6,"width":"100%","surfaceReticleSelectionOpacity":1,"progressBarBorderSize":0,"data":{"name":"LeftViewer"},"doubleClickAction":"toggle_fullscreen","toolTipHorizontalAlign":"center","progressBarOpacity":1,"progressBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"transitionMode":"fade_out_fade_in","class":"ViewerArea","toolTipPaddingRight":6,"toolTipShadowHorizontalLength":0,"toolTipTextShadowOpacity":0,"playbackBarHeight":10,"toolTipFontStyle":"normal","progressBorderRadius":0,"progressLeft":0,"toolTipBorderSize":1,"playbackBarHeadShadowVerticalLength":0,"toolTipBorderColor":"#767676","shadow":false,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"playbackBarHeadBackgroundColorDirection":"vertical","show":"this.setPanoramaCameraWithSpot(this.playList_7198F6AF_7D03_45F7_418E_BE47DE107CD1, this.PanoramaPlayListItem_719E1757_7D03_4357_41C4_D6AA773F4AEA, 2.54769230769232, 0.44064400715563906, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_77FA6D04_7C0C_4D1C_41B1_AF1E795BAD7D.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7198F6AF_7D03_45F7_418E_BE47DE107CD1.set('selectedIndex', -1); }, this); this.playList_7198F6AF_7D03_45F7_418E_BE47DE107CD1.set('selectedIndex', 0)","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesTop":0,"toolTipPaddingBottom":4,"paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"firstTransitionDuration":0,"toolTipOpacity":1,"subtitlesPaddingRight":5,"paddingBottom":0,"playbackBarProgressBorderSize":0,"paddingLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarLeft":0,"subtitlesPaddingBottom":5,"playbackBarHeadHeight":15,"top":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundColorDirection":"vertical","paddingRight":0,"displayTooltipInTouchScreens":true,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextDecoration":"none","toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","transitionDuration":0,"displayTooltipInSurfaceSelection":true,"playbackBarProgressOpacity":1,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"subtitlesEnabled":true,"playbackBarBottom":5,"subtitlesPaddingTop":5,"playbackBarBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"subtitlesShadow":false,"left":0,"toolTipFontWeight":"normal","toolTipPaddingLeft":6,"subtitlesOpacity":1,"propagateClick":false,"toolTipDisplayTime":600,"playbackBarBorderSize":0,"toolTipShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical"},{"aaEnabled":true,"viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"initialSequence":"this.sequence_763B92E5_7C0C_571C_41D9_CB6A1775771A","automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_camera"},{"borderSize":0,"propagateClick":false,"shadow":false,"scrollBarColor":"#000000","gap":10,"borderRadius":0,"width":"100%","paddingTop":0,"id":"SplitViewer_7797E0CD_7C0C_D32C_41DA_74556CC8E145","children":["this.Container_77E60CFB_7C0C_4CF4_41DC_0EDDA961CBE6","this.Container_77FA8D00_7C0C_4D14_41D3_5A11297B6306","this.Container_7009AD31_7C0C_4D74_41D3_7732BA874AD7"],"paddingBottom":0,"scrollBarVisible":"rollOver","data":{"name":"SplitViewer"},"paddingLeft":0,"horizontalAlign":"left","top":"0%","verticalAlign":"top","paddingRight":0,"overflow":"scroll","height":"100%","scrollBarMargin":2,"init":"this._initSplitViewer(event.source)","backgroundColor":[],"layout":"absolute","scrollBarWidth":10,"backgroundOpacity":0.3,"backgroundColorRatios":[],"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","class":"Container","left":"0%","contentOpaque":false,"backgroundColorDirection":"vertical","minHeight":20,"minWidth":20},{"borderSize":0,"shadow":false,"scrollBarColor":"#000000","gap":10,"right":0,"borderRadius":0,"width":"50%","paddingTop":0,"id":"Container_77FA8D00_7C0C_4D14_41D3_5A11297B6306","children":["this.ViewerAreaLabeled_77FB9D07_7C0C_4D1C_41CE_5C2B152AE136","this.HTMLText_70083D29_7C0C_4D14_41D4_D4369756AC5B"],"paddingBottom":0,"scrollBarVisible":"rollOver","data":{"name":"RightContainer"},"paddingLeft":0,"horizontalAlign":"left","top":0,"verticalAlign":"top","paddingRight":0,"overflow":"hidden","bottom":0,"scrollBarMargin":2,"backgroundColor":[],"layout":"absolute","scrollBarWidth":10,"backgroundColorRatios":[],"scrollBarOpacity":0.5,"backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","class":"Container","contentOpaque":false,"backgroundColorDirection":"vertical","propagateClick":false,"minWidth":20,"minHeight":20},{"borderSize":0,"propagateClick":false,"shadow":false,"scrollBarColor":"#000000","width":116,"borderRadius":0,"paddingTop":10,"id":"HTMLText_77FB2D0A_7C0C_4D14_41C4_3CBC8682C908","paddingBottom":10,"scrollBarVisible":"rollOver","data":{"name":"LeftDescription"},"paddingLeft":10,"top":20,"paddingRight":10,"height":70,"scrollBarMargin":2,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","backgroundColor":["#FFFFFF"],"scrollBarWidth":10,"backgroundOpacity":0.6,"backgroundColorRatios":[0],"html":trans('HTMLText_77FB2D0A_7C0C_4D14_41C4_3CBC8682C908.html'),"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","class":"HTMLText","left":20,"backgroundColorDirection":"vertical","minHeight":0,"minWidth":0},{"borderSize":0,"shadow":false,"scrollBarColor":"#000000","width":111.2,"borderRadius":0,"paddingTop":10,"id":"HTMLText_70083D29_7C0C_4D14_41D4_D4369756AC5B","paddingBottom":10,"scrollBarVisible":"rollOver","right":8.8,"paddingLeft":10,"data":{"name":"RightDescription"},"top":20,"paddingRight":10,"height":70,"scrollBarMargin":2,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","backgroundColor":["#FFFFFF"],"scrollBarWidth":10,"backgroundOpacity":0.6,"backgroundColorRatios":[0],"html":trans('HTMLText_70083D29_7C0C_4D14_41D4_D4369756AC5B.html'),"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","class":"HTMLText","backgroundColorDirection":"vertical","propagateClick":false,"minWidth":0,"minHeight":0},{"subtitlesGap":0,"toolTipShadowOpacity":1,"borderSize":0,"toolTipFontColor":"#606060","progressRight":0,"borderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesVerticalAlign":"bottom","progressOpacity":1,"toolTipShadowSpread":0,"progressBarBorderColor":"#000000","propagateClick":false,"progressBarBackgroundColorDirection":"vertical","id":"MainViewer","toolTipTextShadowColor":"#000000","minWidth":100,"playbackBarProgressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"subtitlesBorderSize":0,"playbackBarHeadBorderSize":0,"subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColor":["#3399FF"],"subtitlesHorizontalAlign":"center","progressBottom":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadOpacity":1,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","translationTransitionDuration":1000,"progressBarBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressHeight":10,"surfaceReticleColor":"#FFFFFF","toolTipShadowVerticalLength":0,"height":"100%","surfaceReticleOpacity":0.6,"width":"100%","surfaceReticleSelectionOpacity":1,"progressBarBorderSize":0,"data":{"name":"Main Viewer"},"doubleClickAction":"toggle_fullscreen","toolTipHorizontalAlign":"center","progressBarOpacity":1,"progressBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"transitionMode":"blending","class":"ViewerArea","toolTipPaddingRight":6,"toolTipShadowHorizontalLength":0,"toolTipTextShadowOpacity":0,"playbackBarHeight":10,"toolTipFontStyle":"normal","progressBorderRadius":0,"progressLeft":0,"toolTipBorderSize":1,"playbackBarHeadShadowVerticalLength":0,"toolTipBorderColor":"#767676","shadow":false,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesTop":0,"toolTipPaddingBottom":4,"paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"firstTransitionDuration":0,"toolTipOpacity":1,"subtitlesPaddingRight":5,"paddingBottom":0,"playbackBarProgressBorderSize":0,"paddingLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarLeft":0,"subtitlesPaddingBottom":5,"playbackBarHeadHeight":15,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundColorDirection":"vertical","paddingRight":0,"displayTooltipInTouchScreens":true,"playbackBarHeadBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextDecoration":"none","toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","transitionDuration":0,"displayTooltipInSurfaceSelection":true,"playbackBarProgressOpacity":1,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"subtitlesEnabled":true,"playbackBarBottom":5,"subtitlesPaddingTop":5,"playbackBarBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"subtitlesShadow":false,"subtitlesOpacity":1,"toolTipFontWeight":"normal","toolTipPaddingLeft":6,"minHeight":50,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"toolTipShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"toolTipDisplayTime":600},{"aaEnabled":true,"viewerArea":"this.ViewerAreaLabeled_77FA6D04_7C0C_4D1C_41B1_AF1E795BAD7D","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","zoomEnabled":true,"id":"ViewerAreaLabeled_77FA6D04_7C0C_4D1C_41B1_AF1E795BAD7DPanoramaPlayer"},{"subtitlesGap":0,"toolTipShadowOpacity":1,"borderSize":0,"progressBackgroundColorRatios":[0],"progressRight":0,"borderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesVerticalAlign":"bottom","progressOpacity":1,"toolTipShadowSpread":0,"progressBarBorderColor":"#000000","propagateClick":false,"progressBarBackgroundColorDirection":"vertical","id":"ViewerAreaLabeled_77FB9D07_7C0C_4D1C_41CE_5C2B152AE136","toolTipTextShadowColor":"#000000","minWidth":100,"playbackBarProgressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"subtitlesBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","minHeight":50,"playbackBarHeadBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesHorizontalAlign":"center","progressBottom":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadOpacity":1,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","translationTransitionDuration":1000,"progressBarBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressHeight":10,"surfaceReticleColor":"#FFFFFF","toolTipShadowVerticalLength":0,"height":"100%","surfaceReticleOpacity":0.6,"width":"100%","surfaceReticleSelectionOpacity":1,"progressBarBorderSize":0,"subtitlesBackgroundColor":"#000000","doubleClickAction":"toggle_fullscreen","toolTipHorizontalAlign":"center","progressBarOpacity":1,"progressBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"transitionMode":"blending","class":"ViewerArea","data":{"name":"RightViewer"},"toolTipPaddingRight":6,"toolTipShadowHorizontalLength":0,"toolTipTextShadowOpacity":0,"playbackBarHeight":10,"toolTipFontStyle":"normal","progressBorderRadius":0,"progressLeft":0,"toolTipBorderSize":1,"playbackBarHeadShadowVerticalLength":0,"toolTipBorderColor":"#767676","shadow":false,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"playbackBarHeadBackgroundColorDirection":"vertical","show":"this.setPanoramaCameraWithSpot(this.playList_7198C6AF_7D03_45F7_41C8_88B7412AA2CB, this.PanoramaPlayListItem_719E5757_7D03_4357_41CA_02A11F2C75C3, -21.37846153846155, 0.44064400715563906, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_77FB9D07_7C0C_4D1C_41CE_5C2B152AE136.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7198C6AF_7D03_45F7_41C8_88B7412AA2CB.set('selectedIndex', -1); }, this); this.playList_7198C6AF_7D03_45F7_41C8_88B7412AA2CB.set('selectedIndex', 0)","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesTop":0,"toolTipPaddingBottom":4,"paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"cursor":"hand","toolTipOpacity":1,"subtitlesPaddingRight":5,"paddingBottom":0,"firstTransitionDuration":0,"playbackBarProgressBorderSize":0,"paddingLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarLeft":0,"subtitlesPaddingBottom":5,"playbackBarHeadHeight":15,"top":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundColorDirection":"vertical","paddingRight":0,"displayTooltipInTouchScreens":true,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextDecoration":"none","toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","transitionDuration":0,"displayTooltipInSurfaceSelection":true,"playbackBarProgressOpacity":1,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"subtitlesEnabled":true,"playbackBarBottom":5,"subtitlesPaddingTop":5,"playbackBarBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"subtitlesShadow":false,"subtitlesOpacity":1,"toolTipFontWeight":"normal","toolTipPaddingLeft":6,"toolTipFontColor":"#606060","toolTipDisplayTime":600,"playbackBarBorderSize":0,"toolTipShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"right":0,"playbackBarProgressBackgroundColorDirection":"vertical"},{"borderSize":0,"propagateClick":false,"shadow":false,"scrollBarColor":"#000000","gap":10,"data":{"name":"LeftContainer"},"borderRadius":0,"width":"50%","paddingTop":0,"id":"Container_77E60CFB_7C0C_4CF4_41DC_0EDDA961CBE6","children":["this.ViewerAreaLabeled_77FA6D04_7C0C_4D1C_41B1_AF1E795BAD7D","this.HTMLText_77FB2D0A_7C0C_4D14_41C4_3CBC8682C908"],"paddingBottom":0,"scrollBarVisible":"rollOver","paddingLeft":0,"horizontalAlign":"left","top":0,"verticalAlign":"top","paddingRight":0,"overflow":"hidden","bottom":0,"scrollBarMargin":2,"backgroundColor":[],"layout":"absolute","scrollBarWidth":10,"backgroundColorRatios":[],"scrollBarOpacity":0.5,"backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","class":"Container","left":0,"contentOpaque":false,"backgroundColorDirection":"vertical","minHeight":20,"minWidth":20},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_763F12E4_7C0C_571C_41DD_A828F1462F64"},{"class":"PanoramaPlayListItem","camera":"this.panorama_76449483_7C0C_B314_41CF_21B6EA54723A_camera","player":"this.ViewerAreaLabeled_77FA6D04_7C0C_4D1C_41B1_AF1E795BAD7DPanoramaPlayer","media":"this.panorama_76449483_7C0C_B314_41CF_21B6EA54723A","id":"PanoramaPlayListItem_719E1757_7D03_4357_41C4_D6AA773F4AEA"},{"class":"PanoramaPlayListItem","camera":"this.panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F_camera","player":"this.ViewerAreaLabeled_77FB9D07_7C0C_4D1C_41CE_5C2B152AE136PanoramaPlayer","media":"this.panorama_7610FBD1_7C0C_B534_41C3_391B67B07F3F","id":"PanoramaPlayListItem_719E5757_7D03_4357_41CA_02A11F2C75C3"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_763B92E5_7C0C_571C_41D9_CB6A1775771A"}],"scrollBarWidth":10,"backgroundOpacity":1,"vrPolyfillScale":0.75,"backgroundColorRatios":[0],"defaultVRPointer":"laser","layout":"absolute","scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","class":"Player","contentOpaque":false,"backgroundColorDirection":"vertical","data":{"defaultLocale":"pt","name":"Player456","textToSpeechConfig":{"rate":1,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false},"locales":{"pt":"locale/pt.txt"}},"minWidth":20};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.36.js.map
})();
//Generated with v2022.0.36, Sat Apr 30 2022